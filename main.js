let menu = document.querySelector("#menu");

menu.addEventListener("click", ()=>{
    if(menu.className== "fa fa-close"){
        document.getElementById("header").style.left = "-120%";
        menu.className = " fa fa-bars";
    }
    else{
        
        document.querySelector("#header").style.left = "0%"
        menu.className = "fa fa-close";

    }
    
});

