


export class Catalog {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.btnDetails = document.querySelectorAll('.details')
        this.modal = new Modal('.backdrop', '.modal-btn-close');
        this.addClickListeners()
    }

    addClickListeners() {
        this.cards.forEach(card => {
            card.addEventListener('click', event => this.handleCardClick(event));
        });

        this.btnDetails.forEach(btn => {
            btn.addEventListener('click', event => this.handleClickDetails(event))
        })
    }

    handleCardClick(event) {
        this.openModal(event);
    }

    openModal(event){
        const card = event.currentTarget;
        this.modal.toggle(card);
    }

    handleClickDetails(event) {
        event.stopPropagation();
        this.openModal(event);
    }

    handleClickBuy() {

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
    constructor(backdropSelector, closeBtnSelector) {
        this.backdrop = document.querySelector(backdropSelector);
        this.modalBtnClose = document.querySelector(closeBtnSelector);
        this.modalTitle = document.querySelector('.modal__title');
        this.modalCode = document.querySelector('.modal__code');
        this.modalPrice = document.querySelector('.modal__price');
        this.modalDescription = document.querySelector('.modal__description')
        this.handleClickClose();
    }

    toggle(card) {
        const isBackdropHidden = this.backdrop.classList.contains('is-hidden');

        this.backdrop.classList.toggle('is-hidden');

        if (isBackdropHidden) {
            this.getCategory(card)
        } else {
            this.close();
        }
    }

    getCategory(card) {
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
    }

    close() {
        const cardDescriptionCopy = this.modalDescription.querySelector('.product');

        this.modalDescription.removeChild(cardDescriptionCopy)
    }

    handleClickClose() {
        this.modalBtnClose.addEventListener('click', () => this.toggle());

        this.backdrop.addEventListener('click', event => {
            if (event.target === this.backdrop) {
                this.toggle();
            }
        });
    }
}
