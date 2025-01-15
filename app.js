
const cartCount = document.querySelector('.count');
const plusBtn = document.querySelector('.plus-btn');
const btnplus = document.querySelector('.btn-plus')
const plust = document.querySelector('.pl-bs')
const luty = document.querySelector('.al-erw')
// var count = localStorage.getItem('cartCount') ?? 0;
let count = 0
plusBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    count+=1;
    cartCount.textContent = count;
    localStorage.setItem('cartCount',count)
})
btnplus.addEventListener('click',(e)=>{
    e.preventDefault()
    count+=1;
    cartCount.textContent = count;
    localStorage.setItem('cartCount',count)
})
plust.addEventListener('click',(e)=>{
    e.preventDefault()
    count+=1;
    cartCount.textContent = count;
    localStorage.setItem('cartCount',count)
})
luty.addEventListener('click',(e)=>{
    e.preventDefault()
    count+=1;
    cartCount.textContent = count;
    localStorage.setItem('cartCount',count)
})
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');
const section2 = document.getElementById('section2');

toggleButton1.addEventListener('click', () => {
    section2.classList.remove('default-none'); 
    toggleButton2.style.display = 'block'; 
});

toggleButton2.addEventListener('click', () => {
    section2.classList.add('default-none'); 
    toggleButton2.style.display = 'none'; 
});
const backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if(
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

    
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
backToTopButton.addEventListener("click", scrollToTop);


