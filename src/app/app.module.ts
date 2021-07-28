import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AthletesComponent } from './athletes/athletes.component';
import { BracketComponent } from './bracket/bracket.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { NewsOverviewComponent } from './overview/news/news-overview.component';
import { OverviewComponent } from './overview/overview.component';
import { TeamScoresComponent } from './overview/team-scores/team-scores.component';
import { TilesComponent } from './overview/tiles/tiles.component';
import { VideosComponent } from './overview/videos/videos.component';
import { ResultsOverviewComponent } from './overview/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketComponent,
    NewsComponent,
    NewsOverviewComponent,
    MainComponent,
    AthletesComponent,
    HeaderComponent,
    OverviewComponent,
    TeamScoresComponent,
    TilesComponent,
    VideosComponent,
    ResultsOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
