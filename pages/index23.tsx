// 【TypeScript入門 #23】Utility Typesの外部パッケージ版「type-fest」を使うと超便利！

// 第一型引数と第二型引数から互換性のある型だけを残して新しい型を生成するもの Extract
type Foo1 = Extract<string | number, string>; // string
type Foo2 = Extract<"hoge" | number, string>; // hoge
type Foo3 = Extract<"hoge" | 0, string | number>; // number | 0 
type Foo4 = Extract<"hoge" | number, boolean>; //never

