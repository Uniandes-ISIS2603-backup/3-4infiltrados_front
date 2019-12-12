import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private authService: AuthService,
        private toastrService: ToastrService,

    ) {
    }

    correo: string;
    clave: string;
    rol: string;
    clientes: Cliente[];
    roles: string[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        var existe:boolean;
        var id;
        var that = this;
        console.log(this.correo)
        if (that.rol == 'Cliente') {
            this.clientes.forEach(function (value) {
                if (value.correo === that.correo) {
                    id = value.id;
                    if (value.clave == that.clave) {
                        that.authService.setRole(that.rol);
                        that.toastrService.success('Logged in');
                        that.authService.guardarId(id);
                    } else {
                        that.toastrService.error('clave incorrecta');
                    }
                }
            });
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.roles = ['Cliente', 'Admin'];
        this.clienteService.getClientes().subscribe(c => this.clientes = c);
         }

}
