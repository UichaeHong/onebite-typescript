// object , 객체 리터럴타입
let user: { id: number; name: string } = {
  id: 1,
  name: "홍의채",
};
user.id;

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "brown",
};

// 바꾸면 안되는 값 읽기 전용으로 설정하기 ( readonly) = 값을 바꾸는 행위를 막아줌
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacking"
