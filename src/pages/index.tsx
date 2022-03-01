import { Layout } from "../components/layout/Layout";
import { MyParagraph } from "../components/MyParagraph";

export default function Page() {
  return (
    <Layout>
      <MyParagraph>
        Some content describing why I like tailwind and why I think it is easy
        to use for CSS novices like me
      </MyParagraph>
    </Layout>
  );
}
