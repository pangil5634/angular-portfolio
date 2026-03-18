import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../ui/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent],
  template: `
    <header class="flex justify-between mt-5 items-center mb-10">
      <a routerLink="/">
        <p
          class="text-lg font-bold text-[#FF5F00] border-2 rounded-2xl px-3 py-1 hover:bg-[#FF5F00] hover:text-white color-transition"
        >
          Pangil-Angular
        </p>
      </a>
      <div class="flex gap-2">
        <a routerLink="/project">
          <app-button [text]="'Project'" />
        </a>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
