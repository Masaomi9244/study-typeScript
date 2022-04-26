// 【TypeScript入門 #24】型が無い、もしくは型が不十分な場合に使える拡張の技術（アンビエント宣言・namespace）

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
