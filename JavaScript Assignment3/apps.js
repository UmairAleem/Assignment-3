(async function(){
  const response= await fetch("./data.json")
  const data= await response.json();

  const inpEle = document.getElementById("Genres")
const selectEle= document.getElementById("selectB")
function search() 
{
 const query=inpEle.value;
 const results =data.filter(function(data){
 return data.title.toLowercase().includes(query); 
 });
 console.log(results); 
}
  //console.log(data);
})();
