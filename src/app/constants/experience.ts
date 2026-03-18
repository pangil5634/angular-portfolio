export type ExperienceItem = {
  title: string;
  period: string;
  summaries: string[];
};

export const EXPERIENCE_INTRO =
  'IT Product 개발, 기술 세미나 운영, 연구 프로젝트를 통해 실전 개발과 팀 협업을 경험했습니다.';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: 'IT 협업동아리 PARD 수료 및 운영',
    period: '2023.09 ~ 2025.01',
    summaries: [
      'React, Axios, 상태관리, Styling 등 SPA 웹 개발 세미나 참여, 과제와 해커톤 참여를 통한 IT Product 개발 프로세스 경험',
      '6주 간 웹 기술 세미나 및 HTML&CSS/GitHub 스터디 진행, 해커톤 프로그램 운영',
      '조직 내 1on1 미팅과 파트 문화 조성을 통해 구성원들과 라포를 형성하며 지속적인 관계 관리와 동기부여에 기여'
    ]
  },
  {
    title: 'Spring Boot를 활용한 백엔드 개발 연구실',
    period: '2024.06 ~ 2025.06',
    summaries: [
      'Spring Boot 기반 REST API 개발, 권한 관리, Spring Security 인증/인가 처리, JWT 토큰 등 백엔드 개발 프로젝트 참여',
      '프로젝트 기획부터 프론트·백엔드 개발까지 주도하며 풀스택 개발 역할 수행'
    ]
  }
];
