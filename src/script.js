li1 = document.querySelector('.projects-link');
li2 = document.querySelector('.blog-link');
li3 = document.querySelector('.about-link');

li1.addEventListener('click', function() {
    li1.classList.add('active');
    li2.classList.remove('active');
    li3.classList.remove('active');
})

li2.addEventListener('click', function() {
    li1.classList.remove('active');
    li2.classList.add('active');
    li3.classList.remove('active');
})

li3.addEventListener('click', function() {
    li1.classList.remove('active');
    li2.classList.remove('active');
    li3.classList.add('active');
})