// src/app/components/page/page.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Filtered Page</h2>
    <div *ngIf="city">City: {{ city }}</div>
    <div *ngIf="program">Program: {{ program }}</div>
    <div *ngIf="category">Category: {{ category }}</div>
  `
})
export class PageComponent {
  route = inject(ActivatedRoute);

  city = this.route.snapshot.paramMap.get('city');
  program = this.route.snapshot.paramMap.get('program');
  category = this.route.snapshot.paramMap.get('category');
}
