// 【TypeScript入門 #23】Utility Typesの外部パッケージ版「type-fest」を使うと超便利！

// 第一型引数と第二型引数から互換性のある型だけを残して新しい型を生成するもの Extract
type Foo1 = Extract<string | number, string>; // string
type Foo2 = Extract<"hoge" | number, string>; // hoge
type Foo3 = Extract<"hoge" | 0, string | number>; // number | 0 
type Foo4 = Extract<"hoge" | number, boolean>; //never

// ---------------------------------------------------------------------------------

// 第一型引数と第二型引数から互換性のない型だけを残して新しい型を生成するもの Exclude
type Foo5 = Exclude<"aa" |string | number | boolean, string>; // number | boolean

// ---------------------------------------------------------------------------------

// 型引数で指定した型からnullとundefinedを除いたもの NonNullable
type Foo6 = NonNullable<string | null | undefined>; //string

// ---------------------------------------------------------------------------------

// オブジェクトのキーとプロパティの型を指定できる Record
type Foo7 = Record<string, number>;
const obj: Foo7 =  {
  hoge: 1,
  // huga: "2", エラーになる
};

// ---------------------------------------------------------------------------------

// 関数の引数の型をTupleとして取得する Parameters
// Tuple型　→　一つ一つの要素に対して型をつけることができ、かつ要素の数が決まっている配列
function hoge(a: string, b: number[], c: boolean) {
  return;
};
type Foo8 = Parameters<typeof hoge>; // [a: string, b: number[], c: boolean]

// ---------------------------------------------------------------------------------

// 文字列を操作するUtilityTypes
type Foo9  = Uppercase<"hello">;    // "HELLO"
type Foo10 = Lowercase<"HELLO">;    // "hello"
type Foo11 = Capitalize<"hello">;   // "Hello"
type Foo12 = Uncapitalize<"Hello">; // "hello"

// ---------------------------------------------------------------------------------

// 外部パッケージのUtilityTypes（type-fest）
// yarn add type-fest　でインストールできる
// ネストしている型もオプショナルにできる PartialDeep
import { PartialDeep } from "type-fest";
type User = {
  name: string;
  age: number | null;
  address: {
    country: "US" | "UK" | "JP";
  };
};
type PartialUser = PartialDeep<User>;
const user: PartialUser = {
  name: "名前",
  age: 24,
  address: {} // countryを指定しなくてもエラーにならない
};
