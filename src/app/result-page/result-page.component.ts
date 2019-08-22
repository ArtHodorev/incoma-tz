import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';
import {ItemModel} from '../shared/models/item.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'type'];
  public dataSource: ItemModel[] = [];
  public filter = {
    name: '',
    type: ''
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        this.filter.name = params.name;
        this.filter.type = params.type;
        this.dataService.getItems().subscribe(
          items => {
            this.dataSource = items;
          }
        );
      }
    );
  }

}
