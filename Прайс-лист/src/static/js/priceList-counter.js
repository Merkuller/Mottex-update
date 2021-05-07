// Счётчик карточки
// priceList-counter

if (document.querySelector('.price-list')) {

    let contentBlock = document.querySelector('.price-list');

    contentBlock.addEventListener('click', e => {
        if (e.target.classList.contains('card__plus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            field.parentElement.querySelector('.card__minus-btn').style.pointerEvents = 'auto';
            let shopBasketEl = field.parentElement.nextElementSibling;
            field.value ++;
            shopBasketEl.classList.add('change-position');
        } 
        if (e.target.classList.contains('card__minus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            field.value --;
            if (field.value === '0') e.target.style.pointerEvents = 'none';
        }
    })

    contentBlock.addEventListener('input', e => {
        if (e.target.classList.contains('card__field')) {
            e.target.parentElement.nextElementSibling.classList.add('change-position'); 
        }
        if (e.target.classList.contains('card__field')) {
            e.target.value === '' || e.target.value === '0' ? e.target.previousElementSibling.style.pointerEvents = 'none' : e.target.previousElementSibling.style.pointerEvents = 'auto';
        }  
    })
}
