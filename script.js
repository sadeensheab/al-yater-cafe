
// ===================================
// AL YATER COFFEE HOUSE
// ===================================

// صور المنتجات من Unsplash
const photos = {
  turkish: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=85",
  latte: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
  tea: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85",
  hot: "https://images.unsplash.com/photo-1578374173705-969cbe6f2b6b?auto=format&fit=crop&w=700&q=85",
  juice: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85",
  mojito: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=700&q=85",
  strawberry: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=85",
  milkshake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85",
  chocolate: "https://images.unsplash.com/photo-1542990253-0b8be5d7b4c0?auto=format&fit=crop&w=700&q=85",
  watermelon: "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=700&q=85",
  pomegranate: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=700&q=85",
  avocado: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=85",
  hookah: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=700&q=85",
  soda: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=85",
  berry: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85"
};

// ===================================
// MENU DATA
// ===================================

const menuItems = {
  hot: [
    { name: "قهوة تركي صغير", price: "1 دينار", image: photos.turkish },
    { name: "قهوة تركي كبير", price: "1.5 دينار", image: photos.coffee },
    { name: "استكانة شاي", price: "1 دينار", image: photos.tea },
    { name: "نسكافيه", price: "1 دينار", image: photos.coffee },
    { name: "شوكولاتة ساخنة", price: "1 دينار", image: photos.chocolate },
    { name: "شاي كرك", price: "1 دينار", image: photos.tea },
    { name: "لاتيه", price: "1 دينار", image: photos.latte },
    { name: "نسكافيه بالبندق", price: "1 دينار", image: photos.coffee },
    { name: "زهورات", price: "1 دينار", image: photos.tea },
    { name: "بابونج", price: "1 دينار", image: photos.tea },
    { name: "مليسة", price: "1 دينار", image: photos.tea },
    { name: "زنجبيل مع ليمون وعسل", price: "1.5 دينار", image: photos.hot }
  ],

  cold: [
    { name: "بيبسي", price: "1 دينار", image: photos.soda },
    { name: "سفن أب", price: "1 دينار", image: photos.soda },
    { name: "ميرندا", price: "1 دينار", image: photos.soda },
    { name: "باربيكان", price: "1 دينار", image: photos.soda },
    { name: "مكس بطيخ", price: "السعر عند الطلب", image: photos.watermelon },
    { name: "مكس رمان", price: "السعر عند الطلب", image: photos.pomegranate },
    { name: "مكس باشن فروت", price: "السعر عند الطلب", image: photos.juice }
  ],

  juice: [
    { name: "ليمون ونعناع", price: "السعر عند الطلب", image: photos.mojito },
    { name: "موهيتو سفن أب", price: "السعر عند الطلب", image: photos.mojito },
    { name: "موهيتو سفن أب حامض", price: "السعر عند الطلب", image: photos.mojito },
    { name: "موهيتو سفن أب حلو", price: "السعر عند الطلب", image: photos.mojito },
    { name: "عصير برتقال", price: "السعر عند الطلب", image: photos.juice },
    { name: "كوكتيل فراولة وموز بالحليب", price: "السعر عند الطلب", image: photos.strawberry },
    { name: "كوكتيل فواكه مشكل", price: "السعر عند الطلب", image: photos.berry },
    { name: "سلاش ليمون", price: "السعر عند الطلب", image: photos.mojito },
    { name: "عصير أفوكادو بالعسل والقشطة", price: "السعر عند الطلب", image: photos.avocado },
    { name: "عصير أفوكادو", price: "السعر عند الطلب", image: photos.avocado },
    { name: "عصير رمان", price: "السعر عند الطلب", image: photos.pomegranate }
  ],

  milkshake: [
    { name: "ميلك شيك أوريو", price: "السعر عند الطلب", image: photos.milkshake },
    { name: "ميلك شيك سنكرز", price: "السعر عند الطلب", image: photos.chocolate },
    { name: "ميلك شيك كيت كات", price: "السعر عند الطلب", image: photos.chocolate },
    { name: "ميلك شيك بيستاشيو", price: "السعر عند الطلب", image: photos.milkshake },
    { name: "ميلك شيك نوتيلا", price: "السعر عند الطلب", image: photos.chocolate },
    { name: "ميلك شيك لوتس", price: "السعر عند الطلب", image: photos.milkshake },
    { name: "ميلك شيك عربي", price: "السعر عند الطلب", image: photos.milkshake }
  ],

  mix: [
    { name: "خلطة BM حلو", price: "1.25 دينار", image: photos.berry },
    { name: "خلطة BM حامض", price: "1.25 دينار", image: photos.berry },
    { name: "خلطة BM حامض حلو", price: "1.25 دينار", image: photos.berry },
    { name: "خلطة BM فراولة", price: "1.25 دينار", image: photos.strawberry },
    { name: "خلطة BM توت", price: "1.25 دينار", image: photos.berry },
    { name: "خلطة بوم بوم حلو", price: "1.75 دينار", image: photos.berry },
    { name: "خلطة بوم بوم حامض", price: "1.75 دينار", image: photos.berry },
    { name: "خلطة بوم بوم حامض حلو", price: "1.75 دينار", image: photos.berry },
    { name: "خلطة بوم بوم فراولة", price: "1.75 دينار", image: photos.strawberry },
    { name: "خلطة بوم بوم توت", price: "1.75 دينار", image: photos.berry }
  ],

  argileh: [
    { name: "تفاحتين نخلة", price: "3 دنانير", image: photos.hookah },
    { name: "تفاحتين مزايا", price: "2.5 دينار", image: photos.hookah },
    { name: "ليمون ونعنع", price: "2.5 دينار", image: photos.hookah },
    { name: "بطيخ ونعنع", price: "2.5 دينار", image: photos.hookah },
    { name: "علكة وقرفة", price: "2.5 دينار", image: photos.hookah },
    { name: "عنب وتوت", price: "2.5 دينار", image: photos.hookah },
    { name: "زغلول", price: "2 دينار", image: photos.hookah },
    { name: "تجديد رأس الزغلول", price: "1.5 دينار", image: photos.hookah },
    { name: "تجديد الرأس", price: "2 دينار", image: photos.hookah }
  ]
};

