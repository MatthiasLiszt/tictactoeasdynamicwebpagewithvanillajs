
var playermode=NaN;
var playerColor='o';
var cGameOver=false,cWin='unknown';

var Reseted=false;

var pf=[]; // the entire playfield (board) 

var XO=['.','.','.','.','.','.','.','.','.'];

var x1y1=0,x2y1=1,x3y1=2;
var x1y2=3,x2y2=4,x3y2=5;
var x1y3=6,x2y3=7,x3y3=8;


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

 var n;
 var resetButton=document.createElement("input");//due to errors 

 var lb1=document.createElement("div");
 var lb2=document.createElement("div");
 var lb3=document.createElement("div"); 

 lb1.innerHTML="<br></br>";
 lb2.innerHTML="<br></br>";
 lb3.innerHTML="<br></br>";

 function gamereset(){
  playermode=NaN;
  playerColor='o';
  cGameOver=false;
  cWin='unknown';
  for(var i=0;i<9;++i){XO[i]='.';pf[i].src=emptysrc;}
  //consolePF();
  Reseted=true;
  resetButton.remove();
  //hook.removeChild(ndiv);
  hl.remove();
  ndiv.remove();
  initscreen();
 }

 function EndMessage(){
  if(cGameOver||cWin!='unknown')
   {if(cWin=='o'){hl.innerHTML="o has one !";console.log("o has one");}
    if(cWin=='x'){hl.innerHTML="x has one !";console.log("x has one");}
    if(cWin=='unknown'){hl.innerHTML="no one has one !";console.log("no one has one");}
   }
   
  if(cGameOver||cWin!='unknown')
   {console.log("adding reset-button");
    resetButton.type="button";
    resetButton.value="ReSet";
    resetButton.id="gamereset";
    resetButton.onclick=gamereset;
    ndiv.appendChild(resetButton);
   }
 }
 
 function fieldPressed(x,ii){
   var s;
   console.log(x+" pressed");
   if(playerColor=='o'){s=osrc;}else{s=xsrc;}
   if(XO[ii]=='.')
    {XO[ii]=playerColor;
     pf[ii].src=s;}
   checkGameOver();
   checkWin();
   makeAutoMove();
   consolePF();
   EndMessage();
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
 ndiv.appendChild(lb3); 
 
}

//is more a check for no more moves ... 
function checkGameOver(){
var r;

 r= (XO[x1y1]!='.') && (XO[x2y1]!='.') && (XO[x3y1]!='.');
 r= r && (XO[x1y2]!='.') && (XO[x2y2]!='.') && (XO[x3y2]!='.');
 r= r && (XO[x1y3]!='.') && (XO[x2y3]!='.') && (XO[x3y3]!='.');

 cGameOver=r;
}

function checkWin(){
var r1,r2,r3,r4,r5,r6,r7,r8,x,p;

 p='o';

 r1=(XO[x1y1]==p) && (XO[x2y1]==p) && (XO[x3y1]==p);
 r2=(XO[x1y2]==p) && (XO[x2y2]==p) && (XO[x3y2]==p);
 r3=(XO[x1y3]==p) && (XO[x2y3]==p) && (XO[x3y3]==p); 

 r4=(XO[x1y1]==p) && (XO[x1y2]==p) && (XO[x1y3]==p);
 r5=(XO[x2y1]==p) && (XO[x2y2]==p) && (XO[x2y3]==p);
 r6=(XO[x3y1]==p) && (XO[x3y2]==p) && (XO[x3y3]==p);

 r7=(XO[x1y1]==p) && (XO[x2y2]==p) && (XO[x3y3]==p);
 r8=(XO[x3y1]==p) && (XO[x2y2]==p) && (XO[x1y3]==p);

 x=r1||r2||r3||r4||r5||r6||r7||r8;

 if(x&&cWin=='unknown'){cWin=p;}

 p='x';

 r1=(XO[x1y1]==p) && (XO[x2y1]==p) && (XO[x3y1]==p);
 r2=(XO[x1y2]==p) && (XO[x2y2]==p) && (XO[x3y2]==p);
 r3=(XO[x1y3]==p) && (XO[x2y3]==p) && (XO[x3y3]==p); 

 r4=(XO[x1y1]==p) && (XO[x1y2]==p) && (XO[x1y3]==p);
 r5=(XO[x2y1]==p) && (XO[x2y2]==p) && (XO[x2y3]==p);
 r6=(XO[x3y1]==p) && (XO[x3y2]==p) && (XO[x3y3]==p);

 r7=(XO[x1y1]==p) && (XO[x2y2]==p) && (XO[x3y3]==p);
 r8=(XO[x3y1]==p) && (XO[x2y2]==p) && (XO[x1y3]==p);


 x=r1||r2||r3||r4||r5||r6||r7||r8;

 if(x&&cWin=='unknown'){cWin=p;}

}

