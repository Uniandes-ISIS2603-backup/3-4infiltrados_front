import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthorListComponent } from '../author/author-list/author-list.component';
import { BookListComponent } from '../book/book-list/book-list.component';
import { EditorialListComponent } from '../editorial/editorial-list/editorial-list.component';
import { AuthorDetailComponent } from '../author/author-detail/author-detail.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import { EditorialDetailComponent } from '../editorial/editorial-detail/editorial-detail.component';
import { BookCreateComponent } from '../book/book-create/book-create.component';
import { BookEditComponent } from '../book/book-edit/book-edit.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { HomeComponent } from '../home/home.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { PaginaDashboardComponent } from '../pagina-dashboard/pagina-dashboard.component';

const routes: Routes = [

   
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent
            },
            {
                path: ':id',
                component: AuthorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'editorials',
        children: [
            {
                path: 'list',
                component: EditorialListComponent
            },
            {
                path: ':id',
                component: EditorialDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                children: [
                    {
                        path: "cliente",
                        component: ClienteCreateComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'cliente',
        children: [
            {
                path: ':id',
                component: ClienteDetailComponent,
                runGuardsAndResolvers: 'always',
            },
            {
                path: 'create',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always',
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: PaginaDashboardComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'books',
        children: [
            {
                path: 'list',
                component: BookListComponent
            },
            {
                path: 'add',
                component: BookCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id/edit',
                component: BookEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }

            },
            {
                path: ':id',
                component: BookDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
