const HeartBtn=document.querySelectorAll('.hearth');
const CloseHeartBtn=document.querySelector('.close');
const HearthModal=document.querySelector('#hearthmodal');

if(HeartBtn){
    for (let index = 0; index < HeartBtn.length; index++) {
        const element = HeartBtn[index];
        element.addEventListener('click',()=>{
            HearthModal.style.display="block";
        })
        
    }
}
if(CloseHeartBtn){
    CloseHeartBtn.addEventListener('click',()=>{
        HearthModal.style.display="none";
        console.log('ok');
    })
}

const li=document.querySelectorAll(".filterbtn")
var data=[];
for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener("click",(e)=>{
        const filter=document.querySelectorAll(".col-lg-12");
        
        for (let index = 0; index < filter.length; index++) {
            const element = filter[index];
            
            element.style.display='none'
            if(e.target.id===element.getAttribute("data-id")){
                element.style.display="block"
                data.push(e.target.id)
            }
        }

    })
}

const numbb = document.querySelectorAll("#number");
const plus = document.querySelectorAll("#plus");
const minus = document.querySelectorAll("#minus");
console.log(numbb.count);
var i=[];
for(let ind=0;ind<numbb.length;ind++){
 i.push(0);
}
for (let index = 0; index < plus.length; index++) {
    const element = plus[index];
    
    element.addEventListener('click',()=>{
        i[index]++;
        numbb[index].innerHTML=i[index];
    })
    
}
for (let index = 0; index < minus.length; index++) {
    const element = minus[index];
    element.addEventListener('click',()=>{
       if (i[index]>0) {
        i[index]=i[index]-1;
        numbb[index].innerHTML=i[index];
       }
    })
    
}
console.log(i)


const modal=document.querySelector('#eyemodal')
const Btn_eye=document.querySelectorAll(".bi-eye")
var data=[];
for (let index = 0; index < Btn_eye.length; index++) {
    const element = Btn_eye[index];
    element.addEventListener("click",(e)=>{
        const eyefilter=document.querySelectorAll(".modalimg");
        
        for (let index = 0; index < eyefilter.length; index++) {
            const element = eyefilter[index];
            if(e.target.id===element.getAttribute("data-id")){
                modal.style.display='block'
                modal.innerHTML = `
                <div class="items">
                <div class="close"><i class="bi bi-x-lg"></i></div>
                <div class="modal_img">
                  <img src="${element.src}" alt="">
                </div>
                <div class="content">
                 
                  <h2>Wooden Classical Chairs</h2>
                  <span>$405.00</span>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>Uses A Dictionary Of Over Combined Wth A Handful Of Model Sentence Structures, To Generatein Lorem Isum Which Looks Reasonable.</p>
                  <ul>
                    <li> DPI Selection:2600/2000/1600/1200</li>
                    <li> Connect Directly To Suspension</li>
                    <li id="orange"> 117 in stock</li>
                    <div class="add_number">
                      <span id="minus">-</span>
                      <span id="number">0</span>
                      <span id="plus">+</span>
                      <span id="bag"><i class="bi bi-bag-heart-fill"></i></span>
                    </div>
                    <div class="buy_now">
                      <i class="bi bi-bag-heart-fill"></i> Buy Now
                    </div>
                  </ul>
                </div>
              </div>
        
                `
                const CloseModalBtn=document.querySelector('.close')
CloseModalBtn.addEventListener('click',()=>{
    modal.innerHTML=``
    modal.style.display='none'
})
const numbb = document.querySelectorAll("#number");
const plus = document.querySelectorAll("#plus");
const minus = document.querySelectorAll("#minus");
console.log(numbb.count);
var i=[];
for(let ind=0;ind<numbb.length;ind++){
 i.push(0);
}
for (let index = 0; index < plus.length; index++) {
    const element = plus[index];
    
    element.addEventListener('click',()=>{
        i[index]++;
        numbb[index].innerHTML=i[index];
    })
    
}
for (let index = 0; index < minus.length; index++) {
    const element = minus[index];
    element.addEventListener('click',()=>{
       if (i[index]>0) {
        i[index]=i[index]-1;
        numbb[index].innerHTML=i[index];
       }
    })
    
}
            }
            
        }

    })
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  const mybutton = document.getElementById("myBtn");
 
window.addEventListener('scroll',()=>{
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.opacity = "1";
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
})

  if(mybutton){
    mybutton.addEventListener('click',()=>{
      
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      
    })
  }

  const Navbar=document.getElementById('navbar')
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
      Navbar.style.transform = "translateY(-100px)";
    }
    else{
      Navbar.style.transform = "translateY(0px)";
    }
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      Navbar.style.transform = "translateY(0px)";
      // transform: translateY(-100px);
      Navbar.classList.add("fixed")
    } 
    else {
      Navbar.classList.remove("fixed")
    }
  })
