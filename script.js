const categories = [
  {
    id: 1,
    src: './assets/categories/bedroom.jpg',
    alt: 'bedroom',
    desc: 'bedroom',
  },
  {
    id: 2,
    src: './assets/categories/kitchen.jpg',
    alt: 'kitchen',
    desc: 'kitchen',
  },
  {
    id: 3,
    src: './assets/categories/livingroom.jpg',
    alt: 'livingroom',
    desc: 'livingroom',
  },
  {
    id: 4,
    src: './assets/categories/outdoor.jpg',
    alt: 'outdoor',
    desc: 'outdoor',
  },
  {
    id: 5,
    src: './assets/categories/bathroom.jpg',
    alt: 'bathroom',
    desc: 'bathroom',
  },
];

const displayCategories = function () {
  const productsContainer = document.querySelector('.categories__grid');
  categories.forEach(cat => {
    const { id, src, alt, desc } = cat;

    const html = `
      <div class="category__card">
        <div class="container__img">
          <img
            class="category__img"
            src=${src}
            alt=${alt}
          />
        </div>
        <p class="category__desc">${desc}</p>
      </div>
    `;
    productsContainer.insertAdjacentHTML('afterbegin', html);
  });
};

displayCategories();

const products = [
  {
    id: 1,
    src: './assets/card-compressed/card-1.jpg',
    alt: 'blue sofa',
    title: 'Blue Sofa',
    rating: 4.5,
    price: 1500000,
    isBestSeller: true,
  },
  {
    id: 2,
    src: './assets/card-compressed/card-2.jpg',
    alt: 'grey chair',
    title: 'Grey Chair',
    rating: 3.5,
    price: 500000,
    isBestSeller: false,
  },
  {
    id: 3,
    src: './assets/card-compressed/card-3.jpg',
    alt: 'wood table',
    title: 'Wood Table',
    rating: 3.8,
    price: 2000000,
    isBestSeller: false,
  },
  {
    id: 4,
    src: './assets/card-compressed/card-4.jpg',
    alt: 'relax chair',
    title: 'Livingroom Chair',
    rating: 3.7,
    price: 700000,
    isBestSeller: false,
  },
  {
    id: 5,
    src: './assets/card-compressed/card-5.jpg',
    alt: 'wooden chair',
    title: 'Wooden Chair',
    rating: 4.4,
    price: 750000,
    isBestSeller: true,
  },
  {
    id: 6,
    src: './assets/card-compressed/card-6.jpg',
    alt: 'table',
    title: 'Minimalist Table',
    rating: 3.7,
    price: 1350000,
    isBestSeller: false,
  },
  {
    id: 7,
    src: './assets/card-compressed/card-7.jpg',
    alt: 'chair',
    title: 'Outdoor Chair',
    rating: 3.7,
    price: 1000000,
    isBestSeller: false,
  },
  {
    id: 8,
    src: './assets/card-compressed/card-8.jpg',
    alt: 'table',
    title: 'Office Table',
    rating: 3.7,
    price: 2500000,
    isBestSeller: false,
  },
];

// const arr = [4, 6, 1, 2, 8, 5, 10, 9];

const productsContainer = document.querySelector('.products__grid');
displayProducts = function () {
  products.forEach(prod => {
    const { id, alt, src, title, rating, isBestSeller, price } = prod;

    const html = `
      <div class="product__card--${isBestSeller ? 'best' : ''}">
      <div class="img__container">
        <img
        class="product__img"
        src=${src}
        alt=${alt}
        />
      </div>
        <div class="product__desc">
          <p class="product__title">${title}</p>
          <div class="icon__flex">
            <i class="ph-star-fill icon"></i>
            <p class="product__rate">${rating}</p>
          </div>
          <div class="product__price">
            <button class="product__btn">
              <i class="ph-shopping-cart-simple-fill icon-cart"></i>
              Add Cart
            </button>
            <p>IDR ${price.toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
    `;

    productsContainer.insertAdjacentHTML('afterbegin', html);
  });
};

displayProducts();

const ascIcon = document.querySelector('.icon__sort.ascending');
const descIcon = document.querySelector('.icon__sort.descending');

ascIcon.addEventListener('click', function () {
  productsContainer.innerHTML = '';
  products.sort((a, b) => b.price - a.price);
  displayProducts();
});

descIcon.addEventListener('click', function () {
  productsContainer.innerHTML = '';
  products.sort((a, b) => a.price - b.price);
  displayProducts();
});

const icons = document.querySelectorAll('.icon__nav');
const header = document.querySelector('.header');

for (let icon of icons) {
  icon.addEventListener('click', () => header.classList.toggle('nav-open'));
}

const sectionHero = document.querySelector('.section__hero');
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  // console.log(ent);

  const logo = document.querySelector('.logo');
  const logo2 = document.querySelector('.logo2');
  const link = document.querySelectorAll('.main-nav-link');
  const iconMenu = document.querySelector('.icon__nav.menu');

  if (ent.isIntersecting === false) {
    document.querySelector('.header').classList.add('intersect');
    link.forEach(l => l.classList.add('intersect'));
    logo.classList.add('intersect');
    logo2.classList.remove('intersect');
    iconMenu.classList.add('white');
  }

  if (ent.isIntersecting === true) {
    document.querySelector('.header').classList.remove('intersect');
    link.forEach(l => l.classList.remove('intersect'));
    logo.classList.remove('intersect');
    logo2.classList.add('intersect');
    iconMenu.classList.remove('white');
  }
});
obs.observe(sectionHero);

const mainNavs = document.querySelectorAll('.main-nav-link');
for (nav of mainNavs) {
  nav.addEventListener('click', () => header.classList.remove('nav-open'));
}
