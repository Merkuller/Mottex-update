// Счётчик карточки
// priceList-counter

if (document.querySelector('.price-list')) {

    let contentBlock = document.querySelector('.price-list');

    contentBlock.addEventListener('click', e => {
        if (e.target.classList.contains('card__plus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            field.value ++;
        } 
        if (e.target.classList.contains('card__minus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            field.value --;
        }
    })

}