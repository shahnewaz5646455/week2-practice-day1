let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let big_num=numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>big_num) {
        big_num=numbers[i];
        
    }
    
}
console.log(big_num);