// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

export default function Users () {
  return (
    <Grid container spacing={6}>
    <Grid item xs={12}>
      <Typography variant='h5'>
        <Link href='#' target='_blank'>
          Targeted Groups
        </Link>
      </Typography>
      {/* <Typography variant='body2'>List of sectors</Typography> */}
    </Grid>

    <Grid item xs={12}>
      <Card>
        <CardHeader title='Targeted Groups List' titleTypographyProps={{ variant: 'h6' }} />
        <TableStickyHeader />
      </Card>
    </Grid>

  </Grid>
  )
}
