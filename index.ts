import * as THREE from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


let mobile = window.matchMedia('(max-width: 900px)');
let mount = document.querySelector('.mount') as HTMLElement
let isModel:boolean = false
let ThreeDload:boolean = false

const manager = new THREE.LoadingManager();
const canvasID = document.querySelector('.canvasID') as HTMLCanvasElement
const canvasID0 = document.querySelector('.canvasID0') as HTMLCanvasElement
const texLoad = new THREE.TextureLoader(manager)
const textureMap = texLoad.load( './imgs/map.jpg' )
const scene = new THREE.Scene()
const raycaster = new THREE.Raycaster()
const renderer = new THREE.WebGLRenderer({canvas: canvasID ,antialias: true
})
renderer.setSize(window.innerWidth,window.innerHeight)
//set background color
renderer.setClearColor( '#000001', 1 );

const gltfLoad =  new GLTFLoader(manager)
let sett = document.querySelector('.loadTitle') as HTMLElement
let randomN:number
manager.onLoad = function ( ) {

	console.log( 'Loading complete!');
  ThreeDload = true
  randomN = Math.floor(Math.random() * sentArr.length)
  sett.innerHTML =   `${sentArr[randomN]}`  

};
manager.onProgress = ()=>{
  randomN = Math.floor(Math.random() * sentArr.length)
  sett.innerHTML =   `${sentArr[randomN]}`  
}
manager.onStart = ()=>{
  randomN = Math.floor(Math.random() * sentArr.length)
  sett.innerHTML =   `${sentArr[randomN]}`  
}
let somNm:number = 0

// screen size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const aspectRatio = sizes.width/sizes.height
// camera
const camera = new THREE.PerspectiveCamera(75,aspectRatio,.5,300)
camera.position.z = 6
scene.add(camera)
const defaultLight = new THREE.AmbientLight( 0xffffff,1 ); // soft white light
scene.add( defaultLight );
// Resize function
window.addEventListener('resize',()=>{
   sizes.width = window.innerWidth
   sizes.height = window.innerHeight

   // update the camera
   camera.aspect = sizes.width/sizes.height
   camera.updateProjectionMatrix()

     // update the camera
     camera0.aspect = sizes.width/sizes.height
     camera0.updateProjectionMatrix()

     // update renderer
     renderer0.setSize(window.innerWidth,window.innerHeight)
     renderer0.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   // update renderer
   renderer.setSize(window.innerWidth,window.innerHeight)
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


})
let model:any
gltfLoad.load(
  `spider.glb`,
 (gltf) =>
   {
     model = gltf.scene
     gltf.scene.castShadow = true
     gltf.scene.scale.set(0.3,0.3,0.3)

   }
)


document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown:any = null;
let yDown:any = null;

