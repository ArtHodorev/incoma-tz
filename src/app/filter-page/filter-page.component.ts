import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {
  public filter = {
    name: '',
    type: ''
  };
  public types = [
    {value: 'Male'},
    {value: 'Female'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  toResult() {
    this.router.navigate(['/result'], {
      queryParams: {
        name: this.filter.name,
        type: this.filter.type
      }
    });
  }

}
