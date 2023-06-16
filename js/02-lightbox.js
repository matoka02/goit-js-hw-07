import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description})=>`<li class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>
    </li>`
).join(``);

// console.log(markup);

gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionDelay: 250, 
    download: false
});