//Aumento valores + -

const minus=document.querySelector(".input__minus");
const plus= document.querySelector(".input__plus");
let number= document.querySelector(".input__number");

let value= 0;
plus.addEventListener("click",()=>{
    value++;
    number.value=value;
})
minus.addEventListener("click",()=>{
    value--;
    if(value<=0){
        value=0;
    }
    number.value=value;
   
})

//Aumento valores + -

//boton agregar carrito

const Agregar= document.querySelector(".details__button");
let notificacion= document.querySelector(".header__cart--noti");

let aux= parseInt(notificacion.innerText);
Agregar.addEventListener("click",()=>{
    aux= aux+value;
    notificacion.innerText=aux;
    notificacion.style.display="block";
    dibujarProducto()
    
})

//boton agregar carrito

//modal carrito

const carrito= document.querySelector(".header__cart");
const carritoModal= document.querySelector(".cart__modal");
// let priceMod= document.querySelector(".cart__modal-price");
let contenedor= document.querySelector(".cart__modal-checkout-container")

carrito.addEventListener("click",()=>{
    carritoModal.classList.toggle("show");
    if(aux==0){
        contenedor.innerHTML='<p class="cart-empty">your car is empty</p>'
    }
    else{
        dibujarProducto()
    }
})

//modal carrito

//borrar contenido carrito
function deleteProducts(){

    const trashCan= document.querySelector(".cart__modal-trash");
    trashCan.addEventListener("click",()=>{
        contenedor.innerHTML='<p class="cart-empty">your car is empty</p>'
        aux=0
        notificacion.innerText=aux;
    
    })
}


//borrar contenido carrito

//Cambiar con las flechas

let imgIndex=1;
const imgCont= document.querySelector(".gallery__image-container");
const prevG= document.querySelector(".gallery__prev");
const nextG= document.querySelector(".gallery__next")

nextG.addEventListener("click",()=>{
    changeNextImg(imgCont);
})
prevG.addEventListener("click",()=>{
    changePrevImg(imgCont);
})

//Cambiar con las flechas

//Modal Gallery
const modalGall= document.querySelector(".modal-gallery__Background");
const closeMG= document.querySelector(".modal-gallery__close");
let galleryTh= document.querySelectorAll(".modal-gallery__thumbnails-1");
const imgContGall= document.querySelector(".modal-gallery__container")

imgCont.addEventListener("click",()=>{
    if(window.innerWidth>=1115)
    modalGall.style.display="grid";
})
closeMG.addEventListener("click",()=>{
    modalGall.style.display="none";
})
galleryTh=[...galleryTh] 
galleryTh.forEach(galleryTh=>{
    galleryTh.addEventListener("click",event=>{
        let galleryThIndex= event.target.id
        imgContGall.style.backgroundImage=`url(".images/image-product-${galleryThIndex}.jpg")` 
    })
})
let modalIndex=1;
const prevGM= document.querySelector(".modal-gallery__prev");
const nextGM= document.querySelector(".modal-gallery__next")

nextGM.addEventListener("click",()=>{
    changeNextImg(imgContGall);
})
prevGM.addEventListener("click",()=>{
    changePrevImg(imgContGall);
})

//Modal Gallery
//thubmnails gallery

let Th= document.querySelectorAll(".gallery__thumbnails-1");
Th=[...Th]  
Th.forEach(Th=>{
    Th.addEventListener("click",event=>{
        let ThIndex= event.target.id
        imgCont.style.backgroundImage=`url(".images/image-product-${ThIndex}.jpg")` 
    })
})

//thubmnails gallery

//navModal

const modalNav= document.querySelector(".modal-nav__back")
const menu= document.querySelector(".header__menu");
const closeMN= document.querySelector(".modal-nav__cerrar")

menu.addEventListener("click",()=>{
    modalNav.style.display="block"
})
closeMN.addEventListener("click",()=>{
    modalNav.style.display="none";
})


//navModal

//funciones
function dibujarProducto(){
    contenedor.innerHTML=`
        <div class="cart__modal-checkout-container">
            <div class="cart__modal-details-container">
                <img  class="cart__modal-img" src="./images/image-product-1-thumbnail.jpg" alt="thumb">
                <div>
                    <p class="cart__modal-product">Autumn limited edition...</p>
                    <p class="cart__modal-price">$125.00 x 0 <span>$0.00</span></p>
                </div>
                <img class="cart__modal-trash" src="./images/icon-delete.svg" alt="delete">
            </div>
            <button class="cart__modal-delete">Checkout</button>
      </div>`
      deleteProducts();
      let priceMod= document.querySelector(".cart__modal-price");
      priceMod.innerHTML=`$125.00 x ${aux} <span>${aux*125}.00</span>`
}
function changeNextImg(imgContainer){
    if(imgIndex==4){
        imgIndex=1;
    }
    else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage=`url("./images/image-product-${imgIndex}.jpg")`
}
function changePrevImg(imgContainer){
    if(imgIndex==1){
        imgIndex=4;
    }
    else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage=`url("./images/image-product-${imgIndex}.jpg")`
}

