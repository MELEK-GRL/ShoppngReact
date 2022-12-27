import { Helmet } from "react-helmet";
import FoodsDetail from "../../components/UI/FoodsDetail";

export default function index() {
  
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>FoodDetails</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <div className="w-full boxCenter">
      <div className="w-full flex flex-col  containerBox gap-8">
          <FoodsDetail />
        </div>
      </div>
    </div>
  );
}
