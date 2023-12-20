import { Component } from '@angular/core';
import { Inject, NgModule, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  toggleFn() {
    if (this.document.body.classList[0] == 'dark') {
      this.renderer.removeClass(this.document.body, 'dark');

      this.renderer.addClass(this.document.body, 'light');
    } else {
      this.renderer.removeClass(this.document.body, 'light');
      this.renderer.addClass(this.document.body, 'dark');
    }
  }
}
