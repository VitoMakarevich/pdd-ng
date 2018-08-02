import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component'
import { NavigationComponent } from './navigation/navigation.component'
import { ContentComponent } from './content/content.component'
import { TicketsComponent } from './content/tickets/tickets.component'
import { ResultsComponent } from './content/results/results.component'

import { CardComponent } from './content/tickets/card/card.component'
import { TicketComponent } from './content/ticket/ticket.component'
import { TicketService } from './services/ticket.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'tickets/:id',
    component: TicketComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    TicketsComponent,
    ResultsComponent,
    CardComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
