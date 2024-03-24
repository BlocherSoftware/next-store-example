"use client"
import { useRouter } from "next/navigation"

export const CloseModal = () => {
    const router = useRouter()
    return <button type='button' onClick={() => router.back()} className="ml-auto">X</button>
}