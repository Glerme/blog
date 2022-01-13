declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    API_URL: string;
    APP_URL: string;
    PORT: string;
    REPO_NAME: string;
    PRISMIC_ACCESS_TOKEN: string;
    PRISMIC_ENDPOINT: string;
    PRISMIC_ENDPOINT_GRAPHQL: string;
  }
}
