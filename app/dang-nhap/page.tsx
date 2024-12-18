"use client"
import React, {useEffect} from 'react';
import {signIn} from "next-auth/react";
import Loading from "@/app/loading";

const Page = () => {

    useEffect(() => {
        signIn('client', { callbackUrl: '/' });
    }, []);

    return (
        <Loading />
    );
};

export default Page;