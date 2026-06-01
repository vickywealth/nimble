export interface Client {
  name: string
  website: string
  logo: string
  industry: string
}

export const clients: Client[] = [
  {
    name: 'Someday Project',
    website: 'https://somedayproject.com',
    logo: '/images/clients/someday-project.jpg',
    industry: 'Events & Entertainment'
  },
  {
    name: 'Glycon',
    website: 'https://glycon.com',
    logo: '/images/clients/glycon.png',
    industry: 'Healthcare'
  },
  {
    name: 'Daydream Diner',
    website: 'https://daydreamdiner.com',
    logo: '/images/clients/daydream-diner.webp',
    industry: 'Food & Beverage'
  },
  {
    name: 'Polydek',
    website: 'https://polydek.com',
    logo: '/images/clients/polydek.jpg',
    industry: 'Construction'
  },
  {
    name: 'Small Business Logo',
    website: 'https://smallbusinesslogo.com',
    logo: '/images/clients/smallbusiness.png',
    industry: 'Business Services'
  }
]
