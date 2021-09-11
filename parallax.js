//boolean values
var playing1 = false;
var playing2 = false;
var playing3 = false;
var createImg1 = false;
var createImg2 = false;
var createImg3 = false;
var createImg4 = false;
var createImg5 = false;
var createImg6 = false;
var createImg7 = false;
var createImg8 = false;
var createbg1 = false;
var createbg2 = false;
var createbg3 = false;


var welpic = document.getElementById('welpic1');

//background paper container
var backBox1 = document.getElementById("backBox1");
var backBox2 = document.getElementById("backBox2");
var backBox3 = document.getElementById("backBox3");

var textsec1 = document.getElementsByClassName('textsec1')[0];
var textsec2 = document.getElementsByClassName('textsec2')[0];
var textsec3 = document.getElementsByClassName('textsec3')[0];

//text in section 1
var title1 = document.getElementById('title1');
var sec1text1 = document.getElementById('sec1text1');
var sec1text2 = document.getElementById('sec1text2');
var sec1text3 = document.getElementById('sec1text3');
var sec1text3b = document.getElementById('sec1text3b');
var sec1text4 = document.getElementById('sec1text4');

var layer0 = document.getElementsByClassName('layer-0')[0];
var layer1 = document.getElementsByClassName('layer-1')[0];
var layer2 = document.getElementsByClassName('layer-2')[0];
var layer3 = document.getElementsByClassName('layer-3')[0];
var layer4 = document.getElementsByClassName('layer-4')[0];
var layer5 = document.getElementsByClassName('layer-5')[0];
var layer6 = document.getElementsByClassName('layer-6')[0];
var layer7 = document.getElementsByClassName('layer-7')[0];

var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');

var returnButton = document.getElementById("return");

