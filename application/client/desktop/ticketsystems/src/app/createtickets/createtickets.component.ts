import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
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
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.email = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}