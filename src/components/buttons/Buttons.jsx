import { Button } from "@mui/material"

/**
 * 
  @Buttons
  Buttons allow users to take actions, and make choices, with a single tap

  Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

  Modal windows
  Forms
  Cards
  Toolbars

 */

export const Buttons = () => {
  return (
    <div>
      <Button sx={{ margin: 2 }} variant="contained">Enviar</Button>
      <Button sx={{ margin: 2 }} disabled>Guardar</Button>
      <Button color="error" sx={{ margin: 2 }} variant="outlined">Eliminar</Button>

      <Button 
        color="warning" 
        sx={{ margin: 2 }} 
        variant="contained"
        onClick={() => {
          alert('Hiciste click en el button!')
        }}
      >Click me!</Button>
    </div>
  )
}

