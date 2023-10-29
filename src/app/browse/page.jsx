'use client'

import { useSession } from 'next-auth/react'
import UnauthPage from "../../components/Unauthpage"

const Browse = () => {
    const { data: session } = useSession()
    console.log(session)
    if (!session) {
        return <UnauthPage />
    }
    return (
        <div>Browse</div>
    )
}

export default Browse
