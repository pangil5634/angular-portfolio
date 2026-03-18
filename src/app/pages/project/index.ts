import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../constants/projects';

@Component({
  selector: 'app-project',
  template: `
    <section class="mx-auto flex max-w-6xl flex-col gap-20">
      <header
        class="overflow-hidden rounded-2xl border border-gray-200 bg-[radial-gradient(circle_at_8%_15%,rgba(255,95,0,0.18),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.12),transparent_30%),linear-gradient(180deg,#fff_0%,#fafafa_100%)] p-8 md:p-10 hero-headline"
      >
        <p class="mb-2 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-[#FF5F00]">
          Project Showcase
        </p>
        <h1
          class="max-w-[22ch] text-[clamp(1.8rem,2.6vw,2.8rem)] leading-[1.2] tracking-[-0.02em] text-balance"
        >
          Built for real users, improved by real feedback.
        </h1>
        <p class="mt-4 leading-[1.65] text-gray-700">
          운영 중인 서비스는 깊게, 완료된 프로젝트는 아카이브로 정리해 문제 해결 방식과 구현 관점을
          함께 담았습니다.
        </p>
      </header>

      <section class="flex flex-col gap-4">
        <div>
          <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Featured Projects</p>
          <p class="mt-2 text-gray-600">현재 운영 중인 메인 프로젝트</p>
        </div>

        <div class="flex flex-col gap-4">
          @for (project of featuredProjects(); track project.name; let idx = $index) {
            <article
              class="hero-headline group relative overflow-hidden rounded-[1.1rem] border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_32px_-30px_rgba(0,0,0,0.55)]"
              [class.border-[#ffd6bf]]="idx === 0"
              [class.border-[#cfe6ff]]="idx === 1"
              [class.bg-[radial-gradient(circle_at_0%_0%,rgba(255,95,0,0.14),transparent_35%),linear-gradient(180deg,#fff7f2_0%,#fff_100%)]]="
                idx === 0
              "
              [class.bg-[radial-gradient(circle_at_100%_0%,rgba(14,165,233,0.16),transparent_35%),linear-gradient(180deg,#eef7ff_0%,#fff_100%)]]="
                idx === 1
              "
            >
              <p
                class="pointer-events-none absolute right-4 top-1 text-[4.3rem] leading-none font-extrabold tracking-[-0.04em] text-slate-900/8"
              >
                0{{ idx + 1 }}
              </p>

              <div class="relative z-10 flex flex-col gap-4">
                <div class="flex items-start justify-between gap-3">
                  <h3 class="max-w-[38ch] text-[1.2rem] leading-[1.35] font-semibold">
                    {{ project.name }}
                  </h3>
                  <span
                    class="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700"
                  >
                    운영 중
                  </span>
                </div>

                <p class="leading-[1.65] text-slate-700">{{ project.description }}</p>

                <dl class="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <dt class="mb-1 text-xs font-bold uppercase tracking-[0.04em] text-gray-500">
                      진행 기간
                    </dt>
                    <dd class="text-[0.93rem] text-gray-900">{{ project.period }} (운영 중)</dd>
                  </div>
                  <div>
                    <dt class="mb-1 text-xs font-bold uppercase tracking-[0.04em] text-gray-500">
                      핵심 포인트
                    </dt>
                    <dd class="text-[0.93rem] text-gray-900">실사용 흐름 기준으로 반복 개선</dd>
                  </div>
                </dl>

                <ul class="flex flex-wrap gap-2">
                  @for (stack of project.techStack; track stack) {
                    <li
                      class="rounded-[0.55rem] border border-gray-200/90 bg-white/80 px-2.5 py-1.5 text-[0.8rem] font-semibold text-gray-800"
                    >
                      {{ stack }}
                    </li>
                  }
                </ul>

                <div class="mt-1 flex items-center gap-3.5">
                  @if (project.links.service) {
                    <a
                      class="inline-flex items-center rounded-[0.6rem] bg-[#FF5F00] px-3.5 py-2 text-[0.88rem] font-bold text-white transition-colors duration-200 hover:bg-[#e55500]"
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
      </section>

      <section class="flex flex-col gap-4">
        <div>
          <p class="mb-3 text-2xl font-bold text-[#FF5F00]">| Archive Projects</p>
          <p class="mt-2 text-gray-600">완료된 프로젝트와 팀 협업 사례</p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          @for (project of archiveProjects(); track project.name) {
            <article
              class="hero-headline rounded-2xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.75 hover:shadow-[0_16px_22px_-22px_rgba(0,0,0,0.55)]"
            >
              <div class="flex items-baseline justify-between gap-3">
                <h3 class="text-base font-semibold">{{ project.name }}</h3>
                <span class="whitespace-nowrap text-[0.84rem] text-gray-500">{{
                  project.period
                }}</span>
              </div>

              <p class="mt-2.5 text-[0.92rem] leading-[1.6] text-slate-600">
                {{ project.description }}
              </p>

              <ul class="mt-3 flex flex-wrap gap-2">
                @for (stack of project.techStack; track stack) {
                  <li
                    class="rounded-[0.55rem] border border-gray-200/90 bg-gray-50 px-2.5 py-1.5 text-[0.8rem] font-semibold text-gray-800"
                  >
                    {{ stack }}
                  </li>
                }
              </ul>

              <div class="mt-3">
                <a
                  [href]="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[0.88rem] font-bold text-gray-900 underline underline-offset-[0.2rem]"
                >
                  GitHub 보기
                </a>
              </div>
            </article>
          }
        </div>
      </section>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  private readonly projects = signal(PROJECTS);
  protected readonly featuredProjects = computed(() =>
    this.projects().filter((project) => project.isShow),
  );
  protected readonly archiveProjects = computed(() =>
    this.projects().filter((project) => !project.isShow),
  );
}
