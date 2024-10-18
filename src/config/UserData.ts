interface Profile {
  id: number;
  name: string;
  username: string;
  bio: string;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: 'Dhrutinandan Swain',
    username: 'swaindhruti',
    bio: 'Full-stack Developer & DevOps',
  },
  {
    id: 2,
    name: 'Amit Bastia',
    username: 'AmitBastia',
    bio: 'Open-Source Enthusiast',
  },
  {
    id: 3,
    name: 'Harsh Verma',
    username: 'Cybrite',
    bio: 'Frontend developer & Web3',
  },
];
