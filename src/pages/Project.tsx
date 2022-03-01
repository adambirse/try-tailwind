import { Layout } from "../components/layout/Layout";
import { MyParagraph } from "../components/MyParagraph";

export default function Page() {
  return (
    <Layout title="Project">
      <MyParagraph>My content for the project page</MyParagraph>
    </Layout>
  );
}
