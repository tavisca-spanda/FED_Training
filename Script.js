function search(){
    var x=document.getElementById("text").value;


}

function add(){
    var inputValue=document.getElementById("text").value;


    if (inputValue === '') {
        alert("Field is empty!");
      } else {

        var li = document.createElement("li");
        var node = document.createTextNode(inputValue);
        li.appendChild(node);
        document.getElementById("taks").appendChild(li);

      }

      document.getElementById("text").value = "";
}

