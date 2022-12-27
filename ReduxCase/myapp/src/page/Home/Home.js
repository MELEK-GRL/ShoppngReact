import { Helmet } from "react-helmet";
import Section from "../../components/UI/Section";

export default function Home() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="blog description" />
      </Helmet>

      <div className="w-full boxCenter">
        <div className="w-full  containerBox">
          <Section />
        </div>
      </div>
    </div>
  );
}
