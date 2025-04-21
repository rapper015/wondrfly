import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageComponent } from './components/page/page.component';
import { urlValidatorGuard } from './guards/url-validator.guard';

export const routes: Routes = [
	{
	  path: '',
	  component: HomeComponent,
	},
	{
	  path: 'not-found',
	  component: NotFoundComponent,
	},
	{
	  path: ':city',
	  component: PageComponent,
	  canActivate: [urlValidatorGuard],
	},
	{
	  path: ':city/:program',
	  component: PageComponent,
	  canActivate: [urlValidatorGuard],
	},
	{
	  path: ':city/:program/:category',
	  component: PageComponent,
	  canActivate: [urlValidatorGuard],
	},
	{
	  path: '**',
	  redirectTo: 'not-found',
	},
  ];
  
