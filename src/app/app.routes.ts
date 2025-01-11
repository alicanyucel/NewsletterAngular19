import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
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
