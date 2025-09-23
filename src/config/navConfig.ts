// config/navConfig.ts
export const navItems = [
  {
    label: "Generator",
    href: "/generator",
    submenu: [
      { label: "QR Codes", href: "/generator/qr" },
      { label: "Bar Codes", href: "/generator/barcode" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    submenu: [
      { label: "Basic Plan", href: "/pricing/basic" },
      { label: "Pro Plan", href: "/pricing/pro" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
