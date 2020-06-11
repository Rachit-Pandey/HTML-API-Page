let results;
function setup(){
    noCanvas();
}
function searchreddit(){
    var inputVal = document.getElementById("search").value;
    loadJSON('https://www.reddit.com/search.json?q='+inputVal,displayresults);
}
    function displayresults(results){
      console.log(results);
      for(var i = 0;i<results.data.children.length;i++){
          var img = document.createElement('img');
          src = results.data.children[i].data.thumbnail
          img.src = src;
          var para = document.createElement("p");
          var node = document.createTextNode(results.data.children[i].data.title);
          para.appendChild(node);
          var element = document.getElementById("titleid");
          document.body.appendChild(img);
          element.appendChild(para);
      }
    }