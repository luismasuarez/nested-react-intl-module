import { en } from "../locales/data";

export type SayHelloProps = {
  firstName: string;
  lastName?: string;
  age?: number;
};

// Define a type `KeyPaths` that computes all possible key paths within a given nested object type `T`.
// The result is a union of string literal types representing the paths to all leaves in the object hierarchy.
type KeyPaths<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}.${KeyPaths<T[K]>}`
        : K & string;
    }[keyof T]
  : never;

// `TranslationKey` is a type that represents all possible key paths in the object structure defined in `en`.
// It utilizes `KeyPaths` to generate a union of all possible paths for the translation keys.
export type TranslationKey = KeyPaths<typeof en>;
