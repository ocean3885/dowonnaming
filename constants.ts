import { NavItem, Feature, PricingPlan, Testimonial, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '원장 소개', href: '#features' }, // Usually maps to About/Features
  { label: '상담 분야', href: '#pricing' }, // Pricing/Services
  { label: '명리 칼럼', href: '#posts' },
  { label: '고객 후기', href: '#testimonials' },
  { label: '예약 문의', href: '#contact' }, // Footer or dedicated section
];

export const FEATURES: Feature[] = [
  {
    title: '명품 작명/개명',
    description: '사주팔자의 부족한 기운을 채우고, 부르기 좋으며 품격 있는 최고의 이름을 지어드립니다.',
    iconName: 'PenTool',
  },
  {
    title: '정통 사주 상담',
    description: '타고난 운명의 흐름을 정확히 분석하여 길흉화복을 예측하고 나아갈 방향을 제시합니다.',
    iconName: 'Scroll',
  },
  {
    title: '궁합 / 택일',
    description: '연인 간의 조화를 살피는 궁합과 결혼, 이사, 개업 등 중요한 날을 위한 길일을 선정합니다.',
    iconName: 'HeartHandshake',
  },
  {
    title: '신생아 작명',
    description: '아이의 밝은 미래와 건강, 성공을 기원하는 마음을 담아 평생의 선물이 될 이름을 짓습니다.',
    iconName: 'Baby',
  },
];

export const PLANS: PricingPlan[] = [
  {
    name: '종합 사주 상담',
    price: '50,000원',
    features: ['평생 운세 흐름 분석', '적성 및 진로 컨설팅', '건강/재물/애정운', '궁금한 점 질의응답', '방문/전화 상담 가능'],
  },
  {
    name: '명품 신생아 작명',
    price: '200,000원',
    recommended: true,
    features: ['정통 성명학 기반 작명', '이름 풀이 및 해설서 제공', '사주 분석 포함', '선호 이름 반영', '최고의 이름 3~5개 제안'],
  },
  {
    name: '궁합 및 택일',
    price: '100,000원',
    features: ['남녀 사주 정밀 분석', '결혼/동업 궁합', '결혼/이사 길일 택일', '갈등 해소법 조언', '상세 해설 상담'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "사업이 힘들어 지푸라기 잡는 심정으로 상담했는데, 명쾌한 해답 덕분에 방향을 잡고 다시 일어설 수 있었습니다.",
    author: "김성한",
    role: "자영업 대표",
    avatarUrl: "https://picsum.photos/100/100?random=10"
  },
  {
    quote: "아이 이름이 너무 예쁘고 뜻도 좋아서 양가 부모님 모두 만족하셨어요. 도원 원장님 감사합니다.",
    author: "이수진",
    role: "주부 (신생아 작명)",
    avatarUrl: "https://picsum.photos/100/100?random=11"
  },
  {
    quote: "개명 후 신기하게도 일이 술술 풀리는 느낌입니다. 진작 바꿀 걸 그랬어요. 친절한 상담 추천합니다.",
    author: "박민우",
    role: "직장인",
    avatarUrl: "https://picsum.photos/100/100?random=12"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '갑진년(甲辰年) 청룡의 해, 대박 나는 띠는?',
    excerpt: '푸른 용의 기운이 솟아오르는 2024년, 변화의 흐름을 읽고 기회를 잡는 사주 풀이를 공개합니다.',
    date: '2023. 12. 15',
    category: '신년 운세',
    imageUrl: 'https://images.unsplash.com/photo-1548651817-f584e03d98bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: '좋은 이름이란 무엇인가? 성명학의 3요소',
    excerpt: '이름은 단순히 불리는 소리가 아닙니다. 발음오행, 자원오행, 수리획수가 조화를 이루는 명품 이름의 조건을 알아봅니다.',
    date: '2023. 11. 20',
    category: '성명학',
    imageUrl: 'https://images.unsplash.com/photo-1517997629505-1c390cb334b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: '힘든 시기를 지혜롭게 건너가는 마음가짐',
    excerpt: '운이 좋지 않을 때 우리는 무엇을 준비해야 할까요? 위기를 기회로 바꾸는 명리학적 지혜를 나눕니다.',
    date: '2023. 10. 05',
    category: '도원 칼럼',
    imageUrl: 'https://images.unsplash.com/photo-1505333109613-207d58a5b67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];