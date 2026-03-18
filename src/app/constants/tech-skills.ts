export type TechSkillSection = {
  title: string;
  skills: string[];
};

export const TECH_SKILL_SECTIONS: TechSkillSection[] = [
  {
    title: '언어',
    skills: ['JavaScript(ES6+)', 'TypeScript']
  },
  {
    title: '프레임워크',
    skills: ['React', 'Next.js (v15, v16, App Router)', 'SvelteKit']
  },
  {
    title: '상태관리',
    skills: ['TanStack Query', 'Zustand', 'Recoil', 'React Context API']
  },
  {
    title: '협업 도구',
    skills: ['Git/GitHub', 'Figma', 'Notion', 'Slack', 'Discord']
  },
  {
    title: 'AI 도구',
    skills: ['Google Antigravity', 'Gemini CLI', 'GPT-5.2-Codex']
  }
];
