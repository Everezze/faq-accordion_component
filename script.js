const icons = document.querySelectorAll("article div img");
const articles = document.querySelectorAll("main article");
console.log(articles);
let lastIcon = undefined;
let lastContent = undefined;

articles.forEach(function(article){
    article.addEventListener("click",function(event){
        let icon = this.querySelector("img");
        let content = this.querySelector("p");
        //console.log(this, this.querySelector("img"));
        if(!lastIcon){
            content.classList.toggle("active-content");
            icon.setAttribute("src","./assets/images/icon-minus.svg");
        }
        else if(icon === lastIcon){
            content.classList.toggle("active-content");
            if(content.classList.contains("active-content")){
                icon.setAttribute("src","./assets/images/icon-minus.svg");
            }
            else{
                icon.setAttribute("src","./assets/images/icon-plus.svg");
            }
        }
        else{
            lastIcon.setAttribute("src","./assets/images/icon-plus.svg");
            lastContent.classList.remove("active-content");
            content.classList.add("active-content");
            icon.setAttribute("src","./assets/images/icon-minus.svg");
        }

        lastIcon = icon;
        lastContent = content;
    })
});
