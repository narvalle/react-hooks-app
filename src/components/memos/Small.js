import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('e llamaron :(');
    return (
        <small>
            {value}
        </small>
    )
});
