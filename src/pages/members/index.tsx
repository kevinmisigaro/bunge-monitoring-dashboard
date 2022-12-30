// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import MembersOfParliament from 'src/views/members/MembersOfParliament'

export default function Members () {
  return (
    <Grid container spacing={6}>
    <Grid item xs={12}>
      <Typography variant='h5'>
        <Link href='#' target='_blank'>
          Members of Parliament
        </Link>
      </Typography>
      <Typography variant='body2'>List of members of parliament</Typography>
    </Grid>

    <Grid item xs={12}>
      <Card>
        <CardHeader title='Members of Parliament List' titleTypographyProps={{ variant: 'h6' }} />
        <MembersOfParliament />
      </Card>
    </Grid>

  </Grid>
  )
}
