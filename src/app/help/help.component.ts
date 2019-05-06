import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.less']
})
export class HelpComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    type myParams = {redirected: boolean} & Params;

    this.route.queryParams.subscribe((params: myParams) => {
      const redirected: boolean = params.redirected;
      if(redirected) {
        alert("Redirected");
      }
    });
  }
}
