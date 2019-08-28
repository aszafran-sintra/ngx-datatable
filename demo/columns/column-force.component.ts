import { Component, OnChanges, OnInit } from '@angular/core';
// 
@Component({
  selector: 'column-force-demo',
  template: `
    <div style="width:500px">
      <h3>
        Force Fill Column Width Distribution
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/columns/column-force.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable 
        class="material"
        [headerHeight]="50"
        [rowHeight]="50"
        [rows]="rows"
        [scrollbarH]="true"
        [virtualization]="false">
        <ngx-datatable-column name="Name" [width]="100" [frozenLeft]="true" prop="name">
        </ngx-datatable-column>
        <ngx-datatable-column name="Gende1r" [width]="100" prop="gender">
        </ngx-datatable-column>
        <ngx-datatable-column name="Gende5r" prop="gender">
        </ngx-datatable-column>
        <ngx-datatable-column name="Gende6r" prop="gender">
        <ng-template let-value="value" ngx-datatable-cell-template>
        <div style="background-color: red">
          {{value}}
        </div>
      </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" [width]="100" [frozenRight]="true" prop="age">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class ColumnForceComponent implements OnChanges, OnInit {

  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
    console.error('adsasdasd');
  }

  ngOnInit(): void {
    console.error('ngOnInit');
  }
  
  ngOnChanges(changes): void {
    console.error('ngOnChanges');
  }
  
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
