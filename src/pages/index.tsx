// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import MembersOfParliamentIndex from 'src/views/members/IndexMembersOfParliament'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          <MembersOfParliamentIndex />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
