/*
* @Author: Administrator
* @Date:   2017-09-18 23:34:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 22:09:51
*/
window.onload=function(){
  let gir=document.getElementsByClassName('gir')[0];
  let lis=gir.getElementsByTagName('li')
  let items=document.getElementsByClassName('item')
  let tu =document.getElementsByClassName('tupian')[0];
  let imgs=tu.getElementsByTagName('li');
  let quan=document.getElementsByClassName('zscircle1')[0]
  let lis2=quan.getElementsByTagName('li');
  let mains=$('.zhu')[0];
  let rights=$('.right-2')[0];
  let lefts=$('.left-2')[0];

  ////////////////////////////////////////


      for(let i=0;i<lis.length;i++){	
	lis[i].onmouseover=function(){
		items[i].style.display='block';
	}
	lis[i].onmouseout=function(){
		items[i].style.display='none';
	}
        }  
      /*console.log(imgs)
      console.log(lis2)*/
      for (let i=0;i<lis2.length;i++){
     lis2[i].onclick=function(){
     	for(let j=0;j<imgs.length;j++){
     		imgs[j].style.display='none'
     		lis2[j].style.background='#a2a2a2'
     	}
     	imgs[i].style.display='block';
     	lis2[i].style.background='black'
     	num=i
     }
      }
      /*let now=0;*/
      /*for(var i=0;i<lis2.length;i++){
	      lis2[i].index=i;
	      lis2[i].onmouseover=function(){
		      imgs[now].style.display='none';
		      imgs[this.index].style.display='block';
		      now=this.index;
	      }
      }*/
      /*for (var i=0;i<lis2.length;i++){
	      // lis2[i].indexs=i;
	      lis2[i].onclick=(function(i){
		      return function(){
		        imgs[now].style.display='none';
		        imgs[i].style.display='block';
		        now=i;
		              }
	      })(i)
      }*/

      /////////////////////////////////
     
     let t=setInterval(move,3000)
     let num=0;
     function move(){
     	num++
     	if(num>=imgs.length){
     		num=0;
     	}
     	for(let i=0;i<imgs.length;i++){
     		imgs[i].style.display='none';
     		lis2[i].style.background='#a2a2a2'
     	}
     	imgs[num].style.display='block';
     	lis2[num].style.background='black'
     }
       function moveLeft(){
     	num--
     	if(num<=-1){
     		num=imgs.length-1;
     	}
     	for(let i=0;i<imgs.length;i++){
     		imgs[i].style.display='none';
     		lis2[i].style.background='#a2a2a2'
     	}
     	imgs[num].style.display='block';
     	lis2[num].style.background='black'
     }
     mains.onmouseover=function(){
     	 clearInterval(t)
     }
     mains.onmouseout=function(){
     	  t=setInterval(move,3000)
     }

     ////////////////////
     rights.onclick=function(){
     	move()
     }
     lefts.onclick=function(){
        moveLeft()
     }
 }