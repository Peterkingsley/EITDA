type Speaker = {
  name: string;
  role: 'Host' | 'Co-host' | 'Speaker' | 'Panelist';
  title: string;
  image: string;
};

// Add confirmed guests here as more speakers and panelists are announced.
export const speakers: Speaker[] = [
  {
    name: 'John Miracle',
    role: 'Speaker',
    title: 'Founder of Top Rated Club',
    image: '/speakers/john-miracle.png',
  },
  {
    name: 'Ekene Eze',
    role: 'Panelist',
    title: 'Ambassador, Stripe',
    image: '/speakers/ekene-eze.png',
  },
  {
    name: 'Dikachi',
    role: 'Panelist',
    title: 'Blockchain Enthusiast',
    image: '/speakers/dikachi.png',
  },
  {
    name: 'Okon Abasiono',
    role: 'Co-host',
    title: 'Community Manager',
    image: '/speakers/okon-abasiono.png',
  },
  {
    name: 'Eshiet Owoabasi',
    role: 'Co-host',
    title: 'CEO of Adspriest',
    image: '/speakers/eshiet-owoabasi.png',
  },
];
