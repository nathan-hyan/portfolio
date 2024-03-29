import ck from 'assets/workBackground/ck.webp'
import invoxet from 'assets/workBackground/invoxet.webp'
import socco from 'assets/workBackground/socco.webp'
import moustrack from 'assets/workBackground/moustrack.webp'
import reciba from 'assets/workBackground/reciba.webp'
import wolf from 'assets/workBackground/wolf.png'
import clefdium from 'assets/workBackground/clefdium.png'

export const CAROUSEL_DATA: carouselType[] = [
  {
    id: 1,
    image: ck,
    title: 'Carsaas Kitchen',
    subtitle: 'Landing page dedicated to food and culinary arts',
    repo: 'https://gitlab.com/nathan-hyan/carsaas-kitchen',
    url: 'https://carsaas-kitchen.vercel.app/',
    tech: ['html', 'scss', 'javascript']
  },
  {
    id: 2,
    image: invoxet,
    title: 'Invoxet',
    subtitle: 'Landing page dedicated to video-games and e-sports',
    repo: 'https://gitlab.com/nathan-hyan/invoxet',
    url: 'https://invoxet.vercel.app/',
    tech: ['html', 'scss', 'javascript']
  },
  {
    id: 3,
    image: socco,
    title: 'Inmobiliarias Socco',
    subtitle: 'Landing page dedicated to a real-estate agency.',
    repo: 'https://gitlab.com/nathan-hyan/socco',
    url: 'https://socco.now.sh/',
    tech: ['react', 'scss']
  },
  {
    id: 4,
    image: moustrack,
    title: 'Moustrack',
    subtitle: 'Example landing page for a sports / travel brand.',
    repo: 'https://gitlab.com/nathan-hyan/moustrack_nextjs',
    url: 'https://moustrack.vercel.app/',
    tech: ['react', 'nextjs', 'scss']
  },
  {
    id: 5,
    image: reciba,
    title: 'Reciba.app',
    subtitle: 'Virtual checkbook app.',
    url: 'https://reciba.app/',
    tech: ['react', 'typescript', 'scss', 'mongodb', 'express', 'nodejs']
  },
  {
    id: 6,
    image: wolf,
    title: 'Wolf',
    subtitle: 'Artesanias en cuero',
    tech: ['react', 'typescript', 'scss', 'mongodb', 'express', 'nodejs']
  },
  {
    id: 7,
    image: clefdium,
    title: 'Clefdium',
    subtitle: 'Lading page dedicated to a real-state agency',
    tech: ['react', 'typescript', 'scss'],
    url: 'https://clefdium-test.herokuapp.com/',
    repo: 'https://github.com/nathan-hyan/clefdium-webpage'
  }
]

export interface carouselType {
  id: number
  image: string
  title: string
  subtitle: string
  repo?: string
  url?: string
  tech: Array<Partial<
  | 'react'
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'nextjs'
  | 'scss'
  | 'mongodb'
  | 'express'
  | 'nodejs'
  >>
}
