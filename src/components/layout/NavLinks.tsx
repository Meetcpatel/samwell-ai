import Link from "next/link";

const navItems = [
  { href: "/pricing", label: "Pricing" },
  { href: "/examples", label: "Examples" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/products", label: "Products" },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-[#2D2D2D] font-['Inter'] font-normal text-base leading-6 hover:text-gray-900"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
