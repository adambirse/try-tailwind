import { MyHeading } from "../MyHeading";
import { Navigation } from "../navigation/Navigation";

export const Layout = ({ title = "Tailwind demo", children }) => {
  return (
    <div className="flex flex-col space-y-1">
      <Navigation></Navigation>
      <MyHeading>{title}</MyHeading>
      <div className="m-4">{children}</div>
    </div>
  );
};
