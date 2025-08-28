/*===================== Mostrar menu ========================*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate that variables exist

    if(toggle && nav){
        toggle.addEventListener('click', () =>{

            //agregamos la clase mostrar menu con el div con la clase nav--menu 

            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle' , 'nav-menu')


/*========================= Quitar el munu ======================*/

const navLink = document.querySelectorAll('.nav--link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*======================== Scroll sections active link ======================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const  scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        
        
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document.querySelector('.nav--menu a[href*=]' + sectionId + ']').classList.add(active-link)
    } else {
    document.querySelector('.nav--menu a[href*=]' + sectionId + ']').classList.add(active-link)
    }
   })
}

window.addEventListener('scroll',  scrollActive)



/* ======================================== Mostrar el TOP Scroll ======================================== */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    //whem the scroll is higher than 560 viewport height ,  add the show-scroll class to the a tag with the scroll  
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
      else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)


/* ================================== Dark / Light Theme ==================================== */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema previamente seleccionado (si el usuario lo seleccionó)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-themeconst getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'



// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
// Si se cumple la validación, preguntamos cuál fue el problema para saber si activamos o desactivamos la oscuridad  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/* Remove the size and print on an A4 sheet*/

function scaleCv(){
    document.body.classList.add('scale-cv')
}

/*REMOVE THE SIZE WHEN  THE CV IS DOWNLOADED*/

function removeScale(){
    document.body.classList.remove('scale-cv')
}

/* ============================ GENERATE PDF ============================== */

//PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

//HTML PDF OPTIONS

let opt = {
    margin:       0,
    filename:     'MyResume.pdf',
    image:        { type: 'jpeg', quality: .98 },
    html2canvas:  { scale: 8 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };



//Funtion to call areaCv and HTML options
 function generateResume() {
   html2pdf(areaCv)
}


//cuando el boton es tocado , se ejecuta las tres funciones

resumeButton.addEventListener ( 'click' , () =>{
    //1 . The class .scale-cv is added to the body , where itreduces the size of the 
    scaleCv()

    //2. The PDF is generated

generateResume()
    
    //3. 
    setTimeout(removeScale , 5000)
})


