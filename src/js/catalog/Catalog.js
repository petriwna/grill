import { fromEvent } from 'rxjs';

import { Basket } from '../basket/Basket';
import { BasketModal } from '../modal/BasketModal';
import { ProductModal } from '../modal/ProductModal';

export class Catalog {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.btnDetails = document.querySelectorAll('.details');
    this.btnBuy = document.querySelectorAll('.card__button-buy');

    this.basket = new Basket();

    this.basketModal = new BasketModal(this.basket);
    this.productModal = new ProductModal(this.basket, this.basketModal);

    this.addClickListeners();
  }

  addClickListeners() {
    this.cards.forEach((card) => {
      fromEvent(card, 'click').subscribe((event) => this.handleCardClick(event));
    });

    this.btnDetails.forEach((btn) => {
      fromEvent(btn, 'click').subscribe((event) => this.handleClickDetails(event));
    });

    this.btnBuy.forEach((btn) => {
      fromEvent(btn, 'click').subscribe((event) => this.handleClickBuy(event));
    });
  }

  handleCardClick(event) {
    const card = event.currentTarget.closest('.card');
    this.productModal.openWithProduct(card);
  }

  handleClickDetails(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.card');
    if (card) {
      this.productModal.openWithProduct(card);
    }
  }

  handleClickBuy(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.card');
    const img = card.querySelector('.card__image').getAttribute('src');
    const name = card.querySelector('.card__title').textContent;
    const code = card.querySelector('.card__code').textContent;
    const price = card.querySelector('.price__new').textContent;
    const sizeList = card.querySelectorAll('.card__size');
    let size = null;

    if (sizeList.length !== 0) {
      size = sizeList[0].textContent;
    }

    if (card) {
      this.basketModal.openWithBasket(img, name, code, price, size, 1);
    }
  }
}