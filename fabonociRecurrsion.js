
function Fab(val){
    
  if(val>=3){
      return Fab(val-1)+Fab(val-2)
  }else{
      return 1;
  }
    
}

console.log(Fab(4))