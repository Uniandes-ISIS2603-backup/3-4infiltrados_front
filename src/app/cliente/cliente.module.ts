import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ClienteService} from './cliente.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BookModule} from '../book/book.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule,
        CommonModule,
        FormsModule,
        BookModule
    ],
    declarations: [ClienteDetailComponent,ClienteCreateComponent],
    providers: [ClienteService],
})
export class ClienteModule {}
