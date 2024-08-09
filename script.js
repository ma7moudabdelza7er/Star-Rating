let stars = document.querySelectorAll("i")

stars.forEach(function(star,starN){
    star.addEventListener("click",function(){

        if(!star.classList.contains("mark")){
            if(starN > 0){

                for(let i = 0; i <= starN ;i++ ){
                    stars[i].style.color = "chocolate";
                    stars[i].classList.add("mark")
                }

            }else{
                star.style.color = "chocolate";
                star.classList.add("mark")
            }
        }else{

            if(starN < stars.length-1){

                for(let i = stars.length-1; i > starN ; i-- ){
                    stars[i].style.color = "#e6e6e6";
                    stars[i].classList.remove("mark");
                }
                
            }

                    star.style.color = "#e6e6e6";
                    star.classList.remove("mark");
            
            }
    })
})

