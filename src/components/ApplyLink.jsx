import { applySectionHref } from "../data/landingContent";

export default function ApplyLink({ children, ...props }) {
  return (
    <a href={applySectionHref} {...props}>
      {children}
    </a>
  );
}
