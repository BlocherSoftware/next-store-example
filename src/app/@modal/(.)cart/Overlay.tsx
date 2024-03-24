'use client'
import { useRouter } from "next/navigation"

export const Overlay = () => {
    const router = useRouter()
    return <div className=" fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center w-screen h-screen" onClick={() => router.back()}>
    </div>
}