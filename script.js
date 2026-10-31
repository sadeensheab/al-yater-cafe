
const menuItems = {
  hot: [
    { name: "قهوة تركي صغيرة", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=600" },
    { name: "قهوة تركي كبيرة", price: "1.50 دينار", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" },
    { name: "نسكافيه", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600" },
    { name: "شاي كرك", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600" },
    { name: "استكانة شاي", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600" },
    { name: "شوكولاتة ساخنة", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1542990253-0b8be8a7d9b4?w=600" },
    { name: "لاتيه", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" },
    { name: "نسكافيه بالبندق", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600" },
    { name: "زهورات", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600" },
    { name: "بابونج", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600" },
    { name: "مليسة", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600" },
    { name: "زنجبيل مع ليمون وعسل", price: "1.50 دينار", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600" }
  ],

  cold: [
    { name: "بيبسي", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600" },
    { name: "سفن أب", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "ميرندا", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600" },
    { name: "باربيكان", price: "1.00 دينار", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600" },
    { name: "بي إم BM", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "بوم بوم Boom Boom", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" }
  ],

  juice: [
    { name: "ليمون ونعناع", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "عصير برتقال", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600" },
    { name: "كوكتيل فراولة وموز بالحليب", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600" },
    { name: "كوكتيل فواكه مشكل", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600" },
    { name: "سلاش ليمون", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "عصير أفوكادو بالعسل والقشطة", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600" },
    { name: "عصير أفوكادو", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600" },
    { name: "عصير رمان", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600" },
    { name: "موهيتو سفن أب", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "موهيتو سفن أب حامض", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "موهيتو سفن أب حلو", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
    { name: "موهيتو ليمون ونعناع", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" }
  ],

  milkshake: [
    { name: "ميلك شيك أوريو", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك سنكرز", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك كيت كات", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك بيستاشيو", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك نوتيلا", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك لوتس", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" },
    { name: "ميلك شيك عربي", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" }
  ],

  mix: [
    { name: "مكس بوم بوم حلو", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس بوم بوم حامض", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس بوم بوم حامض حلو", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس بوم بوم فراولة", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس بوم بوم توت", price: "1.75 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس BM حلو", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس BM حامض", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس BM حامض حلو", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس BM فراولة", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس BM توت", price: "1.25 دينار", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },
    { name: "مكس بطيخ", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600" },
    { name: "مكس رمان", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600" },
    { name: "مكس باشن فروت", price: "السعر عند الطلب", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
  ],

  shisha: [
    { name: "تفاحتين نخلة", price: "3.00 دنانير", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "تفاحتين مزايا", price: "2.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "ليمون ونعنع", price: "2.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "بطيخ ونعنع", price: "2.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "علكة وقرفة", price: "2.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "عنب وتوت", price: "2.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "زغلول", price: "2.00 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "تجديد رأس الزغلول", price: "1.50 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" },
    { name: "تجديد الرأس", price: "2.00 دينار", image: "صور الياطر/e73a7197-0678-4e98-8f61-396b96880df7.jpg" }
  ]
};

// عرض أصناف القائمة
const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.getElementById("menuTabs");

function showMenu(category) {
  const items = menuItems[category] || [];

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card">
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/3a2417/e8c58b?text=Al+Yater'">
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <span class="menu-price">${item.price}</span>
      </div>
    </article>
  `).join("");

  menuTabs.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });
}

menuTabs.addEventListener("click", event => {
  const button = event.target.closest(".tab");
  if (!button) return;
  showMenu(button.dataset.category);
});

showMenu("hot");

// صور الواجهة المتحركة
const heroImage = document.getElementById("heroImage");
const slideNumber = document.getElementById("slideNumber");

const heroPhotos = [
  "صور الياطر/0f680829-f1b7-4d8d-a3b5-6e246eef0502.jpg",
  "صور الياطر/48e1629b-fd47-4e14-97df-1da34a3ae283.jpg",
  "صور الياطر/4a7b5cfe-2223-4126-8ead-0209073ce97e.jpg"
];

// تحميل الصور مسبقاً لتقليل التأخير عند التبديل
heroPhotos.forEach(src => {
  const image = new Image();
  image.src = src;
});

let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % heroPhotos.length;
  heroImage.classList.add("changing");

  setTimeout(() => {
    heroImage.style.backgroundImage = `url("${heroPhotos[currentSlide]}")`;
    slideNumber.textContent = String(currentSlide + 1).padStart(2, "0");
    heroImage.classList.remove("changing");
  }, 450);
}, 5500);

// قائمة التنقل على الموبايل
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

// السنة الحالية في أسفل الموقع
document.getElementById("year").textContent = new Date().getFullYear();

// تمييز رابط القسم الحالي في القائمة
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "top";

  ["story", "menu", "gallery", "contact"].forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 150) {
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
