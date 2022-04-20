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
type PartialUser = Partial<User>;
const use2: PartialUser = {
  name: "まさや",
  // age: 24,
};
