"use client"
import React, {useState} from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Mail, Phone, User} from "lucide-react";
import {Input} from "@/components/ui/input";
import {IProfile} from "@/model/profile";

type ProfileProps = {
    profile: IProfile;
};

const Profile = ({ profile }: ProfileProps) => {

    const [editProfile, setEditProfile] = useState(false)

    const toggleEditProfile = () => {
        setEditProfile(!editProfile)
    }

    return (
        <div className="space-y-4 md:w-1/4">
            <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-4 border-b-2 border-slate-400 pb-4">
                <Avatar className="h-fit w-1/5 md:w-full">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="md:w-full md:text-left md:space-y-2">
                    <h2 className="font-inter text-2xl">
                        {profile?.fullname}
                    </h2>
                    <p className="text-gray-500 ">
                        Member since 3/9/2024
                    </p>
                </div>
            </div>
            {editProfile || (
                <Button
                    className="h-8 w-full bg-sky-600 hover:bg-sky-700"
                    onClick={toggleEditProfile}
                >
                    Chỉnh sửa thông tin
                </Button>
            )}
            {editProfile && (
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Label
                            htmlFor="name"
                            className="flex items-center gap-2"
                        >
                            <User className="h-6 w-6"/>
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="h-8 w-fullv outline-none focus:outline-none"
                            defaultValue={profile?.fullname}
                            autoFocus={true}
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <Label
                            htmlFor="email"
                            className="flex items-center gap-2"
                        >
                            <Mail className="h-6 w-6"/>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="h-8 w-full"
                            defaultValue={profile?.email}
                            disabled={true}
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <Label
                            htmlFor="phone"
                            className="flex items-center gap-2"
                        >
                            <Phone className="h-6 w-6"/>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="h-8 w-full"
                            defaultValue={profile?.phoneNumber}
                        />
                    </div>
                    <div className="flex space-x-3">
                        <Button className="h-8 bg-sky-600 hover:bg-sky-700">
                            Lưu
                        </Button>
                        <Button
                            className="h-8 bg-sky-600 hover:bg-sky-700"
                            onClick={toggleEditProfile}
                        >
                            Hủy
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;