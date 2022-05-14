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
namespace Namespace2 {
  function foo<T>(arg: T) {
    return { value: arg} ;
  };
  const foo2 = foo("");
  const foo3 = foo(1);
  const foo4 = foo([false]);
  const foo5 = foo<string | null>("");
}

// extendsによる制約について
// ある程度型を予測するために使う
namespace Namespace3 {
  function foo<T extends string | number>(arg: T) {
    if (typeof arg === "string") {
      return { value: arg.toUpperCase() };
    }
    return { value: arg.toString() };
  }
}

export {}
