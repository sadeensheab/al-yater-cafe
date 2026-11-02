
const menuItems = {
  hot: [
    { name: "قهوة تركي صغيرة", price: "1.00 دينار" },
    { name: "قهوة تركي كبيرة", price: "1.50 دينار" },
    { name: "استكانة شاي", price: "1.00 دينار" },
    { name: "نسكافيه", price: "1.00 دينار" },
    { name: "شوكولاتة ساخنة", price: "1.00 دينار" },
    { name: "شاي كرك", price: "1.00 دينار" },
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
    { name: "عصير ليمون ونعناع", price: "2.75 دينار" },
    { name: "عصير برتقال", price: "2.50 دينار" },
    { name: "كوكتيل فراولة وموز بالحليب", price: "2.75 دينار" },
    { name: "كوكتيل فواكه مشكل", price: "2.75 دينار" },
    { name: "سلاش ليمون", price: "2.50 دينار" },
    { name: "عصير أفوكادو بالعسل والقشطة", price: "3.00 دنانير" },
    { name: "عصير أفوكادو", price: "2.50 دينار" },
    { name: "عصير رمان", price: "2.75 دينار" },
    { name: "موهيتو سفن أب", price: "1.50 دينار" },
    { name: "موهيتو سفن أب حامض", price: "1.50 دينار" },
    { name: "موهيتو سفن أب حلو", price: "1.50 دينار" },
    { name: "موهيتو ليمون ونعناع", price: "1.50 دينار" }
  ],

  milkshake: [
    { name: "ميلك شيك أوريو", price: "3.00 دنانير" },
    { name: "ميلك شيك سنكرز", price: "2.75 دينار" },
    { name: "ميلك شيك كيت كات", price: "2.75 دينار" },
    { name: "ميلك شيك بيستاشيو", price: "3.00 دنانير" },
    { name: "ميلك شيك نوتيلا", price: "2.75 دينار" },
    { name: "ميلك شيك لوتس", price: "2.50 دينار" },
    { name: "ميلك شيك عربي", price: "2.50 دينار" }
  ],

  mix: [
    { name: "مكس بي إم حلو", price: "1.50 دينار" },
    { name: "مكس بي إم حامض", price: "1.50 دينار" },
    { name: "مكس بي إم حامض حلو", price: "1.50 دينار" },
    { name: "مكس بي إم فراولة", price: "1.50 دينار" },
    { name: "مكس بي إم توت", price: "1.50 دينار" },

    { name: "مكس بوم بوم حلو", price: "1.75 دينار" },
    { name: "مكس بوم بوم حامض", price: "1.75 دينار" },
    { name: "مكس بوم بوم حامض حلو", price: "1.75 دينار" },
    { name: "مكس بوم بوم فراولة", price: "1.75 دينار" },
    { name: "مكس بوم بوم توت", price: "1.75 دينار" },

    { name: "مكس كوداردو", price: "2.00 دينار" },
    { name: "مكس بطيخ", price: "1.75 دينار" },
    { name: "مكس رمان", price: "1.75 دينار" },
    { name: "مكس باشن فروت", price: "1.75 دينار" }
  ],

  shisha: [
    { name: "تفاحتين نخلة", price: "3.00 دنانير" },
    { name: "تفاحتين مزايا", price: "2.50 دينار" },
    { name: "ليمون ونعنع", price: "2.50 دينار" },
    { name: "بطيخ ونعنع", price: "2.50 دينار" },
    { name: "علكة وقرفة", price: "2.50 دينار" },
    { name: "عنب وتوت", price: "2.50 دينار" },
    { name: "تجديد رأس الزغلول", price: "1.50 دينار" },
    { name: "تجديد الرأس", price: "2.00 دينار" },
    { name: "زغلول", price: "2.00 دينار" }
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
