"use client"
import React from 'react';
import {signIn} from "next-auth/react";
import Loading from "@/app/loading";

const Page = () => {

    signIn('client')

    return (
        <Loading />
    );
};

export default Page;