import { Component, OnInit } from '@angular/core';
import { Inject, NgModule, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.toggleFn();
  }

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
