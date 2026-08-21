document.addEventListener("DOMContentLoaded",()=>{

    const tabs = document.querySelectorAll('.tabs>div');
    const tabContents = document.querySelectorAll('.tab-contents>div');

    tabs.forEach(function(tab,index){
        tab.addEventListener('click',function(){
            tabs.forEach(tab=>tab.classList.remove('on'));
            tab.classList.add('on');
            tabContents.forEach(tabContent=>tabContent.classList.remove('on'));
            tabContents[index].classList.add('on');
        })
        });
});