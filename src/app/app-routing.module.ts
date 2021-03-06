import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthletesComponent } from './athletes/athletes.component';
import { BracketComponent } from './bracket/bracket.component';
import { NewsComponent } from './news/news.component';
import { OverviewComponent } from './overview/overview.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'brackets', component: BracketComponent },
    { path: 'news', component: NewsComponent },
    { path: 'athletes', component: AthletesComponent },
    { path: 'teams', component: TeamsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
