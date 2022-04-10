const toggle = document.querySelector('.toggle')
const toggles = document.querySelector('.toggles')
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const main_content = document.querySelector('.main-content')
// const item = document.querySelectorAll('.item')
const item00 = document.querySelector('.item00')
const item0 = document.querySelector('.item0')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const item5 = document.querySelector('.item5')
const item6 = document.querySelector('.item6')
const item7 = document.querySelector('.item7')
const item8 = document.querySelector('.item8')
const item9 = document.querySelector('.item9')
const item10 = document.querySelector('.item10')
const item11 = document.querySelector('.item11')
const item12 = document.querySelector('.item12')
const item13 = document.querySelector('.item13')
const item14 = document.querySelector('.item14')
const item15 = document.querySelector('.item15')
const item16 = document.querySelector('.item16')


toggles.addEventListener('click',()=>{
    toggles.style.display='none'
    toggle.style.display='block'
    sidebar.style.width='345px';
    header.style.marginLeft='345px';
    main_content.style.marginLeft='350px';
    toggle.style.display='block'
    item00.style.display='block';
    item0.style.display='block';
    item1.style.display='block';
    item2.style.display='block';
    item3.style.display='block';
    item4.style.display='block';
    item5.style.display='block';
    item6.style.display='block';
    item7.style.display='block';
    item8.style.display='block';
    item9.style.display='block';
    item10.style.display='block';
    item11.style.display='block';
    item12.style.display='block';
    item13.style.display='block';
    item14.style.display='block';
    item15.style.display='block';
    item16.style.display='block';

})
toggle.addEventListener('click',()=>{
    sidebar.style.width='70px';
    header.style.marginLeft='70px';
    main_content.style.marginLeft='75px';
    toggle.style.display='none';
    toggles.style.display='block';
    item00.style.display='none';
    item0.style.display='none';
    item1.style.display='none';
    item2.style.display='none';
    item3.style.display='none';
    item4.style.display='none';
    item5.style.display='none';
    item6.style.display='none';
    item7.style.display='none';
    item8.style.display='none';
    item9.style.display='none';
    item10.style.display='none';
    item11.style.display='none';
    item12.style.display='none';
    item13.style.display='none';
    item14.style.display='none';
    item15.style.display='none';
    item16.style.display='none';

})



