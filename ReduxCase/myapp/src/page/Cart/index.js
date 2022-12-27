import { Helmet } from "react-helmet";
import Table from "../../components/UI/Table";


export default function index() {
 
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <div className="w-full boxCenter max-h-full  h-auto min-h-[413px]">
        <div className="w-full  containerBox">
        <Table/>
        
        </div>
      </div>
      

     
    </div>
  );
}
