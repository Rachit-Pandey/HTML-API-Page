let inp;
let head;
let btn;
function setup(){
    head = createElement('header','Finddit')
    head.style('padding','10px');
    head.style('text-align','center');
    head.style('background','#1abc9c');
    head.style('color','white');
    head.style('font-size','30px');
    inp = createInput();
    inp.attribute('placeholder','Search..');
    btn = createButton('Search');
}
function draw(){

}
function mousePressed(){
if(mouseX>1&&mouseY>208&&mouseX<121&&mouseY<261){
searchreddit();
}
}
function searchreddit(){
loadJSON('https://www.reddit.com/search.json?q='+inp.value(),gotData);
console.log(inp.value());

}
function gotData(results){
let post = results.data.children;
createP('');
for(let i = 0;i<25;i++){
  let title = post[i].data.title;
 let img = createImg(post[i].data.thumbnail);
 img.class('card');
 createElement('p','r/'+post[i].data.subreddit);
  let head = createElement('h3',title);
 createA('https://www.reddit.com'+post[i].data.permalink,'Link To Post')
  createP('');
}
}