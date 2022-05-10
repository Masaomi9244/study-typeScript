//【TypeScript入門 #17】
// ユーザー定義の型ガード（Type Guard）で非同期レスポンスやfilter関数も型安全にしよう

// ユーザ定義の型ガードがなぜ必要か
// anyなどの型を絞り込むため
namespace Namespace1 {
  type UserA = { name: string; lang: "ja" };
  type UserB = { name: string; lang: "en" };

  const foo = (value: any) => {
    if (value.lang === "ja") {
      return value; // any
    }
    return value; // any
  }
}

// ----------------------------------------------------------------------------

// ユーザ定義の型ガード 構文
namespace Namespace1 {
  type UserA = { name: string; lang: "ja" };
  type UserB = { name: string; lang: "en" };

  const isUserA = (user: UserA | UserB):user is UserA => {
    return user.lang === "ja";
  }
  const isUserB = (user: UserA | UserB): user is UserB => {
    return user.lang === "en";
  }
  export const foo = (value: any) => {
    if (isUserA(value)) {
      return value; // UserA
    }
    if (isUserB(value)) {
      return value; // UserB
    }
    return value; // any
  }
}

// ----------------------------------------------------------------------------

// 非同期処理をユーザ定義で型ガード
// 外部のAPIをたたいた時のレスポンスに片を付けたいときに使う
namespace Namespace1 {
  type UserA = { name:string; lang: "ja" };
  type UserB = { name:string; lang: "en" };

  const isUserA = (user: UserA | UserB): user is UserA => {
    return user.lang === "ja"
  }

  const foo = async () => {
    const res = await fetch("");
    const json = await res.json();
    if (isUserA(json)) {
      return json.lang; // UserA
    }
    return json; // any
  }
}

// ----------------------------------------------------------------------------

// filter関数での型ガード
namespace Namespace3 {
  type UserA = { name:string; lang: "ja" };
  type UserB = { name:string; lang: "en" };

  const users: (UserA | UserB)[] = [
    { name: "たなか", lang: "ja" },
    { name: "やまだ", lang: "ja" },
    { name: "ジョン", lang: "en" },
  ];

  const isUserB = (user: UserA | UserB): user is UserB => {
    return user.lang === "en"
  }

  // 普通にfilterを使うと型までは絞り込めていない
  const japanese = users.filter((user) => user.lang === "ja");
  const notJapanese = users.filter(isUserB);
  const hoge = japanese; // (UserA | UserB)[]
  const hoge2 = notJapanese; // userB[]
}

export {}
