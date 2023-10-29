'use client'

import { useSession } from 'next-auth/react'
import UnauthPage from "../../components/Unauthpage"

function Movies() {
    const { data: session } = useSession()

    if (!session) {
        return <UnauthPage />
    }
    return (
        <div>Movies</div>
    )
}

export default Movies