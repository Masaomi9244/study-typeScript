// モジュールでない（inport,exportがない）アンビエントコンテキストでの宣言は、Windowオブジェクトの直下に定義される
// Window直下にあるNodeJSにマージされる
declare namespace NodeJS {
  interface ProcessEnv {
    readonly FOO: string;
    readonly BAR: number;
  }
}
