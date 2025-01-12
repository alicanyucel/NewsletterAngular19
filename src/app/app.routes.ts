import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';
import { HomePageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'haberler',
        component:NewslatterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
  
   
  { path: '**', component: NotFoundComponent }

]
