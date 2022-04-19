// 【TypeScript入門 #19】関数のGenerics（ジェネリクス）は難しいですが意外と使用頻度も多いので必ず攻略しましょう

// Genericsの関数
function foo<T>(arg: T) {
  return { value: arg} ;
};
const foo1 = foo<number[]>([1,2]);
const foo2 = foo<string>("hoge");
