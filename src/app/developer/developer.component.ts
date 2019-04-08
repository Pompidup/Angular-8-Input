import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new Developer("Julien", "Auvray", 35, "Male", "Je vais bien tout va bien");



  constructor() { }

  ngOnInit() {
  }

}
