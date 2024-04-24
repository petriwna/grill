

export class Basket {

    constructor() {
        this.basketFab = document.querySelector('#basket')
        this.countBasket = document.querySelector('#basket-count');
        this.modal = new Modal();
        this.basket = {}
        this.addClickListeners();
    }

    addClickListeners() {
        this.basketFab.addEventListener('click', () => this.handleClickFab())
    }

    handleClickFab(){
        this.modal.openModalBasket();
    }

    addProduct(card) {
        // const productName = card.querySelector('.card__title').textContent;
        console.log(card)
        this.basketFab.style.display = 'flex';
        // this.basket[productName] = 1;
        // console.log(this.basket)

        this.count = this.basket.length;
        this.countBasket.textContent = this.count;
    }
}




export class Catalog {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.btnDetails = document.querySelectorAll('.details');
        this.btnBuy = document.querySelectorAll('.card__button-buy')
        this.modal = new Modal();
        this.basket = new Basket();
        this.addClickListeners()
    }

    addClickListeners() {
        this.cards.forEach(card => {
            card.addEventListener('click', event => this.handleCardClick(event));
        });

        this.btnDetails.forEach(btn => {
            btn.addEventListener('click', event => this.handleClickDetails(event));
        });

        this.btnBuy.forEach(btn => {
            btn.addEventListener('click', event => this.handleClickBuy(event));
        });
    }

    handleCardClick(event) {
        const card = event.currentTarget.closest('.card');
        this.modal.openModalProduct(card);
    }

    openModal(card, event){
        this.modal.openModal(card, event);
    }

    handleClickDetails(event) {
        event.stopPropagation();
        const card = event.currentTarget.closest('.card');
        if (card) {
            this.openModal(card, event);
        }
    }

    handleClickBuy(event) {
        event.stopPropagation();
        const card = event.currentTarget.closest('.card');
        this.openModal(card, event);
        if (card) {
            this.basket.addProduct(card);
        }
    }
}



export function init() {
    document.getElementById('up').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
    new Catalog();
}

document.addEventListener('DOMContentLoaded', init);

export class Modal {
    constructor() {
        this.backdropProduct = document.querySelector('#modal-product');
        this.backdropBasket = document.querySelector('#modal-basket');
        this.btnCloseProduct = document.querySelector('#close-product');
        this.btnCloseBasket = document.querySelector('#close-basket');
        this.modalTitle = document.querySelector('.modal__title');
        this.modalCode = document.querySelector('.modal__code');
        this.modalPrice = document.querySelector('.modal__price');
        this.modalDescription = document.querySelector('.modal__description');
        this.handleClickBtnClose();
    }

    openModal(card, event) {
        const isBtnDetails = event.currentTarget.classList.contains('details');

        if (isBtnDetails) {
            this.openModalProduct(card);
            this.handleClickOutside(this.backdropProduct);
        } else {
            this.openModalBasket();
            this.handleClickOutside(this.backdropBasket);
        }
    }

    openModalBasket() {
        this.backdropBasket.classList.toggle('is-hidden');
    }

    openModalProduct(card) {
        this.backdropProduct.classList.toggle('is-hidden');
        this.getProductDescription(card);
        this.closeProductModal();
    }

    toggle(backdrop) {
        backdrop.classList.toggle('is-hidden');
    }

    getProductDescription(card) {
        const cardTitle = card.querySelector('.card__title').textContent;
        const cardCode = card.querySelector('.card__code').textContent;
        const cardPriceOld = card.querySelector('.price__old').textContent;
        const cardPriceNew = card.querySelector('.price__new').textContent;
        const cardDescription = card.querySelector('.product');
        const cardDescriptionCopy = cardDescription.cloneNode(true);

        cardDescriptionCopy.classList.remove('visually-hidden');
        this.modalTitle.textContent = cardTitle;
        this.modalCode.textContent = cardCode;
        this.modalPrice.innerHTML = `
            <p class="price__new">${cardPriceNew}</p>
            <p class="price__old">${cardPriceOld}</p>
        `;
        this.modalDescription.appendChild(cardDescriptionCopy);
        this.btnCloseBasket.addEventListener('click', () => this.toggle(this.backdropBasket));
    }

    closeProductModal() {
        const isBackdropHidden = this.backdropProduct.classList.contains('is-hidden');
        if (isBackdropHidden) {
            const cardDescriptionCopy = this.modalDescription.querySelector('.product');
            this.modalDescription.removeChild(cardDescriptionCopy)
        }
    }

    handleClickOutside(backdrop) {
        backdrop.addEventListener('click', event => {
            if (event.target === backdrop) {
                this.toggle(backdrop);
            }
        });
    }

    handleClickBtnClose() {
        this.btnCloseBasket.addEventListener('click', () => this.toggle(this.backdropBasket));
        this.btnCloseProduct.addEventListener('click', () => this.toggle(this.backdropProduct));
    }
}
