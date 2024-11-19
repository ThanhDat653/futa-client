'use client'
import animationData from './loading-animation.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Loading = () => {
   return (
      <div className="fixed z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-20">
         <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-[80px] opacity-50"
         />
      </div>
   )
}

export default Loading
