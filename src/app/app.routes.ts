import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'signals',
        loadChildren: () => import('./signals/signals.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: 'signals'
    }
];
