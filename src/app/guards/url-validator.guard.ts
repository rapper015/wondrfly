import { CanActivateFn, Router } from '@angular/router';
import {
  validCities,
  validPrograms,
  validCategories,
} from '../utils/valid-values';
import { inject } from '@angular/core';

export const urlValidatorGuard: CanActivateFn = (route, state) => {
  const segments = route.url.map((segment) => segment.path);
  const router = inject(Router);

  const city = segments[0];
  const program = segments[1];
  const category = segments[2];

  const isValidCity = city && validCities.includes(city);
  const isValidProgram = !program || validPrograms.includes(program);
  const isValidCategory = !category || validCategories.includes(category);

  const isValid = isValidCity && isValidProgram && isValidCategory;

  if (!isValid) {
    console.log('Invalid route detected');
    return router.parseUrl('/not-found'); // ✅ Safe redirect without infinite loop
  }

  return true;
};
