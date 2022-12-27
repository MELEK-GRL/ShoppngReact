import {Helmet} from 'react-helmet'
import RgisterItems from '../../components/UI/RgisterItems'
import RegisterBanner from '../../components/UI/RegisterBanner'

export default function index() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>Register</title>
        <meta name="description" content='blog description'/>
      </Helmet> 
      <div className="w-full boxCenter max-h-full  h-auto min-h-[413px]">
      <div className="w-full flex flex-col  containerBox gap-8">
          <RegisterBanner/>
        <RgisterItems/>
        </div>
      </div>
    </div>
  )
}
