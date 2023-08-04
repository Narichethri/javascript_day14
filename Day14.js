function lookAndSay(start, n) {
    const numString = start.toString();
    let numArray = numString.split('').map(Number);
    FinalArray=[start,]
    while (n>1) {
        newArray=[]
        let count=1;        
        for (let i = 1; i <=numArray.length; i++) {
            if (numArray[i]==numArray[i-1]){
                count++;
            }
            else{
                newArray.push([count,numArray[i-1]]);
                count=1
            }
        }
        numArray=JSON.parse(JSON.stringify(newArray)).flat();
        n--;
        newArray=[...numArray];
        var number = parseInt(newArray.join(''));
        FinalArray.push(number);

        
    }
    console.log(FinalArray)
}
lookAndSay(1, 7)
