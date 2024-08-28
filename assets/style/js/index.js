
// ===================================================================================header==========================================================================
const closeBtn = document.getElementById('closebtn');
const mobileNav = document.getElementById('mobileNav');
const openBtn = document.getElementById('openBtn');
const service = document.querySelector('#services');
const serviceToggle = document.querySelector('#serviceToggleMenu')

// openbtn
openBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
})


// closebtn
const handlenavclosebar = () => {
    mobileNav.classList.toggle('hidden');
}
closeBtn.addEventListener('click', handlenavclosebar);



const handleServicePageToggle = () => {
    serviceToggle.classList.toggle('hidden');

    
}
service.addEventListener('click', handleServicePageToggle);




// =============================================================================================================================================================
