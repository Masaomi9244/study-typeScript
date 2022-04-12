// 【TypeScript入門 #14】ダウンキャストやアップキャストとは？またよく使われるas constとは？

// ダウンキャストとアップキャストとは？
// どちらも型を変える行為を指す

// ダウンキャスト
// 型推論で導かれた方が抽象的すぎる場合に、プログラマー側で寄り方を詳しくすること
// 何かしらの定数ファイルを作る時によく使われる
export const color = "red" // red
const theme = {
  color: "red", // string
};
const theme2 = {
  color: "red" as "red", // red
};

// ConstAssertionという書き方
const theme3 = {
  color: "red" as const, // red 
};

// オブジェクト内のプロパティすべてを指定できる
const theme4 = {
  color: "red", // red
  backgroundColor: "blue" // blue
} as const; 

// Wideningも防げる
const hoge = "hoge"
let x = hoge; // string
const hoge2 = "hoge2" as const
let y = hoge2;

// 実際の使用例（定数ファイル）
const PATH = {
  INDEX: '/',
  LOGIN: '/login',
  REGISTER: 'register',
  PROFILE: '/profile',
} as const;

// ---------------------------------------------------------------------

// アップキャスト
// 型を抽象的にすること
// あまり使うべきではない
// 型を自分の力で解決できないときにしかたなく使う

// Non-null assertion
function getFirstLetter(str?: string) {
  return str!.charAt(0);
}

// Double assertion
function getFirstLetter2(str: number) {
  return (str as unknown as string).charAt(0);
}
