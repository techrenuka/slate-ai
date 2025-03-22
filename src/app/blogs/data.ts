export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export const categories = ['Latest', 'Design', 'Development', 'Management', 'Marketing'];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'E-Learning App Design And How To Make It Better',
    excerpt: 'Kids and adults are becoming more and more tech-savvy, especially the kids who are used to all kinds of gadgets from a very early age.',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Design'
  },
  {
    id: '2',
    title: 'How Apples M1 Chips Make macOS Development Much Less Costly',
    excerpt: 'The macOS market share is much smaller than iOS one. There are many reasons for that, but the main one is that consumers Apples main focus.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Development'
  },
  {
    id: '3',
    title: 'How To Outsource Web Development And Web Design',
    excerpt: 'Everything is within reach of todays individual. All you need is phone or a laptop. We are no longer restricted by our location and have the ability to expand our influence beyond spatial.',
    date: 'March 8, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Management'
  }
];