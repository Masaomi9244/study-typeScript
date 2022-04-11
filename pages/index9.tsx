import type { NextPage } from 'next';
// 【TypeScript入門 #9】InterfaceとTypeAilas

// Typeailas
// どんな型でも宣言できる
//　同じ名前で宣言があったときに自動的にマージされない
// プリミティブ型のプロパティをオーバーライドするとnever型になる
// MappedTypes（ほかの型をもとに新しい型を作るための方法）が使える
type TypeAliasFoo = {
    a: number;
};
const tFoo: TypeAliasFoo = {
    a: 1,
};

// interfaceの継承と同じ役割をさせたい場合はIntersectionTypesを使う
type TypeAliasFoo2 = TypeAliasFoo & {
    b: 2,
};
const  tFoo2: TypeAliasFoo2 = {
    a: 1,
    b: 2,
} ;

// MappedTypes（ほかの型をもとに新しい型を作るための方法）
type Animals = "dog" | "cat";
type AnimalsFoo = {
    [key in Animals]: number;
};
const afoo: AnimalsFoo = {
    dog: 1,
    cat: 2,
};

//-------------------------------------------------------------------------------

// Interface
// 辞書型としてのオブジェクト{}のみ宣言できる
// 同じ名前で宣言があったときに自動的にマージされる (open-endedに準拠しているともいう)
// プリミティブ型のプロパティをオーバーライドするとエラーになる
// MappedTypes（ほかの型をもとに新しい型を作るための方法）が使えない
interface InterfaceFoo {
    a: number,
};
interface InterfaceFoo {
    b: number,
};
const iFoo: InterfaceFoo = {
    a: 1,
    b: 2,
};

// interfaceの継承
interface InterfaceFoo2 extends InterfaceFoo {
    c: number,
};
const iFoo2:InterfaceFoo2 = {
    a: 1,
    b: 2,
    c: 3,
};

//-------------------------------------------------------------------------------

// 結局どっちがおすすめ
// 結論: どちらかといえばTypeAilas
// 理由
// ①プリミティブ型や配列を扱える
// ②open-endedに準拠していないほうが、勝手にマージされないので安全
// ③MappedTypesを使える
