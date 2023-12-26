export const WORK_EXPERIENCE: workType[] = [
  {
    id: 1,
    work: 'RollingCode Software Factory',
    since: '04/2018',
    to: '01/2021',
    tech: [
      'html',
      'css',
      'scss',
      'javascript',
      'react',
      'ionic',
      'nodejs',
      'mongodb'
    ],
    description:
      'Creation and development of web Apps for administration of students and payments in RollingCode School using MERN Stack.\nCab app “TaxiAr” using Ionic and Angular.\nDevelopment of mobile app dedicated to greenhouses digital control using Ionic and React'
  },
  {
    id: 2,
    work: '3HandSolutions / TODO1',
    since: '10/2019',
    to: '03/2020',
    tech: ['html', 'css', 'javascript', 'outsystems'],
    description:
      'Development of mobile app for the firm Bancolombia using Outsystems platform'
  },
  {
    id: 3,
    work: 'Wolox',
    since: '11/2020',
    to: 'present',
    tech: ['html', 'css', 'scss', 'javascript', 'react', 'react-native'],
    description:
      'Created an invoice desktop app with real time signature capabilities using MERN Stack.\nLanding page for a new real estate agency (yet unpublished).\nCurrently working on a store for a independent leather workshop'
  },
  {
    id: 4,
    work: 'Freelancing',
    since: '-',
    to: '-',
    tech: [
      'html',
      'css',
      'scss',
      'javascript',
      'react',
      'nextjs',
      'nodejs',
      'mongodb'
    ],
    description:
      'Currently working on an invoice desktop app with real time signature capabilities using MERN Stack'
  }
]

export interface workType {
  id: number
  work: string
  since: string | 'present'
  to: string | 'present'
  tech: string[]
  description: string
}
