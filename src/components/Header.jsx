import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "고민 선택", href: "#pain" },
  { label: "인터뷰 방식", href: "#interview" },
  { label: "팀", href: "#team" },
  { label: "안심 정보", href: "#trust" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Team 310 홈">
        <span className="brand-mark">310</span>
        <span>Team 310</span>
      </a>

      <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="주요 섹션">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#apply">
        신청하기
        <ArrowRight size={18} aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
