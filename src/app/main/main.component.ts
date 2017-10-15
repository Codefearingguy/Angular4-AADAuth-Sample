import { Component, OnInit } from '@angular/core';
import { Adal4Service } from 'adal-angular4';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
userName: string;
  constructor(private adalSvc: Adal4Service) { }
  ngOnInit() {
    this.userName = this.adalSvc.userInfo.username;
  }
}
