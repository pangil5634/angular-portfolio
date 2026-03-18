# Pangil Angular Portfolio

이 레포는 Angular 기반으로 재구성한 개인 포트폴리오 웹 프로젝트입니다.
기존 React/Next.js 중심 경험을 바탕으로, Angular의 구조적 설계 방식과 데이터 중심 UI 패턴을 실제 서비스 형태로 학습·적용하기 위해 만들었습니다.

## 이 레포는 어떤 곳인가

- 개인 포트폴리오 사이트의 Angular 버전 구현 레포
- 단순 UI 복제가 아니라, 라우팅/레이아웃/상수 기반 콘텐츠 관리까지 포함한 실전형 구조 실험
- Home 페이지(요약)와 Project 페이지(상세 쇼케이스)를 분리해 정보 위계를 설계

## 왜 Angular로 개발했는가

다음 목적을 가지고 Angular를 선택했습니다.

- **구조적 개발 방식 학습**: Standalone 컴포넌트, 명확한 라우팅 계층, 의존성 관리 방식 체득
- **대규모 확장성 관점 검증**: 레이아웃/페이지/상수 데이터 분리로 기능 확장 시 유지보수성 확보
- **기존 경험 확장**: React/Next.js에서 사용하던 컴포넌트 설계 감각을 Angular 문법과 패턴으로 이식

## 어떤 기술을 사용했는가

- Angular 21 (Standalone Components)
- TypeScript (strict mode)
- Angular Router (lazy loading)
- Tailwind CSS
- NgOptimizedImage

콘텐츠는 코드에 하드코딩하지 않고 상수 파일로 분리해 관리합니다.

- `src/app/constants/tech-skills.ts`
- `src/app/constants/projects.ts`
- `src/app/constants/experience.ts`

특히 `projects.ts`의 `isShow` 필드로 Home 대표 프로젝트 노출을 제어합니다.

## 어떤 식으로 개발하고 있는가

이 프로젝트는 아래 원칙으로 개발 중입니다.

- **Data-driven UI**: 페이지 컴포넌트는 렌더링에 집중, 데이터는 constants로 분리
- **레이아웃 공통화**: Header/Footer를 `main-layout`에 배치해 페이지 간 일관성 유지
- **라우팅 중심 설계**: Home/Project를 lazy route로 분리해 확장 가능한 구조 유지
- **반응형 우선**: 모바일 레이아웃 이슈를 먼저 해결하고 데스크톱으로 확장
- **Tailwind 우선 스타일링**: 컴포넌트 로컬 CSS를 최소화하고 유틸리티 클래스 중심으로 구성

## 현재 페이지 구성

### 1) Home (`/`)

포트폴리오의 요약 허브 역할 페이지

- Introduce
- Tech Skills
- Main Project (운영 중 대표 프로젝트)
- Experience

### 2) Project (`/project`)

프로젝트 상세 쇼케이스 페이지

- Featured Projects (`isShow: true`)
- Archive Projects (`isShow: false`)
- 서비스 링크 / GitHub 링크

## 프로젝트 구조

```txt
src/
  app/
    app.routes.ts
    constants/
      tech-skills.ts
      projects.ts
      experience.ts
    pages/
      home/index.ts
      project/index.ts
    shared/
      layout/
        main-layout.ts
        header.ts
        footer.ts
      ui/
        button.ts
  styles.css
```

## 핵심 구현 포인트

- Home과 Project 페이지의 톤을 다르게 설계
  - Home: 요약형 정보 전달
  - Project: 쇼케이스형 상세 전달
- 프로젝트 데이터 단일 소스 관리
  - 동일 데이터로 Home 대표 노출 + Project 전체 노출
- 전역 타이포 및 공통 애니메이션 유틸 도입

## Assets

- 프로필 이미지: `public/images/profile.jpeg`

## Commit Convention

Conventional Commits 형식을 사용합니다.

예시:

- `feat: build responsive home and project portfolio pages`
- `feat: extract portfolio content into typed constants`
- `refactor: simplify app root shell for routed layout`
