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