function getTouches(evt:any) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt:any) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt:any) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp:any = evt.touches[0].clientX;
    var yUp:any = evt.touches[0].clientY;

    var xDiff:any = xDown - xUp;
    var yDiff:any = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
       if(isLevel7 === true){gsap.to('.infoTT',{display:'none',opacity:0})}
      if(camera0.position.x < -7.8){
        camera.position.x = -7.8
     }
     else{
       camera0.position.x -= 1
     }
        } else {
            /* left swipe */
            if(isLevel7 === true){gsap.to('.infoTT',{display:'none',opacity:0})}
            if(camera0.position.x > 7.8){
              camera.position.x = 7.8
           }
           else{
             camera0.position.x += 1
           }
        }
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
            if(isLevel7 === true){gsap.to('.infoTT',{display:'none',opacity:0})}

            if(camera0.position.y < -8.8){
              camera.position.y = -8.8
           }
           else{
             camera0.position.y -= 1
           }
        } else {
          if(isLevel7 === true){gsap.to('.infoTT',{display:'none',opacity:0})}

          if(camera0.position.y > 8.8){
            camera.position.y = 8.8
         }
         else{
           camera0.position.y += 1
         }

        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

const controls = new OrbitControls(
  camera, canvasID);
  controls.enableDamping = true


// SECOND SCENE


  const scene0 = new THREE.Scene()
const renderer0 = new THREE.WebGLRenderer({canvas: canvasID0 ,antialias: true
})
renderer0.setSize(window.innerWidth,window.innerHeight)
//set background color
renderer0.setClearColor( '#000001', 1 );
  const camera0 = new THREE.PerspectiveCamera(75,aspectRatio,.5,300)
  camera0.position.z = 6
  scene0.add(camera0)


  let plane = new THREE.PlaneGeometry(14,14)
let mat = new THREE.MeshBasicMaterial({map:textureMap})
let geo  =new THREE.Mesh(plane,mat)
geo.scale.set(1.5,2,1)




import { gsap} from "gsap";
import  { MorphSVGPlugin}  from "gsap/MorphSVGPlugin";



if(mobile.matches){
  gsap.to('.isMobile',{display:'none'})
   
 }
 else{
   gsap.to('.isMobile',{display:'block'})
   
 }
 window.addEventListener('resize',()=>{
 
   if(mobile.matches){
     gsap.to('.isMobile',{display:'none'})
      
    }
    else{
      gsap.to('.isMobile',{display:'block'})
      
    }
 })

gsap.registerPlugin(MorphSVGPlugin)

const watchBtcOpenVid = document.querySelector('.watchButton') as HTMLElement
const playBtc = document.querySelector('.btcOpenVideoOpen') as HTMLElement
const playBtcEnd = document.querySelector('.btcOpenVideoOpen0') as HTMLElement
const enterPurgatirio = document.querySelector('.enterPurgatirio') as HTMLElement
const enterPurgatirio0 = document.querySelector('.enterPurgatirio0') as HTMLElement
const replayOpenVid = document.querySelector('.replayVidOpen') as HTMLElement
const replayOpenVid0 = document.querySelector('.replayVidOpen0') as HTMLElement
let imga0 = document.querySelector('.imga0') as  HTMLImageElement
let imga1 = document.querySelector('.imga1') as  HTMLImageElement
let imga2 = document.querySelector('.imga2') as  HTMLImageElement
let imga3 = document.querySelector('.imga3') as  HTMLImageElement
let imga4 = document.querySelector('.imga4') as  HTMLImageElement
let imga5 = document.querySelector('.imga5') as  HTMLImageElement
let imga6 = document.querySelector('.imga6') as  HTMLImageElement

const homeBtc = document.querySelectorAll('.logo')
const videoOpen = document.querySelector('.videoOpen')
const videoClose = document.querySelector('.videoClose')
let sectionLevels = document.querySelectorAll('.levelSection')
let videoVarOpen = <HTMLVideoElement> videoOpen
let videoVarClose = <HTMLVideoElement> videoClose
videoVarClose.muted = true
 videoVarOpen.muted = true
 let infoBtc = document.querySelectorAll('.info')
 let closeInfo = document.querySelectorAll('.closeInfo')
 let aboutBtc = document.querySelectorAll('.about')
 let musicBtc = document.querySelectorAll('.musicBtc')
 let closeAb= document.querySelectorAll('.closeInfoAB')
const unlockVideo = document.querySelector('.videoTrans')

   

const bgMvar = new Audio('./soundscape1.mp4')
let videoUnlockVar = <HTMLVideoElement> unlockVideo
let startVidLoad:boolean = false
// videoUnlockVar.addEventListener('loadeddata',()=>{
//    startVidLoad = true
//    console.log('video unlock is loaded');
   
// })
let allLevelsVids = document.querySelectorAll('.vids') 
let videoLevel0 = document.querySelector('.videoLevel0') as HTMLElement
let videoLv0 = <HTMLVideoElement> videoLevel0
let videoLevel3 = document.querySelector('.videoLevel3') as HTMLElement
let videoLv3 = <HTMLVideoElement> videoLevel3
let videoLevel4 = document.querySelector('.videoLevel4') as HTMLElement
let videoLv4 = <HTMLVideoElement> videoLevel4
let videoLevel5 = document.querySelector('.videoLevel5') as HTMLElement
let videoLv5 = <HTMLVideoElement> videoLevel5
let musicOn:boolean = false


videoLv0.addEventListener('play',()=>{
   musicOn = false
   bgMvar.pause()
})
videoLv3.addEventListener('play',()=>{
  musicOn = false
  bgMvar.pause()
})
videoLv4.addEventListener('play',()=>{
  musicOn = false
  bgMvar.pause()
})
videoLv5.addEventListener('play',()=>{
  musicOn = false
  bgMvar.pause()
})

bgMvar.addEventListener('ended',()=>{
  bgMvar.currentTime = 0
  bgMvar.play()
})

musicBtc.forEach(e => {
  e.addEventListener('click',()=>{
    if(musicOn === false){
      musicOn = true
      bgMvar.play()
    }
    else if(musicOn === true){
      musicOn = false
      bgMvar.pause()
    }
  })
});

let lockLv0 = document.querySelectorAll('.lockLv0')
let lockLv1 = document.querySelectorAll('.lockLv1')
let lockLv2 = document.querySelectorAll('.lockLv2')
let lockLv3 = document.querySelectorAll('.lockLv3')
let lockLv4 = document.querySelectorAll('.lockLv4')
let lockLv5 = document.querySelectorAll('.lockLv5')
let lockLv6 = document.querySelectorAll('.lockLv6')
let lockLv7 = document.querySelectorAll('.lockLv7')

let isLevel0:boolean = false
let isLevel1:boolean = false
let isLevel2:boolean = false
let isLevel3:boolean = false
let isLevel4:boolean = false
let isLevel5:boolean = false
let isLevel6:boolean = false
let isLevel7:boolean = false

let level0:any,level1:any,level2:any,level3:any,level4:any,level5:any,level6:any,level7:any
level0 = document.querySelectorAll('.level0')
level1 = document.querySelectorAll('.level1')
level2 = document.querySelectorAll('.level2')
level3 = document.querySelectorAll('.level3')
level4 = document.querySelectorAll('.level4')
level5 = document.querySelectorAll('.level5')
level6 = document.querySelectorAll('.level6')
level7 = document.querySelectorAll('.level7')

level0.forEach((lv:any) => {
  lv.addEventListener('click',level0func)
});
level1.forEach((lv:any) => {
 if(isLevel1 === true)  lv.addEventListener('click',level1func)
});
level2.forEach((lv:any) => {
  if(isLevel2 === true)  lv.addEventListener('click',level2func)
 });
 level3.forEach((lv:any) => {
  if(isLevel3 === true)  lv.addEventListener('click',level3func)
 });
 level4.forEach((lv:any) => {
  if(isLevel4 === true)  lv.addEventListener('click',level4func)
 });
 level5.forEach((lv:any) => {
  if(isLevel5 === true)  lv.addEventListener('click',level5func)
 });
 level6.forEach((lv:any) => {
  if(isLevel6 === true)  lv.addEventListener('click',level6func)
 });
 level7.forEach((lv:any) => {
  if(isLevel7 === true)  lv.addEventListener('click',level7func)
 });
function level0func(){
  console.log('level0 started');
   

  isLevel0 = true
   let tl = gsap.timeline()

   sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level0Section',{display:'block',duration:.1})

   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()

      videoUnlockVar.addEventListener('ended',()=>{


           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              // videoLv0.play()
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
              videoLevel0.addEventListener('click',()=>{
                videoLv0.play()
              })

            }})

           }})

      })
   }})

}

