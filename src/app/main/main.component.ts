import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public tab: string = "";

  constructor(private router: Router ) { }

  onSelectTab(item: string) {
    if(item === 'Logout') {
      this.router.navigateByUrl('logout');
    }
    this.tab = item;
  }

  ngOnInit(): void {
  }

}
