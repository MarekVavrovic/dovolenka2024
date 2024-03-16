//selecting content and buttons
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

//we attach an event listerner to entire content: button, h4, paragraph
    about.addEventListener("click",function (event) {
    const id = event.target.dataset.id;

    if (id) {

// remove .active from ALL buttons, add .active to the button I clicked on
      btns.forEach(function (btn) {
        btn.classList.remove("active");
        event.target.classList.add("active");
      });
      
// hide all articles, display just the one with matching ID
      articles.forEach(function (article) {
        article.classList.remove("active");        
      })
// target by ID, add .active class      
      const element =document.getElementById(id)
      element.classList.add("active");
    }
})
