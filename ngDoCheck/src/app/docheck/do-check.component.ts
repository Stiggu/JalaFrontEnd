import {Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class doCheckComponent implements DoCheck {

  oldName: string = "";
  name: string = "Anonymous"
  changeDetected: boolean = false;
  changeLog: string[] = [];
  noChangeCount = 0;

  constructor() {
  }

  changeName(entry: string) {
    this.oldName = this.name;
    this.name = entry;
  }

  ngDoCheck() {
    if (this.name !== this.oldName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Name changed to "${this.name}" from "${this.oldName}"`);
      this.oldName = this.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      const count = this.noChangeCount += 1;
      const noChangeMsg = `DoCheck called ${count}x when no change to Name`;
      if (count === 1) {
        this.changeLog.push(noChangeMsg);
      } else {
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

}
