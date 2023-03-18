li1 = document.querySelector('.projects-link');
li2 = document.querySelector('.about-link');

li1.addEventListener('click', function() {
    li1.classList.add('active');
    li2.classList.remove('active');
})

li2.addEventListener('click', function() {
    li1.classList.remove('active');
    li2.classList.add('active');
})
