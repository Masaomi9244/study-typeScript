// 【TypeScript入門 #22】実践でも多用されるUtility Typesとは？よく使われるものを紹介します！

// UtilityTypesとは？
// 便利な型のライブラリ集　TypeScriptの公式が提供している

// 関数の戻り値の型を取得　ReturnType
export const foo = () => {
  return 0;
};
type Foo = ReturnType<typeof foo>; // number

// -------------------------------------------------------

// 各プロパティを読み取り専用にする ReadonlyUser
type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
  name: "まさや",
  age: 24,
};
// user.age = 30; エラー

// -------------------------------------------------------

// 各プロパティをオプショナルにする Partial
type User2 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type PartialUser = Partial<User2>;
const use2: PartialUser = {
  name: "まさや",
  // age: 24,
};

// -------------------------------------------------------

// 各プロパティを必須にする　Required
type User3 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type RequiredUser = Required<User3>;
const user3: RequiredUser = {
  name: "まさや",
  age: 24,
  country: "JP",
};

// -------------------------------------------------------

// オブジェクトから必要なプロパティを選んで新しいオブジェクト型を返す
type User4 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type PickdUser = Pick<User4, "name" | "country">;
const user4: PickdUser = {
  name: "まさや",
  // age: 24, エラーになる
  country: "JP",
};

// -------------------------------------------------------

// オブジェクトから不要なプロパティを排除して新しいオブジェクトに返す Omit
type User5 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type OmitUser = Omit<User5, "age">;
const user5: OmitUser = {
  name: "まさや",
  // age: 24, エラーになる 
  country: "JP",
};
