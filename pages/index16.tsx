// 【TypeScript入門 #16】型ガード（Type Guard）の色んな例を紹介！typeof、in演算子、タグ付きUnion Types

// 型ガードとは
// 型の絞り込みを行うこと

// if文を使った型ガード
export const foo = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value; // string
  }
  if (typeof value === "boolean") {
    return value; // boolean
  }
  return value; //number
};

// JSのメソッドや演算子を使った型ガード
export const foo2 = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value; // string[]
  }
  return value; // string
};

export const foo3 = (value?: string) => {
  if (!value) {
    return; // undefind
  }
  return value; // string
};

// in演算子を使った型ガード
type UserA = {name: string};
type UserB = {name: string; nickName: string};

export const foo4 = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value;
  }
  return value;
};

// タグ付きUnionTypes
type UserC = {name: string; lang: "ja"};
type UserD = {name: string; lang: "en"};

export const foo5 = (value: UserC | UserD)  => {
  if (value.lang === "ja") {
    return value; // UserC
  }
  return value; // UserD
}
