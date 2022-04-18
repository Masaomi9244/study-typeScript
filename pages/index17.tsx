// 【TypeScript入門 #17】ユーザー定義の型ガード（Type Guard）で非同期レスポンスやfilter関数も型安全にしよう

// ユーザ定義の型ガードがなぜ必要か
// anyなどの型を絞り込むため
// 前回の口座での型ガードだと絞り込めていない
type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };
export const foo = (value: any) => {
  if (value.lang === "ja") {
    return value; // any
  }
  return value; // any
};

// 構文
type UserC = { name: string; lang: "ja" };
type UserD = { name: string; lang: "en" };
const isUserC = (user: UserC | UserD): user is UserC => {
  return user.lang === "ja";
};
const isUserD = (user: UserC | UserD): user is UserD => {
  return user.lang === "en";
};
export const foo2 = (value: any) => {
  if (isUserC(value)) {
    return value; // UserC
  }
  if (isUserD(value)) {
    return value; // UserD
  }
  return value; // any
};

// 非同期処理をユーザ定義で型ガード
// 外部のAPIをたたいた時のレスポンスに片を付けたいときに使う
type UserE = { name:string; lang: "ja" };
type UserF = { name:string; lang: "en" };
const isUserE = (user: UserE | UserF): user is UserE => {
  return user.lang === "ja"
};
export const foo3 = async () => {
  const res = await fetch("");
  const json = await res.json();
  if (isUserE(json)) {
    return json.lang; // UserE
  }
  return json; // any
};

// filter関数での型ガード
type UserG = { name:string; lang: "ja" };
type UserH = { name:string; lang: "en" };
const users: (UserG | UserH)[] = [
  { name: "たなか", lang: "ja" },
  { name: "やまだ", lang: "ja" },
  { name: "ジョニー", lang: "en" },
];
const isUserH = (user: UserG | UserH): user is UserH => {
  return user.lang === "en"
};
// 普通にfilterを使うと型までは絞り込めていない
const japanese = users.filter((user) => user.lang === "ja");
const notJapanese = users.filter(isUserH);
const hoge = japanese; // (UserG | UserH)[]
const hoge2 = notJapanese; // userH[]
