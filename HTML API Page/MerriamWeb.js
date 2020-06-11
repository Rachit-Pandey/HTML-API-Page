let inp;
let display;
function setup(){
inp = select('#inp');
display = createCanvas(1300,200);
}
function draw(){

}
function keyPressed(){
    if(keyCode==13){
        search();
    }
}
function search(){
loadJSON('https://dictionaryapi.com/api/v3/references/collegiate/json/'+inp.value()+'?key=82cf05f4-7351-453e-886a-be93aa1846b0',gotData);
}
function gotData(results){
let def = results[0].shortdef;
stroke(255);
fill(255);
background(7,5,26);
textSize(40);
text(inp.value(),10,30);
textSize(20);
text(def[0],10,60);
text(def[1],10,90);
text(def[2],10,120);
}

