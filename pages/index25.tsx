//【TypeScript入門 #25】
// declare moduleを使って型定義を拡張しよう（モジュール拡張・アンビエントモジュール）

import foo from "foo";

// declare moduleの構文・挙動
namespace Namespace1 {
  // global25.d.tsで下記を定義している
  // declare module "foo" {
  //  const bar: number;
  // }
  foo.bar;
}
