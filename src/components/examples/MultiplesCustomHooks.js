import React from 'react'
import { useFetchApi } from '../useEffect/useFetchApi'

export const MultiplesCustomHooks = () => {
    const /*{loading, err, data}*/ state = useFetchApi(`https://breakingbadapi.com/api/quotes/1`);
    console.log(state);
    return (
        <div className="m-3">
            <h1>Custom Hooks</h1>
        </div>
    )
}
