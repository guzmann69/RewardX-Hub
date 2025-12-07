
export interface Reward {
  id: string;
  title: string;
  category: string;
  img: string;
}

export const LOCKER_URL = 'https://lockedapp.org/cl/i/rndwq4';
export const TIMER_DURATION_SECONDS = 180;

export const REWARDS: Reward[] = [
  {
    id: 'iphone',
    title: 'iPhone 17 Pro Max',
    category: 'Gadgets',
    img: 'https://imgs.search.brave.com/q86Ip2eWw4BlkcYAs7XVgXiaW2ZjasCQz1pAvAaSIqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZHNh/c3NldHMuYXBwbGUu/Y29tL2xpdmUvN1dV/QVMzNTAvaW1hZ2Vz/L3RlY2gtc3BlY3Mv/aXBob25lLTE3LXBy/by0xNy1wcm8tbWF4/LWhlcm8ucG5n'
  },
  {
    id: 'amazon',
    title: 'Amazon Gift Card $50',
    category: 'Shopping',
    img: 'https://imgs.search.brave.com/vTTriTvr8ldm0WDDOQUJtVkBs0HejYcOI-VTLZVaMKM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aWV4Z2FtZXMuY29t/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS8wMDhmMTE1/MTk4NWQ1YTJhMWJi/NDg1NzllYTlhMmYx/Yy9hL20vYW1hem9u/LWdpZnQtY2FyZC01/MHVzZC5qcGc'
  },
  {
    id: 'ps5',
    title: 'PlayStation 5 Pro',
    category: 'Gaming',
    img: 'https://imgs.search.brave.com/TVfRlv-RlwPCy0xoxr0Xs5aaS5siq-TLsnQzkNfm5Fg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFOOEhacStCZ0wu/anBn'
  },
  {
    id: 'roblox',
    title: 'Roblox 800 Robux',
    category: 'Gaming',
    img: 'https://imgs.search.brave.com/ibt2kupBXnPs2dK8biIj60G-1Hm318SrpLd2DhlHdjg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Ynlub2dhbWUuY29t/L3Byb2R1Y3QvMTc1/MTg3NTE4ODcxMi53/ZWJw'
  },
  {
    id: 'steam',
    title: 'Steam $100 USD',
    category: 'Gaming',
    img: 'https://imgs.search.brave.com/Wa6cmDECZlCUdvq5DLSHpoNdU6CEhmWJW2UbhNd3Orw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXJzLXNpZGUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA2L1N0ZWFt/LVdhbGxldC1VUy0x/MDAucG5n'
  },
  {
    id: 'xbox',
    title: 'Xbox Series X + FC25',
    category: 'Gaming',
    img: 'https://imgs.search.brave.com/RU4msY6lJwoWdgtNe3QOkTdOfLkQiRnnJAC-pQlrbw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vRUEt/U3BvcnRzLUZDLTI1/LVhib3gtU2VyaWVz/LVhfYzYwNWMyMjYt/MTE0ZS00MWFkLWI4/YjQtMjNiNmZlNzk3/ZmI5Ljg3ODQwMDY0/N2QxNmQxM2UyMmI0/YmUyZGFiYjMyNTM3/LnBuZz9vZG5IZWln/aHQ9NTczJm9kbldp/ZHRoPTU3MyZvZG5C/Zz1GRkZGRkY'
  },
  {
    id: 'netflix',
    title: 'Netflix Subscription',
    category: 'Entertainment',
    img: 'https://imgs.search.brave.com/DwIM-mumRn4Y5iBV-nPCdpodp6yqOTqhGH4We_G6oZ4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2Ftc2dvY2Ru/LmNvbS9pbWFnZS8z/ODRmNDVjOGNkMGQ5/NWFiOTY0MzU0ZjAx/Zjc1NTY2My5wbmc'
  },
  {
    id: 'fortnite',
    title: 'Fortnite V-Bucks',
    category: 'Gaming',
    img: 'https://imgs.search.brave.com/F_DxyWZhcwo-dDfQw7TLReJB-JKGFJECs4Q3apDefCU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdw/cm94eS5lbmViYS5n/YW1lcy9hRGt1LXN1/WEt1UlVWMmRKZUlG/WFdzTDJYaU5UT20t/YnRRb0pjbHJkWXIw/L3JzOmZpdDozNTAv/YXI6MS9jek02THk5/d2NtOWtkV04wL2N5/NWxibVZpWVM1bllX/MWwvY3k5d2NtOWtk/V04wY3k5Ni9iRGhH/ZGtKUVdIZERSVlZt/L1dDMXpTbTFqTVMw/NU4xUm0vWlhOd1Fu/RmlOWGhaZEcwei9U/RTg1Ym1kQkxtcHda/V2M'
  }
];
