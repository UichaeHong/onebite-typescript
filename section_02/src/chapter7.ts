// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입 / 반환값이 없을 때 사용

function func1(): string {
  return "hello";
}

// return문을 사용하고 싶지 않는 함수의 반환값에는 void를 사용
function func2(): void {
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입 / 모순적인
// 반환할 수가 없거나 정상적으로 반환할 수 없을 때 사용

function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}

// never타입을 변수에 담으면 그 어떤 값도 담을 수 없음
let a: never;
a = 1;
a = {};
