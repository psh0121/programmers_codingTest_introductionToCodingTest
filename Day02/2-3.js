// 분수의 덧셈

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
// 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 
// return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
    let finNumer = (numer1 * denom2) + (numer2 * denom1);   // 분자
    let finDenom = denom1 * denom2; // 분모
    
    let minNum;
    let torf;
    
    // 분자와 분모중 작은 수를 파악한 뒤에 약분하는 과정을 거친다.
    while(true){
        minNum = Math.min(finNumer, finDenom);
        torf = false;
        
        for(let i = 2; i <= minNum; i++){
            if((finNumer % i === 0) && (finDenom % i === 0)){
                finNumer = finNumer / i;
                finDenom = finDenom / i;
                
                torf = true;
                break;
            }
        }
        
        // 약분하는 과정을 거쳤는지 파악해서 반복문을 벗어날지에 대해 결정한다.
        if(torf === true){
            continue;
        }
        else{
            break;
        }
    }
    
    return [finNumer, finDenom];
}

console.log(solution(1, 2, 3, 4));    // [5, 4]
console.log(solution(9, 2, 1, 3));    // [29, 6]