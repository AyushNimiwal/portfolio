function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();
$(document).ready(function(){
    $(".text h1 span,.bottom_text h5").lettering();
    var tl=gsap.timeline();
    tl.from(".text h1 span",{
        x:-20,
        duration:1,
        opacity:0,
        stagger:.1
    })
    .from(".img_group img",{
        x:900,
        duration:1,
        opacity:0,
        stagger: .18
    })
    .to(".img_group img",{
        x:900,
        margin:'0 -140px 0',
        opacity:1,
        duration:1,
        rotate:15,
        stagger: .18
    },'-=1.4')
    .from(".bottom_text h5 span",{
        x:-20,
        duration:1,
        opacity:0,
        stagger:.07
    })
    .from(".header .logo",{
        y:-20,
        duration:1,
        opacity:0,
        rotate:20,
    })
    .from(".header nav li",{
        y:-20,
        duration:1,
        opacity:0,
        stagger:.2
    })
    setTimeout(function(){
        $(".developer").mouseover(function(){
            gsap.to(".img_group img",{
                x:100,
                margin:'0 10px 0',
                duration:1,
                opacity:1,
                rotate:0,
                stagger:.14,
            })
        });
        $(".developer").mouseout(function(){
            gsap.to(".img_group img",{
                x:800,
                margin:'0 -110px 0',
                duration:1,
                opacity:1,
                rotate:20,
                stagger:.14,
            })
        });
    },5000)
});
var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".content .text",
        scroller:".main",
        start:"top -30%",
        end:"top -50%",
        scrub:3,
        // markers:true  
      }
});
tl1.to(".main",{
  backgroundColor:"#fff"
});
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top 95%",
        end:"top 115%",
        scrub:3,
        // markers:true  
      }
});
tl2.from(".page1-right img",{
    x:100,
    duration:1,
    opacity:0,
    stagger:.07,
})
.to(".page1-right img",{
    x:100,
    duration:1.4,
    opacity:1,
    delay:1,
    stagger:.07,
},"anim")
.from(".page1-left h1",{
    y:-30,
        duration:1,
        delay:2,
        opacity:0,
},"anim")
.from(".page1-left h2",{
    y:-30,
        duration:1,
        delay:3,
        opacity:0,
},"anim")
.from(".page1-left p",{
    y:-30,
        duration:1,
        delay:3.5,
        opacity:0,
},"anim");

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page2 .c-tool",
        scroller:".main",
        start:"top 20%",
        end:"top 10%",
        scrub:2,
        // markers:true  
      }
});
tl3.to(".main",{
  backgroundColor:"#000"
},"animworks") 
.to(".f-works h1",{
    x:-60,
},"animworks")
.to(".f-works h2",{
    x:40,
},"animworks");

var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".f-works",
        scroller:".main",
        start:"top 10%",
        end:"top 0%",
        scrub:2,
        // markers:true  
      }
});
tl4.to(".page3 video",{
    width:'520px',
    height:'400px',
    duration:1,
    stagger:.07,
},"p3")
.from(".page3-right h2",{
    y:-30,
        duration:1,
        delay:1,
        opacity:0,
        stagger:.07,
},"p3")
.from(".page3-right p",{
    y:-30,
        duration:1,
        delay:1.5,
        opacity:0,
        stagger:.07,
},"p3")
.from(".page3-right h4",{
    y:-30,
        duration:1,
        delay:2,
        opacity:0,
        stagger:.07,
},"p3")

var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top -40%",
        end:"top -70%",
        scrub:3,
        // markers:true  
      }
});
tl5.to(".main",{
  backgroundColor:"#fff"
},"p4")
.to(".page4 video",{
    width:'520px',
    height:'400px',
    duration:1,
    stagger:.07,
},"p4")
.to(".page3 video",{
    width:'0px',
    height:'0px',
    duration:1,
    stagger:.07,
},"p4")
.from(".page4-left h2",{
    y:-30,
        duration:1,
        delay:1,
        opacity:0,
        stagger:.07,
},"p4")
.from(".page4-left p",{
    y:-30,
        duration:1,
        delay:1.5,
        opacity:0,
        stagger:.07,
},"p4")
.from(".page4-left h4",{
    y:-30,
        duration:1,
        delay:2,
        opacity:0,
        stagger:.07,
},"p4")
var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top -40%",
        end:"top -70%",
        scrub:3,
        // markers:true  
      }
});
tl6.to(".page4 video",{
    width:'0px',
    height:'0px',
    duration:1,
    stagger:.14,
},"p5")
.from(".page5 h1 span",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:.14,
    delay:2,
},"p5")
.from(".page5 h2 span",{
    y:-30,
        duration:1,
        delay:3,
        opacity:0,
        stagger:.14,
},"p5")
.from(".page5 h5 span",{
    y:-30,
        duration:1,
        delay:3.5,
        opacity:0,
        stagger:.14,
},"p5")

