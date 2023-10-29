'use client'

import { useSession } from 'next-auth/react'
import UnauthPage from "../../../components/Unauthpage"

function Search() {
    const { data: session } = useSession()

    if (!session) {
        return <UnauthPage />
    }
    return (
        <div>Search</div>
    )
}

export default Search