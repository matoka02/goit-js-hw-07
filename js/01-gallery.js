import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(basicLightbox);

// const instance = basicLightbox.create(`
// 	<h1>Not closable</h1>
// 	<p>It's not possible to close this lightbox with a click.</p>
// `, {
//     closable: false
// });

// instance.show();

// instance.show(() => console.log('lightbox now visible'));

const gallery = document.querySelector('.gallery');

// вариант создания разметки

// const items = []

// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div');
// 	galleryItem.className = 'gallery__item';
// 	const galleryLink = document.createElement('a');
// 	galleryLink.className = 'gallery__link';
// 	galleryLink.href = element.original;
// 	const galleryImage = document.createElement('img');
//     galleryImage.className = 'gallery__image';
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('data-source', element.original);
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink);
// 	galleryLink.append(galleryImage);
// 	items.push(galleryItem);
// })

// gallery.append(...items);

const markup = galleryItems.map(({preview, original, description})=>`<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </li>`
).join(``);

// console.log(markup);

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', evt => {
    evt.preventDefault();
	// console.log(evt.target.nodeName);
    if (evt.target.nodeName !== 'IMG') {
		return;
	};

    const selectedImage = evt.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">`);

    instance.show();
    
    gallery.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
            console.log(evt.key);
			instance.close()
		};
	});
});