function level1func(){
  console.log('level1 started');

  if(isLevel2 === false){
    mount.style.backgroundImage = `url('./imgs/Back_002.jpg')`
  }
  

  gsap.to('.nextBtc',{display:'none',duration:.1})

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level1Section',{display:'block',duration:.1})

  gsap.to('.nextBtc1',{display:'block'})

   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
             isModel = true
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
              unlocknextfloor1.addEventListener('click',level2func)
              isLevel2 = true
            }})

           }})

      })
   }})


}




function level2func(){
  console.log('level2 started');
  gsap.to('.nextBtc',{display:'none',duration:.1})
  if(isLevel3 === false){
    mount.style.backgroundImage = `url('./imgs/Back_003.jpg')`
  }
  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });


  gsap.to('.level2Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
            }})

           }})

      })
   }})


}



function level3func(){
  console.log('level3 started');
  gsap.to('.nextBtc',{display:'none',duration:.1})
  if(isLevel4 === false){
    mount.style.backgroundImage = `url('./imgs/Back_004.jpg')`
  }
  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level3Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
              videoLevel3.addEventListener('click',()=>{
                videoLv3.play()
              })
            }})

           }})

      })
   }})
}






function level4func(){
  console.log('level4 started');
  if(isLevel5 === false){
    mount.style.backgroundImage = `url('./imgs/Back_005.jpg')`
  }
  gsap.to('.nextBtc',{display:'none',duration:.1})

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level4Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
              videoLevel4.addEventListener('click',()=>{
                videoLv4.play()
              })
            }})

           }})

      })
   }})
}


