//【TypeScript入門 #15】
// インデックスシグネチャとMapped Typesって似てるけどどう違うの？

// IndexSignature
// オブジェクトのプロパティを動的に追加したいときに使う
// 型がもろくなるので多用は控えたほうがいい
namespace Namespace1 {
  type User = {
    name: string,
    [key: string]: string,
  }
  const user: User = {
    name: "名前",
    account: "アカウント",
    job: "ジョブ",
  }
}

// 違う型のプロパティがあると使えない
namespace Namespace2 {
  type User = {
    name: string,
    [key: string]: string,
    // age: number, エラーになる
  }
}

// 複数の型を動的に使できるようにする方法
// 宣言していない型を呼び出せてしまう
// 宣言してあるものを呼び出しても型が絞られていない
namespace Namespace3 {
  type User = {
    name: string,
    [key: string]: string | number | undefined,
  }

  const user: User = {
    name: "名前",
    middleName: "ミドルネーム",
    age: 24,
    job: undefined,
  }
  user.myName; // string | number | undefined
  user.job;    // string | number | undefined
}

// ----------------------------------------------------------------------

// MappedTypes
// オブジェクトのプロパティ名を限定するときに使う
// ジェネリクスと組み合わせて便利な方を作り出すときに使う
namespace Namespace5 {
  type User = {
    name: string;
  } & PersonalData

  type PersonalData = {
    // height: number;
    // weight: number;
    [K in "height" | "weight"]: number;
  }

  const user: User = {
    name: "名前",
    height: 165,
    weight: 55,
  }
}


// 他の型を参照してプロパティ名を決められる
namespace Namespace6 {
  type User = {
    name: string;
  } & PersonalData

  type foo = {
    height: number;
    weight: number;
  }

  type PersonalData = {
    [K in keyof foo]: number;
  }

  const user: User = {
    name: "名前",
    height: 165,
    weight: 60,
  }
}

// オプショナルを全体に一括指定できる
namespace Namespace7 {
  type User = {
    name: string;
  } & PersonalData

  type PersonalData = {
    [K in "height" | "weight"]?: number | string;
  }

  const user: User = {
    name: "名前",
    height: 165,
    // weight: 55, weightがなくてもエラーにならない
  }
}

// MappedTypes使用例
namespace Namespace8 {
  type User = {
    name: string;
  } & OptionalPersonData

  type PersonalData = {
    height: number;
    weight: number;
    realName: string;
  }

  type OptionalPersonData = {
    [K in keyof PersonalData]?: PersonalData[K]
  }

  const user: User = {
    name: "名前",
    realName: "本名"
  }
}

// オプショナルだったプロパティを必須にする
namespace Namespace9 {
  type User = {
    name: string;
  } & RequiredPersonalData;

  type PersonalData = {
    height?: number;
    weight?: number;
    realName?: string;
  }

  type RequiredPersonalData = {
    [K in keyof PersonalData]-?: PersonalData[K];
  }

  const user: User = {
    name: "名前",
    height: 155,
    weight: 55,
    realName: "本名",
  }
}

export {}
