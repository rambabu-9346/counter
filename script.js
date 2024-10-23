var a=document.getElementById('num')
var b=document.getElementById('cou')
     var c=0
 function add(){
    
   if(c<20){
    c++;
    if(c%2==0){
        b.textContent='even'
    a.textContent=c;}
    else{
    b.textContent='odd'
    a.textContent=c;
    }
   }
   else
   alert('we canot increase 20 above')
    

 }
 function sub(){
    if (c>0){
        c--;
    if(c%2==0){
        b.textContent='even'
      a.textContent=c;
    }
    else{
    b.textContent='odd'
    a.textContent=c;
    }
}
else
alert('we canot decrease 0 blow')
 }
 function reset(){
    c=0;
    a.textContent=c;
 }
 function changecolor(){
    const val="#"+Math.round(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=val;
 }



