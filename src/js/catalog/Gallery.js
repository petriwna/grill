export class Gallery {
  constructor(gallery) {
    this.gallery = gallery;
    this.imagesUrl = [];
  }

  renderGallery(product) {
    const splideContainer = this.createContainerSlides('main-carousel');
    const thumbnailsContainer = this.createContainerSlides('thumbnail-carousel');

    product.imgsUrl.forEach((url) => {
      this.imagesUrl.push(url);
      this.createGallerySlide(url, product.name, splideContainer.querySelector('.splide__list'));
      this.createGallerySlide(
        url,
        product.name,
        thumbnailsContainer.querySelector('.splide__list'),
      );
    });

    this.gallery.appendChild(splideContainer);
    this.gallery.appendChild(thumbnailsContainer);

    return { splideContainer, thumbnailsContainer };
  }

  createContainerSlides(id) {
    const splideContainer = document.createElement('div');
    splideContainer.classList.add('gallery__splide');
    splideContainer.classList.add('splide');
    splideContainer.setAttribute('id', id);

    const demo = document.createElement('div');
    demo.classList.add('splide__track');
    const imgList = document.createElement('ul');
    imgList.classList.add('splide__list');

    demo.appendChild(imgList);
    splideContainer.appendChild(demo);

    return splideContainer;
  }

  createGallerySlide(url, title, container) {
    const slides = document.createElement('li');
    slides.classList.add('splide__slide');
    const parent = container.parentNode.parentNode;
    if (parent.getAttribute('id') === 'thumbnail-carousel') {
      slides.classList.add('gallery__slide');
    }

    const image = document.createElement('img');
    image.src = url;
    image.alt = title;
    image.loading = 'lazy';

    slides.appendChild(image);
    container.appendChild(slides);
  }
}
