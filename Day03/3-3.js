// 최빈값 구하기

// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
// 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
    let obj = {};
    let arr = [];
    
    // 가드코드 : array 개수 1개면 걍 리턴
    if(array.length === 1) return array[0];
    
    // 0. 요소값 : 개수 형태로 obj에 넣는다.
    for(let i = 0; i < array.length; i++){
        if(obj[array[i]] === undefined) obj[array[i]] = 1;
        else obj[array[i]]++;
    }
    
    // 1. [요소값, 개수] 형태로 재정의 한다.
    for(let key in obj){
        arr.push([key, obj[key]]);
    }
    
    // 1-1. arr 개수가 1개면  걍 리턴
    if(arr.length === 1) return array[0];
    
    // 2. 개수를 기반으로 내림차순한다.
    arr.sort((a, b) => {
        if(a[1] < b[1]) return 1;
        else return -1;
    })
    
    // 3. 최빈값의 중복 여부에 따라 값을 결정한다.
    return arr[0][1] === arr[1][1] ? -1 : Number(arr[0][0]);
    
}

console.log(solution([1, 2, 3, 3, 3, 4]));  // 3
console.log(solution([1, 1, 2, 2]));  // -1
console.log(solution([1])); // 1