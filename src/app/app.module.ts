import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {LayoutModule} from '@angular/cdk/layout';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthorModule} from './author/author.module';
import {AuthModule} from './auth/auth.module';
import {BookModule} from './book/book.module';
import {EditorialModule} from './editorial/editorial.module';
import {ClienteModule} from './cliente/cliente.module';
import { PaginaDashboardComponent } from './pagina-dashboard/pagina-dashboard.component';
import {HomeComponent} from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
    declarations: [
        AppComponent,
        PaginaDashboardComponent,
        HomeComponent,
        MapaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
		LayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AuthorModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        BookModule,
        EditorialModule,
        ClienteModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
