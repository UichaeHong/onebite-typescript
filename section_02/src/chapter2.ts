// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "안녕", "이름"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법으로도 배열 타입을 정의할 수 있음

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법 = ( ex. 배열 안에 배열, 배열 안에 배열 안에 배열 같은 중복되는 배열 )
let doubleArr: number[][] = [
  // 타입 정의할 때 이차원 배열이면 number 옆에 배열 두개, 삼차원이면 세개
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 자바스크립트에는 없고 타입스크립트에서만 존재
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3] // x

const users: [string, number][] = [
  ["김", 1],
  ["이", 2],
  ["박", 3],
  ["최", 4],
];
