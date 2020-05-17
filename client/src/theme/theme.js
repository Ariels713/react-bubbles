import { createMuiTheme } from '@material-ui/core/styles';

const charcole = "#b8f2e6"
const burgundy = "#A4243B"

export default createMuiTheme({
    palette : {
        common: {
            charcole : `${charcole}`,
            burgundy:`${burgundy}`
        },
        primary: {
            main:`${charcole}`,
        },
        secondaryL: {
            main:`${burgundy}`,
        }
        
    },
    overrides: {
       MuiInputLabel: {
           root: {
               color: charcole,
               fontSize: "1rem"
           }
       },
       MuiInput: {
           
       }
    }
})