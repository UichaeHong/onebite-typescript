import { type } from "os";

let user1: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "홍의채",
  nickname: "펩",
  birth: "1900.01.01",
  bio: "안녕하세요",
  location: "부천시",
};

// 타입 별칭 = 변수

type User = {
  // 타입 만들기
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user2: User = {
  id: 1,
  name: "홍의채",
  nickname: "펩",
  birth: "1900.01.01",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
// 규칙적이고 반복적인 코드의 타입을 일일이 타이핑 하지 않는 법

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: "ko",
  unitedState: "us",
  unitedKingdom: "uk",
};
