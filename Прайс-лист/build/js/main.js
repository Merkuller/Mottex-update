// Счётчик карточки
// priceList-counter

if (document.querySelector('.price-list')) {

    let contentBlock = document.querySelector('.price-list');

    contentBlock.addEventListener('click', e => {
        if (e.target.classList.contains('card__plus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            let shopBasketEl = field.parentElement.nextElementSibling;
            field.value ++;
            shopBasketEl.classList.add('change-position');
        } 
        if (e.target.classList.contains('card__minus-btn')) {
            e.preventDefault();
            let field = e.target.parentElement.querySelector('.card__field');
            field.value --;
        }
    })

    contentBlock.addEventListener('input', e => {
        if (e.target.classList.contains('card__field')) {
            e.target.parentElement.nextElementSibling.classList.add('change-position'); 
            let el = e.target.ownerDocument;
            console.log(el.childNodes);
        } 
    })
}