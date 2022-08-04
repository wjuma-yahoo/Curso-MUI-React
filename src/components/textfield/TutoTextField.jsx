/**

  @TextField
  
  The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.

  Advanced Configuration
  It's important to understand that the text field is a simple abstraction on top of the following components:

  FormControl
  InputLabel
  FilledInput
  OutlinedInput
  Input
  FormHelperText

  If you wish to alter the props applied to the input element, you can do so as follows:

  https://mui.com/material-ui/react-text-field/

 */

import { TextField } from "@mui/material"


export const TutoTextField = () => {
  return (
    <div>

      <TextField
        variant="standard"
        type="email"
        placeholder="Enter your name"/>

    </div>
  )
}
