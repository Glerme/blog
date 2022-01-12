declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    API_URL: string;
    APP_URL: string;
    API_IMAGE: string;
    REPO_NAME: string;
    PRISMIC_ACCESS_TOKEN: string;
    PRISMIC_CLIENT_ID: string;
    PRISMIC_API_URL: string;
  }
}
