document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("lookup").addEventListener("click",buttonAction);
    document.getElementById("cities").addEventListener("click",buttonAction);
    
});
    
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("lookup").addEventListener("click",buttonAction);
    document.getElementById("cities").addEventListener("click",buttonAction);
    
});
    
var httpRequest;
function buttonAction(event){
       event.preventDefault();
       httpRequest = new XMLHttpRequest();
       var searchContext;
       if (this.id=="lookup"){//dont know if this will work
           searchContext="country";
       }else{
           searchContext="cities";
       }
       var cVal=document.getElementById("country").value;
       var web ="world.php?country="+ cVal +"&context="+searchContext;
       httpRequest.onreadystatechange = fetchData;
       httpRequest.open('GET',web,true);
       httpRequest.send();
}
    
function fetchData(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            document.getElementById('result').innerHTML= httpRequest.responseText;
   }else {
     alert('There was a problem with the request.');
}}}