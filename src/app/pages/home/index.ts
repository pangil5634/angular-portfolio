import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { EXPERIENCE_INTRO, EXPERIENCE_ITEMS } from '../../constants/experience';
import { PROJECTS } from '../../constants/projects';
import { TECH_SKILL_SECTIONS } from '../../constants/tech-skills';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  template: `
    <section class="flex flex-col gap-20">
      <div>
        <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Introduce</p>
        <div class="flex gap-5">
          <div
            class="hidden md:block rounded-[1.1rem] p-0.5 bg-linear-to-br from-[#FF5F00] via-[#FFC300] to-[#FFE08A] shadow-[0_14px_28px_-18px_rgba(255,95,0,0.6)]"
          >
            <img
              ngSrc="/images/profile.jpeg"
              width="130"
              height="170"
              alt="팡일 프로필 이미지"
              class="block rounded-2xl ring-1 ring-white/60 transition duration-300 hover:scale-[1.02]"
              priority=""
            />
          </div>
          <div class="flex flex-col justify-between">
            <p
              class="hero-headline bg-linear-to-r from-[#FF5F00] via-[#FFC300] to-[#FFD400] bg-clip-text pr-2 mb-5 md:mb-0 text-xl md:text-2xl leading-tight text-transparent"
            >
              <i
                >사용자 경험을 개선하는 UI/UX 중심
                <span class="font-bold">프론트엔드 개발자</span></i
              >
            </p>
            <div class="flex flex-col gap-2">
              <p>안녕하세요, FE 개발자 <span class="text-[#FF5F00]">팡일</span>입니다.</p>
              <p>
                React와 Next.js를 기반으로 개발해왔고, <br />현재는
                <span class="text-[#FF5F00]"><i>Angular</i></span
                >를 학습하며 프론트엔드 역량을 확장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Tech Skills</p>
        <p class="mb-6 text-gray-700">
          실제 프로젝트에 적용하며 검증한 기술 스택으로, 지속적으로 확장하고 발전시키고 있습니다.
        </p>
        <div class="flex flex-wrap gap-4">
          @for (section of techSkillSections; track section.title) {
            <article
              class="hero-headline w-full rounded-xl border border-gray-200 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.45)] md:w-[calc(50%-0.5rem)]"
            >
              <h2 class="mb-2 text-lg font-semibold">{{ section.title }}</h2>
              <ul class="flex flex-wrap gap-2">
                @for (skill of section.skills; track skill) {
                  <li class="rounded-md bg-gray-100 px-3 py-1 text-sm">{{ skill }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>

      <div>
        <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Main Project</p>
        <p class="mb-6 text-gray-700">
          실제 문제를 정의하고 해결하며 완성한 서비스 중심 프로젝트입니다.
        </p>
        <div class="flex flex-col gap-5">
          @for (project of mainProjects(); track project.name; let idx = $index) {
            <article
              class="hero-headline relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.45)]"
              [class.border-[#ffd9c2]]="idx === 0"
              [class.border-[#cde8ff]]="idx === 1"
              [class.bg-linear-[135deg,#fff7f2_0%,#fff2ea_50%,#ffffff_100%]]="idx === 0"
              [class.bg-linear-[135deg,#eef7ff_0%,#f3fbff_50%,#ffffff_100%]]="idx === 1"
            >
              <p
                class="pointer-events-none absolute top-3 right-4 text-7xl leading-none font-extrabold text-slate-900/8"
              >
                0{{ idx + 1 }}
              </p>

              <div class="relative z-10 flex flex-col gap-4">
                <div class="flex items-start justify-between gap-3">
                  <h2 class="text-xl font-bold leading-tight">{{ project.name }}</h2>
                  @if (project.isOperating) {
                    <span
                      class="rounded-full bg-emerald-100 flex justify-center min-w-15 px-2 md:px-3 py-1 text-xs font-semibold text-emerald-700"
                    >
                      운영 중
                    </span>
                  }
                </div>

                <p class="text-sm text-gray-700">{{ project.description }}</p>

                <p class="text-sm">
                  <span class="font-semibold">진행 기간</span>
                  <span class="ml-2 text-gray-700">{{ project.period }}</span>
                  @if (project.isOperating) {
                    <span class="ml-1 text-gray-700">(운영 중)</span>
                  }
                </p>

                <ul class="flex flex-wrap gap-2">
                  @for (stack of project.techStack; track stack) {
                    <li class="rounded-md bg-white/70 px-3 py-1 text-xs font-medium">
                      {{ stack }}
                    </li>
                  }
                </ul>

                <div class="mt-1 flex items-center gap-4">
                  @if (project.links.service) {
                    <a
                      class="inline-flex items-center rounded-lg bg-[#FF5F00] px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e55500]"
                      [href]="project.links.service"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      서비스 체험하기
                    </a>
                  }
                  <a
                    [href]="project.links.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[0.9rem] font-bold text-gray-900 underline underline-offset-[0.2rem]"
                  >
                    Github 보기
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
      </div>

      <div>
        <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Experience</p>
        <p class="mb-6 text-gray-700">{{ experienceIntro }}</p>

        <div class="flex flex-col gap-4">
          @for (experience of experienceItems; track experience.title) {
            <article
              class="hero-headline rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.45)]"
            >
              <div class="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-bold text-gray-900">{{ experience.title }}</h2>
                <p class="text-sm font-semibold text-gray-600">{{ experience.period }}</p>
              </div>

              <ul class="flex flex-col gap-2 text-sm leading-6 text-gray-700">
                @for (summary of experience.summaries; track summary) {
                  <li class="flex gap-2">
                    <span
                      class="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5F00]"
                    ></span>
                    <span>{{ summary }}</span>
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly projects = signal(PROJECTS);
  protected readonly experienceIntro = EXPERIENCE_INTRO;
  protected readonly experienceItems = EXPERIENCE_ITEMS;
  protected readonly techSkillSections = TECH_SKILL_SECTIONS;
  protected readonly mainProjects = computed(() =>
    this.projects().filter((project) => project.isShow),
  );
}
