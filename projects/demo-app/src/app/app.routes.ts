import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { BasicSwitches } from './sections/basic-switches/basic-switches';
import { ButtonsSection } from './sections/buttons-section/buttons-section';
import { SignupForms } from './sections/signup-forms/signup-forms';

export const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'switches', component: BasicSwitches},
  { path: 'buttons', component: ButtonsSection},
  { path: 'signup-forms', component: SignupForms}
];
