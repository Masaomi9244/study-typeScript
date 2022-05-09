//【TypeScript入門 #9】
// InterfaceとTypeAlias

// TypeAlias
// どんな型でも宣言できる
// 同じ名前で宣言があったときに自動的にマージされない
// プリミティブ型のプロパティをオーバーライドするとnever型になる
// MappedTypes（ほかの型をもとに新しい型を作るための方法）が使える
namespace Namespace1 {
  type Foo = {
    a: number;
  }

  const foo: Foo = {
    a: 1,
  }
}

// interfaceの継承と同じ役割をさせたい場合はIntersectionTypesを使う
namespace Namespace2 {
  type Foo = {
    a: number;
  }

  type Bar = Foo & {
    b: 2,
  }

  const baz: Bar = {
    a: 1,
    b: 2,
  }
}

// MappedTypes（ほかの型をもとに新しい型を作るための方法）
namespace Namespace3 {
  type Animals = "dog" | "cat";
  type AnimalsFoo = {
    [key in Animals]: number;
  }

  const foo: AnimalsFoo = {
    dog: 1,
    cat: 2,
  }
}

//-------------------------------------------------------------------------------

// Interface
// 辞書型としてのオブジェクト{}のみ宣言できる
// 同じ名前で宣言があったときに自動的にマージされる (open-endedに準拠しているともいう)
// プリミティブ型のプロパティをオーバーライドするとエラーになる
// MappedTypes（ほかの型をもとに新しい型を作るための方法）が使えない
namespace Namespace4 {
  interface Foo {
    a: number,
  }
  
  interface Foo {
    b: number,
  }
  
  const foo: Foo = {
    a: 1,
    b: 2,
  }

  // interfaceの継承
  interface Bar extends Foo {
    c: number,
  };
  const bar: Bar = {
    a: 1,
    b: 2,
    c: 3,
  };
}

//-------------------------------------------------------------------------------

// 結局どっちがおすすめ
// 結論: どちらかといえばTypeAilas
// 理由
// ①プリミティブ型や配列を扱える
// ②open-endedに準拠していないほうが、勝手にマージされないので安全
// ③MappedTypesを使える
