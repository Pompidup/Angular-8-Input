import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  public skillArray = new Skill
  ["Javascript", "logo","site"],
  [];
  @Input() skillInput : Skill;

  constructor() {

  }

  ngOnInit() {
  }

}
