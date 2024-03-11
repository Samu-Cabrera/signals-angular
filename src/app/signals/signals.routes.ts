import { Routes } from "@angular/router";

import { CounterPageComponent } from "./pages/counter-page/counter-page.component";
import { InfoPageComponent } from "./pages/info-page/info-page.component";
import { PropertyPageComponent } from "./pages/property-page/property-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { SignalsLayoutComponent } from "./layouts/signals-layout/signals-layout.component";

export const routes: Routes = [
    {
        path: '',
        component: SignalsLayoutComponent,
        children: [
            {
                path: 'counter',
                component: CounterPageComponent
            }, 
            {
                path: 'info',
                component: InfoPageComponent
            }, 
            {
                path: 'property',
                component: PropertyPageComponent
            }, 
            {
                path: 'user',
                component: UserPageComponent
            }
        ]
    }
]