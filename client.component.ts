import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:object;
  active_client:object;
  constructor(private route:ActivatedRoute) {
    
    let id= this.route.snapshot.paramMap.get("id");
    //alert(id);
    this.clients={
      "1":{"client_name":"sony","client_address":"some sony address"},
      "2":{"client_name":"LG","client_address":"some LG address"},
      "3":{"client_name":"samsung","client_address":"some samsung address"},
    }
    this.active_client=this.clients[id];
    console.log(this.active_client);
  }
  ngOnInit(): void {
  }
}
