(function(){
    console.log("%c Hello from main.js", "color:orange;font-size:14px;")

    let panels = document.querySelectorAll(".panel")
    let distances = []

    /**
     * Add distances to an array
     */
    panels.forEach( element => {
        distances.push(element.offsetTop)
    })


    /**
     * Window on scroll
     */
    window.addEventListener("scroll", function(){
        let scrollTop = window.scrollY
        let windowHeight = window.innerHeight
        for(let i = 0; i < distances.length; i++){
            if(scrollTop >= (distances[i] - (windowHeight/3)*2 ) && scrollTop > 100){
                panels[i].classList = "panel is-visible"
            } else{
                panels[i].classList = "panel"
            }
            if(scrollTop >= (distances[i] + panels[i].offsetHeight)) panels[i].classList = "panel"
        }
    })



})()