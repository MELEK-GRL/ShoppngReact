import {Helmet} from 'react-helmet'
import CheckItem from '../../components/UI/CheckItem'
import CheckBanner from '../../components/UI/CheckBanner'

export default function index() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
       <Helmet>
        <title>Checkout</title>
        <meta name="description" content='blog description'/>
      </Helmet> 

      <div className="w-full boxCenter">
      <div className="w-full flex flex-col  containerBox gap-8">
        <CheckBanner/>
        <CheckItem/>
        </div>
      </div>
    </div>
  )
}
