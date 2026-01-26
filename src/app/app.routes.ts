import { Routes } from '@angular/router';
import { SignUp } from './components/sign-up/sign-up';
import { MainComponent } from './components/main-component/main-component';
import { HomePage } from './components/home-page/home-page';

export const routes: Routes = [
    {
        path:'', 
        component:MainComponent, 
        children: [
            {path:'home', component:HomePage}
        ],
    },
    {path:'login', component:SignUp}
];
