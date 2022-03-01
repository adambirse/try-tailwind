import { Layout } from "../components/layout/Layout";
import { MyParagraph } from "../components/MyParagraph";

export default function Page() {
  return (
    <Layout title="Dashboard">
      <MyParagraph>My content for the dashboard page</MyParagraph>
    </Layout>
  );
}
