import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute
    ) { }

    clienteDetail: ClienteDetail;

    cliente_id: number;

    /**
    * The method which retrieves the books of an editorial
    */
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        this.clienteDetail = new ClienteDetail();
        this.getClienteDetail();
    }

}
