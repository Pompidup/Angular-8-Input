import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new Developer("Julien", "Auvray", 35, "Male", "Je vais bien tout va bien", [
    new Skill("JavaScript", "http://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
    new Skill("Angular", "https://angular.io/assets/images/logos/angular/angular.png", "https://angular.io/")
  ])



  constructor() { }

  ngOnInit() {
  }

}
