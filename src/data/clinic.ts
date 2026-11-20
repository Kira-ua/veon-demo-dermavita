// Facts only from veon/client.json; prices only from content/prices-verified.md (W-F020).
export const NOTE_SOON = "Розділ у розробці";

export const phones = {
  main: { label: "067 374 96 76", href: "tel:+380673749676", full: "+380 67 374 96 76" },
  others: [
    { label: "032 255 71 72", href: "tel:+380322557172", full: "+380 32 255 71 72" },
    { label: "067 436 52 24", href: "tel:+380674365224", full: "+380 67 436 52 24" },
  ],
} as const;

export const email = "dermavita15@gmail.com";
export const instagram = "https://www.instagram.com/dermavitalviv/";
export const youtube = "https://www.youtube.com/channel/UCL0BuduNzO_uBvZy1nr86vg";
export const address = { city: "Львів", street: "вул. І. Тиктора, 8" } as const;
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Львів, вул. І. Тиктора, 8");
export const license = "Ліцензія МОЗ №192/21М від 05.02.21";

export interface Procedure { name: string; price?: string; }
export interface Layer {
  id: string;
  name: string;
  short: string;
  depth: string;
  procedures: Procedure[];
}

export const dermatology = {
  id: "napryam-dermatologiya",
  name: "Дерматологія",
  procedures: [
    { name: "Консультація дерматолога" },
    { name: "Дерматоскопія" },
    { name: "Видалення новоутворень", price: "від 440 грн" },
  ] as Procedure[],
};

export const layers: Layer[] = [
  {
    id: "napryam-aparatna",
    name: "Естетична й апаратна косметологія",
    short: "Естетична й апаратна косметологія",
    depth: "поверхня шкіри",
    procedures: [
      { name: "IPL-терапія", price: "від 600 грн" },
      { name: "Мікроголковий RF-ліфтинг", price: "від 5500 грн" },
      { name: "Лазерне видалення судин", price: "від 490 грн" },
      { name: "Лазерна епіляція", price: "від 200 грн" },
    ],
  },
  {
    id: "napryam-inyektsiyi",
    name: "Ін'єкційна естетика",
    short: "Ін'єкційна естетика",
    depth: "дерма",
    procedures: [
      { name: "Біоревіталізація", price: "від 2100 грн" },
      { name: "Dysport", price: "2900 грн за зону" },
      { name: "Контурна пластика" },
    ],
  },
  {
    id: "napryam-trykhologiya",
    name: "Трихологія",
    short: "Трихологія",
    depth: "волосяний фолікул",
    procedures: [{ name: "Консультація трихолога" }],
  },
  {
    id: "napryam-tilo",
    name: "Тіло: корекція фігури, масаж",
    short: "Тіло: корекція фігури, масаж",
    depth: "підшкірний шар",
    procedures: [
      { name: "Корекція фігури", price: "від 790 грн" },
      { name: "Масаж тіла", price: "від 690 грн" },
    ],
  },
];

export const anchors = [
  { href: "#napryamy", label: "Напрями й ціни" },
  { href: "#likari", label: "Лікарі" },
  { href: "#akademiya", label: "Академія" },
  { href: "#kontakty", label: "Контакти" },
] as const;
