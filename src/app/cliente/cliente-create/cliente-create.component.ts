import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm: FormGroup;
  clienteService: ClienteService;

  clientes: Cliente[];

  constructor(
    private ClienteService: ClienteService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.clienteForm = this.formBuilder.group({
      correo: ["", [Validators.required, Validators.minLength(2)]],
      clave: ["", [Validators.required, Validators.minLength(2)]],
      direccion: ["", [Validators.required, Validators.minLength(2)]]
    });

  }

  createCliente(newCliente: Cliente) {
    // Process checkout data here
    console.warn("el cliente fue creado", newCliente);

    this.clienteService.createCliente(newCliente).subscribe(c => {
      this.clientes.push(c);
      this.showSuccess();
    });
    this.clienteForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.clientes.length; i++){
      console.log(this.clientes[i].id+' '+this.clientes[i].correo);
    }
    this.toastr.success("Cliente", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.ClienteService
      .getClientes()
      .subscribe(c => (this.clientes = c));
  }

}
