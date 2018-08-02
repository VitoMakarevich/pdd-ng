import { Component, OnInit, Input } from '@angular/core'
import { Question } from '@assets/models'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question

  constructor() { }

  private getId() {
    return this.question.id
  }

  private getImage() {
    return this.question.imageName
  }

  ngOnInit() {
  }

}
