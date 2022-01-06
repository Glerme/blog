declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    API_URL: string;
    APP_URL: string;
    API_IMAGE: string;
  }
}
