// let payment=[1000,2000,3000];
// let living_cost=54000;

// test case2.........

let payment=[1000,2000,2500];
let living_cost=5000;
// let payment=[900,2700,3400];
// let living_cost=10000;

let s=(payment,living_cost)=>{
    if(typeof payment=="object"){

        let saving;
        let sum=0;
        for (let i = 0; i < payment.length; i++) {
            let e = payment[i];
            if(e>=3000){
                e=e-(e*(20/100));
            }
            sum+=e;
    
        
        }
        saving=sum-living_cost;
        if(living_cost>sum){
            return "Earn More";
        }
        else if(saving>=0){
            return saving;
        }


        
        
    }
    else{
        return "Invalid Input";

    }


}


console.log(s(payment,living_cost));




