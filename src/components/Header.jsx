import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import ApplyLink from "./ApplyLink";

const navItems = [
  { label: "인터뷰 안내", href: "#interview" },
  { label: "함께 듣는 팀", href: "#team" },
  { label: "팀영상", href: "#videos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Team 310 홈">
        <span>TEAM 310</span>
      </a>

      <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="주요 섹션">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <ApplyLink className="header-cta">
        신청하기
        <ArrowRight size={18} aria-hidden="true" />
      </ApplyLink>

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
