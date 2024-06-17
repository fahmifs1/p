let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks =  document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//parallox//
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));



// form contact
document.getElementById('formcontact').addEventListener('submit', async function(e) {
    e.preventDefault()
  
    let nama = document.getElementsByName('nama')[0].value;
    let number = document.getElementsByName('number')[0].value;
    let massage = document.getElementsByName("massage")[0].value;
    
    await fetch("https://discordapp.com/api/webhooks/1251525871462776842/CDQrPe8hOIkkUO74dJd7s2EGgjbUB_yEMRcQ71WiNDAFa_O15LXDoZk1aJYT58ktLv3c", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: `${nama} (${number})`, content: massage })
    })
  
    console.log("sukses");
    document.getElementsByName("nama")[0].value = "";
    document.getElementsByName("number")[0].value = "";
    document.getElementsByName("massage")[0].value = "";
  })
  
  function showAlert() {
    alert('Message sent successfully!');
  }
  
  // Loading page
  // gsap.fromTo(
  //   ".loading-page",
  //   { opacity: 1 },
  //   {
  //     opacity: 0,
  //     display: "none",
  //     duration: 1.5,
  //     delay: 3.5,
  //   }
  // );
  
  // gsap.fromTo(
  //   ".logo-name",
  //   {
  //     y: 50,
  //     opacity: 0,
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     duration: 2,
  //     delay: 0.5,
  //   }
  // );
  