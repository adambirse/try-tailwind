import { NavigationItem } from "./NavigationItem";

export const NavigationItems = () => {
  return (
    <div
      className="collapse navbar-collapse flex-grow items-center"
      id="navbarSupportedContent1"
    >
      <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
        <NavigationItem link="Dashboard" href="#" />
        <NavigationItem link="Project" href="#" />
        <NavigationItem link="Team" href="#" />
        <NavigationItem link="Disabled" href="#" disabled />
      </ul>
    </div>
  );
};
