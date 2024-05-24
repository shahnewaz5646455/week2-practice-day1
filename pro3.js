let a=[6,8,9,1,3,2,4,5,7,3,20,19,18,17,15,16,13,14,12,11];
let n=a.length;
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(a[i]>a[j]){
            let tmp=a[i];
            a[i]=a[j];
            a[j]=tmp;
        }
    
    }
}

console.log(a);