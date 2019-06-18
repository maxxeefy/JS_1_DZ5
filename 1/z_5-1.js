let modal = document.querySelector('div');
let modalOpen = document.querySelector('button');
let modalClose = document.querySelector('span');

modalOpen.addEventListener('click', function(){
    modal.classList.remove('hidden');
});

modalClose.addEventListener('click', function() {
    modal.classList.add('hidden');
})