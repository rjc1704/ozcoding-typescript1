type StringMap = {
  [key: string]: string;
};

const example1: StringMap = {}; // 빈 객체, 유효함
const example2: StringMap = { key1: "value1", key2: "value2" }; // 여러 개의 키-값 쌍, 유효함

console.log(example1); // 출력: {}
console.log(example2); // 출력: { key1: 'value1', key2: 'value2' }
