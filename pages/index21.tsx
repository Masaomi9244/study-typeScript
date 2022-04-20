// 【TypeScript入門 #21】型魔法使いになるための第一歩、Conditional Typesとinferを解説。難しすぎるので理解できなくてもOKです。

// ConditionalTypesとは？
// 型の条件分岐を行って型の推論を行うためのもの
type Props = {
  id: string;
  name: string;
  age: number;
};
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
type StringKeys = Filter<Props, string>; // id | name
type NumberKeys = Filter<Props, number>; // age
type BooleanKeys = Filter<Props, Boolean>; // never

// -----------------------------------------------------------------------------------------

// inferとは
// 部分的な型抽出のこと

// 使用例1 returnの型を取得する
export const foo = () => {
  return 0;
};
type ReturnType<T> = T extends () => infer U ? U : never; 
type Foo = ReturnType<typeof foo>; // number

// 使用例2 引数の型を取得する
export const foo2 = (id: string) => {
  return 0;
};
type ArgType<T> = T extends (id: infer U) => number ? U : never;
type Foo2 = ArgType<typeof foo2>; // string

// 使用例3　複数の引数の型を取得する ...arg　←　可変長引数
export const foo3 = (id: string, name: string) => {
  return 0;
};
type MultipleArgType<T> = T extends (...args: infer U) => number ? U : never;
type Foo3 = MultipleArgType<typeof foo3>; // [id: string, name: string]
