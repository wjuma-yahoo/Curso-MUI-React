import React from 'react'
import { Typography } from '@mui/material'


/*

    Changing the semantic element
    The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.

    https://mui.com/material-ui/react-typography/

*/

export const TipographyTest = () => {
  return (
    <div>
        <Typography variant='h2' sx={{ color: '#AA0000', border: '1px solid #AA0000' }}>
            Heading h2
        </Typography    >
    </div>
  )
}
