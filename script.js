const header=document.getElementById("header");
const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
const backTop=document.querySelector(".back-top");
const cursorGlow=document.querySelector(".cursor-glow");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>30);
  backTop.classList.toggle("show",window.scrollY>600);
});

menuToggle?.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
  document.body.classList.toggle("no-scroll",open);
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  navLinks.classList.remove("open");
  document.body.classList.remove("no-scroll");
  menuToggle?.setAttribute("aria-expanded","false");
}));

backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("mousemove",e=>{
  if(window.innerWidth>900){
    cursorGlow.style.left=e.clientX+"px";
    cursorGlow.style.top=e.clientY+"px";
  }
});

const form=document.getElementById("enquiryForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const course=document.getElementById("course").value;
  if(!/^[0-9]{10}$/.test(phone)){alert("Please enter a valid 10-digit mobile number.");return;}
  const message=`Hello Disha Computer Institute Punawale,%0A%0AMy name is ${encodeURIComponent(name)}.%0AMobile: ${encodeURIComponent(phone)}%0AI'm interested in: ${encodeURIComponent(course)}.%0A%0APlease share course details and admission information.`;
  window.open(`https://wa.me/919604177775?text=${message}`,"_blank");
});

document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });
});
