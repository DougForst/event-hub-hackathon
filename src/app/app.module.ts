import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BracketComponent } from './bracket/bracket.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { AthletesComponent } from './athletes/athletes.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketComponent,
    NewsComponent,
    MainComponent,
    AthletesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