function level5func(){
  console.log('level 5');

  if(isLevel6 === false){
    mount.style.backgroundImage = `url('./imgs/Back_006.jpg')`
  }

  gsap.to('.nextBtc',{display:'none',duration:.1})

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level5Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()
              videoLevel5.addEventListener('click',()=>{
                videoLv5.play()
              })
            }})

           }})

      })
   }})


}
function level6func(){
  console.log('level6');
  if(isLevel7 === false){
    mount.style.backgroundImage = `url('./imgs/Back_007.jpg')`
  }


  gsap.to('.nextBtc',{display:'none',duration:.1})

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level6Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{

           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()

            }})

           }})

      })
   }})


}



function level7func(){
  if(isLevel7 === true){
    mount.style.backgroundImage = `url('./imgs/Back_008.jpg')`
  }
  console.log('level7 and lasttt');
  gsap.to('.nextBtc',{display:'none',duration:.1})

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
  });
  gsap.to('.level7Section',{display:'block',duration:.1})
   let tl = gsap.timeline()
   tl.to('.videoTransition',{display:'block',onStart:()=>{
    videoUnlockVar.play()



      videoUnlockVar.addEventListener('ended',()=>{
           gsap.to('.homeSection',{display:'none'
           ,onComplete:()=>{
             isModel = false
            gsap.to('.videoTransition',{display:'none',duration:.1,delay:.125,onComplete:()=>{
              videoUnlockVar.currentTime = 0
              videoLv0.pause()
              videoLv3.pause()
              videoLv4.pause()
              videoLv5.pause()

                   gsap.to('.nextBtc7',{display:'block',opacity:1})
            }})

           }})

      })
   }})


  unlocknextfloor7.addEventListener('click',()=>{
    gsap.to('.nextBtc',{display:'none',duration:.1})
    console.log('exit');
    
    sectionLevels.forEach((s:any) => {
      s.style.display = 'none'
    });

    musicOn = false
    bgMvar.pause()

    gsap.to('.endvid',{display:'block',duration:.5,onComplete:()=>{
      gsap.to('.btcOpenVideoOpen0',{display:'block'})
    }})

  })

}




homeBtc.forEach(element => {

element.addEventListener('click',()=>{

  sectionLevels.forEach((s:any) => {
    s.style.display = 'none'
    gsap.to('.homeSection',{display:'block',duration:1})
  });

})
});


playBtcEnd.addEventListener('click',()=>{
  videoVarClose.play()
  gsap.to(playBtcEnd,{display:'none'})
})

