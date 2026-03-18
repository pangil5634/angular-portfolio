export type ProjectItem = {
  name: string;
  period: string;
  isOperating: boolean;
  isShow: boolean;
  techStack: string[];
  description: string;
  links: {
    service?: string;
    github: string;
  };
};

export const PROJECTS: ProjectItem[] = [
  {
    name: 're-log (개발 회고 기록 & 공유 서비스)',
    period: '2025.11 ~',
    isOperating: true,
    isShow: true,
    techStack: [
      'SvelteKit',
      'TypeScript',
      'Vite',
      'Firebase',
      'Tailwind CSS',
      'prism.js',
      'DOMPurify',
      'markdown-it'
    ],
    description:
      '회고 내용을 어떻게 정리해야 할지 막막한 개발자를 위해, 템플릿과 감정·유형 기반 기록 방식을 제공하는 서비스',
    links: {
      service: 'https://relog.shop',
      github: 'https://github.com/PangilProject/re-log'
    }
  },
  {
    name: 'checky (루틴·태스크 기반 생산성 관리 서비스)',
    period: '2026.01 ~',
    isOperating: true,
    isShow: true,
    techStack: ['React', 'TypeScript', 'Vite', 'Firebase', 'TanStack Query', 'Tailwind CSS'],
    description:
      '단발성 할 일 관리에서 벗어나, 주간 루틴을 설계하고 실천 기록을 통해 얼마나 지켜냈는지까지 관리하는 서비스',
    links: {
      service: 'https://checky.today',
      github: 'https://github.com/PangilProject/checky'
    }
  },
  {
    name: 'PARD 관리자 페이지',
    period: '2024.01 ~ 2025.04',
    isOperating: false,
    isShow: false,
    techStack: ['React', 'JavaScript', 'Axios', 'styled-components', 'Firebase'],
    description:
      '동아리 운영진을 위한 구성원 정보, 일정, 출결, 점수 데이터를 통합 관리할 수 있는 내부용 관리자 웹 서비스 (실제 운영용)',
    links: {
      github: 'https://github.com/Club-PARD/PARD-APP-admin'
    }
  },
  {
    name: 'QRapo (관계 형성 지원 서비스)',
    period: '2025.01 ~ 2025.05',
    isOperating: false,
    isShow: false,
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Kakao Map SDK',
      'Vercel',
      'Spring Boot',
      'AWS'
    ],
    description:
      '5일간의 단계별 콘텐츠를 통해 라포 형성이 어려운 사용자 간 자연스러운 관계 형성을 지원하는 팀 프로젝트형 웹 서비스',
    links: {
      github: 'https://github.com/Official-QRapo/QRapo_FE'
    }
  }
];
