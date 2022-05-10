// TypeScript入門 #16】
// 型ガード（Type Guard）の色んな例を紹介！typeof、in演算子、タグ付きUnion Types

// 型ガードとは
// 型の絞り込みを行うこと

// if文を使った型ガード
namespace Namespace1 {
  const foo = (value: string | number | boolean) => {
    if (typeof value === "string") {
      return value; // string
    }
    if (typeof value === "boolean") {
      return value; // boolean
    }
    return value; //number
  }
}

// ----------------------------------------------------------------------------

// JSのメソッドを使った型ガード
namespace Namespace2 {
  const foo = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value; // string[]
    }
    return value; // string
  }
}

// ----------------------------------------------------------------------------

// 演算子を使った型ガード
namespace Namespace3 {
  export const foo = (value?: string) => {
    if (!value) {
      return; // undefined
    }
    return value; // string
  }
}

// ----------------------------------------------------------------------------

// in演算子を使った型ガード
namespace Namespace4 {
  type UserA = {name: string};
  type UserB = {name: string; nickName: string};

  const foo = (value: UserA | UserB) => {
    if ("nickName" in value) {
      return value;
    }
    return value;
  }
}

// ----------------------------------------------------------------------------

// タグ付きUnionTypesを型ガード
namespace Namespace6 {
  type UserA = {name: string; lang: "ja"};
  type UserB = {name: string; lang: "en"};

  const foo = (value: UserA | UserB)  => {
    if (value.lang === "ja") {
      return value; // UserA
    }
    return value; // UserB
  }
}

// ----------------------------------------------------------------------------

// switchでの型ガード
namespace Namespace6 {
  type UserA = {name: string; lang: "ja"};
  type UserB = {name: string; lang: "en"};
  type UserC = {name: string; lang: "fr"};

  const foo = (value: UserA | UserB | UserC) => {
    switch(value.lang) {
      case "ja": {
        return value; // UserA
      }
      case "en": {
        return value; // UserB
      }
      case "fr": {
        return value; // UserC
      }
      default: {
        throw Error("lang is not defined");
        return value; // never
      }
    }
  }
}

export {}