videoVarClose.addEventListener('ended',()=>{
  videoVarClose.currentTime = 0
  videoVarClose.pause()
  gsap.to('.replayVidOpen0',{display:'block',onComplete:()=>{
    
replayOpenVid0.addEventListener('click',()=>{
  videoVarClose.play()
  gsap.to('.replayVidOpen0',{display:'none'})
  gsap.to('.enterPurgatirio0',{display:'none'})

})
  }})
  gsap.to('.enterPurgatirio0',{display:'block',onComplete:()=>{
    enterPurgatirio0.addEventListener('click',()=>{
      sectionLevels.forEach((s:any) => {
        s.style.display = 'none'
      });
      gsap.to('.endvid',{display:'none',duration:.1,onComplete:()=>{
        gsap.to('.homeSection',{display:'block',duration:1})
      }})
    })
  }})
  
})

 playBtc.addEventListener('click',()=>{
  scene.add(model)
  scene0.add(geo)
   gsap.to('.checkScreen',{display:'none',opacity:0,duration:.5,onComplete:()=>{
    imga0.src = 'imgs/bird1__new.png'
    imga1.src = "imgs/bird2.png"
    imga2.src = 'imgs/bird3.jpg'
    imga3.src = 'imgs/bird4.jpg'
    imga4.src = 'imgs/bird5.jpg'
    imga5.src = 'imgs/bird6.jpg'
    imga6.src = 'imgs/bird7.jpg'
    
   }})
 })
 watchBtcOpenVid.addEventListener('click',()=>{
   gsap.to('.watchButton',{display:'none'})
        videoVarOpen.play()
 })
 videoVarOpen.addEventListener('ended',()=>{
  videoVarOpen.currentTime = 0
  /// show button replay
  gsap.to('.replayVidOpen',{display:'block',onComplete:()=>{
    replayOpenVid.addEventListener('click',()=>{
      videoVarOpen.play()
      gsap.to('.replayVidOpen',{display:'none'})
      gsap.to('.enterPurgatirio',{display:'none'})

    })
  }})
  //show button enter to
  gsap.to('.enterPurgatirio',{display:'block',onComplete:()=>{
        enterPurgatirio.addEventListener('click',()=>{
          bgMvar.play()
          gsap.to('.replayVidOpen',{display:'none'})
          gsap.to('.secvid',{display:'none'})
          gsap.to('.enterPurgatirio',{display:'none',onComplete:()=>{
            gsap.to('.homeSection',{display:'block'})

          }})

        })
  }})

 })


// listen when levels ends
let unlocknextfloor0 =  document.querySelector('.nextBtc0') as HTMLElement
let unlocknextfloor1 =  document.querySelector('.nextBtc1') as HTMLElement
let unlocknextfloor2 =  document.querySelector('.nextBtc2') as HTMLElement
let unlocknextfloor3 =  document.querySelector('.nextBtc3') as HTMLElement
let unlocknextfloor4 =  document.querySelector('.nextBtc4') as HTMLElement
let unlocknextfloor5 =  document.querySelector('.nextBtc5') as HTMLElement
let unlocknextfloor6 =  document.querySelector('.nextBtc6') as HTMLElement
let unlocknextfloor7 =  document.querySelector('.nextBtc7') as HTMLElement

videoLv0.addEventListener('ended',()=>{
  videoLv0.currentTime = 0
  videoLv0.pause()
  isLevel1 = true
  gsap.to('.nextBtc0',{display:'block'})
 unlocknextfloor0.addEventListener('click',level1func)

})


videoLv3.addEventListener('ended',()=>{
  videoLv3.currentTime = 0
  videoLv3.pause()
  isLevel4 = true
  gsap.to('.nextBtc3',{display:'block'})
 unlocknextfloor3.addEventListener('click',level4func)

})
videoLv4.addEventListener('ended',()=>{
  videoLv4.currentTime = 0
  videoLv4.pause()
  isLevel5 = true
  gsap.to('.nextBtc4',{display:'block'})

 unlocknextfloor4.addEventListener('click',level5func)
})
videoLv5.addEventListener('ended',()=>{
  videoLv5.currentTime = 0
  videoLv5.pause()
  console.log('end of video 6 and open level 7');

  isLevel6 = true
  gsap.to('.nextBtc5',{display:'block'})
 unlocknextfloor5.addEventListener('click',level6func)
})

