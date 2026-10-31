
const menuItems = {
  hot: [
    { name: "قهوة تركي صغيرة", price: "1.00 دينار" },
    { name: "قهوة تركي كبيرة", price: "1.50 دينار" },
    { name: "نسكافيه", price: "1.00 دينار" },
    { name: "شاي كرك", price: "1.00 دينار" },
    { name: "استكانة شاي", price: "1.00 دينار" },
    { name: "شوكولاتة ساخنة", price: "1.00 دينار" },
    { name: "لاتيه", price: "1.00 دينار" },
    { name: "نسكافيه بالبندق", price: "1.00 دينار" },
    { name: "زهورات", price: "1.00 دينار" },
    { name: "بابونج", price: "1.00 دينار" },
    { name: "مليسة", price: "1.00 دينار" },
    { name: "زنجبيل مع ليمون وعسل", price: "1.50 دينار" }
  ],

  cold: [
    { name: "بيبسي", price: "1.00 دينار" },
    { name: "سفن أب", price: "1.00 دينار" },
    { name: "ميرندا", price: "1.00 دينار" },
    { name: "باربيكان", price: "1.00 دينار" },
    { name: "بي إم BM", price: "1.25 دينار" },
    { name: "بوم بوم Boom Boom", price: "1.75 دينار" }
  ],

  juice: [
    { name: "ليمون ونعناع", price: "السعر عند الطلب" },
    { name: "عصير برتقال", price: "السعر عند الطلب" },
    { name: "كوكتيل فراولة وموز بالحليب", price: "السعر عند الطلب" },
    { name: "كوكتيل فواكه مشكل", price: "السعر عند الطلب" },
    { name: "سلاش ليمون", price: "السعر عند الطلب" },
    { name: "عصير أفوكادو بالعسل والقشطة", price: "السعر عند الطلب" },
    { name: "عصير أفوكادو", price: "السعر عند الطلب" },
    { name: "عصير رمان", price: "السعر عند الطلب" },
    { name: "موهيتو سفن أب", price: "السعر عند الطلب" },
    { name: "موهيتو سفن أب حامض", price: "السعر عند الطلب" },
    { name: "موهيتو سفن أب حلو", price: "السعر عند الطلب" },
    { name: "موهيتو ليمون ونعناع", price: "السعر عند الطلب" }
  ],

  milkshake: [
    { name: "ميلك شيك أوريو", price: "السعر عند الطلب" },
    { name: "ميلك شيك سنكرز", price: "السعر عند الطلب" },
    { name: "ميلك شيك كيت كات", price: "السعر عند الطلب" },
    { name: "ميلك شيك بيستاشيو", price: "السعر عند الطلب" },
    { name: "ميلك شيك نوتيلا", price: "السعر عند الطلب" },
    { name: "ميلك شيك لوتس", price: "السعر عند الطلب" },
    { name: "ميلك شيك عربي", price: "السعر عند الطلب" }
  ],

  mix: [
    { name: "مكس بوم بوم حلو", price: "1.75 دينار" },
    { name: "مكس بوم بوم حامض", price: "1.75 دينار" },
    { name: "مكس بوم بوم حامض حلو", price: "1.75 دينار" },
    { name: "مكس بوم بوم فراولة", price: "1.75 دينار" },
    { name: "مكس بوم بوم توت", price: "1.75 دينار" },
    { name: "مكس BM حلو", price: "1.25 دينار" },
    { name: "مكس BM حامض", price: "1.25 دينار" },
    { name: "مكس BM حامض حلو", price: "1.25 دينار" },
    { name: "مكس BM فراولة", price: "1.25 دينار" },
    { name: "مكس BM توت", price: "1.25 دينار" },
    { name: "مكس بطيخ", price: "السعر عند الطلب" },
    { name: "مكس رمان", price: "السعر عند الطلب" },
    { name: "مكس باشن فروت", price: "السعر عند الطلب" }
  ],

  shisha: [
    { name: "تفاحتين نخلة", price: "3.00 دنانير" },
    { name: "تفاحتين مزايا", price: "2.50 دينار" },
    { name: "ليمون ونعنع", price: "2.50 دينار" },
    { name: "بطيخ ونعنع", price: "2.50 دينار" },
    { name: "علكة وقرفة", price: "2.50 دينار" },
    { name: "عنب وتوت", price: "2.50 دينار" },
    { name: "زغلول", price: "2.00 دينار" },
    { name: "تجديد رأس الزغلول", price: "1.50 دينار" },
    { name: "تجديد الرأس", price: "2.00 دينار" }
  ]
};

// عرض الأصناف بدون صور
const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.getElementById("menuTabs");

function showMenu(category) {
  const items = menuItems[category] || [];

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card">
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <span class="menu-price">${item.price}</span>
      </div>
    </article>
  `).join("");

  menuTabs.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle(
      "active",
      tab.dataset.category === category
    );
  });
}

menuTabs.addEventListener("click", event => {
  const button = event.target.closest(".tab");
  if (!button) return;

  showMenu(button.dataset.category);
});

showMenu("hot");

// صور الواجهة الرئيسية المتحركة
const heroImage = document.getElementById("heroImage");
const slideNumber = document.getElementById("slideNumber");

const heroPhotos = [
  "صور الياطر/0f680829-f1b7-4d8d-a3b5-6e246eef0502.jpg",
  "صور الياطر/48e1629b-fd47-4e14-97df-1da34a3ae283.jpg",
  "صور الياطر/4a7b5cfe-2223-4126-8ead-0209073ce97e.jpg"
];

heroPhotos.forEach(src => {
  const image = new Image();
  image.src = src;
});

let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % heroPhotos.length;
  heroImage.classList.add("changing");

  setTimeout(() => {
    heroImage.style.backgroundImage =
      `url("${heroPhotos[currentSlide]}")`;

    slideNumber.textContent =
      String(currentSlide + 1).padStart(2, "0");

    heroImage.classList.remove("changing");
  }, 450);
}, 5500);

// قائمة الموبايل
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// السنة الحالية
document.getElementById("year").textContent =
  new Date().getFullYear();

// تفعيل رابط القسم الظاهر
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "top";

  ["story", "menu", "gallery", "contact"].forEach(id => {
    const section = document.getElementById(id);

    if (
      section &&
      window.scrollY >= section.offsetTop - 150
    ) {
      current = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});
