import { Routes } from '@angular/router';
import { Ecommerece } from './ecommerece/ecommerece';

export const routes: Routes = [
    { path: '', redirectTo: 'ecommerece', pathMatch: 'full' },
    { path: '', component: Ecommerece}
];
