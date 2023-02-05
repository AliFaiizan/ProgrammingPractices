// Math.range = function range(start, end) {
//   var ans = [];
//   for (let i = start; i <= end; i++) {
//     ans.push(i);
//   }
//   return ans;
// };
function IsValidSubPart(str){
      return parseInt(str)<255
}
function VaildIpAddress(str) {
  ipAddressFound = [];
  for (i=0;i<str.length;i++)
  {
    let currentIpAddress=["","","",""]
    currentIpAddress[0]=str.slice(0,i)
    
    if(!IsValidSubPart(currentIpAddress[0]))
    continue

    
    for(j=i+1;j<str.length;j++){
        currentIpAddress[1]=str.slice(i,j) 
        if(!IsValidSubPart(currentIpAddress[1]))
        continue
        
        for (k=j+1;k<str.length;k++)
         {
          currentIpAddress[2] = str.slice(j, k);
          currentIpAddress[3] = str.slice(k);

          if (
            IsValidSubPart(currentIpAddress[2]) &&
            IsValidSubPart(currentIpAddress[3])
          ) {
            ipAddressFound.push(currentIpAddress.join('.'))
          } else continue;
        }
    }
  }
  return ipAddressFound
}

console.log(VaildIpAddress("1921680"))
