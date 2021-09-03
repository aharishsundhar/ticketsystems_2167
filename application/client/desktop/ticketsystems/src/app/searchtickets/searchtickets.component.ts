import { Component, OnInit } from '@angular/core';
import { SearchticketsService } from './searchtickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchtickets',
  templateUrl: './searchtickets.component.html',
  styleUrls: ['./searchtickets.component.scss'],
})

export class SearchticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'description', field: 'description'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
    public tickets = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        types: '',
        severity: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private searchticketsService: SearchticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email'); 
    }
    GpRoute(queryId) {
        this.router.navigate(['./edittickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}