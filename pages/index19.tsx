//【TypeScript入門 #19】
// 関数のGenerics（ジェネリクス）は難しいですが意外と使用頻度も多いので必ず攻略しましょう

// Genericsの関数
namespace Namespace1 {
  function foo<T>(arg: T) {
    return { value: arg }
  }
  const foo1 = foo<number[]>([1,2]);
  const foo2 = foo<string>("hoge");

  console.log(foo1);
  console.log(foo2);
}

// 暗黙的な型解決について
// 引数にnullが入る可能性があるなら型を明示的に書く
function foo3<T>(arg: T) {
  return { value: arg} ;
};
const foo4 = foo3("");
const foo5 = foo3(1);
const foo6 = foo3([false]);
const foo7 = foo3<string | null>("");

// extendsによる制約について
// ある程度型を予測するために使う
function foo8<T extends string | number>(arg: T) {
  if (typeof arg === "string") {
    return { value: arg.toUpperCase() };
  };
  return { value: arg.toString() };
};

export {}
