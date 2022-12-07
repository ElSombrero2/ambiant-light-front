import React from 'react'

interface ConditionnalContainerProperty{
    renderOnTrue: any
    renderOnFalse: any
    condition: boolean
}

export const ConditionnalContainer = ({condition, renderOnFalse, renderOnTrue}: ConditionnalContainerProperty): JSX.Element => {
    return (<>{condition ? renderOnTrue : renderOnFalse} </>)
}