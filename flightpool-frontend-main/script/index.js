const themeBtn = document.querySelector('.theme');
themeBtn.addEventListener('click',function(){
    const currentTheme = document.body.classList[0];
    if(currentTheme=='dark'){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
});