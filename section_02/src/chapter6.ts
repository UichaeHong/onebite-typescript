// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;

// unKnown
// 값이 확실하지 않을 때는 any타입보단 조금 더 안전한 unKnown타입 사용하는 것을 추천
// 아무거나 다 받아 런타임에러를 발생시키는 any타입보단 낫다!
let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};
