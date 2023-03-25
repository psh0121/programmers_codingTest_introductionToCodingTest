// 몫 구하기

// 정수 num1, num2가 매개변수로 주어질 때, 
// num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    // 나머지와 상관없이 몫을 리턴해야 하기 때문에 소수점은 이하는 버린다.
    return Math.floor(num1 / num2);
}

console.log(solution(10, 5));    // 2
console.log(solution(7, 2));    // 3
