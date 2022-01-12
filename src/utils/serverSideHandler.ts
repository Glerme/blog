import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import axios from 'axios';
import { ServerSideError, ServerSideErrorRedirect } from './ServerSideError';

export type ServerSideHandler = (
  context: GetServerSidePropsContext,
) => Promise<GetServerSidePropsResult<any> | void>;

export const serverSideHandler =
  (...fns: ServerSideHandler[]): ServerSideHandler =>
  async ctx => {
    try {
      for (const fn of fns) {
        const value = await fn(ctx);

        if (value != null) {
          return value;
        }
      }
    } catch (err) {
      if (err instanceof ServerSideErrorRedirect) {
        return {
          redirect: {
            destination: err.location,
            permanent: false,
          },
        };
      }

      let status = err instanceof ServerSideError ? err.status : 500;
      let message = err.message;

      if (axios.isAxiosError(err)) {
        status = err.response.status;

        if (
          err.response.data?.errors &&
          Array.isArray(err.response.data.errors)
        ) {
          const messages = [];
          for (const error of err.response.data.errors) {
            messages.push(error.message);
          }

          message = messages.join('\n');
        } else {
          message = err.message;
        }
      }

      if (status === 500) {
        console.error(err);

        if (process.env.NODE_ENV === 'production') {
          message = 'Internal server error';
        }
      }

      return {
        props: {
          error: {
            status,
            message,
          },
        },
      };
    }
  };
