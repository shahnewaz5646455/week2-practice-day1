var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let big_name=friends[0];
for(let i=0;i<friends.length;i++){
    if(friends[i].length>big_name.length){
        big_name=friends[i];
    }

}
console.log(big_name);