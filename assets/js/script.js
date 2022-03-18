//タイトルが出てくるjs
setTimeout(function(){
    document.getElementById("loading").classList.remove("active");
},4000)

//スクロールするとはじまるjs
const targetElement = document.querySelectorAll(".animationTaget");
console.log(targetElement);
console.log("画面の高さ", window.innerHeight);
document.addEventListener("scroll",function(){
    for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6
        if(i === 1){
            console.log(getElementDistance)
        }
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
})