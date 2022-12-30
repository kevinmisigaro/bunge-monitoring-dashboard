// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import MPQuestionsForm from 'src/views/questions/MPQuestionsForm'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>

        <Grid item xs={12}>
          <MPQuestionsForm />
        </Grid>

      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
