
   
   
function demo(){
    var arr=["123","55","253","789"];
    var arr2=["45","78","111","55","253","45"];
    arr=arr.concat(arr2);
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr.join("<")); // 45<55<78<111<123<253<789
}
