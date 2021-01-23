import React from 'react'
import { Box, Grid } from '@material-ui/core'
function Cajita() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box border={1}>
                        xs 12
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={1}>
                        xs 6
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={1}>
                        xs 6
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={1}>
                        xs 6
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cajita
