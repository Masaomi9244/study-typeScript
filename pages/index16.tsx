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
