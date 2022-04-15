// 【TypeScript入門 #15】インデックスシグネチャとMapped Typesって似てるけどどう違うの？

// IndexSignsture
// オブジェクトのプロパティを動的に追加したいときに使う
// 型がもろくなるので多用は控えたほうがいい
export type User = {
  name: string,
  [key: string]: string,
};
const user: User = {
  name: "名前",
  acccount: "アカウント",
  job: "ジョブ",
};

// 違う型のプロパティがあると使えない
export type User2 = {
  name: string,
  [key: string]: string,
  //age: number, エラーになる
};

// 複数の型を動的に使できるようにする方法
export type User3 = {
  name: string,
  [key: string]: string | number | undefined,
}

// 宣言していない型を呼び出せてしまう
// 宣言してあるものを呼び出しても型が絞られていない
const user3: User3 = {
  name: "名前",
  acccount: "アカウント",
  job: "ジョブ",
  age: 24,
};
user3.firstName; // string | number | undefined
user3.account;   // string | number | undefined

// ----------------------------------------------------------------------

// MappedTypes
// オブジェクトのプロパティ名を限定するときに使う
// ジェネリクスと組み合わせて便利な方を作り出すときに使う(今回は紹介しない)
type User4 = {
  name: string;
} & PersonalData

type PersonalData = {
  // height: number;
  // weight: number;
  [K in "height" | "weight"]: number;
};

const user4: User4 = {
  name: "名前",
  height: 165,
  weight: 55,
};

// 他の型を参照してプロパティ名を決められる
type User5 = {
  name: string;
} & PersonalData5;

type foo5 = {
  height: number;
  weight: number;
};

type PersonalData5 = {
  [K in keyof foo5]: number;
};

const user5: User5 = {
  name: "名前",
  height: 165,
  weight: 60,
};

// オプショナルを全体に一括指定できる
type User6 = {
  name: string;
} & PersonalData6;

type PersonalData6 = {
  [K in "height"| "weight"]?: number | string;
};

const use6: User6 = {
  name: "名前",
  height: 165,
  // weight: 55, weightがなくてもエラーにならない
};

// MappedTypes使用例
type User7 = {
  name: string;
} & OptionalPersonData7;

type PersonalData7 = {
  height: number;
  weight: number;
  realName: string;
};

type OptionalPersonData7 = {
  [K in keyof PersonalData7]?: PersonalData7[K]
};

const user7: User7 = {
  name: "名前",
  realName: "本名"
};

// オプショナルだったプロパティを必須にする
type User8 = {
  name: string;
} & RequiredpersonalData;

type PersonalData8 = {
  height?: number;
  weight?: number;
  realName?: string;
};

type RequiredpersonalData = {
  [K in keyof PersonalData8]-?: PersonalData8[K];
};

const user8: User8 = {
  name: "名前",
  height: 155,
  weight: 55,
  realName: "本名",
}