// videoLv6.addEventListener('ended',()=>{
//   videoLv6.currentTime = 0
//   videoLv6.pause()

// })



// slider listen when levels ends


// slider first
var slideIndex:number = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n:any) {
  showSlides(slideIndex += n);

}
let prev = document.querySelector('.prev') as HTMLElement
let next = document.querySelector('.next') as HTMLElement

prev.addEventListener('click',()=>{
   plusSlides(-1)
})
next.addEventListener('click',()=>{
  plusSlides(1)

})
// Thumbnail image controls


function showSlides(n:any) {
  if(n > 3 || n=== 4){
    isLevel3 = true
    gsap.to('.nextBtc2',{display:'block'})
   unlocknextfloor2.addEventListener('click',level3func)
  }

  var i:any;
  var slides:any = document.getElementsByClassName('mySlides');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}



// slider second

var slideIndex0:number = 1;
showSlides0(slideIndex0);


// Next/previous controls
function plusSlides0(n:any) {
  showSlides0(slideIndex0 += n);

}
let prev0 = document.querySelector('.prev0') as HTMLElement
let next0 = document.querySelector('.next0') as HTMLElement

prev0.addEventListener('click',()=>{
   plusSlides0(-1)
})
next0.addEventListener('click',()=>{
  plusSlides0(1)

})
// Thumbnail image controls

function showSlides0(n:any) {
  if(n > 6 || n=== 7){
    isLevel7 = true
    gsap.to('.nextBtc6',{display:'block'})
    unlocknextfloor6.addEventListener('click',level7func)

  }

  var i0:any;
  var slides0:any = document.getElementsByClassName('mySlides0');
  if (n > slides0.length) {slideIndex0 = 1}
  if (n < 1) {slideIndex0 = slides0.length}
  for (i0 = 0; i0 < slides0.length; i0++) {
      slides0[i0].style.display = "none";
  }

  slides0[slideIndex0-1].style.display = "block";
}






infoBtc.forEach(btc => {
  btc.addEventListener('click',()=>{
      gsap.to('.infoHolder',{opacity:1,display:'block',duration:1})


  })
});
aboutBtc.forEach(btc => {
  btc.addEventListener('click',()=>{
      gsap.to('.aboutHolder',{opacity:1,display:'block',duration:1})


  })
});
closeInfo.forEach(btc => {
  btc.addEventListener('click',()=>{
    gsap.to('.infoHolder',{display:'none',opacity:0,duration:1})

  })
});
closeAb.forEach(btc => {
  btc.addEventListener('click',()=>{
    gsap.to('.aboutHolder',{display:'none',opacity:0,duration:1})

  })
});



