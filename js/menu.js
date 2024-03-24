/*======= SHOW MENU =======*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('navM-toggle','navM-menu');


 /* ======= FAQ ======= */
 const accordionContent = document.querySelectorAll(".accordion__content")

 accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion__question");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

    let description = item.querySelector(".accordion__description");
    if(item.classList.contains("open")){
        description.style.height = `${description.scrollHeight}px`;
        description.style.opacity = "1"; /* ! */
        item.querySelector("i").classList.replace("bi-plus-lg","bi-dash-lg");
    }else {
        description.style.height = "0px";
        description.style.opacity = "0";
        item.querySelector("i").classList.replace("bi-dash-lg","bi-plus-lg");
    }
    removeOpen(index);

    })
})


function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".accordion__description");
            des.style.height ="0px"
            des.style.opacity = "0";
            item2.querySelector("i").classList.replace("bi-dash-lg","bi-plus-lg");
        }
    })
}

/* ======= Remove BannerD ======= */
