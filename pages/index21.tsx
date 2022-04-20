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
