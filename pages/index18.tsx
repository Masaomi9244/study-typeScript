// 【TypeScript入門 #18】Genericsの基礎を完全理解。初期値やextendsによる型制約のパターンを攻略しよう！

// Genericsとは
// 型の決定を遅延できるもの
export type Foo<T> = {
  value: T;
};
const foo: Foo<string> = {
  value: "aa",
};
const foo2: Foo<number> = {
  value: 1,
};
const foo3: Foo<boolean> = {
  value: true,
};

// 使用例
type User<T> = {
  name: string;
  state: T;
}
type Japanese = User<"東京都" | "大阪府">;
type American = User<"CA" | "NY">;
const user1: Japanese = {
  name: "田中",
  state: "東京都",
};
const user2: American = {
  name: "johnny",
  state: "NY",
};
