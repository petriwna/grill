

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
    console.log("init");
    new Catalog();
}

document.addEventListener('DOMContentLoaded', init);

export class Modal {
    constructor(backdropSelector, closeBtnSelector) {
        this.backdrop = document.querySelector(backdropSelector);
        this.modalBtnClose = document.querySelector(closeBtnSelector);
        this.modalTitle = document.querySelector('.modal__title');
        this.modalCode = document.querySelector('.modal__code');
        this.handleClickClose();
    }

    toggle(card) {
        const isBackdropHidden = this.backdrop.classList.contains('is-hidden');

        this.backdrop.classList.toggle('is-hidden');

        if (isBackdropHidden) {
            this.getCategory(card)
            console.log(card.dataset.id);
        }
    }

    getCategory(card) {
        const cardTitle = card.querySelector('.card__title').textContent;
        const cardCode = card.querySelector('.card__code').textContent;
        this.modalTitle.textContent = cardTitle;
        this.modalCode.textContent = cardCode;
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
