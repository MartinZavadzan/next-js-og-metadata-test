"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()
    useEffect(()=>{
        router.replace(`/subpage/1`)
    },[router])

    return <div>Page</div>
}