function makeAutoMove(){
 var comColor;
 if(playermode=="twoplayer")
  {if(playerColor=='o'){playerColor='x';}else{playerColor='o';}}
 
 
 if(playermode=="oneplayer"&&cWin=='unknown')
  {comColor=oppositeColor(playerColor);
   comBrain(comColor);
  }
 

 console.log("makeAutoMove() exectued");
}

function oppositeColor(p){
 if(p=='o'){return 'x';}else{return 'o';}
}

function comBrain(p){
  if(instantWinHum(p)==false)
   {if(instantWinCom(p)==false){anyMove(p);}}
 setPlayField(p);
}

function instantWinCom(p){ 
 for(var i=0;i<9;++i)
  {if(XO[i]=='.')
    {XO[i]=p;
     if(comXWin(p)){return true;}else{XO[i]='.';}
    }
  }
 
 return false;
}

function instantWinHum(h){
 var p=oppositeColor(h); 
  for(var i=0;i<9;++i)
  {if(XO[i]=='.')
    {XO[i]=p;
     if(comXWin(p)){XO[i]=oppositeColor(p);return true;}else{XO[i]='.';}
    }
  }
 
 return false;
}


function comXWin(p){
 var r1,r2,r3,r4,r5,r6,r7,r8,x;
 
 r1=(XO[x1y1]==p) && (XO[x2y1]==p) && (XO[x3y1]==p);
 r2=(XO[x1y2]==p) && (XO[x2y2]==p) && (XO[x3y2]==p);
 r3=(XO[x1y3]==p) && (XO[x2y3]==p) && (XO[x3y3]==p); 

 r4=(XO[x1y1]==p) && (XO[x1y2]==p) && (XO[x1y3]==p);
 r5=(XO[x2y1]==p) && (XO[x2y2]==p) && (XO[x2y3]==p);
 r6=(XO[x3y1]==p) && (XO[x3y2]==p) && (XO[x3y3]==p);

 r7=(XO[x1y1]==p) && (XO[x2y2]==p) && (XO[x3y3]==p);
 r8=(XO[x3y1]==p) && (XO[x2y2]==p) && (XO[x1y3]==p);

 x=r1||r2||r3||r4||r5||r6||r7||r8;

 return x;
}


function anyMove(pp){
 for(var i=0;i<9;++i) 
  {if(XO[i]=='.'){XO[i]=pp;return true;}}
 
 return false;
}

function setPlayField(p){
  var s;
  console.log("setPlayField executed ");
  if(p=='o'){s=osrc;}
   else  {s=xsrc;}

  for(var i=0;i<9;++i)
   { if(XO[i]==p){pf[i].src=s;} }
}

function consolePF(){
 console.log(XO[0]+XO[1]+XO[2]);
 console.log(XO[3]+XO[4]+XO[5]);
 console.log(XO[6]+XO[7]+XO[8]);
}