// 【TypeScript入門 #24】
// アンビエント宣言(declare)・namespace
// 型が無い、もしくは型が不十分な場合に使える拡張の技術
// 型がないものや型が不十分なものに型を付けたり拡張したりする時に必要

// namespace 
// 外部の型や実装と分離した空間を作れる
export type User = {
    name: string;
};
namespace MyNamespace {
  export const name = "名前";
  export type User = {
      name: string;
  };
};
const foo = MyNamespace.name;
type Foo = MyNamespace.User;

// --------------------------------------------------------

// namespaceのマージ
namespace MyNamespace2 {
  export interface User {
    name: string;
  };
};
namespace MyNamespace2 {
  export interface User {
    age: number;
  };
};
type Foo2 = MyNamespace2.User["name"];
type Foo3 = MyNamespace2.User["age"];
const foo2: Foo2 = "名前";
const foo3: Foo3 = 24;

// --------------------------------------------------------

// アンビエント宣言(declare)
// TypeScriptに対して型の情報だけを伝えるので基本的に実装には含めてはならない
// この例は基本的に使ってはいけない！
declare var x: number;
x = 0;

// --------------------------------------------------------

// アンビエントコンテキスト
// アンビエント宣言(declare)されたnamespace内のこと
// exportの挙動が変わる(自動的にexportが付与される)
declare namespace MyNamespace3 {
  interface User {
    name: string;
  }
};
type foo4 = MyNamespace3.User; // exportがなくてもエラーにならない

// --------------------------------------------------------

// 環境変数の型を拡張
// global24.d.tsでFOOを定義してる
process.env.FOO;
process.env.BAR;
