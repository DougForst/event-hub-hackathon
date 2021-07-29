import { NewsComponent } from './overview/news/news.component';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import  {MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BracketComponent } from './bracket/bracket.component';
import { MainComponent } from './main/main.component';
import { NewsComponent as OverviewNewsComponent } from './overview/news/news.component';
import { AthletesComponent } from './athletes/athletes.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverviewComponent } from './overview/overview.component';
import { TeamScoresComponent } from './overview/team-scores/team-scores.component';
import { TilesComponent } from './overview/tiles/tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketComponent,
    NewsComponent,
    OverviewNewsComponent,
    MainComponent,
    AthletesComponent,
    HeaderComponent,
    OverviewComponent,
    TeamScoresComponent,
    TilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
