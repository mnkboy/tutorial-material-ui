import { createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, lime, purple } from '@material-ui/core/colors'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[800]

        },
        secondary: {
            main: lime[500]
        }
    }
})
export default theme