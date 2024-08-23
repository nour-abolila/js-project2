
// زرار لما بضغط علية يطلعنى لاول الصفحة
let topjs = document.getElementById('topjs');
topjs.addEventListener('click', function () {
    window.scrollTo({
        
        top: 0,
        behavior: 'smooth'
    })
})

// تحويل الصفحة من الابيض للاسود والعكس

const button = document.getElementById('toggleButton');
const body = document.body;
button.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 

    if (body.classList.contains('dark-mode')) {
        button.classList.remove('fa-moon');
        button.classList.add('fa-sun');
    } else {
        button.classList.remove('fa-sun'); 
        button.classList.add('fa-moon');
    }
});


