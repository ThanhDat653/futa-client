"use client"
import animationData from './loading-animation.json';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black bg-opacity-20 fixed z-30 w-full">
            <Lottie animationData={animationData} loop={true} autoplay={true} className="w-[80px] opacity-50" />
        </div>
    );
};

export default Loading
