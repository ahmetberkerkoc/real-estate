// Active nav link (based on current filename)
(function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a[data-page]").forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });
})();

// Mobile menu
(function mobileMenu(){
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Toast helper
function showToast(title, msg){
  const toast = document.getElementById("toast");
  if (!toast) return alert(`${title}\n${msg}`);

  toast.querySelector("#toastTitle").textContent = title;
  toast.querySelector("#toastMsg").textContent = msg;
  toast.classList.add("show");

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}
(function toastClose(){
  const close = document.getElementById("toastClose");
  const toast = document.getElementById("toast");
  if (!close || !toast) return;
  close.addEventListener("click", () => toast.classList.remove("show"));
})();

// Listings page: filter + render (reads from embedded dataset in the page)
(function listingsPage(){
  const grid = document.getElementById("listingGrid");
  const countEl = document.getElementById("count");
  if (!grid || !countEl) return;

  const cityEl = document.getElementById("qCity");
  const typeEl = document.getElementById("qType");
  const minEl  = document.getElementById("qMin");
  const maxEl  = document.getElementById("qMax");
  const applyBtn = document.getElementById("applyFilters");

  function applyFilters(){
    const city = cityEl?.value ?? "any";
    const type = typeEl?.value ?? "any";
    const min  = Number(minEl?.value ?? 0);
    const max  = Number(maxEl?.value ?? 999999999);

    const cards = [...grid.querySelectorAll(".card")];
    let visible = 0;

    for (const card of cards){
      const c = card.dataset.city;
      const t = card.dataset.type;
      const p = Number(card.dataset.price);

      const okCity  = (city === "any") || (c === city);
      const okType  = (type === "any") || (t === type);
      const okPrice = (p >= min) && (p <= max);

      const show = okCity && okType && okPrice;
      card.style.display = show ? "flex" : "none";
      if (show) visible++;
    }

    countEl.textContent = String(visible);
    showToast("Filters applied", `Showing ${visible} listing${visible === 1 ? "" : "s"}.`);
  }

  applyBtn?.addEventListener("click", applyFilters);

  // Details button -> go to listing detail with ?id=
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action='details']");
    if (!btn) return;
    const card = btn.closest(".card");
    const id = card?.dataset.id;
    if (!id) return;
    location.href = `listing.html?id=${encodeURIComponent(id)}`;
  });
})();

// Listing detail page: populate from embedded JSON in the page
(function listingDetailPage(){
  const root = document.getElementById("listingDetail");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "p1";

  const dataScript = document.getElementById("listingData");
  if (!dataScript) return;

  let listings = [];
  try { listings = JSON.parse(dataScript.textContent); } catch {}

  const item = listings.find(x => x.id === id) || listings[0];
  if (!item) return;

  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailMeta").textContent = `${item.cityLabel} • ${item.beds} bed • ${item.baths} bath • ${item.size} m²`;
  document.getElementById("detailPrice").textContent = item.priceLabel;
  document.getElementById("detailTag").textContent = item.tag;
  document.getElementById("detailDesc").textContent = item.description;

  const chips = document.getElementById("detailChips");
  chips.innerHTML = item.features.map(f => `<span class="chip">${f}</span>`).join("");

  // Map embed (OpenStreetMap)
  const map = document.getElementById("osmMap");
  const { lat, lng } = item.location;
  const bbox = `${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}`;
  map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
})();

// Contact form (demo)
(function contactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name")?.value || "").trim() || "there";
    showToast("Message ready", `Thanks, ${name}! Connect a backend to send emails.`);
    form.reset();
  });
})();

// Footer year
(function year(){
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
