import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  logout: boolean = false;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(params => {
      this.logout = params[0].path === 'logout';
    })
  }

}
