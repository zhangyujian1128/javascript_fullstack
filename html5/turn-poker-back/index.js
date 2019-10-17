const wrap=document.getElementById('wrap');
const allImg=document.querySelectorAll('#wrap img');

let images = [
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
  ]

  images.sort((a,b)=>0.5-Math.random());
init();
function init(){
    for(let i=0;i<12;i++){
        let img=document.createElement('img');
        img.src="./image/bg.jpg";
        img.onclick=function(){
            changeImage(img,i);
        }
        wrap.appendChild(img);
    }
}
let firstCard=null;
let firstId=null;
function changeImage(imgNode,i){
    if(count === 0){
    firstCard=images[i];
    firstId=i;
    imgNode.src=images[i];
    imgNode.classList.add('rotate-animation');
    }
    if(count === 1){
        imgNode.src=images[i];
        imgNode.classList.add('rotate-animation');
        if(firstCard===images[i]){
            wrap.removeChild(allImg[firstCard]);
            wrap.removeChild(allImg[i]);
        }else{
            allImg[firstId].src='./image/bg.jpg';
            allImg[i].src='./image/bg.jpg';
        }
        count = 0;
        firstCard=null;
        firstId=null;
    }
    count ++;
}