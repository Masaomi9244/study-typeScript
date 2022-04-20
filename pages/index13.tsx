// 【TypeScript入門 #13】typeofとkeyofをマスターしよう

// typeofとkeyofとは？
// どちらも型クエリー（指定したものから型をキャプチャするためのもの）

// typeof
// ある変数と全く同じ型の別の変数を定義したいときに便利
// 変数、関数などの型定義以外のものに対して使う
let foo: string;
type Foo = typeof foo; // string

// 型アノテーションがなくても型を取得できる
let foo1 = 123;
type Foo1 = typeof foo1; // number

// LitetralTypesでも型を取得できる
const foo2 = 123;
type Foo2 = typeof foo2; // 123

// 使用例
const obj1 = {
    foo: "foo",
    bar: "bar",
};
const obj2: typeof obj1 = {
    foo: "hoge",
    bar: "hogehoge",
};

// 使用例2 型を絞り込みたいとき
export function double (x: number | string): Number {
	if (typeof x === "string") {
		return Number(x) * 2;
	}
	return x * 2;
};

// -----------------------------------------------------------------------

// keyof
// オブジェクトのプロパティ名をLiteralTypesとして一覧で取得できる
// type,interfaceなどの型定義に使う
export type Obj = {
	foo3: string;
	bar3: number;
};

type Key = keyof Obj;
const key: Key = "foo3";

// -----------------------------------------------------------------------

// keyofとtypeofを組み合わせて使う
const Obj2 = {
	foo: "foo",
	bar: "bar",
};
type Obj2 = typeof Obj2;
type Key2 = keyof Obj2; 
type Key3 = keyof typeof Obj2; // 上２行と同じ意味

// 使用例
const Obj3 = {
	foo: "foo",
	123: "123",
};
function test(x: keyof typeof Obj3): void {
	return;
}
test("foo");
test(123);
