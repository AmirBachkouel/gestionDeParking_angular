import { Routes } from '@angular/router';
import { SignUp } from './components/sign-up/sign-up';
import { MainComponent } from './components/main-component/main-component';

export const routes: Routes = [
    {
        path:'home', 
        component:MainComponent, 
        children: [],
    },
    {path:'login', component:SignUp}
];
