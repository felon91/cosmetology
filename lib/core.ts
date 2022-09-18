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

export const enum Target {
  blank = '_blank',
  self = '_self',
  parent = '_parent',
  top = '_top',
}
