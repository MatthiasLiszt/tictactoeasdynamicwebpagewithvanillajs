
var playermode=NaN;
var playerColor='o';

//image sources
xsrc="x.png";
osrc="o.png";
emptysrc="empty.png";



function twoplayerButton(){
 playermode="twoplayer";
 console.log("two player mode activated");
}


function initscreen(){
 var hook=document.getElementById('screen'); //hooking existing div 
 var ndiv=document.createElement("div");
 
 var hl=document.createElement("div");
 hl.innerHTML="<h1>Tic Tac Toe as Dynamic Web Page</h1>";

 function oneplayerButton(){  
          playermode="oneplayer";
          console.log("one player mode activated");
          ndiv.remove();
          selectColorScreen();
 }


 function twoplayerButton(){  
          playermode="twoplayer";
          console.log("two player mode activated");
          ndiv.remove();
          selectColorScreen();
 }


 // first button 
 var fb=document.createElement("input");
 fb.type="button";
 fb.value="one player";
 fb.id="oneplayer";
 fb.onclick=oneplayerButton;

 // second button 
 var sb=document.createElement("input");
 sb.type="button";
 sb.value="two player";
 sb.id="twoplayer";
 sb.onclick=twoplayerButton;

  
 hook.appendChild(ndiv);
 ndiv.appendChild(hl); 
 ndiv.appendChild(fb); 
 ndiv.appendChild(sb); 
}

function selectColorScreen(){
 var hook=document.getElementById('screen'); //hooking existing div 
 var ndiv=document.createElement("div");

 var hl=document.createElement("div");
 hl.innerHTML="<h1>Tic Tac Toe as Dynamic Web Page</h1>";

 function tookX(){  
          playerColor='x';
          console.log("x has been taken");
          ndiv.remove();
          playfieldScreen();
 }


 function tookO(){   
          playerColor='o'; 
          console.log("o has been taken");       
          ndiv.remove();
          playfieldScreen();
 }


 // image input X
 var imx=document.createElement("input");
 imx.type="image";
 imx.value=" x ";
 imx.src=xsrc;
 imx.id="tookX";
 imx.onclick=tookX;

 // image input O 
 var imo=document.createElement("input");
 imo.type="image";
 imo.value=" o ";
 imo.src=osrc;
 imo.id="tookO";
 imo.onclick=tookO;

  
 hook.appendChild(ndiv);
 ndiv.appendChild(hl); 
 ndiv.appendChild(imx); 
 ndiv.appendChild(imo); 
}

function playfieldScreen(){
 var hook=document.getElementById('screen'); //hooking existing div 
 var ndiv=document.createElement("div");

 var hl=document.createElement("div");
 hl.innerHTML="<h1>Tic Tac Toe as Dynamic Web Page</h1>";

 var pf=[],n;

 var lb1=document.createElement("div");
 var lb2=document.createElement("div");
 
 lb1.innerHTML="<br></br>";
 lb2.innerHTML="<br></br>";

 function fieldPressed(x,ii){
   console.log(x+" pressed");
   if(playerColor='o'){pf[ii].src=osrc;}
   if(playerColor='x'){pf[ii].src=osrc;}
 }

 var xx=1,yy=1;

 for(var i=0;i<9;++i) 
  {n=document.createElement("input");
   n.type="image";
   n.value="_";
   n.src=emptysrc;
   switch(i){
    
    case 0: n.onclick=function(){fieldPressed('x1y1',0);};
            break;  
    case 1: n.onclick=function(){fieldPressed('x2y1',1);};
            break;  
    case 2: n.onclick=function(){fieldPressed('x3y1',2);};
            break;  
    case 3: n.onclick=function(){fieldPressed('x1y2',3);};
            break;  
    case 4: n.onclick=function(){fieldPressed('x2y2',4);};
            break;  
    case 5: n.onclick=function(){fieldPressed('x3y2',5);};
            break;  
    case 6: n.onclick=function(){fieldPressed('x1y3',6);};
            break;  
    case 7: n.onclick=function(){fieldPressed('x2y3',7);};
            break;  
    case 8: n.onclick=function(){fieldPressed('x3y3',8);};
            break;  
    
   }
   if(xx>3){xx=1;++yy;}
   n.id="fx"+xx+"y"+yy;
   ++xx;
   pf.push(n);
  }

 hook.appendChild(ndiv);
 ndiv.appendChild(hl); 
 ndiv.appendChild(pf[0]); 
 ndiv.appendChild(pf[1]); 
 ndiv.appendChild(pf[2]); 
 ndiv.appendChild(lb1); 
 ndiv.appendChild(pf[3]); 
 ndiv.appendChild(pf[4]); 
 ndiv.appendChild(pf[5]); 
 ndiv.appendChild(lb2); 
 ndiv.appendChild(pf[6]); 
 ndiv.appendChild(pf[7]); 
 ndiv.appendChild(pf[8]); 
 
}