//onscroll could help continuously update y position of mouse
window.onscroll = function(){
  //select scroll position
  var scrollY = document.documentElement.scrollTop;
  var picY = Math.max(scrollY, 0)
  console.log("nowY is " + picY + "px in Y");
  //make the welcome image bigger when scrolling
  if (picY>0 && picY<1000) {
    welpic.style.width = picY + "px";
    welpic.style.height =  picY + "px";
    welpic.style.opacity = "1";
  }else if (picY>1000) {
    welpic.style.width = 1000 - picY + "px";
    welpic.style.height =  1000 - picY + "px";
  }

  //make the image bigger when scrolling
  // welpic.addClass('scale-img');
  //scroll to play audio
  //need to click to trigger interaction
    if ( scrollY > 0 && scrollY < 1260 && playing1 == false){
      //play audio
      audio1.play();
      audio2.pause();
      audio3.pause();
      // playing1 = true;
  } else if (scrollY > 1260 && scrollY < 2530){
    //create an image and make the image moving effect
    //create image1
    //but only once
     if (createbg1 == false) {
       const bg1 = document.createElement("img");
       bg1.src = "images/oldpaper3.png";
       bg1.className = "bg1";
       backBox1.appendChild(bg1);
       createbg1 = true;
     }

     if (createImg1 == false) {
       const img1 = document.createElement("img");
       img1.src = "images/woman_sit.png";
       img1.className = "img1";
       layer0.appendChild(img1);
       createImg1 = true;
     }
     //image1 moving effect
     layer0.style.top = 300+ picY*0.8 + "px";

     //create image2
     if (createImg2 == false) {
       const img2 = document.createElement("img");
       img2.src = "images/woman1.png";
       img2.className = "img2";
       layer1.appendChild(img2);
       createImg2 = true;
     }
     //image2 moving effect
     layer1.style.top = 800 + picY*0.6 + "px";

      //triigger fadein effect step by step
      setTimeout(function(){
        title1.style.animationName = "fadeIn";
     },2000)

      setTimeout(function(){
       title1.style.opacity = "1";
       sec1text1.style.animationName = "fadeIn";
     },4000)

      setTimeout(function() {
        sec1text1.style.opacity = "1";
        sec1text2.style.animationName = "fadeIn";
      },6000)

      setTimeout(function() {
        sec1text2.style.opacity = "1";
        sec1text3.style.animationName = "fadeIn";
        sec1text3b.style.animationName = "fadeIn";
      },8000)

      setTimeout(function() {
        sec1text3.style.opacity = "1";
        sec1text3b.style.opacity = "1";
      },9000)

      setTimeout(function() {
        sec1text4.style.animationName = "fadeIn";
      },11000)

      setTimeout(function() {
        sec1text4.style.opacity = "1";
      },13000)

   //paper background disappear after certain amounts of time
   setTimeout(function() {
     backBox1.style.animationName = "fadeOut";
     textsec1.style.animationName = "fadeOut";
   },17000)

   setTimeout(function() {
     textsec1.style.opacity = "0";
     backBox1.style.opacity = "0";
   },19000)


    //play audio
    audio1.play();
    audio2.pause();
    audio3.pause();
    // playing1 = true;

  }else if (scrollY > 2530 && scrollY < 3730 && playing2 == false) {
    //create background box 2
    if (createbg2 == false) {
      const bg2 = document.createElement("img");
      bg2.src = "images/oldpaper3.png";
      bg2.className = "bg2";
      backBox2.appendChild(bg2);
      createbg2 = true;
    }

    //create images
     if (createImg3 == false) {
       const img3 = document.createElement("img");
       img3.src = "images/ice1.jpeg";
       img3.className = "img3";
       layer2.appendChild(img3);
       createImg3 = true;
     }
     //image3 moving effect
     layer2.style.top = 850+ picY*0.7 + "px";

     //create image4
      if (createImg4 == false) {
        const img4 = document.createElement("img");
        img4.src = "images/ice2.jpeg";
        img4.className = "img4";
        layer3.appendChild(img4);
        createImg4 = true;
      }
      //image4 moving effect
      layer3.style.top = 1200 + picY*0.6 + "px";

      //create image5
       if (createImg5 == false) {
         const img5 = document.createElement("img");
         img5.src = "images/ice3.jpeg";
         img5.className = "img5";
         layer4.appendChild(img5);
         createImg5 = true;
       }
       //image5 moving effect
       layer4.style.top = 1600 + picY*0.55 + "px";

       //create image6
        if (createImg6 == false) {
          const img6 = document.createElement("img");
          img6.src = "images/ice4.jpeg";
          img6.className = "img6";
          layer5.appendChild(img6);
          createImg6 = true;
        }
        //image6 moving effect
        layer5.style.top = 1800 + picY*0.45 + "px";

        //triigger fadein effect step by step
        setTimeout(function(){
           title2.style.animationName = "fadeIn";
        },2000)

        setTimeout(function(){
         title2.style.opacity = "1";
         sec2text1.style.animationName = "fadeIn";
       },4000)

        setTimeout(function() {
          sec2text1.style.opacity = "1";
          sec2text2.style.animationName = "fadeIn";
        },6000)

        setTimeout(function() {
          sec2text2.style.opacity = "1";
          sec2text3.style.animationName = "fadeIn";
        },8000)

        setTimeout(function() {
          sec2text3.style.opacity = "1";
          sec2text4.style.animationName = "fadeIn";
        },10000)

        setTimeout(function() {
          sec2text4.style.opacity = "1";
        },12000)

        setTimeout(function() {
          backBox2.style.animationName = "fadeOut";
          textsec2.style.animationName = "fadeOut";
        },15000)

        setTimeout(function() {
          backBox2.style.opacity = "0";
          textsec2.style.opacity = "0";
        },17000)

      var img3 = document.getElementsByClassName("img3")[0];
      var img4 = document.getElementsByClassName("img4")[0];
      var img5 = document.getElementsByClassName("img5")[0];
      var img6 = document.getElementsByClassName("img6")[0];

      setTimeout(function(){
       //make image3456 visible
       //enable fadeIn
       img3.style.animationName = "fadeIn";
       img4.style.animationName = "fadeIn";
       img5.style.animationName = "fadeIn";
       img6.style.animationName = "fadeIn";
     },17000)

    setTimeout(function(){
      img3.style.opacity = "1";
      img4.style.opacity = "1";
      img5.style.opacity = "1";
      img6.style.opacity = "1";
    },19000)


    audio2.play();
    audio1.pause();
    audio3.pause();
  } else if (scrollY > 3700 && scrollY < 3790 && playing3 == false) {
    //create background box 3
    if (createbg3 == false) {
      const bg3 = document.createElement("img");
      bg3.src = "images/oldpaper3.png";
      bg3.className = "bg3";
      backBox3.appendChild(bg3);
      createbg3 = true;
    }

    //create image7
     if (createImg7 == false) {
       const img7 = document.createElement("img");
       img7.src = "images/hand.png";
       img7.className = "img7";
       layer6.appendChild(img7);
       createImg7 = true;
     }
     //image7 moving effect
     layer6.style.top = 900+ picY*0.8 + "px";

     //create image8
      if (createImg8 == false) {
        const img8 = document.createElement("img");
        img8.src = "images/woman2.png";
        img8.className = "img8";
        layer7.appendChild(img8);
        createImg8 = true;
      }
      //image8 moving effect
      layer7.style.top = 600+ picY*0.9 + "px";

      //triigger fadein effect step by step
      setTimeout(function(){
        title3.style.animationName = "fadeIn";
      },2000)

      setTimeout(function(){
       title3.style.opacity = "1";
       sec3text1.style.animationName = "fadeIn";
     },4000)

      setTimeout(function() {
        sec3text1.style.opacity = "1";
        sec3text2.style.animationName = "fadeIn";
      },6000)

      setTimeout(function() {
        sec3text2.style.opacity = "1";
        sec3text3.style.animationName = "fadeIn";
      },8000)

      setTimeout(function() {
        sec3text3.style.opacity = "1";
        sec3text4.style.animationName = "fadeIn";
      },10000)

      setTimeout(function() {
        sec3text4.style.opacity = "1";
      },12000)

      setTimeout(function() {
        backBox3.style.animationName = "fadeOut";
        textsec3.style.animationName = "fadeOut";
      },14000)

      setTimeout(function() {
        backBox3.style.opacity = "0";
        textsec3.style.opacity = "0";
        returnButton.style.opacity = "1";
      },16000)

    audio3.play();
    audio1.pause();
    audio2.pause();
    // playing3 = true;
  }
}

