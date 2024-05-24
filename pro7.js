let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let n=numbers.length;
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if (numbers[i]==numbers[j]) {
            for (let k = j; k < n; k++) {
                numbers[k]=numbers[k+1];
                
            }
            
        }
    }
    
}
let r=[];
for (let i = 0; i < numbers.length; i++) {
    const e = numbers[i];
    if(e!=null){
        r.push(e);
    }
    
}

console.log(...r);



