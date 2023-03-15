import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
    ClerkProvider
} from '@clerk/clerk-react';

import App from './App';
import Home from './pages/Home';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: 'home',
            element: <Home />
        }
    ]);
    
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <RouterProvider router={router} />
        </ClerkProvider>
    );
}