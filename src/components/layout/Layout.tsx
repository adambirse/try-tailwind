import { MyHeading } from "../MyHeading";
import { Navigation } from "../navigation/Navigation";

export const Layout = ({ title = "Tailwind demo", children }) => {
  return (
    <>
      <Navigation></Navigation>
      <MyHeading>{title}</MyHeading>
      <div className="m-4">{children}</div>
    </>
  );
};
