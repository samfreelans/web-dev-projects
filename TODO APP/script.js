const title=document.getElementById("title")
const description=document.getElementById("description")
const addBtn=document.getElementById("addBtn")
const closeBtn=document.querySelector(".closeBtn")
const form=document.querySelector("form")
const todo=document.querySelector(".to-do")


const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

  showAlltasks()

function showAlltasks(){

    tasks.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "tasks");
    
        const innerDiv = document.createElement("div");
        div.append(innerDiv);
    
        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);
    
        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);
    
        const closebtn = document.createElement("closeBtn");
        closebtn.setAttribute("class", "closeBtn");
    
        closebtn.innerHTML = '<i class="fa-sharp fa-regular fa-circle-xmark"></i>' ;

        closebtn.addEventListener('click',()=>{
            removeTasks();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAlltasks();

            
        })

        div.append(closebtn);
        todo.append(div);

        //removes task from list

       

        
    });

}

function removeTasks() {
    tasks.forEach(() => {
      const div = document.querySelector(".tasks");
      div.remove();
    });
}




 //localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];



form.addEventListener("submit",(e)=>{
    e.preventDefault();

    removeTasks()

    tasks.push({
        title:title.value, 
        description:description.value,

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAlltasks();


})



