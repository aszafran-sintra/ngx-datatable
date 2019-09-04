import { Component } from '@angular/core';

@Component({
  selector: 'column-force-demo',
  template: `
    <div style="width:800px; max-width:800px">
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
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="100"
        [scrollbarH]="true"
        [virtualization]="false"
        [rows]="rows">
        <ngx-datatable-column name="Name" [width]="100" [minWidth]="100" [resizeable]="false" [frozenLeft]="true">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender" [width]="100" [minWidth]="100" [resizeable]="false">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" [width]="300" [minWidth]="300" [resizeable]="false">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" [width]="300" [minWidth]="300" prop="gender" [resizeable]="false">
        <ng-template let-value="value" ngx-datatable-cell-template>
          {{value}}
        </ng-template>
      </ngx-datatable-column>
      <ngx-datatable-column name="Age" [width]="300" [minWidth]="300" prop="gender" [resizeable]="false">
      <ng-template let-value="value" ngx-datatable-cell-template>
        {{value}}
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Age" [width]="300" [minWidth]="300" prop="gender" [resizeable]="false">
    <ng-template let-value="value" ngx-datatable-cell-template>
      {{value}}
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Age" [width]="300" [minWidth]="300" prop="gender" [resizeable]="false">
  <ng-template let-value="value" ngx-datatable-cell-template>
    {{value}}
  </ng-template>
</ngx-datatable-column>
<ngx-datatable-column name="FrozenRight" [width]="300" [minWidth]="300" prop="gender" [frozenRight]="true" [resizeable]="false">
<ng-template let-value="value" ngx-datatable-cell-template>
  {{value}}
</ng-template>
</ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class ColumnForceComponent {

  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
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
