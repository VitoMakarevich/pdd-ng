import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import {Ng2Webstorage} from 'ngx-webstorage'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card'
import {MatRadioModule} from '@angular/material/radio'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'

import { AppComponent } from './app.component'
import { NavigationComponent } from './navigation/navigation.component'
import { ContentComponent } from './content/content.component'
import { TicketsComponent } from './content/tickets/tickets.component'
import { ResultsComponent } from './content/results/results.component'
import { CardComponent } from './content/tickets/card/card.component'
import { TicketComponent } from './content/ticket/ticket.component'
import { TicketService } from './services/ticket.service'
import { QuestionComponent } from './content/question/question.component'
import { LoadingComponent } from './common/loading/loading.component'
import { AnswerComponent } from './content/answer/answer.component'
import { TicketResultComponent } from './content/ticket-result/ticket-result.component'
import { DialogComponent } from './common/dialog/dialog.component'
import { TicketStorageService } from './services/ticket-storage.service'
import { EmptyComponent } from './content/results/empty/empty.component'

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
    path: 'tickets/:id/result',
    component: TicketResultComponent,
  },
  {
    path: 'tickets/:id',
    component: TicketComponent,
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
    QuestionComponent,
    LoadingComponent,
    AnswerComponent,
    TicketResultComponent,
    DialogComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    Ng2Webstorage,
  ],
  providers: [TicketService, TicketStorageService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