// ===================================
// DISPLAY MENU
// ===================================

const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.querySelectorAll(".menu-tab");

function showMenu(category) {
  if (!menuGrid || !menuItems[category]) return;

  menuGrid.innerHTML = "";

  menuItems[category].forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.style.animationDelay = `${index * 0.04}s`;

    const imageBox = document.createElement("div");
    imageBox.className = "menu-card-image";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.loading = "lazy";
    image.onerror = () => {
      imageBox.innerHTML = '<div class="image-fallback">الياطر</div>';
    };

    imageBox.appendChild(image);

    const body = document.createElement("div");
    body.className = "menu-card-body";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = "من اختيارات كوفي الياطر";

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = item.price;

    body.append(title, description, price);
    card.append(imageBox, body);
    menuGrid.appendChild(card);
  });
}

menuTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    menuTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    showMenu(tab.dataset.category);
  });
});

// أول تصنيف يظهر
showMenu("hot");

// ===================================
// HERO SLIDER
// ===================================

const heroSlides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add("active");
  }, 5000);
}

// ===================================
// MOBILE NAVIGATION
// ===================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });
}

// ===================================
// STICKY HEADER
// ===================================

const header = document.getElementById("header");

function updateHeader() {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
}

window.addEventListener("scroll", updateHeader);
updateHeader();

// ===================================
// REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// ===================================
// FOOTER YEAR
// ===================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===================================
// PAGE LOADER
// ===================================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
      document.body.classList.remove("loading");
    }, 500);
  }
});

document.body.classList.add("loading");
