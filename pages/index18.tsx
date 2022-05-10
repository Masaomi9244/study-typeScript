//【TypeScript入門 #18】
// Genericsの基礎を完全理解。初期値やextendsによる型制約のパターンを攻略しよう！

// Genericsとは
// 型の決定を遅延できるもの
namespace Namespace1 {
  type Foo<T> = {
    value: T;
  }

  const foo: Foo<string>  = { value: "hoge" } // Foo<string>
  const bar: Foo<number>  = { value: 1 }      // Foo<number>
  const baz: Foo<boolean> = { value: true }   // Foo<boolean>
}

// ----------------------------------------------------------------------------

// 使用例
namespace Namespace2 {
  type User<T> = {
    name: string;
    state: T;
  }

  type Japanese = User<"東京都" | "大阪府">;
  type American = User<"CA" | "NY">;

  const japaneseUser: Japanese = {
    name: "田中",
    state: "東京都",
  }
  const AmericanUser: American = {
    name: "johnny",
    state: "NY",
  }
}

// ----------------------------------------------------------------------------

// Genericsの初期値を指定
namespace Namespace3 {
  type Foo<T = string> = {
    value: T;
  }

  const foo: Foo = {
    value: "hoge",
  }
  const foo2: Foo<number> = {
    value: 1,
  }
}

// ----------------------------------------------------------------------------

// extendsを使った型の制約
// Genericsの型引数に制約を加えたいときに使う
namespace Namespace4 {
  type Foo<T extends string> = {
    value: T;
  }

  const foo: Foo<string> = {
    value: "hoge",
  }
  const foo2: Foo<"hoge"> = { //制約の型に互換性があれば使える
    value: "hoge",
  }
  // const foo3: Foo<number> = { // stringではないのでエラー
  //   value: 1,
  // }
}

// ----------------------------------------------------------------------------

// 初期値とextendsを同時に使う
namespace Namespace5 {
  export type Foo<T extends string | number = string> = {
    value: T;
  }

  const foo: Foo = {
    value: "hoge"
  }
  const foo2: Foo<number> = {
    value: 1
  }
}

export {}
