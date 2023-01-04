
    // typing animation
    var typed = new Typed(".typing", {
        strings:["", "Junior Developer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    })
    
    // dark mode
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", ()=>{
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    })
    window.addEventListener("load", ()=>{
        if(document.body.classList.contains("dark")){
            dayNight.querySelector("i").classList.add("fa-sun");
        }else{
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    })
    
    
    //aside
    const nav = document.querySelector(".nav")
            navList = nav.querySelectorAll("li"),
            totalNavList = navList.length;
            allSection = document.querySelectorAll(".section");
            totalSection = allSection.length;
            for(let i=0; i<totalNavList;i++){
                //console.log(navList[i])
                const a = navList[i].querySelector("a");
                a.addEventListener("click", function(){
                    //console.log(this)
                    for(let j=0; j<totalNavList; j++){
                        navList[j].querySelector("a").classList.remove("active")
                    }
                    this.classList.add("active")
                    if(window.innerWidth < 1200){
                        asideSectionTogglerBtn();
                    }
                })  
            }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", ()=>{
                asideSectionTogglerBtn();
            })

            function asideSectionTogglerBtn(){
                aside.classList.toggle("open")
                navTogglerBtn.classList.toggle("open")
                for(let i=0; i<totalSection;i++){
                    allSection[i].classList.toggle("open")
                }
            }
    

    const submitBtn = document.getElementsByClassName('submitBtn');
    submitBtn[0].addEventListener('click', (e)=>{
        e.preventDefault();
        setTimeout(() => {
            alert('Your email has been sent!')
        }, 2000); 
    })






            
       
        
        
        
    
                

    
            
    






