import React from 'react'
import { Box } from '@material-ui/core'
function Cajita() {
    return (
        <div>
            <Box
                color='primary.main'
            >Cajita BOX
            </Box>
            <Box
                color='primary.contrastText'
                bgcolor='primary.main'
            >Cajita BOX
            </Box>
            <Box
                color='primary.contrastText'
                bgcolor='primary.main'
                mx={4}
                mt={4}
                pt={5}
            >Cajita BOX
            </Box>
        </div>
    )
}

export default Cajita
