{
  interface User {
    id: number;
    name: string;
    email: string;
  }

  // 모든 속성을 선택적(optional)으로 만들기
  type PartialUser = {
    [K in keyof User]?: User[K];
  };

  // 결과: { id?: number; name?: string; email?: string; }

  // 모든 속성을 문자열로 변경
  type StringifiedUser = {
    [K in keyof User]: string;
  };

  // interface User {
  //   readonly id: number;
  //   name?: string;
  //   email: string;
  // }

  // // 1. 모든 속성을 필수로 만들기 (-? 수식어)
  // type RequiredUser = {
  //   [K in keyof User]-?: User[K];
  // };
  // // 결과: { readonly id: number; name: string; email: string; }

  // // 2. 모든 속성을 선택적으로 만들기 (+? 수식어, +는 생략 가능)
  // type PartialUser = {
  //   [K in keyof User]+?: User[K];
  // };
  // // 결과: { readonly id?: number; name?: string; email?: string; }

  // // 3. readonly 제거 (-readonly 수식어)
  // type MutableUser = {
  //   -readonly [K in keyof User]: User[K];
  // };
  // // 결과: { id: number; name?: string; email: string; }

  // // 4. readonly 추가 (+readonly 수식어, +는 생략 가능)
  // type ReadonlyUser = {
  //   +readonly [K in keyof User]: User[K];
  // };
  // // 결과: { readonly id: number; readonly name?: string; readonly email: string; }

  // // 5. 조합: readonly 제거 + 모든 속성 필수
  // type MutableRequiredUser = {
  //   -readonly [K in keyof User]-?: User[K];
  // };
  // // 결과: { id: number; name: string; email: string; }
}
