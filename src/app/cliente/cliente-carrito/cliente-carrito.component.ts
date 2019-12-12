import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-cliente-carrito',
    templateUrl: './cliente-carrito.component.html',
    styleUrls: ['./cliente-carrito.component.css']
})
export class ClienteCarritoComponent implements OnInit {

    constructor(
        private clienteService: ClienteService,        
        private toastrService: ToastrService,
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
        this.cliente_id = +localStorage.getItem('id');
        this.clienteDetail = new ClienteDetail();
        this.getClienteDetail();
    }

    confirmarCompra(): void {
         
        this.toastrService.success('El libro ha sido agregado al carrito de compras ');
   
    }

}
