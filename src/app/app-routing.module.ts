import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthletesComponent } from './athletes/athletes.component';
import { BracketComponent } from './bracket/bracket.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    { path: '', component: BracketComponent },
    { path: 'brackets', component: BracketComponent },
    { path: 'news', component: NewsComponent },
    { path: 'athletes', component: AthletesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }