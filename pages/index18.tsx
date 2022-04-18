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

// Genericsの初期値を指定
type Foo2<T = string> = {
  value: T;
};
const hoge: Foo2 = {
  value: "hoge",
};
const hoge2: Foo2<number> = {
  value: 1,
};

// extendsを使った型の制約
// Genericsの型引数に制約を加えたいときに使う
type Foo3<T extends string> = {
  value: T;
};
const hoge3: Foo3<string> = {
  value: "hoge",
};
const hoge4: Foo<"hoge"> = { //制約の型に互換性があれば使える
  value: "hoge",
};
// const hoge5: Foo3<number> = { // stringではないのでエラー
//   value: 1,
// };
