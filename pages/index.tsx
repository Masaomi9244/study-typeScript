import type { NextPage } from 'next';

// 配列
const foo0: number[] = [1, 2, 3]; // ５行目と同じだがこっちのほうが使用される
const foo2: Array<number> = [1, 2,3];
const foo3: (number | string)[] = [1, "2", 3]; // 配列に2種類の型を入れたいとき 

// Tuple型
// 一つ一つの要素に対して型をつけることができ、かつ要素の数が決まっている
// 配列を使うときはなるべくTuple型を使う
const foo4: [string, number] = ["foo", 1];
foo4[0].substring; //.まで打つと型に合わせて補完が効く
foo4[1].toFixed;

// Any
// 型が不明な時に、型チェックを無効にしてコンパイルを無理やり通すときに使う
// 型の恩恵を受けられないのでなるべく使わない
const foo5: any = [1, "string", true, [1, 2, 3]];

// Unknown
// 型は不明だけど、型安全にしたいときに使う
const foo6: unknown = "hoge";
const foo7: any = "hoge";
// foo6.toFixed; エラーになる 
// foo7.toFixed;　エラーにならない
// foo6.substring(2); エラーになる 
// 26行目の解決策
if (typeof foo6 === "string") {
  foo6.substring(2);
}

// void
//　関数の返り値が何もないときに使われる
function foo8(): void {
  alert("hello");
  // return エラーにならない
  // return undefined; エラーにならない
}
const foo9:() => void = () => {
  alert("hello");
}

// never型
// 発生し得ない値の型に付与される
function foo10(): never {
  throw new Error("foo");
}


const Home: NextPage = () => {
  return <div>test</div>
};

export default Home
