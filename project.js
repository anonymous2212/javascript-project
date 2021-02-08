console.log("welcome to my note");

var addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let area=document.getElementsByClassName("text_area");
    let notes=localStorage.getItem("notes");
    if(notes== null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.push(area.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    area.value= "";
    console.log(notesobj);
   