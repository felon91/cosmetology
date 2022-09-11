export const bffHost = process.env.BFF_HOST || 'http://localhost:8081';

export type Maybe<T> = T | null;
export type Any = never;
export type AnyObj = Record<string, Any>;

export interface ServerError {
  field?: string;
  msg: string;
}

export interface ResponseShape<T> {
  success: boolean;
  body: T;
  errors?: Maybe<ServerError[]>;
}