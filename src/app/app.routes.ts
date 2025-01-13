import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewsletterComponent } from './components/newslatter/newslatter.component';
import { AuthGuard } from './guards/auth.guard';
import { AddComponent } from './components/newslatter/add/add.component';
import { UpdateComponent } from './components/newslatter/update/update.component';
import { HomePageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
       
      },
    {
      path: "newslatter",
      component: NewsletterComponent,
    
    },
    {
      path: "login",
      component: LoginComponent
    },
    {
      path: "add",
      component: AddComponent,
    
    },
    {
      path: "update/:value",
      component: UpdateComponent,
    },
    
  { path: '**', component: NotFoundComponent }

]
