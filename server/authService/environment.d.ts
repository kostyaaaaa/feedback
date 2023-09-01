declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_PORT: number;
      JWT_SECRET_KEY: string;
      FEEDBACK_PORT: string;
    }
  }
}

declare module 'express-serve-static-core' {
  export interface Request {
    userId: string;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
