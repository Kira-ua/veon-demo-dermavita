// Small progressive enhancements. Everything works and is visible without this script.
// 1) Mobile call bar appears once the hero is out of view (U-R002).
// 2) The <details> menu closes after an anchor is chosen or on Escape.

const bar = document.querySelector<HTMLElement>("[data-callbar]");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  bar.classList.add("is-armed");
  const io = new IntersectionObserver(
    ([entry]) => {
      const shown = !entry.isIntersecting;
      bar.classList.toggle("is-shown", shown);
      bar.toggleAttribute("inert", !shown);
    },
    { threshold: 0 },
  );
  io.observe(hero);
}

const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
}