setInterval(() => {
  lockLv0.forEach((lv0) => {
    if(isLevel0 === true) gsap.to(lv0,{duration:1,morphSVG:'.unlockLv0',fill:'#ffc66b'})
    level0.forEach((lv:any) => {
      lv.addEventListener('click',level0func)
    });

  });
  lockLv1.forEach((lv1) => {
    if(isLevel1 === true) gsap.to(lv1,{duration:1,morphSVG:'.unlockLv1',fill:'#ffc66b'})
    level1.forEach((lv:any) => {
      if(isLevel1 === true)  lv.addEventListener('click',level1func)
     });
  });
  lockLv2.forEach((lv2) => {
    if(isLevel2 === true) gsap.to(lv2,{duration:1,morphSVG:'.unlockLv2',fill:'#ffc66b'})
    level2.forEach((lv:any) => {
      if(isLevel2 === true)  lv.addEventListener('click',level2func)
     });
  });
  lockLv3.forEach((lv3) => {
    if(isLevel3 === true) gsap.to(lv3,{duration:1,morphSVG:'.unlockLv3',fill:'#ffc66b'})
    level3.forEach((lv:any) => {
      if(isLevel3 === true)  lv.addEventListener('click',level3func)
     });
  });
  lockLv4.forEach((lv4) => {
    if(isLevel4 === true) gsap.to(lv4,{duration:1,morphSVG:'.unlockLv4',fill:'#ffc66b'})
    level4.forEach((lv:any) => {
      if(isLevel4 === true)  lv.addEventListener('click',level4func)
     });
  });
  lockLv5.forEach((lv5) => {
    if(isLevel5 === true) gsap.to(lv5,{duration:1,morphSVG:'.unlockLv5',fill:'#ffc66b'})
    level5.forEach((lv:any) => {
      if(isLevel5 === true)  lv.addEventListener('click',level5func)
     });
  });
  lockLv6.forEach((lv6) => {
    if(isLevel6 === true) gsap.to(lv6,{duration:1,morphSVG:'.unlockLv6',fill:'#ffc66b'})
    level6.forEach((lv:any) => {
      if(isLevel6 === true)  lv.addEventListener('click',level6func)
     });
  });
  lockLv7.forEach((lv7) => {
    if(isLevel7 === true) gsap.to(lv7,{duration:1,morphSVG:'.unlockLv7',fill:'#ffc66b'})
    level7.forEach((lv:any) => {
      if(isLevel7 === true)  lv.addEventListener('click',level7func)
     });
  });
}, 400);

function anim(){
   // time of clock
  
   


     requestAnimationFrame(anim)


  if(ThreeDload === true){
    
    if(isModel === true){
      renderer.render(scene,camera)
  
      camera.updateProjectionMatrix();
    }
    else{

      renderer0.render(scene0,camera0)
      camera0.updateProjectionMatrix();
    }


  }




 }


 anim()


 let loadNum = 0
 let loadint:any
 
let sentArr:any[] = ['Calling Dante to host the gallery talk','Selling NFTs to feed the hungry jinns',"Locking you out of heaven's doors so you have to see video works","When you'll get to the fifth floor you'll become a fan",'Wash your hands before you push any buttons','Honestly, not sure if this purgatory is enough to save your soul']

 loadint = setInterval(() => {
  if(ThreeDload === true && loadNum > 9)
  { 
    allVids.forEach(element => {
      element.style.display = 'block'
  });
    gsap.to('.loader',{opacity:0,display:'none',onComplete:()=>{

      gsap.to('#wrap',{display:'block'})
      clearInterval(loadint)

    }})
  }
}, 10);



 function preloadImage(url:any){
  const img = new Image();
  img.src = url;
  return img
}

function preloadImages(images:any) {
  for (var i = 0; i < images.length; i++) {
    images[i] = preloadImage(images[i])
   loadNum++
 

  }
  return images
}

//-- usage --//
let arr:any[] = [
  "./imgs/bird1.jpg",
  "./imgs/bird2.png",
  "./imgs/bird3.jpg",
  "./imgs/bird4.jpg",
  "./imgs/bird5.jpg",
  "./imgs/level1_image.png",
  "./imgs/level2_image.png",
  "./imgs/level4_image.png",
  "./imgs/level5_image.jpeg",
  "./imgs/level6_image.jpg",



]

const images = preloadImages(arr)



let visited = localStorage.getItem('visited');
if (!visited) {
  let tools=  document.querySelectorAll('.tool')
  tools.forEach((element:any) => {
    element.style.display = 'block'
  });
    localStorage.setItem('visited','true');
}


let toolAB = document.querySelector('.toolAb') as HTMLElement
let toolSD = document.querySelector('.toolSD') as HTMLElement
let toolIF = document.querySelector('.toolIF') as HTMLElement
let allVids = document.querySelectorAll('video') 



toolAB.addEventListener('click',()=>{
  gsap.to(toolAB,{display:'none',opacity:0,duration:.5})
})
toolSD.addEventListener('click',()=>{
  gsap.to(toolSD,{display:'none',opacity:0,duration:.5})
})
toolIF.addEventListener('click',()=>{
  gsap.to(toolIF,{display:'none',opacity:0,duration:.5})
})
