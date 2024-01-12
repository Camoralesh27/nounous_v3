/*=============== SHOW MENU ===============*/
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


 /*=============== FAQ ===============*/
/* const showFAQ = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-faq')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon2')
    })
 }
 
 showFAQ('widget3-toggle','widget3-answer'); */

 /* FAQ 2 */
 const accordionContent = document.querySelectorAll(".accordion__content")

 accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion__question");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

    let description = item.querySelector(".accordion__description");
    if(item.classList.contains("open")){
        description.style.height = `${description.scrollHeight}px`;
        item.querySelector("i").classList.replace("fa-plus","fa-minus");
    }else {
        description.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus","fa-plus");
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
            item2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}