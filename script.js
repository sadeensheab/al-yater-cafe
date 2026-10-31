
const menuItems = {
  hot: [
    ["قهوة تركي صغيرة", "1.00 دينار", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85"],
    ["قهوة تركي كبيرة", "1.50 دينار", "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85"],
    ["استكانة شاي", "1.00 دينار", "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85"],
    ["نسكافيه", "1.00 دينار", "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85"],
    ["شوكولاتة ساخنة", "1.00 دينار", "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=85"],
    ["شاي كرك", "1.00 دينار", "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=85"],
    ["لاتيه", "1.00 دينار", "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85"],
    ["نسكافيه بالبندق", "1.00 دينار", "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85"],
    ["زهورات", "1.00 دينار", "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85"],
    ["بابونج", "1.00 دينار", "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85"],
    ["مليسة", "1.00 دينار", "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85"],
    ["زنجبيل مع ليمون وعسل", "1.50 دينار", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"]
  ],

  cold: [
    ["بيبسي", "1.00 دينار", "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=85"],
    ["سفن أب", "1.00 دينار", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["ميرندا", "1.00 دينار", "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=85"],
    ["باربيكان", "1.00 دينار", "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=85"],
    ["بي إم (BM)", "1.25 دينار", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["بوم بوم", "1.75 دينار", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"]
  ],

  juice: [
    ["ليمون ونعناع", "السعر عند الطلب", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["عصير برتقال", "السعر عند الطلب", "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85"],
    ["كوكتيل فراولة وموز بالحليب", "السعر عند الطلب", "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85"],
    ["كوكتيل فواكه مشكل", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["سلاش ليمون", "السعر عند الطلب", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["أفوكادو بالعسل والقشطة", "السعر عند الطلب", "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=85"],
    ["عصير أفوكادو", "السعر عند الطلب", "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=85"],
    ["عصير رمان", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"]
  ],

  milkshake: [
    ["أوريو", "السعر عند الطلب", "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"],
    ["سنكرز", "السعر عند الطلب", "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=85"],
    ["كيت كات", "السعر عند الطلب", "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"],
    ["بيستاشيو", "السعر عند الطلب", "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=85"],
    ["نوتيلا", "السعر عند الطلب", "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"],
    ["لوتس", "السعر عند الطلب", "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=85"],
    ["عربي", "السعر عند الطلب", "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"]
  ],

  mix: [
    ["موهيتو سفن أب", "السعر عند الطلب", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["موهيتو سفن أب حامض", "السعر عند الطلب", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["موهيتو سفن أب حلو", "السعر عند الطلب", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?auto=format&fit=crop&w=800&q=85"],
    ["مكس بي إم حلو", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بي إم حامض", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بي إم حامض حلو", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بي إم فراولة", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["مكس بي إم توت", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["مكس بوم بوم حلو", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بوم بوم حامض", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بوم بوم حامض حلو", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"],
    ["مكس بوم بوم فراولة", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["مكس بوم بوم توت", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["مكس بطيخ", "السعر عند الطلب", "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=800&q=85"],
    ["مكس رمان", "السعر عند الطلب", "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"],
    ["مكس باشن فروت", "السعر عند الطلب", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85"]
  ],

  argileh: [
    ["تفاحتين نخلة", "3.00 دنانير", ""],
    ["تفاحتين مزايا", "2.50 دينار", ""],
    ["ليمون ونعنع", "2.50 دينار", ""],
    ["بطيخ ونعنع", "2.50 دينار", ""],
    ["علكة وقرفة", "2.50 دينار", ""],
    ["عنب وتوت", "2.50 دينار", ""],
    ["تجديد رأس الزغلول", "1.50 دينار", ""],
    ["تجديد الرأس", "2.00 دينار", ""],
    ["زغلول", "2.00 دينار", ""]
  ]
};

const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".menu-tabs .tab");

function renderMenu(category) {
  if (!menuGrid || !menuItems[category]) return;

  menuGrid.innerHTML = menuItems[category].map(([name, price, image]) => `
    <article class="menu-card">
      ${image ? `
        <img
          src="${image}"
          alt="${name}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
      ` : ""}
      <div class="menu-card-body">
        <h3>${name}</h3>
        <span class="price">${price}</span>
      </div>
    </article>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("hot");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
