//localstorage

let mainColor =localStorage.getItem("color-option");
if (mainColor !== null){
   
   document.documentElement.style.setProperty('--main-color',mainColor);
   document.querySelectorAll(".color-list li").forEach(element=>{
    element.classList.remove("active");
    if(element.dataset.color === mainColor){
        element.classList.add("active");
    }
   });
     
}


//back random op
let backoption = true;

//////////////// clear interval
let backinterval ;

////local storage
let backoptionlocal = localStorage.getItem("back-option");

if (backoptionlocal !== null){

    if(backoptionlocal == 'true'){

         backoption = true;
    }else{
         backoption = false;
    }

    ///remove active

    document.querySelectorAll(".random-background span").forEach(el=>{
        el.classList.remove("active");
    });

    if(backoptionlocal === "true"){

        document.querySelector(".random-background .yes").classList.add("active");

    }else{
        document.querySelector(".random-background .no").classList.add("active");

    }

 }


//select landing page elements 
let landingPage =document.querySelector(".landing-page");

/// random imgs

let arrImg=["img/back.jpg","img/back6.jpg","img/back3.jpg","img/back4.jpg" ,"img/back5.jpg","img/back7.jpg"];


//change background


function RandomBack(){

    if (backoption == true){

        backinterval = setInterval(()=>{
            let randomImg =Math.floor(Math.random() * arrImg.length);
            landingPage.style.backgroundImage='url('+arrImg[randomImg] +')';
           
        },10000);

    }


}

RandomBack();




let settings =document.querySelector(".fa-gear");

let box= document.querySelector(".settings-box ");
settings.onclick=function(){
    box.classList.toggle("open");
    this.classList.toggle("fa-spin");
}

/////////////////////////////////////// switch colors

const colorli = document.querySelectorAll(".color-list li");
colorli.forEach(li=>{
   li.addEventListener("click",(e)=>{
       // e.target.dataset.color
       document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
       localStorage.setItem("color-option",e.target.dataset.color);
       e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
       });

       e.target.classList.add("active");
   });

});

/////////////////////////////////////// switch random back


const randomback = document.querySelectorAll(".random-background span");


randomback.forEach(span=>{
   span.addEventListener("click",(e)=>{
       // e.target.dataset.color
      
       e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
       });

       e.target.classList.add("active");

       if (e.target.dataset.background === 'yes' ){
        backoption = true;
        localStorage.setItem("back-option",true);
        RandomBack();
       }else{
        backoption = false;
        localStorage.setItem("back-option",false);
        clearInterval(backinterval);
       }
    
   });

});


//////////////////////////////////////// pop up


let ourgallery =document.querySelectorAll(".Gallery img");

ourgallery.forEach(img=>{

    img.addEventListener("click",(e)=>{
      ///creat overlay
      let overlay = document.createElement("div");
      overlay.className="popup-overlay";

      //append body
      document.body.appendChild(overlay);


      /// popup div for img 
      let popupBox =document.createElement("div");
      popupBox.className="popup-Box";

      ////alt
      if(img.alt !== null){
        ///create heading

        let altImg = document.createElement("h3");
        let headingimg =document.createTextNode(img.alt);

        altImg.appendChild(headingimg);
        popupBox.appendChild(altImg);
      }

      /// img
      let popupimg =document.createElement("img");
      popupimg.src=img.src;
      popupBox.appendChild(popupimg);
      document.body.appendChild(popupBox);


     //colse span 

     let closebtn= document.createElement("span");
     let textspan = document.createTextNode("x");
     closebtn.appendChild(textspan);
     closebtn.className="close-btn";
     popupBox.append(closebtn)
     

     

    });

});

document.addEventListener("click",function(e){
    if(e.target.className=='close-btn'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});

/*
  start bulits
 */

const allbullets =document.querySelectorAll(".nav-bullets .bullet");

allbullets.forEach(bullet=>{
    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });

    });

});

/////////////////////////////////// select all links

const alllinks =document.querySelectorAll(".link a");

alllinks.forEach(link=>{
    
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });

    });

});

////////////////settings bullets

let bulletShow = document.querySelectorAll(".bullets-option span");
let bulletscontainer =document.querySelector(".nav-bullets");
let bulitsLocal=localStorage.getItem("bullets-option");

if(bulitsLocal !== null){

    bulletShow.forEach(span=>{
        span.classList.remove("active");

    });
    if(bulitsLocal === 'block'){
        bulletscontainer.style.display="block";
        document.querySelector(".bullets-option span.yes").classList.add("active");
        

    }else{
        bulletscontainer.style.display="none";
        document.querySelector(".bullets-option span.no").classList.add("active");
        
    }
    


}

bulletShow.forEach(span=>{
    span.addEventListener("click",(e)=>{
            e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
           });
    
             e.target.classList.add("active");

            if(span.dataset.display === "show"){
                bulletscontainer.style.display="block";
                span.classList.add("active");
                localStorage.setItem("bullets-option",'block');
            }else{
                bulletscontainer.style.display="none";
                span.classList.add("active");
                localStorage.setItem("bullets-option",'none');
            }



           });

        
    });




////////////////reset-options

let reset = document.querySelector(".reset-options");

reset.onclick=function(){
    localStorage.clear();
    window.location.reload();
}


////click btn menue

document.querySelector(".toggle-menue").onclick=function(){
   
    document.querySelector(".link").classList.toggle("open");
    this.classList.toggle("rotatee");
}

/*
document.addEventListener("click",function(e){

    if(e.target !== document.querySelector(".toggle-menue")){
        document.querySelector(".link").classList.toggle("open");
        document.querySelector(".toggle-menue").classList.toggle("rotatee");

    }
    
})*/
