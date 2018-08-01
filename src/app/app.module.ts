import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {RouterModule, Router, Routes} from '@angular/router'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs'

import { AppComponent } from './app.component'
import { NavigationComponent } from './navigation/navigation.component'
import { ContentComponent } from './content/content.component'
import { TicketsComponent } from './content/tickets/tickets.component'
import { ResultsComponent } from './content/results/results.component'
import {MatGridListModule} from '@angular/material/grid-list'

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  {
    path: 'tickets', component: TicketsComponent
  },
  {
    path: 'results', component: ResultsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    TicketsComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
