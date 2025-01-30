'use client'

import Link from "next/link";
import { useState, useEffect } from "react"

const WebsiteCreator = () => {
    const [isAvailable, setIsAvailable] = useState(null);

    useEffect(() => {
        const checkWebsite = async () => {
            try {
                const res = await fetch("https://yousefelsobtasy.vercel.app", { method: "HEAD" })

                if (res.ok) {
                    setIsAvailable(true)
                } else {
                    setIsAvailable(false)
                }
            } catch (e) {
                setIsAvailable(false)
            }
        }

        checkWebsite()
    }, [])

    return isAvailable ?
        <Link href="https://yousefelsobtasy.vercel.app">
            يوسف أيمن
        </Link>
        :
        <span>
            يوسف أيمن
        </span>

}

export default WebsiteCreator
