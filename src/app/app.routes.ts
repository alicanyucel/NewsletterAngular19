import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { NewsletterComponent } from './components/newslatter/newslatter.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'homepage',
        component:HomePageComponent
    },
    {
        path:'newslatter',
        component:NewsletterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
  
   
  { path: '**', component: NotFoundComponent }

]
