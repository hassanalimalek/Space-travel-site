
// Mobile Navigation
const mobileNavToggle= document.getElementsByClassName('mobile-nav-toggle')
let header = document.querySelector('.primary-header')
mobileNavToggle[0].addEventListener('click',(()=>{
    header.classList.toggle('primary-navigation-visible')

}))


// Tabs change
let tabList = document.querySelector('[role=tab-list]');
let tabs = document.querySelectorAll('[role=tab]');
let articles = document.querySelectorAll('[role=tabpanel]');
let articleImages =  document.querySelectorAll('[articleimage]');


let tabCount = 0;

tabList.addEventListener('keydown',(e)=>{
    changeTabFocus(e)
})
tabList.addEventListener('click',(e)=>{
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    console.log("targetImage --->",targetImage)
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);
    
    // Hiding all articles
    mainContainer
        .querySelectorAll('[role=tabpanel]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    // Showing target article
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    // Hiding all images
    mainContainer
    .querySelectorAll('img')
    .forEach((panel) => panel.setAttribute("hidden", true));
    // Showing the target image
    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

})


const changeTabFocus = (e)=>{
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight && tabCount < tabs.length-1 ) {
        tabs[tabCount].setAttribute("tabindex", -1);
        tabs[tabCount].setAttribute("aria-selected", false);
        articleImages[tabCount].setAttribute("aria-selected", false);
        console.log("articles [tabcont -->",articles[tabCount])
        articles[tabCount].hidden = true
       
    }
    
    if (e.keyCode === keydownRight && tabCount < tabs.length-1 ) {
        tabCount++;
        tabs[tabCount].setAttribute("aria-selected", true)
        articles[tabCount].hidden = false
        articleImages[tabCount].hidden = false
    }
    
    if (e.keyCode === keydownLeft) {
        tabCount = tabCount- 1 < 0 ? 0 : tabCount-1;
        articles[tabCount].hidden = false
        articleImages[tabCount].hidden = false
        tabs[tabCount].setAttribute("aria-selected", true)
    }
   
}