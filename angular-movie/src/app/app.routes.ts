import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path:'', component: AppComponent},
    { path: 'about', component: AboutUsComponent },
];
