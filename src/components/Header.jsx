import { ArrowRight } from "lucide-react";
import ApplyLink from "./ApplyLink";

const navItems = [
  { label: "인터뷰 안내", href: "#interview" },
  { label: "함께 듣는 팀", href: "#team" },
  { label: "팀영상", href: "#videos" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Team 310 홈">
        <span>TEAM 310</span>
      </a>

      <nav className="site-nav" aria-label="주요 섹션">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <ApplyLink className="header-cta">
        신청하기
        <ArrowRight size={18} aria-hidden="true" />
      </ApplyLink>
    </header>
  );
}
