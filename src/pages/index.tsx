import { MyHeading } from "../components/MyHeading";
import { MyParagraph } from "../components/MyParagraph";

export default function Page() {
  return (
    <>
      <MyHeading>Styled with tailwind.</MyHeading>
      <MyParagraph>
        Some content describing why I like tailwind and why I think it is easy
        to use for CSS novices like me
      </MyParagraph>
    </>
  );
}
