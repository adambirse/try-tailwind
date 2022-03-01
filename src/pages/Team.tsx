import { Card } from "../components/card/card";
import { Layout } from "../components/layout/Layout";
import { MyParagraph } from "../components/MyParagraph";

export default function Page() {
  return (
    <Layout title="Team">
      <div className="flex flex-col space-y-10">
        <MyParagraph>
          Some people think that the Avengers are the best team in the world,
          but actually this is.
        </MyParagraph>
        <div className="flex space-x-10">
          <Card
            name="Adam Birse"
            description="A super talented engineer who is learning tailwind."
            image="assets/images/team_member.png"
          ></Card>
          <Card
            name="Someone else"
            description="A bit like Adam but a little bit different."
            image="assets/images/team_member.png"
          ></Card>
        </div>
      </div>
    </Layout>
  );
}
