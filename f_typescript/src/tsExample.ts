{
  let count: number = 0;

  function updateDisplay() {
    const countElement = document.getElementById('countValue');

    if(countElement) {
      // 숫자자료형.toStirng();
      // : 문자로 변환 메서드
      countElement.textContent = count.toString();
    }
  }

  function increament() {
    count++;
    updateDisplay();
  }

  function decreament() {
    count--;
    updateDisplay();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const increamentButton = document.getElementById('increamentButton');
    const decreamentButton = document.getElementById('decreamentButton');

    if(increamentButton) increamentButton.addEventListener('click', increament);
    if(decreamentButton) decreamentButton.addEventListener('click', increament);
  });
}