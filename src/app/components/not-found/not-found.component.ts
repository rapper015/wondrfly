import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>404 - Page Not Found</h1>
    <a routerLink="/">Go Home</a>
  `
})
export class NotFoundComponent {}
