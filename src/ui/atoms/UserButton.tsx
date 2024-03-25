'use client'

import { SignedIn, UserButton } from "@clerk/nextjs"
import { ReceiptText } from "lucide-react"

const CustomPage = () => {
    return (
        <div>
            <h1>Custom Profile Page</h1>
            <p>This is the custom profile page</p>
        </div>
    );
};

export const ButtonUser = () => {
    return <SignedIn>
        <UserButton userProfileMode="navigation" userProfileUrl="/orders" appearance={{}} >

            <UserButton.UserProfilePage
                label="Custom Page"
                url="custom"
                labelIcon={<ReceiptText />}
            >
                <CustomPage />
            </UserButton.UserProfilePage>
            <UserButton.UserProfilePage
                label="Custom Page"
                url="custom"
                labelIcon={<ReceiptText />}
            >
                <CustomPage />
            </UserButton.UserProfilePage>
            <UserButton.UserProfileLink
                label="Homepage"
                url="/"
                labelIcon={<ReceiptText />}
            />
            <UserButton.UserProfilePage label="account" />
            <UserButton.UserProfilePage label="security" />
        </UserButton>
    </SignedIn>
}