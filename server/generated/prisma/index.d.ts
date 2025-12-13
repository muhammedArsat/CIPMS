
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model StudentProfiles
 * 
 */
export type StudentProfiles = $Result.DefaultSelection<Prisma.$StudentProfilesPayload>
/**
 * Model MentorProfiles
 * 
 */
export type MentorProfiles = $Result.DefaultSelection<Prisma.$MentorProfilesPayload>
/**
 * Model Internships
 * 
 */
export type Internships = $Result.DefaultSelection<Prisma.$InternshipsPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model SavedInternships
 * 
 */
export type SavedInternships = $Result.DefaultSelection<Prisma.$SavedInternshipsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  MENTOR: 'MENTOR',
  PLACEMENTOFFICER: 'PLACEMENTOFFICER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfiles`: Exposes CRUD operations for the **StudentProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfiles.findMany()
    * ```
    */
  get studentProfiles(): Prisma.StudentProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorProfiles`: Exposes CRUD operations for the **MentorProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorProfiles
    * const mentorProfiles = await prisma.mentorProfiles.findMany()
    * ```
    */
  get mentorProfiles(): Prisma.MentorProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internships`: Exposes CRUD operations for the **Internships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internships
    * const internships = await prisma.internships.findMany()
    * ```
    */
  get internships(): Prisma.InternshipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedInternships`: Exposes CRUD operations for the **SavedInternships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedInternships
    * const savedInternships = await prisma.savedInternships.findMany()
    * ```
    */
  get savedInternships(): Prisma.SavedInternshipsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    StudentProfiles: 'StudentProfiles',
    MentorProfiles: 'MentorProfiles',
    Internships: 'Internships',
    Applications: 'Applications',
    SavedInternships: 'SavedInternships'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "studentProfiles" | "mentorProfiles" | "internships" | "applications" | "savedInternships"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      StudentProfiles: {
        payload: Prisma.$StudentProfilesPayload<ExtArgs>
        fields: Prisma.StudentProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          findFirst: {
            args: Prisma.StudentProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          findMany: {
            args: Prisma.StudentProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>[]
          }
          create: {
            args: Prisma.StudentProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          createMany: {
            args: Prisma.StudentProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>[]
          }
          delete: {
            args: Prisma.StudentProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          update: {
            args: Prisma.StudentProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          deleteMany: {
            args: Prisma.StudentProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>[]
          }
          upsert: {
            args: Prisma.StudentProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilesPayload>
          }
          aggregate: {
            args: Prisma.StudentProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfiles>
          }
          groupBy: {
            args: Prisma.StudentProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfilesCountAggregateOutputType> | number
          }
        }
      }
      MentorProfiles: {
        payload: Prisma.$MentorProfilesPayload<ExtArgs>
        fields: Prisma.MentorProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          findFirst: {
            args: Prisma.MentorProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          findMany: {
            args: Prisma.MentorProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>[]
          }
          create: {
            args: Prisma.MentorProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          createMany: {
            args: Prisma.MentorProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>[]
          }
          delete: {
            args: Prisma.MentorProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          update: {
            args: Prisma.MentorProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          deleteMany: {
            args: Prisma.MentorProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>[]
          }
          upsert: {
            args: Prisma.MentorProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilesPayload>
          }
          aggregate: {
            args: Prisma.MentorProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorProfiles>
          }
          groupBy: {
            args: Prisma.MentorProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<MentorProfilesCountAggregateOutputType> | number
          }
        }
      }
      Internships: {
        payload: Prisma.$InternshipsPayload<ExtArgs>
        fields: Prisma.InternshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          findFirst: {
            args: Prisma.InternshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          findMany: {
            args: Prisma.InternshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>[]
          }
          create: {
            args: Prisma.InternshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          createMany: {
            args: Prisma.InternshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternshipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>[]
          }
          delete: {
            args: Prisma.InternshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          update: {
            args: Prisma.InternshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          deleteMany: {
            args: Prisma.InternshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternshipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>[]
          }
          upsert: {
            args: Prisma.InternshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipsPayload>
          }
          aggregate: {
            args: Prisma.InternshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternships>
          }
          groupBy: {
            args: Prisma.InternshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternshipsCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipsCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      SavedInternships: {
        payload: Prisma.$SavedInternshipsPayload<ExtArgs>
        fields: Prisma.SavedInternshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedInternshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedInternshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          findFirst: {
            args: Prisma.SavedInternshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedInternshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          findMany: {
            args: Prisma.SavedInternshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>[]
          }
          create: {
            args: Prisma.SavedInternshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          createMany: {
            args: Prisma.SavedInternshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedInternshipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>[]
          }
          delete: {
            args: Prisma.SavedInternshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          update: {
            args: Prisma.SavedInternshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          deleteMany: {
            args: Prisma.SavedInternshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedInternshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedInternshipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>[]
          }
          upsert: {
            args: Prisma.SavedInternshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipsPayload>
          }
          aggregate: {
            args: Prisma.SavedInternshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedInternships>
          }
          groupBy: {
            args: Prisma.SavedInternshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedInternshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedInternshipsCountArgs<ExtArgs>
            result: $Utils.Optional<SavedInternshipsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    studentProfiles?: StudentProfilesOmit
    mentorProfiles?: MentorProfilesOmit
    internships?: InternshipsOmit
    applications?: ApplicationsOmit
    savedInternships?: SavedInternshipsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    applications: number
    saved: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UsersCountOutputTypeCountApplicationsArgs
    saved?: boolean | UsersCountOutputTypeCountSavedArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipsWhereInput
  }


  /**
   * Count Type MentorProfilesCountOutputType
   */

  export type MentorProfilesCountOutputType = {
    mentees: number
  }

  export type MentorProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentees?: boolean | MentorProfilesCountOutputTypeCountMenteesArgs
  }

  // Custom InputTypes
  /**
   * MentorProfilesCountOutputType without action
   */
  export type MentorProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfilesCountOutputType
     */
    select?: MentorProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorProfilesCountOutputType without action
   */
  export type MentorProfilesCountOutputTypeCountMenteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfilesWhereInput
  }


  /**
   * Count Type InternshipsCountOutputType
   */

  export type InternshipsCountOutputType = {
    applications: number
    saved: number
  }

  export type InternshipsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | InternshipsCountOutputTypeCountApplicationsArgs
    saved?: boolean | InternshipsCountOutputTypeCountSavedArgs
  }

  // Custom InputTypes
  /**
   * InternshipsCountOutputType without action
   */
  export type InternshipsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipsCountOutputType
     */
    select?: InternshipsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InternshipsCountOutputType without action
   */
  export type InternshipsCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }

  /**
   * InternshipsCountOutputType without action
   */
  export type InternshipsCountOutputTypeCountSavedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    profileUrl: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    profileUrl: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    profileUrl: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileUrl?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileUrl?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileUrl?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    profileUrl: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileUrl?: boolean
    studentProfile?: boolean | Users$studentProfileArgs<ExtArgs>
    mentorProfile?: boolean | Users$mentorProfileArgs<ExtArgs>
    applications?: boolean | Users$applicationsArgs<ExtArgs>
    saved?: boolean | Users$savedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileUrl?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "profileUrl", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | Users$studentProfileArgs<ExtArgs>
    mentorProfile?: boolean | Users$mentorProfileArgs<ExtArgs>
    applications?: boolean | Users$applicationsArgs<ExtArgs>
    saved?: boolean | Users$savedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      studentProfile: Prisma.$StudentProfilesPayload<ExtArgs> | null
      mentorProfile: Prisma.$MentorProfilesPayload<ExtArgs> | null
      applications: Prisma.$ApplicationsPayload<ExtArgs>[]
      saved: Prisma.$SavedInternshipsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      profileUrl: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends Users$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, Users$studentProfileArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentorProfile<T extends Users$mentorProfileArgs<ExtArgs> = {}>(args?: Subset<T, Users$mentorProfileArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends Users$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved<T extends Users$savedArgs<ExtArgs> = {}>(args?: Subset<T, Users$savedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly profileUrl: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.studentProfile
   */
  export type Users$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    where?: StudentProfilesWhereInput
  }

  /**
   * Users.mentorProfile
   */
  export type Users$mentorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    where?: MentorProfilesWhereInput
  }

  /**
   * Users.applications
   */
  export type Users$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Users.saved
   */
  export type Users$savedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    where?: SavedInternshipsWhereInput
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    cursor?: SavedInternshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedInternshipsScalarFieldEnum | SavedInternshipsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfiles
   */

  export type AggregateStudentProfiles = {
    _count: StudentProfilesCountAggregateOutputType | null
    _avg: StudentProfilesAvgAggregateOutputType | null
    _sum: StudentProfilesSumAggregateOutputType | null
    _min: StudentProfilesMinAggregateOutputType | null
    _max: StudentProfilesMaxAggregateOutputType | null
  }

  export type StudentProfilesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cgpa: number | null
    mentorId: number | null
  }

  export type StudentProfilesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cgpa: number | null
    mentorId: number | null
  }

  export type StudentProfilesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    resumeUrl: string | null
    rollNo: string | null
    department: string | null
    cgpa: number | null
    introduction: string | null
    mentorId: number | null
  }

  export type StudentProfilesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    resumeUrl: string | null
    rollNo: string | null
    department: string | null
    cgpa: number | null
    introduction: string | null
    mentorId: number | null
  }

  export type StudentProfilesCountAggregateOutputType = {
    id: number
    userId: number
    resumeUrl: number
    rollNo: number
    department: number
    cgpa: number
    skills: number
    introduction: number
    mentorId: number
    _all: number
  }


  export type StudentProfilesAvgAggregateInputType = {
    id?: true
    userId?: true
    cgpa?: true
    mentorId?: true
  }

  export type StudentProfilesSumAggregateInputType = {
    id?: true
    userId?: true
    cgpa?: true
    mentorId?: true
  }

  export type StudentProfilesMinAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    rollNo?: true
    department?: true
    cgpa?: true
    introduction?: true
    mentorId?: true
  }

  export type StudentProfilesMaxAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    rollNo?: true
    department?: true
    cgpa?: true
    introduction?: true
    mentorId?: true
  }

  export type StudentProfilesCountAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    rollNo?: true
    department?: true
    cgpa?: true
    skills?: true
    introduction?: true
    mentorId?: true
    _all?: true
  }

  export type StudentProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to aggregate.
     */
    where?: StudentProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfilesOrderByWithRelationInput | StudentProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfilesMaxAggregateInputType
  }

  export type GetStudentProfilesAggregateType<T extends StudentProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfiles[P]>
      : GetScalarType<T[P], AggregateStudentProfiles[P]>
  }




  export type StudentProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfilesWhereInput
    orderBy?: StudentProfilesOrderByWithAggregationInput | StudentProfilesOrderByWithAggregationInput[]
    by: StudentProfilesScalarFieldEnum[] | StudentProfilesScalarFieldEnum
    having?: StudentProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfilesCountAggregateInputType | true
    _avg?: StudentProfilesAvgAggregateInputType
    _sum?: StudentProfilesSumAggregateInputType
    _min?: StudentProfilesMinAggregateInputType
    _max?: StudentProfilesMaxAggregateInputType
  }

  export type StudentProfilesGroupByOutputType = {
    id: number
    userId: number
    resumeUrl: string | null
    rollNo: string | null
    department: string | null
    cgpa: number | null
    skills: string[]
    introduction: string | null
    mentorId: number | null
    _count: StudentProfilesCountAggregateOutputType | null
    _avg: StudentProfilesAvgAggregateOutputType | null
    _sum: StudentProfilesSumAggregateOutputType | null
    _min: StudentProfilesMinAggregateOutputType | null
    _max: StudentProfilesMaxAggregateOutputType | null
  }

  type GetStudentProfilesGroupByPayload<T extends StudentProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfilesGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    rollNo?: boolean
    department?: boolean
    cgpa?: boolean
    skills?: boolean
    introduction?: boolean
    mentorId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfiles"]>

  export type StudentProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    rollNo?: boolean
    department?: boolean
    cgpa?: boolean
    skills?: boolean
    introduction?: boolean
    mentorId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfiles"]>

  export type StudentProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    rollNo?: boolean
    department?: boolean
    cgpa?: boolean
    skills?: boolean
    introduction?: boolean
    mentorId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfiles"]>

  export type StudentProfilesSelectScalar = {
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    rollNo?: boolean
    department?: boolean
    cgpa?: boolean
    skills?: boolean
    introduction?: boolean
    mentorId?: boolean
  }

  export type StudentProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resumeUrl" | "rollNo" | "department" | "cgpa" | "skills" | "introduction" | "mentorId", ExtArgs["result"]["studentProfiles"]>
  export type StudentProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }
  export type StudentProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }
  export type StudentProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentor?: boolean | StudentProfiles$mentorArgs<ExtArgs>
  }

  export type $StudentProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfiles"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      mentor: Prisma.$MentorProfilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      resumeUrl: string | null
      rollNo: string | null
      department: string | null
      cgpa: number | null
      skills: string[]
      introduction: string | null
      mentorId: number | null
    }, ExtArgs["result"]["studentProfiles"]>
    composites: {}
  }

  type StudentProfilesGetPayload<S extends boolean | null | undefined | StudentProfilesDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilesPayload, S>

  type StudentProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfilesCountAggregateInputType | true
    }

  export interface StudentProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfiles'], meta: { name: 'StudentProfiles' } }
    /**
     * Find zero or one StudentProfiles that matches the filter.
     * @param {StudentProfilesFindUniqueArgs} args - Arguments to find a StudentProfiles
     * @example
     * // Get one StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfilesFindUniqueArgs>(args: SelectSubset<T, StudentProfilesFindUniqueArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfilesFindUniqueOrThrowArgs} args - Arguments to find a StudentProfiles
     * @example
     * // Get one StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesFindFirstArgs} args - Arguments to find a StudentProfiles
     * @example
     * // Get one StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfilesFindFirstArgs>(args?: SelectSubset<T, StudentProfilesFindFirstArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesFindFirstOrThrowArgs} args - Arguments to find a StudentProfiles
     * @example
     * // Get one StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfilesWithIdOnly = await prisma.studentProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfilesFindManyArgs>(args?: SelectSubset<T, StudentProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfiles.
     * @param {StudentProfilesCreateArgs} args - Arguments to create a StudentProfiles.
     * @example
     * // Create one StudentProfiles
     * const StudentProfiles = await prisma.studentProfiles.create({
     *   data: {
     *     // ... data to create a StudentProfiles
     *   }
     * })
     * 
     */
    create<T extends StudentProfilesCreateArgs>(args: SelectSubset<T, StudentProfilesCreateArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfilesCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfilesCreateManyArgs>(args?: SelectSubset<T, StudentProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfilesCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfilesWithIdOnly = await prisma.studentProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfiles.
     * @param {StudentProfilesDeleteArgs} args - Arguments to delete one StudentProfiles.
     * @example
     * // Delete one StudentProfiles
     * const StudentProfiles = await prisma.studentProfiles.delete({
     *   where: {
     *     // ... filter to delete one StudentProfiles
     *   }
     * })
     * 
     */
    delete<T extends StudentProfilesDeleteArgs>(args: SelectSubset<T, StudentProfilesDeleteArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfiles.
     * @param {StudentProfilesUpdateArgs} args - Arguments to update one StudentProfiles.
     * @example
     * // Update one StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfilesUpdateArgs>(args: SelectSubset<T, StudentProfilesUpdateArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfilesDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfilesDeleteManyArgs>(args?: SelectSubset<T, StudentProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfilesUpdateManyArgs>(args: SelectSubset<T, StudentProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfilesUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfilesWithIdOnly = await prisma.studentProfiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfiles.
     * @param {StudentProfilesUpsertArgs} args - Arguments to update or create a StudentProfiles.
     * @example
     * // Update or create a StudentProfiles
     * const studentProfiles = await prisma.studentProfiles.upsert({
     *   create: {
     *     // ... data to create a StudentProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfiles we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfilesUpsertArgs>(args: SelectSubset<T, StudentProfilesUpsertArgs<ExtArgs>>): Prisma__StudentProfilesClient<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfiles.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfilesCountArgs>(
      args?: Subset<T, StudentProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfilesAggregateArgs>(args: Subset<T, StudentProfilesAggregateArgs>): Prisma.PrismaPromise<GetStudentProfilesAggregateType<T>>

    /**
     * Group by StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfilesGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfiles model
   */
  readonly fields: StudentProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends StudentProfiles$mentorArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfiles$mentorArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentProfiles model
   */
  interface StudentProfilesFieldRefs {
    readonly id: FieldRef<"StudentProfiles", 'Int'>
    readonly userId: FieldRef<"StudentProfiles", 'Int'>
    readonly resumeUrl: FieldRef<"StudentProfiles", 'String'>
    readonly rollNo: FieldRef<"StudentProfiles", 'String'>
    readonly department: FieldRef<"StudentProfiles", 'String'>
    readonly cgpa: FieldRef<"StudentProfiles", 'Float'>
    readonly skills: FieldRef<"StudentProfiles", 'String[]'>
    readonly introduction: FieldRef<"StudentProfiles", 'String'>
    readonly mentorId: FieldRef<"StudentProfiles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfiles findUnique
   */
  export type StudentProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where: StudentProfilesWhereUniqueInput
  }

  /**
   * StudentProfiles findUniqueOrThrow
   */
  export type StudentProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where: StudentProfilesWhereUniqueInput
  }

  /**
   * StudentProfiles findFirst
   */
  export type StudentProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfilesOrderByWithRelationInput | StudentProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfilesScalarFieldEnum | StudentProfilesScalarFieldEnum[]
  }

  /**
   * StudentProfiles findFirstOrThrow
   */
  export type StudentProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfilesOrderByWithRelationInput | StudentProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfilesScalarFieldEnum | StudentProfilesScalarFieldEnum[]
  }

  /**
   * StudentProfiles findMany
   */
  export type StudentProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfilesOrderByWithRelationInput | StudentProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfilesScalarFieldEnum | StudentProfilesScalarFieldEnum[]
  }

  /**
   * StudentProfiles create
   */
  export type StudentProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfiles.
     */
    data: XOR<StudentProfilesCreateInput, StudentProfilesUncheckedCreateInput>
  }

  /**
   * StudentProfiles createMany
   */
  export type StudentProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfilesCreateManyInput | StudentProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfiles createManyAndReturn
   */
  export type StudentProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfilesCreateManyInput | StudentProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfiles update
   */
  export type StudentProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfiles.
     */
    data: XOR<StudentProfilesUpdateInput, StudentProfilesUncheckedUpdateInput>
    /**
     * Choose, which StudentProfiles to update.
     */
    where: StudentProfilesWhereUniqueInput
  }

  /**
   * StudentProfiles updateMany
   */
  export type StudentProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfilesUpdateManyMutationInput, StudentProfilesUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfilesWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfiles updateManyAndReturn
   */
  export type StudentProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfilesUpdateManyMutationInput, StudentProfilesUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfilesWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfiles upsert
   */
  export type StudentProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfiles to update in case it exists.
     */
    where: StudentProfilesWhereUniqueInput
    /**
     * In case the StudentProfiles found by the `where` argument doesn't exist, create a new StudentProfiles with this data.
     */
    create: XOR<StudentProfilesCreateInput, StudentProfilesUncheckedCreateInput>
    /**
     * In case the StudentProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfilesUpdateInput, StudentProfilesUncheckedUpdateInput>
  }

  /**
   * StudentProfiles delete
   */
  export type StudentProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    /**
     * Filter which StudentProfiles to delete.
     */
    where: StudentProfilesWhereUniqueInput
  }

  /**
   * StudentProfiles deleteMany
   */
  export type StudentProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfilesWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfiles.mentor
   */
  export type StudentProfiles$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    where?: MentorProfilesWhereInput
  }

  /**
   * StudentProfiles without action
   */
  export type StudentProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
  }


  /**
   * Model MentorProfiles
   */

  export type AggregateMentorProfiles = {
    _count: MentorProfilesCountAggregateOutputType | null
    _avg: MentorProfilesAvgAggregateOutputType | null
    _sum: MentorProfilesSumAggregateOutputType | null
    _min: MentorProfilesMinAggregateOutputType | null
    _max: MentorProfilesMaxAggregateOutputType | null
  }

  export type MentorProfilesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MentorProfilesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MentorProfilesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    designation: string | null
    department: string | null
  }

  export type MentorProfilesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    designation: string | null
    department: string | null
  }

  export type MentorProfilesCountAggregateOutputType = {
    id: number
    userId: number
    designation: number
    department: number
    _all: number
  }


  export type MentorProfilesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MentorProfilesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MentorProfilesMinAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
  }

  export type MentorProfilesMaxAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
  }

  export type MentorProfilesCountAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
    _all?: true
  }

  export type MentorProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfiles to aggregate.
     */
    where?: MentorProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfilesOrderByWithRelationInput | MentorProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorProfiles
    **/
    _count?: true | MentorProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorProfilesMaxAggregateInputType
  }

  export type GetMentorProfilesAggregateType<T extends MentorProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorProfiles[P]>
      : GetScalarType<T[P], AggregateMentorProfiles[P]>
  }




  export type MentorProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorProfilesWhereInput
    orderBy?: MentorProfilesOrderByWithAggregationInput | MentorProfilesOrderByWithAggregationInput[]
    by: MentorProfilesScalarFieldEnum[] | MentorProfilesScalarFieldEnum
    having?: MentorProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorProfilesCountAggregateInputType | true
    _avg?: MentorProfilesAvgAggregateInputType
    _sum?: MentorProfilesSumAggregateInputType
    _min?: MentorProfilesMinAggregateInputType
    _max?: MentorProfilesMaxAggregateInputType
  }

  export type MentorProfilesGroupByOutputType = {
    id: number
    userId: number
    designation: string | null
    department: string | null
    _count: MentorProfilesCountAggregateOutputType | null
    _avg: MentorProfilesAvgAggregateOutputType | null
    _sum: MentorProfilesSumAggregateOutputType | null
    _min: MentorProfilesMinAggregateOutputType | null
    _max: MentorProfilesMaxAggregateOutputType | null
  }

  type GetMentorProfilesGroupByPayload<T extends MentorProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], MentorProfilesGroupByOutputType[P]>
        }
      >
    >


  export type MentorProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentees?: boolean | MentorProfiles$menteesArgs<ExtArgs>
    _count?: boolean | MentorProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfiles"]>

  export type MentorProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfiles"]>

  export type MentorProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfiles"]>

  export type MentorProfilesSelectScalar = {
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
  }

  export type MentorProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "designation" | "department", ExtArgs["result"]["mentorProfiles"]>
  export type MentorProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    mentees?: boolean | MentorProfiles$menteesArgs<ExtArgs>
    _count?: boolean | MentorProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MentorProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MentorProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorProfiles"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      mentees: Prisma.$StudentProfilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      designation: string | null
      department: string | null
    }, ExtArgs["result"]["mentorProfiles"]>
    composites: {}
  }

  type MentorProfilesGetPayload<S extends boolean | null | undefined | MentorProfilesDefaultArgs> = $Result.GetResult<Prisma.$MentorProfilesPayload, S>

  type MentorProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorProfilesCountAggregateInputType | true
    }

  export interface MentorProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorProfiles'], meta: { name: 'MentorProfiles' } }
    /**
     * Find zero or one MentorProfiles that matches the filter.
     * @param {MentorProfilesFindUniqueArgs} args - Arguments to find a MentorProfiles
     * @example
     * // Get one MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorProfilesFindUniqueArgs>(args: SelectSubset<T, MentorProfilesFindUniqueArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorProfilesFindUniqueOrThrowArgs} args - Arguments to find a MentorProfiles
     * @example
     * // Get one MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesFindFirstArgs} args - Arguments to find a MentorProfiles
     * @example
     * // Get one MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorProfilesFindFirstArgs>(args?: SelectSubset<T, MentorProfilesFindFirstArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesFindFirstOrThrowArgs} args - Arguments to find a MentorProfiles
     * @example
     * // Get one MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findMany()
     * 
     * // Get first 10 MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorProfilesWithIdOnly = await prisma.mentorProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorProfilesFindManyArgs>(args?: SelectSubset<T, MentorProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorProfiles.
     * @param {MentorProfilesCreateArgs} args - Arguments to create a MentorProfiles.
     * @example
     * // Create one MentorProfiles
     * const MentorProfiles = await prisma.mentorProfiles.create({
     *   data: {
     *     // ... data to create a MentorProfiles
     *   }
     * })
     * 
     */
    create<T extends MentorProfilesCreateArgs>(args: SelectSubset<T, MentorProfilesCreateArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorProfiles.
     * @param {MentorProfilesCreateManyArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorProfilesCreateManyArgs>(args?: SelectSubset<T, MentorProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorProfiles and returns the data saved in the database.
     * @param {MentorProfilesCreateManyAndReturnArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorProfiles and only return the `id`
     * const mentorProfilesWithIdOnly = await prisma.mentorProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorProfiles.
     * @param {MentorProfilesDeleteArgs} args - Arguments to delete one MentorProfiles.
     * @example
     * // Delete one MentorProfiles
     * const MentorProfiles = await prisma.mentorProfiles.delete({
     *   where: {
     *     // ... filter to delete one MentorProfiles
     *   }
     * })
     * 
     */
    delete<T extends MentorProfilesDeleteArgs>(args: SelectSubset<T, MentorProfilesDeleteArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorProfiles.
     * @param {MentorProfilesUpdateArgs} args - Arguments to update one MentorProfiles.
     * @example
     * // Update one MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorProfilesUpdateArgs>(args: SelectSubset<T, MentorProfilesUpdateArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorProfiles.
     * @param {MentorProfilesDeleteManyArgs} args - Arguments to filter MentorProfiles to delete.
     * @example
     * // Delete a few MentorProfiles
     * const { count } = await prisma.mentorProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorProfilesDeleteManyArgs>(args?: SelectSubset<T, MentorProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorProfilesUpdateManyArgs>(args: SelectSubset<T, MentorProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles and returns the data updated in the database.
     * @param {MentorProfilesUpdateManyAndReturnArgs} args - Arguments to update many MentorProfiles.
     * @example
     * // Update many MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorProfiles and only return the `id`
     * const mentorProfilesWithIdOnly = await prisma.mentorProfiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorProfiles.
     * @param {MentorProfilesUpsertArgs} args - Arguments to update or create a MentorProfiles.
     * @example
     * // Update or create a MentorProfiles
     * const mentorProfiles = await prisma.mentorProfiles.upsert({
     *   create: {
     *     // ... data to create a MentorProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorProfiles we want to update
     *   }
     * })
     */
    upsert<T extends MentorProfilesUpsertArgs>(args: SelectSubset<T, MentorProfilesUpsertArgs<ExtArgs>>): Prisma__MentorProfilesClient<$Result.GetResult<Prisma.$MentorProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesCountArgs} args - Arguments to filter MentorProfiles to count.
     * @example
     * // Count the number of MentorProfiles
     * const count = await prisma.mentorProfiles.count({
     *   where: {
     *     // ... the filter for the MentorProfiles we want to count
     *   }
     * })
    **/
    count<T extends MentorProfilesCountArgs>(
      args?: Subset<T, MentorProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorProfilesAggregateArgs>(args: Subset<T, MentorProfilesAggregateArgs>): Prisma.PrismaPromise<GetMentorProfilesAggregateType<T>>

    /**
     * Group by MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorProfilesGroupByArgs['orderBy'] }
        : { orderBy?: MentorProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorProfiles model
   */
  readonly fields: MentorProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentees<T extends MentorProfiles$menteesArgs<ExtArgs> = {}>(args?: Subset<T, MentorProfiles$menteesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorProfiles model
   */
  interface MentorProfilesFieldRefs {
    readonly id: FieldRef<"MentorProfiles", 'Int'>
    readonly userId: FieldRef<"MentorProfiles", 'Int'>
    readonly designation: FieldRef<"MentorProfiles", 'String'>
    readonly department: FieldRef<"MentorProfiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MentorProfiles findUnique
   */
  export type MentorProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where: MentorProfilesWhereUniqueInput
  }

  /**
   * MentorProfiles findUniqueOrThrow
   */
  export type MentorProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where: MentorProfilesWhereUniqueInput
  }

  /**
   * MentorProfiles findFirst
   */
  export type MentorProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfilesOrderByWithRelationInput | MentorProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfilesScalarFieldEnum | MentorProfilesScalarFieldEnum[]
  }

  /**
   * MentorProfiles findFirstOrThrow
   */
  export type MentorProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfilesOrderByWithRelationInput | MentorProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfilesScalarFieldEnum | MentorProfilesScalarFieldEnum[]
  }

  /**
   * MentorProfiles findMany
   */
  export type MentorProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfilesOrderByWithRelationInput | MentorProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorProfiles.
     */
    cursor?: MentorProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    distinct?: MentorProfilesScalarFieldEnum | MentorProfilesScalarFieldEnum[]
  }

  /**
   * MentorProfiles create
   */
  export type MentorProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorProfiles.
     */
    data: XOR<MentorProfilesCreateInput, MentorProfilesUncheckedCreateInput>
  }

  /**
   * MentorProfiles createMany
   */
  export type MentorProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfilesCreateManyInput | MentorProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorProfiles createManyAndReturn
   */
  export type MentorProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfilesCreateManyInput | MentorProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfiles update
   */
  export type MentorProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorProfiles.
     */
    data: XOR<MentorProfilesUpdateInput, MentorProfilesUncheckedUpdateInput>
    /**
     * Choose, which MentorProfiles to update.
     */
    where: MentorProfilesWhereUniqueInput
  }

  /**
   * MentorProfiles updateMany
   */
  export type MentorProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfilesUpdateManyMutationInput, MentorProfilesUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfilesWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
  }

  /**
   * MentorProfiles updateManyAndReturn
   */
  export type MentorProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfilesUpdateManyMutationInput, MentorProfilesUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfilesWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfiles upsert
   */
  export type MentorProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorProfiles to update in case it exists.
     */
    where: MentorProfilesWhereUniqueInput
    /**
     * In case the MentorProfiles found by the `where` argument doesn't exist, create a new MentorProfiles with this data.
     */
    create: XOR<MentorProfilesCreateInput, MentorProfilesUncheckedCreateInput>
    /**
     * In case the MentorProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorProfilesUpdateInput, MentorProfilesUncheckedUpdateInput>
  }

  /**
   * MentorProfiles delete
   */
  export type MentorProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
    /**
     * Filter which MentorProfiles to delete.
     */
    where: MentorProfilesWhereUniqueInput
  }

  /**
   * MentorProfiles deleteMany
   */
  export type MentorProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfiles to delete
     */
    where?: MentorProfilesWhereInput
    /**
     * Limit how many MentorProfiles to delete.
     */
    limit?: number
  }

  /**
   * MentorProfiles.mentees
   */
  export type MentorProfiles$menteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfiles
     */
    select?: StudentProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfiles
     */
    omit?: StudentProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfilesInclude<ExtArgs> | null
    where?: StudentProfilesWhereInput
    orderBy?: StudentProfilesOrderByWithRelationInput | StudentProfilesOrderByWithRelationInput[]
    cursor?: StudentProfilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfilesScalarFieldEnum | StudentProfilesScalarFieldEnum[]
  }

  /**
   * MentorProfiles without action
   */
  export type MentorProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfiles
     */
    select?: MentorProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfiles
     */
    omit?: MentorProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Internships
   */

  export type AggregateInternships = {
    _count: InternshipsCountAggregateOutputType | null
    _avg: InternshipsAvgAggregateOutputType | null
    _sum: InternshipsSumAggregateOutputType | null
    _min: InternshipsMinAggregateOutputType | null
    _max: InternshipsMaxAggregateOutputType | null
  }

  export type InternshipsAvgAggregateOutputType = {
    id: number | null
    cutoff: number | null
    ctc: number | null
  }

  export type InternshipsSumAggregateOutputType = {
    id: number | null
    cutoff: number | null
    ctc: number | null
  }

  export type InternshipsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    cutoff: number | null
    ctc: number | null
    duration: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type InternshipsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    cutoff: number | null
    ctc: number | null
    duration: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type InternshipsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    tags: number
    skills: number
    cutoff: number
    ctc: number
    duration: number
    mode: number
    createdAt: number
    _all: number
  }


  export type InternshipsAvgAggregateInputType = {
    id?: true
    cutoff?: true
    ctc?: true
  }

  export type InternshipsSumAggregateInputType = {
    id?: true
    cutoff?: true
    ctc?: true
  }

  export type InternshipsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    cutoff?: true
    ctc?: true
    duration?: true
    mode?: true
    createdAt?: true
  }

  export type InternshipsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    cutoff?: true
    ctc?: true
    duration?: true
    mode?: true
    createdAt?: true
  }

  export type InternshipsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tags?: true
    skills?: true
    cutoff?: true
    ctc?: true
    duration?: true
    mode?: true
    createdAt?: true
    _all?: true
  }

  export type InternshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internships to aggregate.
     */
    where?: InternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipsOrderByWithRelationInput | InternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Internships
    **/
    _count?: true | InternshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipsMaxAggregateInputType
  }

  export type GetInternshipsAggregateType<T extends InternshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateInternships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternships[P]>
      : GetScalarType<T[P], AggregateInternships[P]>
  }




  export type InternshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipsWhereInput
    orderBy?: InternshipsOrderByWithAggregationInput | InternshipsOrderByWithAggregationInput[]
    by: InternshipsScalarFieldEnum[] | InternshipsScalarFieldEnum
    having?: InternshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipsCountAggregateInputType | true
    _avg?: InternshipsAvgAggregateInputType
    _sum?: InternshipsSumAggregateInputType
    _min?: InternshipsMinAggregateInputType
    _max?: InternshipsMaxAggregateInputType
  }

  export type InternshipsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    tags: string[]
    skills: string[]
    cutoff: number | null
    ctc: number | null
    duration: string | null
    mode: string | null
    createdAt: Date
    _count: InternshipsCountAggregateOutputType | null
    _avg: InternshipsAvgAggregateOutputType | null
    _sum: InternshipsSumAggregateOutputType | null
    _min: InternshipsMinAggregateOutputType | null
    _max: InternshipsMaxAggregateOutputType | null
  }

  type GetInternshipsGroupByPayload<T extends InternshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipsGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipsGroupByOutputType[P]>
        }
      >
    >


  export type InternshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    skills?: boolean
    cutoff?: boolean
    ctc?: boolean
    duration?: boolean
    mode?: boolean
    createdAt?: boolean
    applications?: boolean | Internships$applicationsArgs<ExtArgs>
    saved?: boolean | Internships$savedArgs<ExtArgs>
    _count?: boolean | InternshipsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internships"]>

  export type InternshipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    skills?: boolean
    cutoff?: boolean
    ctc?: boolean
    duration?: boolean
    mode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["internships"]>

  export type InternshipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    skills?: boolean
    cutoff?: boolean
    ctc?: boolean
    duration?: boolean
    mode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["internships"]>

  export type InternshipsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    skills?: boolean
    cutoff?: boolean
    ctc?: boolean
    duration?: boolean
    mode?: boolean
    createdAt?: boolean
  }

  export type InternshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "tags" | "skills" | "cutoff" | "ctc" | "duration" | "mode" | "createdAt", ExtArgs["result"]["internships"]>
  export type InternshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Internships$applicationsArgs<ExtArgs>
    saved?: boolean | Internships$savedArgs<ExtArgs>
    _count?: boolean | InternshipsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InternshipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InternshipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InternshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Internships"
    objects: {
      applications: Prisma.$ApplicationsPayload<ExtArgs>[]
      saved: Prisma.$SavedInternshipsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      tags: string[]
      skills: string[]
      cutoff: number | null
      ctc: number | null
      duration: string | null
      mode: string | null
      createdAt: Date
    }, ExtArgs["result"]["internships"]>
    composites: {}
  }

  type InternshipsGetPayload<S extends boolean | null | undefined | InternshipsDefaultArgs> = $Result.GetResult<Prisma.$InternshipsPayload, S>

  type InternshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipsCountAggregateInputType | true
    }

  export interface InternshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Internships'], meta: { name: 'Internships' } }
    /**
     * Find zero or one Internships that matches the filter.
     * @param {InternshipsFindUniqueArgs} args - Arguments to find a Internships
     * @example
     * // Get one Internships
     * const internships = await prisma.internships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternshipsFindUniqueArgs>(args: SelectSubset<T, InternshipsFindUniqueArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternshipsFindUniqueOrThrowArgs} args - Arguments to find a Internships
     * @example
     * // Get one Internships
     * const internships = await prisma.internships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, InternshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsFindFirstArgs} args - Arguments to find a Internships
     * @example
     * // Get one Internships
     * const internships = await prisma.internships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternshipsFindFirstArgs>(args?: SelectSubset<T, InternshipsFindFirstArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsFindFirstOrThrowArgs} args - Arguments to find a Internships
     * @example
     * // Get one Internships
     * const internships = await prisma.internships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, InternshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internships
     * const internships = await prisma.internships.findMany()
     * 
     * // Get first 10 Internships
     * const internships = await prisma.internships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipsWithIdOnly = await prisma.internships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternshipsFindManyArgs>(args?: SelectSubset<T, InternshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internships.
     * @param {InternshipsCreateArgs} args - Arguments to create a Internships.
     * @example
     * // Create one Internships
     * const Internships = await prisma.internships.create({
     *   data: {
     *     // ... data to create a Internships
     *   }
     * })
     * 
     */
    create<T extends InternshipsCreateArgs>(args: SelectSubset<T, InternshipsCreateArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internships.
     * @param {InternshipsCreateManyArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internships = await prisma.internships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternshipsCreateManyArgs>(args?: SelectSubset<T, InternshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Internships and returns the data saved in the database.
     * @param {InternshipsCreateManyAndReturnArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internships = await prisma.internships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Internships and only return the `id`
     * const internshipsWithIdOnly = await prisma.internships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternshipsCreateManyAndReturnArgs>(args?: SelectSubset<T, InternshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Internships.
     * @param {InternshipsDeleteArgs} args - Arguments to delete one Internships.
     * @example
     * // Delete one Internships
     * const Internships = await prisma.internships.delete({
     *   where: {
     *     // ... filter to delete one Internships
     *   }
     * })
     * 
     */
    delete<T extends InternshipsDeleteArgs>(args: SelectSubset<T, InternshipsDeleteArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internships.
     * @param {InternshipsUpdateArgs} args - Arguments to update one Internships.
     * @example
     * // Update one Internships
     * const internships = await prisma.internships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternshipsUpdateArgs>(args: SelectSubset<T, InternshipsUpdateArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internships.
     * @param {InternshipsDeleteManyArgs} args - Arguments to filter Internships to delete.
     * @example
     * // Delete a few Internships
     * const { count } = await prisma.internships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternshipsDeleteManyArgs>(args?: SelectSubset<T, InternshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internships
     * const internships = await prisma.internships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternshipsUpdateManyArgs>(args: SelectSubset<T, InternshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships and returns the data updated in the database.
     * @param {InternshipsUpdateManyAndReturnArgs} args - Arguments to update many Internships.
     * @example
     * // Update many Internships
     * const internships = await prisma.internships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Internships and only return the `id`
     * const internshipsWithIdOnly = await prisma.internships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternshipsUpdateManyAndReturnArgs>(args: SelectSubset<T, InternshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Internships.
     * @param {InternshipsUpsertArgs} args - Arguments to update or create a Internships.
     * @example
     * // Update or create a Internships
     * const internships = await prisma.internships.upsert({
     *   create: {
     *     // ... data to create a Internships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internships we want to update
     *   }
     * })
     */
    upsert<T extends InternshipsUpsertArgs>(args: SelectSubset<T, InternshipsUpsertArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsCountArgs} args - Arguments to filter Internships to count.
     * @example
     * // Count the number of Internships
     * const count = await prisma.internships.count({
     *   where: {
     *     // ... the filter for the Internships we want to count
     *   }
     * })
    **/
    count<T extends InternshipsCountArgs>(
      args?: Subset<T, InternshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternshipsAggregateArgs>(args: Subset<T, InternshipsAggregateArgs>): Prisma.PrismaPromise<GetInternshipsAggregateType<T>>

    /**
     * Group by Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternshipsGroupByArgs['orderBy'] }
        : { orderBy?: InternshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Internships model
   */
  readonly fields: InternshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Internships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Internships$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Internships$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved<T extends Internships$savedArgs<ExtArgs> = {}>(args?: Subset<T, Internships$savedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Internships model
   */
  interface InternshipsFieldRefs {
    readonly id: FieldRef<"Internships", 'Int'>
    readonly title: FieldRef<"Internships", 'String'>
    readonly description: FieldRef<"Internships", 'String'>
    readonly tags: FieldRef<"Internships", 'String[]'>
    readonly skills: FieldRef<"Internships", 'String[]'>
    readonly cutoff: FieldRef<"Internships", 'Float'>
    readonly ctc: FieldRef<"Internships", 'Float'>
    readonly duration: FieldRef<"Internships", 'String'>
    readonly mode: FieldRef<"Internships", 'String'>
    readonly createdAt: FieldRef<"Internships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Internships findUnique
   */
  export type InternshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where: InternshipsWhereUniqueInput
  }

  /**
   * Internships findUniqueOrThrow
   */
  export type InternshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where: InternshipsWhereUniqueInput
  }

  /**
   * Internships findFirst
   */
  export type InternshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where?: InternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipsOrderByWithRelationInput | InternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipsScalarFieldEnum | InternshipsScalarFieldEnum[]
  }

  /**
   * Internships findFirstOrThrow
   */
  export type InternshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where?: InternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipsOrderByWithRelationInput | InternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipsScalarFieldEnum | InternshipsScalarFieldEnum[]
  }

  /**
   * Internships findMany
   */
  export type InternshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where?: InternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipsOrderByWithRelationInput | InternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Internships.
     */
    cursor?: InternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    distinct?: InternshipsScalarFieldEnum | InternshipsScalarFieldEnum[]
  }

  /**
   * Internships create
   */
  export type InternshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a Internships.
     */
    data: XOR<InternshipsCreateInput, InternshipsUncheckedCreateInput>
  }

  /**
   * Internships createMany
   */
  export type InternshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Internships.
     */
    data: InternshipsCreateManyInput | InternshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Internships createManyAndReturn
   */
  export type InternshipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * The data used to create many Internships.
     */
    data: InternshipsCreateManyInput | InternshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Internships update
   */
  export type InternshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a Internships.
     */
    data: XOR<InternshipsUpdateInput, InternshipsUncheckedUpdateInput>
    /**
     * Choose, which Internships to update.
     */
    where: InternshipsWhereUniqueInput
  }

  /**
   * Internships updateMany
   */
  export type InternshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipsUpdateManyMutationInput, InternshipsUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipsWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
  }

  /**
   * Internships updateManyAndReturn
   */
  export type InternshipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipsUpdateManyMutationInput, InternshipsUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipsWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
  }

  /**
   * Internships upsert
   */
  export type InternshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the Internships to update in case it exists.
     */
    where: InternshipsWhereUniqueInput
    /**
     * In case the Internships found by the `where` argument doesn't exist, create a new Internships with this data.
     */
    create: XOR<InternshipsCreateInput, InternshipsUncheckedCreateInput>
    /**
     * In case the Internships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternshipsUpdateInput, InternshipsUncheckedUpdateInput>
  }

  /**
   * Internships delete
   */
  export type InternshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
    /**
     * Filter which Internships to delete.
     */
    where: InternshipsWhereUniqueInput
  }

  /**
   * Internships deleteMany
   */
  export type InternshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internships to delete
     */
    where?: InternshipsWhereInput
    /**
     * Limit how many Internships to delete.
     */
    limit?: number
  }

  /**
   * Internships.applications
   */
  export type Internships$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Internships.saved
   */
  export type Internships$savedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    where?: SavedInternshipsWhereInput
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    cursor?: SavedInternshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedInternshipsScalarFieldEnum | SavedInternshipsScalarFieldEnum[]
  }

  /**
   * Internships without action
   */
  export type InternshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internships
     */
    select?: InternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internships
     */
    omit?: InternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipsInclude<ExtArgs> | null
  }


  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
  }

  export type ApplicationsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
    status: $Enums.ApplicationStatus | null
    feedback: string | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
    status: $Enums.ApplicationStatus | null
    feedback: string | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    userId: number
    internshipId: number
    status: number
    feedback: number
    appliedAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationsAvgAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
  }

  export type ApplicationsSumAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
  }

  export type ApplicationsMinAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    status?: true
    feedback?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    status?: true
    feedback?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    status?: true
    feedback?: true
    appliedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _avg?: ApplicationsAvgAggregateInputType
    _sum?: ApplicationsSumAggregateInputType
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: number
    userId: number
    internshipId: number
    status: $Enums.ApplicationStatus
    feedback: string | null
    appliedAt: Date
    updatedAt: Date
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    status?: boolean
    feedback?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    status?: boolean
    feedback?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    status?: boolean
    feedback?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectScalar = {
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    status?: boolean
    feedback?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "internshipId" | "status" | "feedback" | "appliedAt" | "updatedAt", ExtArgs["result"]["applications"]>
  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }
  export type ApplicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }
  export type ApplicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }

  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      internship: Prisma.$InternshipsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      internshipId: number
      status: $Enums.ApplicationStatus
      feedback: string | null
      appliedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationsFindUniqueArgs>(args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationsFindFirstArgs>(args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationsFindManyArgs>(args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends ApplicationsCreateArgs>(args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationsCreateManyArgs>(args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationsCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends ApplicationsDeleteArgs>(args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationsUpdateArgs>(args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationsDeleteManyArgs>(args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationsUpdateManyArgs>(args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationsUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationsUpsertArgs>(args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    internship<T extends InternshipsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternshipsDefaultArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applications model
   */
  interface ApplicationsFieldRefs {
    readonly id: FieldRef<"Applications", 'Int'>
    readonly userId: FieldRef<"Applications", 'Int'>
    readonly internshipId: FieldRef<"Applications", 'Int'>
    readonly status: FieldRef<"Applications", 'ApplicationStatus'>
    readonly feedback: FieldRef<"Applications", 'String'>
    readonly appliedAt: FieldRef<"Applications", 'DateTime'>
    readonly updatedAt: FieldRef<"Applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }

  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applications createManyAndReturn
   */
  export type ApplicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Applications updateManyAndReturn
   */
  export type ApplicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }

  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model SavedInternships
   */

  export type AggregateSavedInternships = {
    _count: SavedInternshipsCountAggregateOutputType | null
    _avg: SavedInternshipsAvgAggregateOutputType | null
    _sum: SavedInternshipsSumAggregateOutputType | null
    _min: SavedInternshipsMinAggregateOutputType | null
    _max: SavedInternshipsMaxAggregateOutputType | null
  }

  export type SavedInternshipsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
  }

  export type SavedInternshipsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
  }

  export type SavedInternshipsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
    savedAt: Date | null
  }

  export type SavedInternshipsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    internshipId: number | null
    savedAt: Date | null
  }

  export type SavedInternshipsCountAggregateOutputType = {
    id: number
    userId: number
    internshipId: number
    savedAt: number
    _all: number
  }


  export type SavedInternshipsAvgAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
  }

  export type SavedInternshipsSumAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
  }

  export type SavedInternshipsMinAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    savedAt?: true
  }

  export type SavedInternshipsMaxAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    savedAt?: true
  }

  export type SavedInternshipsCountAggregateInputType = {
    id?: true
    userId?: true
    internshipId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedInternshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedInternships to aggregate.
     */
    where?: SavedInternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedInternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedInternships
    **/
    _count?: true | SavedInternshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedInternshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedInternshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedInternshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedInternshipsMaxAggregateInputType
  }

  export type GetSavedInternshipsAggregateType<T extends SavedInternshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedInternships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedInternships[P]>
      : GetScalarType<T[P], AggregateSavedInternships[P]>
  }




  export type SavedInternshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipsWhereInput
    orderBy?: SavedInternshipsOrderByWithAggregationInput | SavedInternshipsOrderByWithAggregationInput[]
    by: SavedInternshipsScalarFieldEnum[] | SavedInternshipsScalarFieldEnum
    having?: SavedInternshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedInternshipsCountAggregateInputType | true
    _avg?: SavedInternshipsAvgAggregateInputType
    _sum?: SavedInternshipsSumAggregateInputType
    _min?: SavedInternshipsMinAggregateInputType
    _max?: SavedInternshipsMaxAggregateInputType
  }

  export type SavedInternshipsGroupByOutputType = {
    id: number
    userId: number
    internshipId: number
    savedAt: Date
    _count: SavedInternshipsCountAggregateOutputType | null
    _avg: SavedInternshipsAvgAggregateOutputType | null
    _sum: SavedInternshipsSumAggregateOutputType | null
    _min: SavedInternshipsMinAggregateOutputType | null
    _max: SavedInternshipsMaxAggregateOutputType | null
  }

  type GetSavedInternshipsGroupByPayload<T extends SavedInternshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedInternshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedInternshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedInternshipsGroupByOutputType[P]>
            : GetScalarType<T[P], SavedInternshipsGroupByOutputType[P]>
        }
      >
    >


  export type SavedInternshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternships"]>

  export type SavedInternshipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternships"]>

  export type SavedInternshipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternships"]>

  export type SavedInternshipsSelectScalar = {
    id?: boolean
    userId?: boolean
    internshipId?: boolean
    savedAt?: boolean
  }

  export type SavedInternshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "internshipId" | "savedAt", ExtArgs["result"]["savedInternships"]>
  export type SavedInternshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }
  export type SavedInternshipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }
  export type SavedInternshipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    internship?: boolean | InternshipsDefaultArgs<ExtArgs>
  }

  export type $SavedInternshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedInternships"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      internship: Prisma.$InternshipsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      internshipId: number
      savedAt: Date
    }, ExtArgs["result"]["savedInternships"]>
    composites: {}
  }

  type SavedInternshipsGetPayload<S extends boolean | null | undefined | SavedInternshipsDefaultArgs> = $Result.GetResult<Prisma.$SavedInternshipsPayload, S>

  type SavedInternshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedInternshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedInternshipsCountAggregateInputType | true
    }

  export interface SavedInternshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedInternships'], meta: { name: 'SavedInternships' } }
    /**
     * Find zero or one SavedInternships that matches the filter.
     * @param {SavedInternshipsFindUniqueArgs} args - Arguments to find a SavedInternships
     * @example
     * // Get one SavedInternships
     * const savedInternships = await prisma.savedInternships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedInternshipsFindUniqueArgs>(args: SelectSubset<T, SavedInternshipsFindUniqueArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedInternships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedInternshipsFindUniqueOrThrowArgs} args - Arguments to find a SavedInternships
     * @example
     * // Get one SavedInternships
     * const savedInternships = await prisma.savedInternships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedInternshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedInternshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedInternships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsFindFirstArgs} args - Arguments to find a SavedInternships
     * @example
     * // Get one SavedInternships
     * const savedInternships = await prisma.savedInternships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedInternshipsFindFirstArgs>(args?: SelectSubset<T, SavedInternshipsFindFirstArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedInternships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsFindFirstOrThrowArgs} args - Arguments to find a SavedInternships
     * @example
     * // Get one SavedInternships
     * const savedInternships = await prisma.savedInternships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedInternshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedInternshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedInternships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedInternships
     * const savedInternships = await prisma.savedInternships.findMany()
     * 
     * // Get first 10 SavedInternships
     * const savedInternships = await prisma.savedInternships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedInternshipsWithIdOnly = await prisma.savedInternships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedInternshipsFindManyArgs>(args?: SelectSubset<T, SavedInternshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedInternships.
     * @param {SavedInternshipsCreateArgs} args - Arguments to create a SavedInternships.
     * @example
     * // Create one SavedInternships
     * const SavedInternships = await prisma.savedInternships.create({
     *   data: {
     *     // ... data to create a SavedInternships
     *   }
     * })
     * 
     */
    create<T extends SavedInternshipsCreateArgs>(args: SelectSubset<T, SavedInternshipsCreateArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedInternships.
     * @param {SavedInternshipsCreateManyArgs} args - Arguments to create many SavedInternships.
     * @example
     * // Create many SavedInternships
     * const savedInternships = await prisma.savedInternships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedInternshipsCreateManyArgs>(args?: SelectSubset<T, SavedInternshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedInternships and returns the data saved in the database.
     * @param {SavedInternshipsCreateManyAndReturnArgs} args - Arguments to create many SavedInternships.
     * @example
     * // Create many SavedInternships
     * const savedInternships = await prisma.savedInternships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedInternships and only return the `id`
     * const savedInternshipsWithIdOnly = await prisma.savedInternships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedInternshipsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedInternshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedInternships.
     * @param {SavedInternshipsDeleteArgs} args - Arguments to delete one SavedInternships.
     * @example
     * // Delete one SavedInternships
     * const SavedInternships = await prisma.savedInternships.delete({
     *   where: {
     *     // ... filter to delete one SavedInternships
     *   }
     * })
     * 
     */
    delete<T extends SavedInternshipsDeleteArgs>(args: SelectSubset<T, SavedInternshipsDeleteArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedInternships.
     * @param {SavedInternshipsUpdateArgs} args - Arguments to update one SavedInternships.
     * @example
     * // Update one SavedInternships
     * const savedInternships = await prisma.savedInternships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedInternshipsUpdateArgs>(args: SelectSubset<T, SavedInternshipsUpdateArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedInternships.
     * @param {SavedInternshipsDeleteManyArgs} args - Arguments to filter SavedInternships to delete.
     * @example
     * // Delete a few SavedInternships
     * const { count } = await prisma.savedInternships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedInternshipsDeleteManyArgs>(args?: SelectSubset<T, SavedInternshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedInternships
     * const savedInternships = await prisma.savedInternships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedInternshipsUpdateManyArgs>(args: SelectSubset<T, SavedInternshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedInternships and returns the data updated in the database.
     * @param {SavedInternshipsUpdateManyAndReturnArgs} args - Arguments to update many SavedInternships.
     * @example
     * // Update many SavedInternships
     * const savedInternships = await prisma.savedInternships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedInternships and only return the `id`
     * const savedInternshipsWithIdOnly = await prisma.savedInternships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedInternshipsUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedInternshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedInternships.
     * @param {SavedInternshipsUpsertArgs} args - Arguments to update or create a SavedInternships.
     * @example
     * // Update or create a SavedInternships
     * const savedInternships = await prisma.savedInternships.upsert({
     *   create: {
     *     // ... data to create a SavedInternships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedInternships we want to update
     *   }
     * })
     */
    upsert<T extends SavedInternshipsUpsertArgs>(args: SelectSubset<T, SavedInternshipsUpsertArgs<ExtArgs>>): Prisma__SavedInternshipsClient<$Result.GetResult<Prisma.$SavedInternshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsCountArgs} args - Arguments to filter SavedInternships to count.
     * @example
     * // Count the number of SavedInternships
     * const count = await prisma.savedInternships.count({
     *   where: {
     *     // ... the filter for the SavedInternships we want to count
     *   }
     * })
    **/
    count<T extends SavedInternshipsCountArgs>(
      args?: Subset<T, SavedInternshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedInternshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedInternshipsAggregateArgs>(args: Subset<T, SavedInternshipsAggregateArgs>): Prisma.PrismaPromise<GetSavedInternshipsAggregateType<T>>

    /**
     * Group by SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedInternshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedInternshipsGroupByArgs['orderBy'] }
        : { orderBy?: SavedInternshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedInternshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedInternshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedInternships model
   */
  readonly fields: SavedInternshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedInternships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedInternshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    internship<T extends InternshipsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternshipsDefaultArgs<ExtArgs>>): Prisma__InternshipsClient<$Result.GetResult<Prisma.$InternshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedInternships model
   */
  interface SavedInternshipsFieldRefs {
    readonly id: FieldRef<"SavedInternships", 'Int'>
    readonly userId: FieldRef<"SavedInternships", 'Int'>
    readonly internshipId: FieldRef<"SavedInternships", 'Int'>
    readonly savedAt: FieldRef<"SavedInternships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedInternships findUnique
   */
  export type SavedInternshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where: SavedInternshipsWhereUniqueInput
  }

  /**
   * SavedInternships findUniqueOrThrow
   */
  export type SavedInternshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where: SavedInternshipsWhereUniqueInput
  }

  /**
   * SavedInternships findFirst
   */
  export type SavedInternshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where?: SavedInternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedInternships.
     */
    cursor?: SavedInternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedInternships.
     */
    distinct?: SavedInternshipsScalarFieldEnum | SavedInternshipsScalarFieldEnum[]
  }

  /**
   * SavedInternships findFirstOrThrow
   */
  export type SavedInternshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where?: SavedInternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedInternships.
     */
    cursor?: SavedInternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedInternships.
     */
    distinct?: SavedInternshipsScalarFieldEnum | SavedInternshipsScalarFieldEnum[]
  }

  /**
   * SavedInternships findMany
   */
  export type SavedInternshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where?: SavedInternshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipsOrderByWithRelationInput | SavedInternshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedInternships.
     */
    cursor?: SavedInternshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    distinct?: SavedInternshipsScalarFieldEnum | SavedInternshipsScalarFieldEnum[]
  }

  /**
   * SavedInternships create
   */
  export type SavedInternshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedInternships.
     */
    data: XOR<SavedInternshipsCreateInput, SavedInternshipsUncheckedCreateInput>
  }

  /**
   * SavedInternships createMany
   */
  export type SavedInternshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedInternships.
     */
    data: SavedInternshipsCreateManyInput | SavedInternshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedInternships createManyAndReturn
   */
  export type SavedInternshipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * The data used to create many SavedInternships.
     */
    data: SavedInternshipsCreateManyInput | SavedInternshipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedInternships update
   */
  export type SavedInternshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedInternships.
     */
    data: XOR<SavedInternshipsUpdateInput, SavedInternshipsUncheckedUpdateInput>
    /**
     * Choose, which SavedInternships to update.
     */
    where: SavedInternshipsWhereUniqueInput
  }

  /**
   * SavedInternships updateMany
   */
  export type SavedInternshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedInternships.
     */
    data: XOR<SavedInternshipsUpdateManyMutationInput, SavedInternshipsUncheckedUpdateManyInput>
    /**
     * Filter which SavedInternships to update
     */
    where?: SavedInternshipsWhereInput
    /**
     * Limit how many SavedInternships to update.
     */
    limit?: number
  }

  /**
   * SavedInternships updateManyAndReturn
   */
  export type SavedInternshipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * The data used to update SavedInternships.
     */
    data: XOR<SavedInternshipsUpdateManyMutationInput, SavedInternshipsUncheckedUpdateManyInput>
    /**
     * Filter which SavedInternships to update
     */
    where?: SavedInternshipsWhereInput
    /**
     * Limit how many SavedInternships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedInternships upsert
   */
  export type SavedInternshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedInternships to update in case it exists.
     */
    where: SavedInternshipsWhereUniqueInput
    /**
     * In case the SavedInternships found by the `where` argument doesn't exist, create a new SavedInternships with this data.
     */
    create: XOR<SavedInternshipsCreateInput, SavedInternshipsUncheckedCreateInput>
    /**
     * In case the SavedInternships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedInternshipsUpdateInput, SavedInternshipsUncheckedUpdateInput>
  }

  /**
   * SavedInternships delete
   */
  export type SavedInternshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
    /**
     * Filter which SavedInternships to delete.
     */
    where: SavedInternshipsWhereUniqueInput
  }

  /**
   * SavedInternships deleteMany
   */
  export type SavedInternshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedInternships to delete
     */
    where?: SavedInternshipsWhereInput
    /**
     * Limit how many SavedInternships to delete.
     */
    limit?: number
  }

  /**
   * SavedInternships without action
   */
  export type SavedInternshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternships
     */
    select?: SavedInternshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternships
     */
    omit?: SavedInternshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    profileUrl: 'profileUrl'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const StudentProfilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resumeUrl: 'resumeUrl',
    rollNo: 'rollNo',
    department: 'department',
    cgpa: 'cgpa',
    skills: 'skills',
    introduction: 'introduction',
    mentorId: 'mentorId'
  };

  export type StudentProfilesScalarFieldEnum = (typeof StudentProfilesScalarFieldEnum)[keyof typeof StudentProfilesScalarFieldEnum]


  export const MentorProfilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    designation: 'designation',
    department: 'department'
  };

  export type MentorProfilesScalarFieldEnum = (typeof MentorProfilesScalarFieldEnum)[keyof typeof MentorProfilesScalarFieldEnum]


  export const InternshipsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tags: 'tags',
    skills: 'skills',
    cutoff: 'cutoff',
    ctc: 'ctc',
    duration: 'duration',
    mode: 'mode',
    createdAt: 'createdAt'
  };

  export type InternshipsScalarFieldEnum = (typeof InternshipsScalarFieldEnum)[keyof typeof InternshipsScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    internshipId: 'internshipId',
    status: 'status',
    feedback: 'feedback',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const SavedInternshipsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    internshipId: 'internshipId',
    savedAt: 'savedAt'
  };

  export type SavedInternshipsScalarFieldEnum = (typeof SavedInternshipsScalarFieldEnum)[keyof typeof SavedInternshipsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    profileUrl?: StringNullableFilter<"Users"> | string | null
    studentProfile?: XOR<StudentProfilesNullableScalarRelationFilter, StudentProfilesWhereInput> | null
    mentorProfile?: XOR<MentorProfilesNullableScalarRelationFilter, MentorProfilesWhereInput> | null
    applications?: ApplicationsListRelationFilter
    saved?: SavedInternshipsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    studentProfile?: StudentProfilesOrderByWithRelationInput
    mentorProfile?: MentorProfilesOrderByWithRelationInput
    applications?: ApplicationsOrderByRelationAggregateInput
    saved?: SavedInternshipsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    profileUrl?: StringNullableFilter<"Users"> | string | null
    studentProfile?: XOR<StudentProfilesNullableScalarRelationFilter, StudentProfilesWhereInput> | null
    mentorProfile?: XOR<MentorProfilesNullableScalarRelationFilter, MentorProfilesWhereInput> | null
    applications?: ApplicationsListRelationFilter
    saved?: SavedInternshipsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    profileUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type StudentProfilesWhereInput = {
    AND?: StudentProfilesWhereInput | StudentProfilesWhereInput[]
    OR?: StudentProfilesWhereInput[]
    NOT?: StudentProfilesWhereInput | StudentProfilesWhereInput[]
    id?: IntFilter<"StudentProfiles"> | number
    userId?: IntFilter<"StudentProfiles"> | number
    resumeUrl?: StringNullableFilter<"StudentProfiles"> | string | null
    rollNo?: StringNullableFilter<"StudentProfiles"> | string | null
    department?: StringNullableFilter<"StudentProfiles"> | string | null
    cgpa?: FloatNullableFilter<"StudentProfiles"> | number | null
    skills?: StringNullableListFilter<"StudentProfiles">
    introduction?: StringNullableFilter<"StudentProfiles"> | string | null
    mentorId?: IntNullableFilter<"StudentProfiles"> | number | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    mentor?: XOR<MentorProfilesNullableScalarRelationFilter, MentorProfilesWhereInput> | null
  }

  export type StudentProfilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    rollNo?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    skills?: SortOrder
    introduction?: SortOrderInput | SortOrder
    mentorId?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    mentor?: MentorProfilesOrderByWithRelationInput
  }

  export type StudentProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StudentProfilesWhereInput | StudentProfilesWhereInput[]
    OR?: StudentProfilesWhereInput[]
    NOT?: StudentProfilesWhereInput | StudentProfilesWhereInput[]
    resumeUrl?: StringNullableFilter<"StudentProfiles"> | string | null
    rollNo?: StringNullableFilter<"StudentProfiles"> | string | null
    department?: StringNullableFilter<"StudentProfiles"> | string | null
    cgpa?: FloatNullableFilter<"StudentProfiles"> | number | null
    skills?: StringNullableListFilter<"StudentProfiles">
    introduction?: StringNullableFilter<"StudentProfiles"> | string | null
    mentorId?: IntNullableFilter<"StudentProfiles"> | number | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    mentor?: XOR<MentorProfilesNullableScalarRelationFilter, MentorProfilesWhereInput> | null
  }, "id" | "userId">

  export type StudentProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    rollNo?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    skills?: SortOrder
    introduction?: SortOrderInput | SortOrder
    mentorId?: SortOrderInput | SortOrder
    _count?: StudentProfilesCountOrderByAggregateInput
    _avg?: StudentProfilesAvgOrderByAggregateInput
    _max?: StudentProfilesMaxOrderByAggregateInput
    _min?: StudentProfilesMinOrderByAggregateInput
    _sum?: StudentProfilesSumOrderByAggregateInput
  }

  export type StudentProfilesScalarWhereWithAggregatesInput = {
    AND?: StudentProfilesScalarWhereWithAggregatesInput | StudentProfilesScalarWhereWithAggregatesInput[]
    OR?: StudentProfilesScalarWhereWithAggregatesInput[]
    NOT?: StudentProfilesScalarWhereWithAggregatesInput | StudentProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentProfiles"> | number
    userId?: IntWithAggregatesFilter<"StudentProfiles"> | number
    resumeUrl?: StringNullableWithAggregatesFilter<"StudentProfiles"> | string | null
    rollNo?: StringNullableWithAggregatesFilter<"StudentProfiles"> | string | null
    department?: StringNullableWithAggregatesFilter<"StudentProfiles"> | string | null
    cgpa?: FloatNullableWithAggregatesFilter<"StudentProfiles"> | number | null
    skills?: StringNullableListFilter<"StudentProfiles">
    introduction?: StringNullableWithAggregatesFilter<"StudentProfiles"> | string | null
    mentorId?: IntNullableWithAggregatesFilter<"StudentProfiles"> | number | null
  }

  export type MentorProfilesWhereInput = {
    AND?: MentorProfilesWhereInput | MentorProfilesWhereInput[]
    OR?: MentorProfilesWhereInput[]
    NOT?: MentorProfilesWhereInput | MentorProfilesWhereInput[]
    id?: IntFilter<"MentorProfiles"> | number
    userId?: IntFilter<"MentorProfiles"> | number
    designation?: StringNullableFilter<"MentorProfiles"> | string | null
    department?: StringNullableFilter<"MentorProfiles"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    mentees?: StudentProfilesListRelationFilter
  }

  export type MentorProfilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    mentees?: StudentProfilesOrderByRelationAggregateInput
  }

  export type MentorProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MentorProfilesWhereInput | MentorProfilesWhereInput[]
    OR?: MentorProfilesWhereInput[]
    NOT?: MentorProfilesWhereInput | MentorProfilesWhereInput[]
    designation?: StringNullableFilter<"MentorProfiles"> | string | null
    department?: StringNullableFilter<"MentorProfiles"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    mentees?: StudentProfilesListRelationFilter
  }, "id" | "userId">

  export type MentorProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    _count?: MentorProfilesCountOrderByAggregateInput
    _avg?: MentorProfilesAvgOrderByAggregateInput
    _max?: MentorProfilesMaxOrderByAggregateInput
    _min?: MentorProfilesMinOrderByAggregateInput
    _sum?: MentorProfilesSumOrderByAggregateInput
  }

  export type MentorProfilesScalarWhereWithAggregatesInput = {
    AND?: MentorProfilesScalarWhereWithAggregatesInput | MentorProfilesScalarWhereWithAggregatesInput[]
    OR?: MentorProfilesScalarWhereWithAggregatesInput[]
    NOT?: MentorProfilesScalarWhereWithAggregatesInput | MentorProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MentorProfiles"> | number
    userId?: IntWithAggregatesFilter<"MentorProfiles"> | number
    designation?: StringNullableWithAggregatesFilter<"MentorProfiles"> | string | null
    department?: StringNullableWithAggregatesFilter<"MentorProfiles"> | string | null
  }

  export type InternshipsWhereInput = {
    AND?: InternshipsWhereInput | InternshipsWhereInput[]
    OR?: InternshipsWhereInput[]
    NOT?: InternshipsWhereInput | InternshipsWhereInput[]
    id?: IntFilter<"Internships"> | number
    title?: StringFilter<"Internships"> | string
    description?: StringNullableFilter<"Internships"> | string | null
    tags?: StringNullableListFilter<"Internships">
    skills?: StringNullableListFilter<"Internships">
    cutoff?: FloatNullableFilter<"Internships"> | number | null
    ctc?: FloatNullableFilter<"Internships"> | number | null
    duration?: StringNullableFilter<"Internships"> | string | null
    mode?: StringNullableFilter<"Internships"> | string | null
    createdAt?: DateTimeFilter<"Internships"> | Date | string
    applications?: ApplicationsListRelationFilter
    saved?: SavedInternshipsListRelationFilter
  }

  export type InternshipsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    skills?: SortOrder
    cutoff?: SortOrderInput | SortOrder
    ctc?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    applications?: ApplicationsOrderByRelationAggregateInput
    saved?: SavedInternshipsOrderByRelationAggregateInput
  }

  export type InternshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InternshipsWhereInput | InternshipsWhereInput[]
    OR?: InternshipsWhereInput[]
    NOT?: InternshipsWhereInput | InternshipsWhereInput[]
    title?: StringFilter<"Internships"> | string
    description?: StringNullableFilter<"Internships"> | string | null
    tags?: StringNullableListFilter<"Internships">
    skills?: StringNullableListFilter<"Internships">
    cutoff?: FloatNullableFilter<"Internships"> | number | null
    ctc?: FloatNullableFilter<"Internships"> | number | null
    duration?: StringNullableFilter<"Internships"> | string | null
    mode?: StringNullableFilter<"Internships"> | string | null
    createdAt?: DateTimeFilter<"Internships"> | Date | string
    applications?: ApplicationsListRelationFilter
    saved?: SavedInternshipsListRelationFilter
  }, "id">

  export type InternshipsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    skills?: SortOrder
    cutoff?: SortOrderInput | SortOrder
    ctc?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InternshipsCountOrderByAggregateInput
    _avg?: InternshipsAvgOrderByAggregateInput
    _max?: InternshipsMaxOrderByAggregateInput
    _min?: InternshipsMinOrderByAggregateInput
    _sum?: InternshipsSumOrderByAggregateInput
  }

  export type InternshipsScalarWhereWithAggregatesInput = {
    AND?: InternshipsScalarWhereWithAggregatesInput | InternshipsScalarWhereWithAggregatesInput[]
    OR?: InternshipsScalarWhereWithAggregatesInput[]
    NOT?: InternshipsScalarWhereWithAggregatesInput | InternshipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Internships"> | number
    title?: StringWithAggregatesFilter<"Internships"> | string
    description?: StringNullableWithAggregatesFilter<"Internships"> | string | null
    tags?: StringNullableListFilter<"Internships">
    skills?: StringNullableListFilter<"Internships">
    cutoff?: FloatNullableWithAggregatesFilter<"Internships"> | number | null
    ctc?: FloatNullableWithAggregatesFilter<"Internships"> | number | null
    duration?: StringNullableWithAggregatesFilter<"Internships"> | string | null
    mode?: StringNullableWithAggregatesFilter<"Internships"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Internships"> | Date | string
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    id?: IntFilter<"Applications"> | number
    userId?: IntFilter<"Applications"> | number
    internshipId?: IntFilter<"Applications"> | number
    status?: EnumApplicationStatusFilter<"Applications"> | $Enums.ApplicationStatus
    feedback?: StringNullableFilter<"Applications"> | string | null
    appliedAt?: DateTimeFilter<"Applications"> | Date | string
    updatedAt?: DateTimeFilter<"Applications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    internship?: XOR<InternshipsScalarRelationFilter, InternshipsWhereInput>
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    internship?: InternshipsOrderByWithRelationInput
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    userId?: IntFilter<"Applications"> | number
    internshipId?: IntFilter<"Applications"> | number
    status?: EnumApplicationStatusFilter<"Applications"> | $Enums.ApplicationStatus
    feedback?: StringNullableFilter<"Applications"> | string | null
    appliedAt?: DateTimeFilter<"Applications"> | Date | string
    updatedAt?: DateTimeFilter<"Applications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    internship?: XOR<InternshipsScalarRelationFilter, InternshipsWhereInput>
  }, "id">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _avg?: ApplicationsAvgOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
    _sum?: ApplicationsSumOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Applications"> | number
    userId?: IntWithAggregatesFilter<"Applications"> | number
    internshipId?: IntWithAggregatesFilter<"Applications"> | number
    status?: EnumApplicationStatusWithAggregatesFilter<"Applications"> | $Enums.ApplicationStatus
    feedback?: StringNullableWithAggregatesFilter<"Applications"> | string | null
    appliedAt?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
  }

  export type SavedInternshipsWhereInput = {
    AND?: SavedInternshipsWhereInput | SavedInternshipsWhereInput[]
    OR?: SavedInternshipsWhereInput[]
    NOT?: SavedInternshipsWhereInput | SavedInternshipsWhereInput[]
    id?: IntFilter<"SavedInternships"> | number
    userId?: IntFilter<"SavedInternships"> | number
    internshipId?: IntFilter<"SavedInternships"> | number
    savedAt?: DateTimeFilter<"SavedInternships"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    internship?: XOR<InternshipsScalarRelationFilter, InternshipsWhereInput>
  }

  export type SavedInternshipsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    internship?: InternshipsOrderByWithRelationInput
  }

  export type SavedInternshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavedInternshipsWhereInput | SavedInternshipsWhereInput[]
    OR?: SavedInternshipsWhereInput[]
    NOT?: SavedInternshipsWhereInput | SavedInternshipsWhereInput[]
    userId?: IntFilter<"SavedInternships"> | number
    internshipId?: IntFilter<"SavedInternships"> | number
    savedAt?: DateTimeFilter<"SavedInternships"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    internship?: XOR<InternshipsScalarRelationFilter, InternshipsWhereInput>
  }, "id">

  export type SavedInternshipsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedInternshipsCountOrderByAggregateInput
    _avg?: SavedInternshipsAvgOrderByAggregateInput
    _max?: SavedInternshipsMaxOrderByAggregateInput
    _min?: SavedInternshipsMinOrderByAggregateInput
    _sum?: SavedInternshipsSumOrderByAggregateInput
  }

  export type SavedInternshipsScalarWhereWithAggregatesInput = {
    AND?: SavedInternshipsScalarWhereWithAggregatesInput | SavedInternshipsScalarWhereWithAggregatesInput[]
    OR?: SavedInternshipsScalarWhereWithAggregatesInput[]
    NOT?: SavedInternshipsScalarWhereWithAggregatesInput | SavedInternshipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedInternships"> | number
    userId?: IntWithAggregatesFilter<"SavedInternships"> | number
    internshipId?: IntWithAggregatesFilter<"SavedInternships"> | number
    savedAt?: DateTimeWithAggregatesFilter<"SavedInternships"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesCreateNestedOneWithoutUserInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesUncheckedCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUncheckedUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfilesCreateInput = {
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    user: UsersCreateNestedOneWithoutStudentProfileInput
    mentor?: MentorProfilesCreateNestedOneWithoutMenteesInput
  }

  export type StudentProfilesUncheckedCreateInput = {
    id?: number
    userId: number
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    mentorId?: number | null
  }

  export type StudentProfilesUpdateInput = {
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutStudentProfileNestedInput
    mentor?: MentorProfilesUpdateOneWithoutMenteesNestedInput
  }

  export type StudentProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentProfilesCreateManyInput = {
    id?: number
    userId: number
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    mentorId?: number | null
  }

  export type StudentProfilesUpdateManyMutationInput = {
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MentorProfilesCreateInput = {
    designation?: string | null
    department?: string | null
    user: UsersCreateNestedOneWithoutMentorProfileInput
    mentees?: StudentProfilesCreateNestedManyWithoutMentorInput
  }

  export type MentorProfilesUncheckedCreateInput = {
    id?: number
    userId: number
    designation?: string | null
    department?: string | null
    mentees?: StudentProfilesUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfilesUpdateInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutMentorProfileNestedInput
    mentees?: StudentProfilesUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    mentees?: StudentProfilesUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfilesCreateManyInput = {
    id?: number
    userId: number
    designation?: string | null
    department?: string | null
  }

  export type MentorProfilesUpdateManyMutationInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InternshipsCreateInput = {
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    applications?: ApplicationsCreateNestedManyWithoutInternshipInput
    saved?: SavedInternshipsCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    applications?: ApplicationsUncheckedCreateNestedManyWithoutInternshipInput
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationsUpdateManyWithoutInternshipNestedInput
    saved?: SavedInternshipsUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationsUncheckedUpdateManyWithoutInternshipNestedInput
    saved?: SavedInternshipsUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
  }

  export type InternshipsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateInput = {
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutApplicationsInput
    internship: InternshipsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateInput = {
    id?: number
    userId: number
    internshipId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationsUpdateInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutApplicationsNestedInput
    internship?: InternshipsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyInput = {
    id?: number
    userId: number
    internshipId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationsUpdateManyMutationInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsCreateInput = {
    savedAt?: Date | string
    user: UsersCreateNestedOneWithoutSavedInput
    internship: InternshipsCreateNestedOneWithoutSavedInput
  }

  export type SavedInternshipsUncheckedCreateInput = {
    id?: number
    userId: number
    internshipId: number
    savedAt?: Date | string
  }

  export type SavedInternshipsUpdateInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavedNestedInput
    internship?: InternshipsUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedInternshipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsCreateManyInput = {
    id?: number
    userId: number
    internshipId: number
    savedAt?: Date | string
  }

  export type SavedInternshipsUpdateManyMutationInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StudentProfilesNullableScalarRelationFilter = {
    is?: StudentProfilesWhereInput | null
    isNot?: StudentProfilesWhereInput | null
  }

  export type MentorProfilesNullableScalarRelationFilter = {
    is?: MentorProfilesWhereInput | null
    isNot?: MentorProfilesWhereInput | null
  }

  export type ApplicationsListRelationFilter = {
    every?: ApplicationsWhereInput
    some?: ApplicationsWhereInput
    none?: ApplicationsWhereInput
  }

  export type SavedInternshipsListRelationFilter = {
    every?: SavedInternshipsWhereInput
    some?: SavedInternshipsWhereInput
    none?: SavedInternshipsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedInternshipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileUrl?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileUrl?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileUrl?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type StudentProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    rollNo?: SortOrder
    department?: SortOrder
    cgpa?: SortOrder
    skills?: SortOrder
    introduction?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cgpa?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    rollNo?: SortOrder
    department?: SortOrder
    cgpa?: SortOrder
    introduction?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    rollNo?: SortOrder
    department?: SortOrder
    cgpa?: SortOrder
    introduction?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentProfilesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cgpa?: SortOrder
    mentorId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StudentProfilesListRelationFilter = {
    every?: StudentProfilesWhereInput
    some?: StudentProfilesWhereInput
    none?: StudentProfilesWhereInput
  }

  export type StudentProfilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
  }

  export type MentorProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MentorProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
  }

  export type MentorProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
  }

  export type MentorProfilesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InternshipsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    skills?: SortOrder
    cutoff?: SortOrder
    ctc?: SortOrder
    duration?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type InternshipsAvgOrderByAggregateInput = {
    id?: SortOrder
    cutoff?: SortOrder
    ctc?: SortOrder
  }

  export type InternshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cutoff?: SortOrder
    ctc?: SortOrder
    duration?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type InternshipsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cutoff?: SortOrder
    ctc?: SortOrder
    duration?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type InternshipsSumOrderByAggregateInput = {
    id?: SortOrder
    cutoff?: SortOrder
    ctc?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type InternshipsScalarRelationFilter = {
    is?: InternshipsWhereInput
    isNot?: InternshipsWhereInput
  }

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type SavedInternshipsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedInternshipsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
  }

  export type SavedInternshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedInternshipsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedInternshipsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    internshipId?: SortOrder
  }

  export type StudentProfilesCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutUserInput
    connect?: StudentProfilesWhereUniqueInput
  }

  export type MentorProfilesCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutUserInput
    connect?: MentorProfilesWhereUniqueInput
  }

  export type ApplicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type SavedInternshipsCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput> | SavedInternshipsCreateWithoutUserInput[] | SavedInternshipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutUserInput | SavedInternshipsCreateOrConnectWithoutUserInput[]
    createMany?: SavedInternshipsCreateManyUserInputEnvelope
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
  }

  export type StudentProfilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutUserInput
    connect?: StudentProfilesWhereUniqueInput
  }

  export type MentorProfilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutUserInput
    connect?: MentorProfilesWhereUniqueInput
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type SavedInternshipsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput> | SavedInternshipsCreateWithoutUserInput[] | SavedInternshipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutUserInput | SavedInternshipsCreateOrConnectWithoutUserInput[]
    createMany?: SavedInternshipsCreateManyUserInputEnvelope
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentProfilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutUserInput
    upsert?: StudentProfilesUpsertWithoutUserInput
    disconnect?: StudentProfilesWhereInput | boolean
    delete?: StudentProfilesWhereInput | boolean
    connect?: StudentProfilesWhereUniqueInput
    update?: XOR<XOR<StudentProfilesUpdateToOneWithWhereWithoutUserInput, StudentProfilesUpdateWithoutUserInput>, StudentProfilesUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutUserInput
    upsert?: MentorProfilesUpsertWithoutUserInput
    disconnect?: MentorProfilesWhereInput | boolean
    delete?: MentorProfilesWhereInput | boolean
    connect?: MentorProfilesWhereUniqueInput
    update?: XOR<XOR<MentorProfilesUpdateToOneWithWhereWithoutUserInput, MentorProfilesUpdateWithoutUserInput>, MentorProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type SavedInternshipsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput> | SavedInternshipsCreateWithoutUserInput[] | SavedInternshipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutUserInput | SavedInternshipsCreateOrConnectWithoutUserInput[]
    upsert?: SavedInternshipsUpsertWithWhereUniqueWithoutUserInput | SavedInternshipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedInternshipsCreateManyUserInputEnvelope
    set?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    disconnect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    delete?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    update?: SavedInternshipsUpdateWithWhereUniqueWithoutUserInput | SavedInternshipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedInternshipsUpdateManyWithWhereWithoutUserInput | SavedInternshipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentProfilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutUserInput
    upsert?: StudentProfilesUpsertWithoutUserInput
    disconnect?: StudentProfilesWhereInput | boolean
    delete?: StudentProfilesWhereInput | boolean
    connect?: StudentProfilesWhereUniqueInput
    update?: XOR<XOR<StudentProfilesUpdateToOneWithWhereWithoutUserInput, StudentProfilesUpdateWithoutUserInput>, StudentProfilesUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutUserInput
    upsert?: MentorProfilesUpsertWithoutUserInput
    disconnect?: MentorProfilesWhereInput | boolean
    delete?: MentorProfilesWhereInput | boolean
    connect?: MentorProfilesWhereUniqueInput
    update?: XOR<XOR<MentorProfilesUpdateToOneWithWhereWithoutUserInput, MentorProfilesUpdateWithoutUserInput>, MentorProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type SavedInternshipsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput> | SavedInternshipsCreateWithoutUserInput[] | SavedInternshipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutUserInput | SavedInternshipsCreateOrConnectWithoutUserInput[]
    upsert?: SavedInternshipsUpsertWithWhereUniqueWithoutUserInput | SavedInternshipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedInternshipsCreateManyUserInputEnvelope
    set?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    disconnect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    delete?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    update?: SavedInternshipsUpdateWithWhereUniqueWithoutUserInput | SavedInternshipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedInternshipsUpdateManyWithWhereWithoutUserInput | SavedInternshipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
  }

  export type StudentProfilesCreateskillsInput = {
    set: string[]
  }

  export type UsersCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UsersCreateWithoutStudentProfileInput, UsersUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStudentProfileInput
    connect?: UsersWhereUniqueInput
  }

  export type MentorProfilesCreateNestedOneWithoutMenteesInput = {
    create?: XOR<MentorProfilesCreateWithoutMenteesInput, MentorProfilesUncheckedCreateWithoutMenteesInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutMenteesInput
    connect?: MentorProfilesWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentProfilesUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsersUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UsersCreateWithoutStudentProfileInput, UsersUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStudentProfileInput
    upsert?: UsersUpsertWithoutStudentProfileInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutStudentProfileInput, UsersUpdateWithoutStudentProfileInput>, UsersUncheckedUpdateWithoutStudentProfileInput>
  }

  export type MentorProfilesUpdateOneWithoutMenteesNestedInput = {
    create?: XOR<MentorProfilesCreateWithoutMenteesInput, MentorProfilesUncheckedCreateWithoutMenteesInput>
    connectOrCreate?: MentorProfilesCreateOrConnectWithoutMenteesInput
    upsert?: MentorProfilesUpsertWithoutMenteesInput
    disconnect?: MentorProfilesWhereInput | boolean
    delete?: MentorProfilesWhereInput | boolean
    connect?: MentorProfilesWhereUniqueInput
    update?: XOR<XOR<MentorProfilesUpdateToOneWithWhereWithoutMenteesInput, MentorProfilesUpdateWithoutMenteesInput>, MentorProfilesUncheckedUpdateWithoutMenteesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutMentorProfileInput = {
    create?: XOR<UsersCreateWithoutMentorProfileInput, UsersUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMentorProfileInput
    connect?: UsersWhereUniqueInput
  }

  export type StudentProfilesCreateNestedManyWithoutMentorInput = {
    create?: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput> | StudentProfilesCreateWithoutMentorInput[] | StudentProfilesUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutMentorInput | StudentProfilesCreateOrConnectWithoutMentorInput[]
    createMany?: StudentProfilesCreateManyMentorInputEnvelope
    connect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
  }

  export type StudentProfilesUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput> | StudentProfilesCreateWithoutMentorInput[] | StudentProfilesUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutMentorInput | StudentProfilesCreateOrConnectWithoutMentorInput[]
    createMany?: StudentProfilesCreateManyMentorInputEnvelope
    connect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutMentorProfileNestedInput = {
    create?: XOR<UsersCreateWithoutMentorProfileInput, UsersUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMentorProfileInput
    upsert?: UsersUpsertWithoutMentorProfileInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMentorProfileInput, UsersUpdateWithoutMentorProfileInput>, UsersUncheckedUpdateWithoutMentorProfileInput>
  }

  export type StudentProfilesUpdateManyWithoutMentorNestedInput = {
    create?: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput> | StudentProfilesCreateWithoutMentorInput[] | StudentProfilesUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutMentorInput | StudentProfilesCreateOrConnectWithoutMentorInput[]
    upsert?: StudentProfilesUpsertWithWhereUniqueWithoutMentorInput | StudentProfilesUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: StudentProfilesCreateManyMentorInputEnvelope
    set?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    disconnect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    delete?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    connect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    update?: StudentProfilesUpdateWithWhereUniqueWithoutMentorInput | StudentProfilesUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: StudentProfilesUpdateManyWithWhereWithoutMentorInput | StudentProfilesUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: StudentProfilesScalarWhereInput | StudentProfilesScalarWhereInput[]
  }

  export type StudentProfilesUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput> | StudentProfilesCreateWithoutMentorInput[] | StudentProfilesUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentProfilesCreateOrConnectWithoutMentorInput | StudentProfilesCreateOrConnectWithoutMentorInput[]
    upsert?: StudentProfilesUpsertWithWhereUniqueWithoutMentorInput | StudentProfilesUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: StudentProfilesCreateManyMentorInputEnvelope
    set?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    disconnect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    delete?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    connect?: StudentProfilesWhereUniqueInput | StudentProfilesWhereUniqueInput[]
    update?: StudentProfilesUpdateWithWhereUniqueWithoutMentorInput | StudentProfilesUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: StudentProfilesUpdateManyWithWhereWithoutMentorInput | StudentProfilesUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: StudentProfilesScalarWhereInput | StudentProfilesScalarWhereInput[]
  }

  export type InternshipsCreatetagsInput = {
    set: string[]
  }

  export type InternshipsCreateskillsInput = {
    set: string[]
  }

  export type ApplicationsCreateNestedManyWithoutInternshipInput = {
    create?: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput> | ApplicationsCreateWithoutInternshipInput[] | ApplicationsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutInternshipInput | ApplicationsCreateOrConnectWithoutInternshipInput[]
    createMany?: ApplicationsCreateManyInternshipInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type SavedInternshipsCreateNestedManyWithoutInternshipInput = {
    create?: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput> | SavedInternshipsCreateWithoutInternshipInput[] | SavedInternshipsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutInternshipInput | SavedInternshipsCreateOrConnectWithoutInternshipInput[]
    createMany?: SavedInternshipsCreateManyInternshipInputEnvelope
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput> | ApplicationsCreateWithoutInternshipInput[] | ApplicationsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutInternshipInput | ApplicationsCreateOrConnectWithoutInternshipInput[]
    createMany?: ApplicationsCreateManyInternshipInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type SavedInternshipsUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput> | SavedInternshipsCreateWithoutInternshipInput[] | SavedInternshipsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutInternshipInput | SavedInternshipsCreateOrConnectWithoutInternshipInput[]
    createMany?: SavedInternshipsCreateManyInternshipInputEnvelope
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
  }

  export type InternshipsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InternshipsUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApplicationsUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput> | ApplicationsCreateWithoutInternshipInput[] | ApplicationsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutInternshipInput | ApplicationsCreateOrConnectWithoutInternshipInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutInternshipInput | ApplicationsUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: ApplicationsCreateManyInternshipInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutInternshipInput | ApplicationsUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutInternshipInput | ApplicationsUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type SavedInternshipsUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput> | SavedInternshipsCreateWithoutInternshipInput[] | SavedInternshipsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutInternshipInput | SavedInternshipsCreateOrConnectWithoutInternshipInput[]
    upsert?: SavedInternshipsUpsertWithWhereUniqueWithoutInternshipInput | SavedInternshipsUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: SavedInternshipsCreateManyInternshipInputEnvelope
    set?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    disconnect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    delete?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    update?: SavedInternshipsUpdateWithWhereUniqueWithoutInternshipInput | SavedInternshipsUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: SavedInternshipsUpdateManyWithWhereWithoutInternshipInput | SavedInternshipsUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput> | ApplicationsCreateWithoutInternshipInput[] | ApplicationsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutInternshipInput | ApplicationsCreateOrConnectWithoutInternshipInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutInternshipInput | ApplicationsUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: ApplicationsCreateManyInternshipInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutInternshipInput | ApplicationsUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutInternshipInput | ApplicationsUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type SavedInternshipsUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput> | SavedInternshipsCreateWithoutInternshipInput[] | SavedInternshipsUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipsCreateOrConnectWithoutInternshipInput | SavedInternshipsCreateOrConnectWithoutInternshipInput[]
    upsert?: SavedInternshipsUpsertWithWhereUniqueWithoutInternshipInput | SavedInternshipsUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: SavedInternshipsCreateManyInternshipInputEnvelope
    set?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    disconnect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    delete?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    connect?: SavedInternshipsWhereUniqueInput | SavedInternshipsWhereUniqueInput[]
    update?: SavedInternshipsUpdateWithWhereUniqueWithoutInternshipInput | SavedInternshipsUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: SavedInternshipsUpdateManyWithWhereWithoutInternshipInput | SavedInternshipsUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationsInput
    connect?: UsersWhereUniqueInput
  }

  export type InternshipsCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<InternshipsCreateWithoutApplicationsInput, InternshipsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: InternshipsCreateOrConnectWithoutApplicationsInput
    connect?: InternshipsWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type UsersUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationsInput
    upsert?: UsersUpsertWithoutApplicationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApplicationsInput, UsersUpdateWithoutApplicationsInput>, UsersUncheckedUpdateWithoutApplicationsInput>
  }

  export type InternshipsUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<InternshipsCreateWithoutApplicationsInput, InternshipsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: InternshipsCreateOrConnectWithoutApplicationsInput
    upsert?: InternshipsUpsertWithoutApplicationsInput
    connect?: InternshipsWhereUniqueInput
    update?: XOR<XOR<InternshipsUpdateToOneWithWhereWithoutApplicationsInput, InternshipsUpdateWithoutApplicationsInput>, InternshipsUncheckedUpdateWithoutApplicationsInput>
  }

  export type UsersCreateNestedOneWithoutSavedInput = {
    create?: XOR<UsersCreateWithoutSavedInput, UsersUncheckedCreateWithoutSavedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavedInput
    connect?: UsersWhereUniqueInput
  }

  export type InternshipsCreateNestedOneWithoutSavedInput = {
    create?: XOR<InternshipsCreateWithoutSavedInput, InternshipsUncheckedCreateWithoutSavedInput>
    connectOrCreate?: InternshipsCreateOrConnectWithoutSavedInput
    connect?: InternshipsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSavedNestedInput = {
    create?: XOR<UsersCreateWithoutSavedInput, UsersUncheckedCreateWithoutSavedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavedInput
    upsert?: UsersUpsertWithoutSavedInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSavedInput, UsersUpdateWithoutSavedInput>, UsersUncheckedUpdateWithoutSavedInput>
  }

  export type InternshipsUpdateOneRequiredWithoutSavedNestedInput = {
    create?: XOR<InternshipsCreateWithoutSavedInput, InternshipsUncheckedCreateWithoutSavedInput>
    connectOrCreate?: InternshipsCreateOrConnectWithoutSavedInput
    upsert?: InternshipsUpsertWithoutSavedInput
    connect?: InternshipsWhereUniqueInput
    update?: XOR<XOR<InternshipsUpdateToOneWithWhereWithoutSavedInput, InternshipsUpdateWithoutSavedInput>, InternshipsUncheckedUpdateWithoutSavedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type StudentProfilesCreateWithoutUserInput = {
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    mentor?: MentorProfilesCreateNestedOneWithoutMenteesInput
  }

  export type StudentProfilesUncheckedCreateWithoutUserInput = {
    id?: number
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    mentorId?: number | null
  }

  export type StudentProfilesCreateOrConnectWithoutUserInput = {
    where: StudentProfilesWhereUniqueInput
    create: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
  }

  export type MentorProfilesCreateWithoutUserInput = {
    designation?: string | null
    department?: string | null
    mentees?: StudentProfilesCreateNestedManyWithoutMentorInput
  }

  export type MentorProfilesUncheckedCreateWithoutUserInput = {
    id?: number
    designation?: string | null
    department?: string | null
    mentees?: StudentProfilesUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfilesCreateOrConnectWithoutUserInput = {
    where: MentorProfilesWhereUniqueInput
    create: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsCreateWithoutUserInput = {
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
    internship: InternshipsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutUserInput = {
    id?: number
    internshipId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsCreateManyUserInputEnvelope = {
    data: ApplicationsCreateManyUserInput | ApplicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedInternshipsCreateWithoutUserInput = {
    savedAt?: Date | string
    internship: InternshipsCreateNestedOneWithoutSavedInput
  }

  export type SavedInternshipsUncheckedCreateWithoutUserInput = {
    id?: number
    internshipId: number
    savedAt?: Date | string
  }

  export type SavedInternshipsCreateOrConnectWithoutUserInput = {
    where: SavedInternshipsWhereUniqueInput
    create: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput>
  }

  export type SavedInternshipsCreateManyUserInputEnvelope = {
    data: SavedInternshipsCreateManyUserInput | SavedInternshipsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfilesUpsertWithoutUserInput = {
    update: XOR<StudentProfilesUpdateWithoutUserInput, StudentProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfilesCreateWithoutUserInput, StudentProfilesUncheckedCreateWithoutUserInput>
    where?: StudentProfilesWhereInput
  }

  export type StudentProfilesUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfilesWhereInput
    data: XOR<StudentProfilesUpdateWithoutUserInput, StudentProfilesUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfilesUpdateWithoutUserInput = {
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: MentorProfilesUpdateOneWithoutMenteesNestedInput
  }

  export type StudentProfilesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MentorProfilesUpsertWithoutUserInput = {
    update: XOR<MentorProfilesUpdateWithoutUserInput, MentorProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<MentorProfilesCreateWithoutUserInput, MentorProfilesUncheckedCreateWithoutUserInput>
    where?: MentorProfilesWhereInput
  }

  export type MentorProfilesUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorProfilesWhereInput
    data: XOR<MentorProfilesUpdateWithoutUserInput, MentorProfilesUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfilesUpdateWithoutUserInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    mentees?: StudentProfilesUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfilesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    mentees?: StudentProfilesUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationsScalarWhereInput = {
    AND?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    OR?: ApplicationsScalarWhereInput[]
    NOT?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    id?: IntFilter<"Applications"> | number
    userId?: IntFilter<"Applications"> | number
    internshipId?: IntFilter<"Applications"> | number
    status?: EnumApplicationStatusFilter<"Applications"> | $Enums.ApplicationStatus
    feedback?: StringNullableFilter<"Applications"> | string | null
    appliedAt?: DateTimeFilter<"Applications"> | Date | string
    updatedAt?: DateTimeFilter<"Applications"> | Date | string
  }

  export type SavedInternshipsUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedInternshipsWhereUniqueInput
    update: XOR<SavedInternshipsUpdateWithoutUserInput, SavedInternshipsUncheckedUpdateWithoutUserInput>
    create: XOR<SavedInternshipsCreateWithoutUserInput, SavedInternshipsUncheckedCreateWithoutUserInput>
  }

  export type SavedInternshipsUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedInternshipsWhereUniqueInput
    data: XOR<SavedInternshipsUpdateWithoutUserInput, SavedInternshipsUncheckedUpdateWithoutUserInput>
  }

  export type SavedInternshipsUpdateManyWithWhereWithoutUserInput = {
    where: SavedInternshipsScalarWhereInput
    data: XOR<SavedInternshipsUpdateManyMutationInput, SavedInternshipsUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedInternshipsScalarWhereInput = {
    AND?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
    OR?: SavedInternshipsScalarWhereInput[]
    NOT?: SavedInternshipsScalarWhereInput | SavedInternshipsScalarWhereInput[]
    id?: IntFilter<"SavedInternships"> | number
    userId?: IntFilter<"SavedInternships"> | number
    internshipId?: IntFilter<"SavedInternships"> | number
    savedAt?: DateTimeFilter<"SavedInternships"> | Date | string
  }

  export type UsersCreateWithoutStudentProfileInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    mentorProfile?: MentorProfilesCreateNestedOneWithoutUserInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutStudentProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    mentorProfile?: MentorProfilesUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutStudentProfileInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStudentProfileInput, UsersUncheckedCreateWithoutStudentProfileInput>
  }

  export type MentorProfilesCreateWithoutMenteesInput = {
    designation?: string | null
    department?: string | null
    user: UsersCreateNestedOneWithoutMentorProfileInput
  }

  export type MentorProfilesUncheckedCreateWithoutMenteesInput = {
    id?: number
    userId: number
    designation?: string | null
    department?: string | null
  }

  export type MentorProfilesCreateOrConnectWithoutMenteesInput = {
    where: MentorProfilesWhereUniqueInput
    create: XOR<MentorProfilesCreateWithoutMenteesInput, MentorProfilesUncheckedCreateWithoutMenteesInput>
  }

  export type UsersUpsertWithoutStudentProfileInput = {
    update: XOR<UsersUpdateWithoutStudentProfileInput, UsersUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UsersCreateWithoutStudentProfileInput, UsersUncheckedCreateWithoutStudentProfileInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutStudentProfileInput, UsersUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UsersUpdateWithoutStudentProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mentorProfile?: MentorProfilesUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mentorProfile?: MentorProfilesUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MentorProfilesUpsertWithoutMenteesInput = {
    update: XOR<MentorProfilesUpdateWithoutMenteesInput, MentorProfilesUncheckedUpdateWithoutMenteesInput>
    create: XOR<MentorProfilesCreateWithoutMenteesInput, MentorProfilesUncheckedCreateWithoutMenteesInput>
    where?: MentorProfilesWhereInput
  }

  export type MentorProfilesUpdateToOneWithWhereWithoutMenteesInput = {
    where?: MentorProfilesWhereInput
    data: XOR<MentorProfilesUpdateWithoutMenteesInput, MentorProfilesUncheckedUpdateWithoutMenteesInput>
  }

  export type MentorProfilesUpdateWithoutMenteesInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutMentorProfileNestedInput
  }

  export type MentorProfilesUncheckedUpdateWithoutMenteesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateWithoutMentorProfileInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesCreateNestedOneWithoutUserInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMentorProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMentorProfileInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMentorProfileInput, UsersUncheckedCreateWithoutMentorProfileInput>
  }

  export type StudentProfilesCreateWithoutMentorInput = {
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
    user: UsersCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfilesUncheckedCreateWithoutMentorInput = {
    id?: number
    userId: number
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
  }

  export type StudentProfilesCreateOrConnectWithoutMentorInput = {
    where: StudentProfilesWhereUniqueInput
    create: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput>
  }

  export type StudentProfilesCreateManyMentorInputEnvelope = {
    data: StudentProfilesCreateManyMentorInput | StudentProfilesCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutMentorProfileInput = {
    update: XOR<UsersUpdateWithoutMentorProfileInput, UsersUncheckedUpdateWithoutMentorProfileInput>
    create: XOR<UsersCreateWithoutMentorProfileInput, UsersUncheckedCreateWithoutMentorProfileInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMentorProfileInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMentorProfileInput, UsersUncheckedUpdateWithoutMentorProfileInput>
  }

  export type UsersUpdateWithoutMentorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMentorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
    saved?: SavedInternshipsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentProfilesUpsertWithWhereUniqueWithoutMentorInput = {
    where: StudentProfilesWhereUniqueInput
    update: XOR<StudentProfilesUpdateWithoutMentorInput, StudentProfilesUncheckedUpdateWithoutMentorInput>
    create: XOR<StudentProfilesCreateWithoutMentorInput, StudentProfilesUncheckedCreateWithoutMentorInput>
  }

  export type StudentProfilesUpdateWithWhereUniqueWithoutMentorInput = {
    where: StudentProfilesWhereUniqueInput
    data: XOR<StudentProfilesUpdateWithoutMentorInput, StudentProfilesUncheckedUpdateWithoutMentorInput>
  }

  export type StudentProfilesUpdateManyWithWhereWithoutMentorInput = {
    where: StudentProfilesScalarWhereInput
    data: XOR<StudentProfilesUpdateManyMutationInput, StudentProfilesUncheckedUpdateManyWithoutMentorInput>
  }

  export type StudentProfilesScalarWhereInput = {
    AND?: StudentProfilesScalarWhereInput | StudentProfilesScalarWhereInput[]
    OR?: StudentProfilesScalarWhereInput[]
    NOT?: StudentProfilesScalarWhereInput | StudentProfilesScalarWhereInput[]
    id?: IntFilter<"StudentProfiles"> | number
    userId?: IntFilter<"StudentProfiles"> | number
    resumeUrl?: StringNullableFilter<"StudentProfiles"> | string | null
    rollNo?: StringNullableFilter<"StudentProfiles"> | string | null
    department?: StringNullableFilter<"StudentProfiles"> | string | null
    cgpa?: FloatNullableFilter<"StudentProfiles"> | number | null
    skills?: StringNullableListFilter<"StudentProfiles">
    introduction?: StringNullableFilter<"StudentProfiles"> | string | null
    mentorId?: IntNullableFilter<"StudentProfiles"> | number | null
  }

  export type ApplicationsCreateWithoutInternshipInput = {
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutInternshipInput = {
    id?: number
    userId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutInternshipInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput>
  }

  export type ApplicationsCreateManyInternshipInputEnvelope = {
    data: ApplicationsCreateManyInternshipInput | ApplicationsCreateManyInternshipInput[]
    skipDuplicates?: boolean
  }

  export type SavedInternshipsCreateWithoutInternshipInput = {
    savedAt?: Date | string
    user: UsersCreateNestedOneWithoutSavedInput
  }

  export type SavedInternshipsUncheckedCreateWithoutInternshipInput = {
    id?: number
    userId: number
    savedAt?: Date | string
  }

  export type SavedInternshipsCreateOrConnectWithoutInternshipInput = {
    where: SavedInternshipsWhereUniqueInput
    create: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput>
  }

  export type SavedInternshipsCreateManyInternshipInputEnvelope = {
    data: SavedInternshipsCreateManyInternshipInput | SavedInternshipsCreateManyInternshipInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutInternshipInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutInternshipInput, ApplicationsUncheckedUpdateWithoutInternshipInput>
    create: XOR<ApplicationsCreateWithoutInternshipInput, ApplicationsUncheckedCreateWithoutInternshipInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutInternshipInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutInternshipInput, ApplicationsUncheckedUpdateWithoutInternshipInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutInternshipInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutInternshipInput>
  }

  export type SavedInternshipsUpsertWithWhereUniqueWithoutInternshipInput = {
    where: SavedInternshipsWhereUniqueInput
    update: XOR<SavedInternshipsUpdateWithoutInternshipInput, SavedInternshipsUncheckedUpdateWithoutInternshipInput>
    create: XOR<SavedInternshipsCreateWithoutInternshipInput, SavedInternshipsUncheckedCreateWithoutInternshipInput>
  }

  export type SavedInternshipsUpdateWithWhereUniqueWithoutInternshipInput = {
    where: SavedInternshipsWhereUniqueInput
    data: XOR<SavedInternshipsUpdateWithoutInternshipInput, SavedInternshipsUncheckedUpdateWithoutInternshipInput>
  }

  export type SavedInternshipsUpdateManyWithWhereWithoutInternshipInput = {
    where: SavedInternshipsScalarWhereInput
    data: XOR<SavedInternshipsUpdateManyMutationInput, SavedInternshipsUncheckedUpdateManyWithoutInternshipInput>
  }

  export type UsersCreateWithoutApplicationsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesCreateNestedOneWithoutUserInput
    saved?: SavedInternshipsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesUncheckedCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesUncheckedCreateNestedOneWithoutUserInput
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutApplicationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
  }

  export type InternshipsCreateWithoutApplicationsInput = {
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    saved?: SavedInternshipsCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    saved?: SavedInternshipsUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsCreateOrConnectWithoutApplicationsInput = {
    where: InternshipsWhereUniqueInput
    create: XOR<InternshipsCreateWithoutApplicationsInput, InternshipsUncheckedCreateWithoutApplicationsInput>
  }

  export type UsersUpsertWithoutApplicationsInput = {
    update: XOR<UsersUpdateWithoutApplicationsInput, UsersUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApplicationsInput, UsersUncheckedUpdateWithoutApplicationsInput>
  }

  export type UsersUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUpdateOneWithoutUserNestedInput
    saved?: SavedInternshipsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUncheckedUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUncheckedUpdateOneWithoutUserNestedInput
    saved?: SavedInternshipsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InternshipsUpsertWithoutApplicationsInput = {
    update: XOR<InternshipsUpdateWithoutApplicationsInput, InternshipsUncheckedUpdateWithoutApplicationsInput>
    create: XOR<InternshipsCreateWithoutApplicationsInput, InternshipsUncheckedCreateWithoutApplicationsInput>
    where?: InternshipsWhereInput
  }

  export type InternshipsUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: InternshipsWhereInput
    data: XOR<InternshipsUpdateWithoutApplicationsInput, InternshipsUncheckedUpdateWithoutApplicationsInput>
  }

  export type InternshipsUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedInternshipsUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipsUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedInternshipsUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type UsersCreateWithoutSavedInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesCreateNestedOneWithoutUserInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSavedInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    profileUrl?: string | null
    studentProfile?: StudentProfilesUncheckedCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfilesUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSavedInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSavedInput, UsersUncheckedCreateWithoutSavedInput>
  }

  export type InternshipsCreateWithoutSavedInput = {
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    applications?: ApplicationsCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsUncheckedCreateWithoutSavedInput = {
    id?: number
    title: string
    description?: string | null
    tags?: InternshipsCreatetagsInput | string[]
    skills?: InternshipsCreateskillsInput | string[]
    cutoff?: number | null
    ctc?: number | null
    duration?: string | null
    mode?: string | null
    createdAt?: Date | string
    applications?: ApplicationsUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipsCreateOrConnectWithoutSavedInput = {
    where: InternshipsWhereUniqueInput
    create: XOR<InternshipsCreateWithoutSavedInput, InternshipsUncheckedCreateWithoutSavedInput>
  }

  export type UsersUpsertWithoutSavedInput = {
    update: XOR<UsersUpdateWithoutSavedInput, UsersUncheckedUpdateWithoutSavedInput>
    create: XOR<UsersCreateWithoutSavedInput, UsersUncheckedCreateWithoutSavedInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSavedInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSavedInput, UsersUncheckedUpdateWithoutSavedInput>
  }

  export type UsersUpdateWithoutSavedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSavedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studentProfile?: StudentProfilesUncheckedUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfilesUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InternshipsUpsertWithoutSavedInput = {
    update: XOR<InternshipsUpdateWithoutSavedInput, InternshipsUncheckedUpdateWithoutSavedInput>
    create: XOR<InternshipsCreateWithoutSavedInput, InternshipsUncheckedCreateWithoutSavedInput>
    where?: InternshipsWhereInput
  }

  export type InternshipsUpdateToOneWithWhereWithoutSavedInput = {
    where?: InternshipsWhereInput
    data: XOR<InternshipsUpdateWithoutSavedInput, InternshipsUncheckedUpdateWithoutSavedInput>
  }

  export type InternshipsUpdateWithoutSavedInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationsUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipsUncheckedUpdateWithoutSavedInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: InternshipsUpdatetagsInput | string[]
    skills?: InternshipsUpdateskillsInput | string[]
    cutoff?: NullableFloatFieldUpdateOperationsInput | number | null
    ctc?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationsUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type ApplicationsCreateManyUserInput = {
    id?: number
    internshipId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedInternshipsCreateManyUserInput = {
    id?: number
    internshipId: number
    savedAt?: Date | string
  }

  export type ApplicationsUpdateWithoutUserInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsUpdateWithoutUserInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipsUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedInternshipsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfilesCreateManyMentorInput = {
    id?: number
    userId: number
    resumeUrl?: string | null
    rollNo?: string | null
    department?: string | null
    cgpa?: number | null
    skills?: StudentProfilesCreateskillsInput | string[]
    introduction?: string | null
  }

  export type StudentProfilesUpdateWithoutMentorInput = {
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfilesUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfilesUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    skills?: StudentProfilesUpdateskillsInput | string[]
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationsCreateManyInternshipInput = {
    id?: number
    userId: number
    status?: $Enums.ApplicationStatus
    feedback?: string | null
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedInternshipsCreateManyInternshipInput = {
    id?: number
    userId: number
    savedAt?: Date | string
  }

  export type ApplicationsUpdateWithoutInternshipInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsUpdateWithoutInternshipInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedInternshipsUncheckedUpdateWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipsUncheckedUpdateManyWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}