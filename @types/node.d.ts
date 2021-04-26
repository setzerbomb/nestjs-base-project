declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      NODE_ENV: 'development' | 'staging' | 'production';
      APP_SECRET: string;

      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
    }
  }
}

export {};
