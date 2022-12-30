// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { Account, HexagonOutline, AccountMultipleOutline, TimerOutline,GraphOutline, CommentOutline } from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

    {
      sectionTitle: 'Pages'
    },

    {
      title: 'Members of Parliament',
      icon: Account,
      path: '/members'
    },

    {
      title: 'Sectors',
      icon: GraphOutline,
      path: '/sectors'
    },

    {
      title: 'Targeted Groups',
      icon: AccountMultipleOutline,
      path: '/targeted-groups'
    },

    {
      title: 'Regions',
      icon: HexagonOutline,
      path: '/regions'
    },

    {
      title: 'Parliament Periods',
      icon: TimerOutline,
      path: '/parliament-periods'
    }, 

    {
      title: 'MP Questions',
      icon: CommentOutline,
      path: '/mp-questions'
    }
  ]
}

export default navigation
