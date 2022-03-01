interface NavigationProps {
  link: string;
  href: string;
  disabled?: boolean;
}

export const NavigationItem: React.FC<NavigationProps> = ({
  link,
  href,
  disabled,
}) => {
  const disabledCSS = disabled ? "cursor-not-allowed" : "";
  return (
    <li className="nav-item p-2">
      <a
        className={`nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0 ${disabledCSS}`}
        href={href}
      >
        {link}
      </a>
    </li>
  );
};
