import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
    console.log(this.crew);
  }

  checkDuplicateName(checkName: string): boolean {
    for (let i = 0; i < this.crew.length; i++) {
      if (checkName === this.crew[i]['name']) {
        return true;
      }
    }
    return false;
  }

  add(name: string, isFirst: boolean): void {
    if (this.checkDuplicateName(name)) {
      alert('Please enter another name');
      return;
    }
    this.crew.push({name: name, firstMission: isFirst});
  }

  remove(member: object): void {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(updatedName: string, member: object): void {
    member['name'] = updatedName;
    this.memberBeingEdited = null;
  }

}
