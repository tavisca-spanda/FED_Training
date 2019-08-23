// Delete Function
function removeElement(ele)
{

  var x=ele.innerHTML;
  var y= x.indexOf('<');
  var z= x.substring(0,y-1);
  
  
  var index = tasks.indexOf(z);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  ele.remove();

}

//Search Function
function searchTasks(){
  var x=document.getElementById("text").value;
  var i=0;
  for(i=0;i<tasks.length;i++)
  {
    if(tasks[i]==x)
    {
      alert("To Do: "+x);
      break;
    }
  }
  if(i==tasks.length)
    alert("Not Found");
  document.getElementById("text").value = "";
  document.getElementById('datalist').innerHTML = '';

}


// Add Task Function
function add(){ 
  
  var inputValue=document.getElementById("text").value;


  if (inputValue === '') {
      alert("Field is empty!");
    } else {
      
      tasks.push(inputValue);
      

      var li = document.createElement("li");
      var node = document.createTextNode(inputValue+" ");
      
      //var td1= document.createElement("td");
      //var td2= document.createElement("td");
      
      li.appendChild(node);
      //td2.appendChild(node);
      
      //tr.appendChild(td1);
      li.className="checked";

      var button1= document.createElement("button");
      button1.type="button";
      button1.innerHTML="Delete";
      button1.setAttribute("onclick","removeElement(this.parentElement)");
      li.append(button1);
      document.getElementById("tasks").appendChild(li);
     

    }

    document.getElementById("text").value = "";
    document.getElementById('datalist').innerHTML = '';

}


function hideSuggestions()
{
  document.getElementById('datalist').innerHTML = '';
}

//Autosuggestion fuction
function suggest(data) {

  document.getElementById('datalist').innerHTML = '';
   
  for (var i = 0; i<tasks.length; i++) {
   if(((tasks[i].toLowerCase()).indexOf(data.toLowerCase()))>-1)
   {
     
     var node = document.createElement("option");
     var t = document.createTextNode(tasks[i]);
     node.appendChild(t);
     node.className="sugeestions";
     document.getElementById("datalist").appendChild(node);
     
    }
  }
}




function showContent(){
  
  for(i=0;i<tasks.length;i++)
  {
   	var li = document.createElement("li");
    var node = document.createTextNode(tasks[i]+" ");

      
    li.appendChild(node);
      
    li.className="checked";

    var button1= document.createElement("button");
    button1.type="button";
    button1.innerHTML="Delete";
    button1.setAttribute("onclick","removeElement(this.parentElement)");
    li.append(button1);
    document.getElementById("tasks").appendChild(li);
    
    
   
    
  }
}




var tasks=["Breakfast","Meet Shomu","Buy Grocery","Finish Assignments","Laundry"];
