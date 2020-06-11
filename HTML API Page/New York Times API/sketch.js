let searchbox;
let api;
let results;
function preload(){
    api = loadJSON('package.json');
}
function setup(){
    searchbox = document.getElementById('searchbox');
}
function draw(){

}
function keyPressed(){
    if(keyCode==13){
   results = loadJSON(api.search_url+searchbox.value+api.api_key,searchnyt);
   searchbox.value = '';
    }
}
function searchnyt(){
 for(var i = 0;i<10;i++){
     var article = results.response.docs;
     createElement('h2',article[i].abstract);
     createElement('p',article[i].headline.main);
     createElement('p',article[i].lead_paragraph);
     createA(article[i].web_url,'Link to Full Article');
 }
}