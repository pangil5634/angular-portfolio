import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    type="button"
    class="border-2 border-[#FF5F00] text-[#FF5F00] rounded-md px-3 py-1 hover:bg-[#FF5F00] hover:text-white color-transition"
  >
    {{ text() }}
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly text = input.required<string>();
}
