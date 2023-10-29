'use client'

import { useSession } from 'next-auth/react'
import UnauthPage from "../../components/Unauthpage"

function TV() {
    const { data: session } = useSession()

    if (!session) {
        return <UnauthPage />
    }
    return (
        <div>TV</div>
    )
}

export default TV