{
    var count_1 = 0;
    function updateDisplay() {
        var countElement = document.getElementById('countValue');
        if (countElement) {
            // 숫자자료형.toStirng();
            // : 문자로 변환 메서드
            countElement.textContent = count_1.toString();
        }
    }
    function increament() {
        count_1++;
        updateDisplay();
    }
    function decreament() {
        count_1--;
        updateDisplay();
    }
    document.addEventListener('DOMContentLoaded', function () {
        var increamentButton = document.getElementById('increamentButton');
        var decreamentButton = document.getElementById('decreamentButton');
        if (increamentButton)
            increamentButton.addEventListener('click', increament);
        if (decreamentButton)
            decreamentButton.addEventListener('click', increament);
    });
}
