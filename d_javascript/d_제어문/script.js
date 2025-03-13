// 구구단 출력기
// : 사용자로부터 정수값을 입력받으면 해당 값의 구구단을 출력

while (true) {
  // ! 구구단 출력
  // 사용자로부터 1 ~ 9까지의 숫자 입력 받기
  const input = prompt('출력할 구구단의 숫자를 입력하세요 "exit"를 입력하시면 종료됩니다.')

  if (input.toLowerCase() == 'exit') {
    console.log('프로그램을 종료합니다');
    break;
  }

  // 입력받은 데이터 값을 숫자 자료형으로 변환(Number())
  const number = Number(input);

  // 입력 숫자값이 1 ~ 9사이일 경우 구구단 출력
  // , 그외의 숫자값 또는 숫자로 변환할 수 없는 데이터일 경우 재입력
  if (number >= 1 && nuber <= 9) {
    // 구구단 출력
    console.log('=== $(number)단 ===');
    for (let i = 1; i <= 9; i++) {
      console.log('${Number} X ${i} = ${number * i}');
    }
  } else {
    console.log('1 ~ 9 사이의 숫자를 입력해주세요');
  }
}