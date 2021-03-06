import type { NextPage } from 'next';
// オブジェクトには２種類ある
// プリミティブ型(Any,string, boolean, number, void, never, undefind)以外のオブジェクト
// 辞書型としてのオブジェクト {}のこと

let obj1: {} = {};// nullとundefind以外受け取れてしまう　非推奨
let obj2: object = {}; //非プリミティブ型のみ受け取れる　非推奨

//　Recordは標準ライブラリ
let obj3: Record<string, unknown> = {
  a: 1,
  b: "foo",
};

// 特定のプロパティが存在する場合に書きやすい
let obj4: { a: number; b: string; foo?: string } = {
  a: 1,
  b: "foo",
  // foo: "foo",
};

// [key: string]インデックスシグネチャーと呼ぶ
let obj5: { [key: string]: {foo: number} } = {
  a: {
    foo: 1,
  },
  b: {
    foo:2,
  }
};
