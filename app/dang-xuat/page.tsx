"use client"
import React, {useEffect} from 'react';
import {handleLogOut} from "@/service/auth";
import Loading from "@/app/loading";

const Page = () => {

    useEffect(() => {
        handleLogOut()
    }, []);

    return (
        <Loading />
    )
}

export default Page;