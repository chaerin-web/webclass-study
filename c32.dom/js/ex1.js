document.addEventListener('DOMContentLoaded',()=>{
    //크게 버튼 눌렀을 때 동작하는 기능
    const html = document.querySelector('html');
    const btn_up = document.querySelector('#btn_up');
    let fontSizeBase = 20;
    btn_up.addEventListener('click',()=>{
        if(fontSizeBase>40){return}
        fontSizeBase++;
        html.style.fontSize = fontSizeBase+'px';
    });
    // 작게 버튼 눌렀을 때 동작하는 기능(12px까지)
    const btn_down = document.querySelector('#btn_down');
    btn_down.addEventListener('click',()=>{
        if(fontSizeBase<=12){return}
        fontSizeBase--;
        html.style.fontSize = fontSizeBase+'px';
    });

    // 토글버튼 눌렀을 때 메뉴 펼쳐지게 하는 기능
    const btnToggle = document.querySelector('#btn_toggle');
    const fontControl = document.querySelector('.fontControl');
    // btnToggle.addEventListener('click',()=>{
    //     fontControl.classList.add('on');
    // });

    // 아이콘 이미지 변경 기능
    let btnState = false; // 이미지가 메뉴상태임을 뜻함 true가 되면 x 이미지 상태가 되는 것을 뜻함
    btnToggle.addEventListener('click',function(){
        if(!btnState){
            //이미지를 닫기 이미지로 교체
            this.children[0].setAttribute('src','./img/close.svg');
            this.children[0].setAttribute('alt','닫기');
            btnState = true;
            btnToggle.addEventListener('click',()=>{
            fontControl.classList.remove('on');
             });
        }
        else{
            //이미지를 메뉴 이미지로 교체
            this.children[0].setAttribute('src','./img/menu.svg');
            this.children[0].setAttribute('alt','메뉴');
            btnState = false;
            btnToggle.addEventListener('click',()=>{
            fontControl.classList.add('on');
             });
        }
    });
});