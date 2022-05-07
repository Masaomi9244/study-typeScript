// 【TypeScript入門 #14】
// ダウンキャストやアップキャストとは？またよく使われるas constとは？

// ダウンキャスト
// 型推論で導かれた方が抽象的すぎる場合に、プログラマー側でより型を詳しくすること
// 何かしらの定数ファイルを作る時によく使われる
namespace Namespace1 {
  const color = "red" // red
  const foo = {
    color: "red", // string
  }

  const foo2 = {
    color: "red" as "red", // red
  }
}

//-------------------------------------------------------------------------------

// ConstAssertionという書き方
namespace Namespace2 {
  const foo = {
    color: "red" as const, // red 
  }  
}

//-------------------------------------------------------------------------------

// オブジェクト内のプロパティすべてを指定できる
namespace Namespace3 {
  const foo = {
    color: "red", // red
    backgroundColor: "blue" // blue
  } as const;  
}

//-------------------------------------------------------------------------------

// Wideningも防げる
namespace Namespace4 {
  const hoge = "hoge"
  let x = hoge; // string
  const hoge2 = "hoge2" as const
  let y = hoge2; // hoge2
}

//-------------------------------------------------------------------------------

// ダウンキャストの実際の使用例（定数ファイル）
namespace Namespace5 {
  const PATH = {
    INDEX: '/',
    LOGIN: '/login',
    REGISTER: 'register',
    PROFILE: '/profile',
  } as const;  
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// アップキャスト
// 型を抽象的にすること
// あまり使うべきではない
// 型を自分の力で解決できないときにしかたなく使う

// Non-null assertion
namespace Namespace6 {
  function getFirstLetter(str?: string) {
    return str!.charAt(0);
  }  
}

// ---------------------------------------------------------------------

// Double assertion
namespace Namespace7 {
  function getFirstLetter(str: number) {
    return (str as unknown as string).charAt(0);
  }
}

export{}
