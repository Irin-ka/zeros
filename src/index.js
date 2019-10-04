module.exports = function copmlex(expression){
  let arr = expression.split('*');
  let count = 0;
  let count1=0;
  let count2=0;
  console.log(expression);
  for ( let i=0; i<=arr.length; i++){
    //console.log(arr[i]);
   if (arr[i]){
     let v = arr[i].split("!")[0];
     if( arr[i].indexOf("!!") >-1){
       //if(arr[i]%2 != 0)
     let c=zeros2(v);
     //if(c!=1){
     if(v>=5 && v%2==1)count2++;
     if(v>5 && v.indexOf('5')>-1)count2++;
     if(v>10 && v%10==0&& expression.indexOf('5!!')>-1)count2++;
     //}else{
       count+=c;//}
   } else {
     count+=zeros1(v);
    }
    
   //console.log(arr[i].split("!")[0]);
  }
  }
  count+=count2;
  console.log(count+','+count2);
    return count;
  function zeros1(N) {
    var y = 0;
    var j = 5;
    while (N >= j ){
     y+= Math.floor(N/j);
     j*=5;
    }  
    console.log('zeros1 '+N+','+y);
    return y;
  }
  function zeros2(N) {
    var y = 0;
    var j = 10;
    while (N >= j ){
     y+= Math.floor(N/j);
     j*=10;
    }
    console.log('zeros2 '+N+','+y);
 return y;
}
 }

