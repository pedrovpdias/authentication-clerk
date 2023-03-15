import React from 'react';
import {
    SignedIn,
    SignedOut,
    SignOutButton,
    UserButton,
    useUser,
    RedirectToSignIn
} from '@clerk/clerk-react';

export default function Home() {
    return (
        <>
            <SignedIn>
                <h1>
                    Home
                </h1>

                <div>
                    <UserButton />
                </div>

                <div>
                    <SignOutButton />
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}