returnButton.addEventListener("click",()=>{
  window.location.href = "https://ritacow.github.io/DURF-Urbanization-Loss/copyright.html";
})



//https://medium.com/@hamstu/recreating-the-firewatch-parallax-effect-213694d42f4e
// var ParallaxManager, ParallaxPart;
//
// ParallaxPart = (function() {
//   function ParallaxPart(el) {
//     this.el = el;
//     this.speed = parseFloat(this.el.getAttribute('data-parallax-speed'));
//     this.maxScroll = parseInt(this.el.getAttribute('data-max-scroll'));
//   }
//
//   ParallaxPart.prototype.update = function(scrollY) {
//     if (scrollY > this.maxScroll) { return; }
//     var offset = -(scrollY * this.speed);
//     this.setYTransform(offset);
//   };
//
//   ParallaxPart.prototype.setYTransform = function(val) {
//     this.el.style.webkitTransform = "translate3d(0, " + val + "px, 0)";
//     this.el.style.MozTransform    = "translate3d(0, " + val + "px, 0)";
//     this.el.style.OTransform      = "translate3d(0, " + val + "px, 0)";
//     this.el.style.transform       = "translate3d(0, " + val + "px, 0)";
//     this.el.style.msTransform     = "translateY(" + val + "px)";
//   };
//
//   return ParallaxPart;
//
// })();
//
// ParallaxManager = (function() {
//   ParallaxManager.prototype.parts = [];
//
//   function ParallaxManager(elements) {
//     if (Array.isArray(elements) && elements.length) {
//       this.elements = elements;
//     }
//     if (typeof elements === 'object' && elements.item) {
//       this.elements = Array.prototype.slice.call(elements);
//     } else if (typeof elements === 'string') {
//       this.elements = document.querySelectorAll(elements);
//       if (this.elements.length === 0) {
//         throw new Error("Parallax: No elements found");
//       }
//       this.elements = Array.prototype.slice.call(this.elements);
//     } else {
//       throw new Error("Parallax: Element variable is not a querySelector string, Array, or NodeList");
//     }
//     for (var i in this.elements) {
//       this.parts.push(new ParallaxPart(this.elements[i]));
//     }
//     window.addEventListener("scroll", this.onScroll.bind(this));
//   }
//
//   ParallaxManager.prototype.onScroll = function() {
//     window.requestAnimationFrame(this.scrollHandler.bind(this));
//   };
//
//   ParallaxManager.prototype.scrollHandler = function() {
//     var scrollY = Math.max(window.pageYOffset, 0);
//     for (var i in this.parts) { this.parts[i].update(scrollY); }
//   };
//
//   return ParallaxManager;
//
// })();
//
// //The ParallaxManager object loops through each .parallax-layer and creates a ParallaxPart to represent it
// new ParallaxManager('.parallax-layer');
