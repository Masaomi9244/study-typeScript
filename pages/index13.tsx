// 【TypeScript入門 #13
// typeofとkeyofをマスターしよう

// -----------------------------------------------------------------------

// typeof
// ある変数と全く同じ型の別の変数を定義したいときに便利
// 変数、関数などの型定義以外のものに対して使う
namespace Namespace1 {
	let foo: string;
	type Foo = typeof foo; // string
}

// -----------------------------------------------------------------------

// 型アノテーションがなくても型を取得できる
namespace Namespace2 {
	let foo = 123;
	type Foo = typeof foo; // number	
}

// -----------------------------------------------------------------------

// LiteralTypesでも型を取得できる
namespace Namespace3 {
	const foo = 123;
	type Foo = typeof foo; // 123
}

// -----------------------------------------------------------------------

// 使用例
namespace Namespace4 {
	const obj = {
    foo: "foo",
    bar: "bar",
  }

  const obj2: typeof obj = {
    foo: "hoge",
    bar: "hogehoge",
  }
}

// -----------------------------------------------------------------------

// 使用例2 型を絞り込みたいとき
namespace Namespace5 {
	export function double (x: number | string): Number {
		if (typeof x === "string") {
			return Number(x) * 2;
		}
		return x * 2;
	}
}

// -----------------------------------------------------------------------

// keyof
// オブジェクトのプロパティ名をLiteralTypesとして一覧で取得できる
// type,interfaceなどの型定義に使う
namespace Namespace6 {
	export type Obj = {
		foo: string;
		bar: number;
	}
	
	type Key = keyof Obj;
	const key: Key = "foo";
}

// -----------------------------------------------------------------------

// keyofとtypeofを組み合わせて使う
namespace Namespace7 {
	const Obj = {
		foo: "hoge",
		bar: "hogehoge",
	}

	type Obj = typeof Obj; // { foo: string; bar: string; }
	type Key = keyof Obj; // "foo" | "bar"
	type Key2 = keyof typeof Obj; // "foo" | "bar"
}

// -----------------------------------------------------------------------

// 使用例
namespace Namespace8 {
	const Obj = {
		foo: "hoge",
		123: "hogehoge",
	}

	function test(x: keyof typeof Obj): void {
		return;
	}

	test("foo");
	test(123);
}

export{}
