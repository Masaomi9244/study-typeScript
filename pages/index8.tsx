// 【TypeScript入門 #8】

// IntersectionTypes(交差型)
// 複数の型を1つにまとめることができるもの
// 型が長くなりすぎてしまうときに使う
namespace Namespace1 {
  type Foo = {
    a: number;
    b: string;
  }

  type Bar = {
    c: boolean;
  }

  type FooBar = Foo & Bar;
  const Test: FooBar = {
    a: 1,
    b: "2",
    c: true
  }
}

// ----------------------------------------------------------------------------

// Union Types（共用体型・合併型）
// 複数の型があった場合、どれか一つの型が成立したらエラーにならない
namespace Namespace2 {
  type Foo = {
    a: number;
    b: string;
  }

  type Bar = {
    c: boolean;
  }

  type FooBar2 = Foo | Bar;
  const Test2: FooBar2 = {
    c: false,
  }  
}

// ----------------------------------------------------------------------------

// IntersectionTypesはプリミティブ型でやるとnever型になってしまうので意味がない。
namespace namespace3 {
  type Hoge = string;
  type Hoge2 = number;
  type HogeHoge2 = Hoge & Hoge2; // never
}
