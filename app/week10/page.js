"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    console.log("User is: ", user);

    async function handleSignIn(){
        await gitHubSignIn();
    }

    async function handleSignOut() {
        await firebaseSignOut();
    }
    
    return <main className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Week 10</h1>
    {!user && (
        <p className="text-lg text-white mb-6">
            Please sign in with GitHub.
        </p>
    )}
    {user ? (
        <div>
        <p className="text-lg text-white mb-6">Hi, {user.email}</p>
        <Link href="/week8/shopping-list">Access shopping list </Link>
        <br/>
        <button 
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign Out
        </button>
        </div>
    ) : (
        <button 
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign In
        </button>
    )} 
    </main>;

}
