"use strict";
// let num: number = 10;
// 블록 범위 변수 'num'을(를) 다시 선언할 수 없습니다.ts(2451)
// helloworld.ts(3, 5): 여기서도 'num'이(가) 선언되었습니다.
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
// ! TS의 스코프
// : TS는 파일 단위의 스코프(범위, 영역)가 생성되지 X
// - node_modules가 존재하는 프로젝트 최상단(전체) 범위의 스코프가 전역 스코프로 생성
// ? 스코프 생성 방법
// 1. 중괄호 사용법: 직관적인 스코프 새엇ㅇ
{
    var num_1 = 10;
}
{
    var num_2 = 10;
}
// 2. export 키워드 사용법
// : export 키워드 사용 시 ts 파일이 자동 모듈로 인식
// - 외부의 전역 스코프와의 충돌을 방지
exports.tmp = ''; // tmp: temporary(일시적인, 임시의)
var num = 10;
console.log(num);
