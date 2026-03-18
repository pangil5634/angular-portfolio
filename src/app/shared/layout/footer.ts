import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mt-20 border-t border-gray-200 pt-8 pb-10">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="flex flex-col gap-2">
          <p class="text-lg font-semibold text-gray-900">Pangil Frontend Portfolio</p>
          <p class="text-sm text-gray-600">사용자 경험을 개선하는 UI/UX 중심 프론트엔드 개발자</p>
        </div>

        <nav
          aria-label="Footer navigation"
          class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
        >
          <a
            href="https://www.linkedin.com/in/kwangil-kim-79822a2aa/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pangil5634"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:oksk6689@gmail.com"
            class="text-gray-700 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </nav>
      </div>

      <div class="mt-6 text-xs text-gray-500">
        <p>© {{ currentYear }} Pangil. All rights reserved.</p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
