import { Component, OnInit } from '@angular/core';
import { EditticketsService } from './edittickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittickets',
  templateUrl: './edittickets.component.html',
  styleUrls: ['./edittickets.component.scss'],
})

export class EditticketsComponent implements OnInit {
    queryId: any;
    typesitemArray: any = [];
    severityitemArray: any = [];
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

    constructor (
        private editticketsService: EditticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email'); 
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpDelete() {
        this.editticketsService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.editticketsService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}