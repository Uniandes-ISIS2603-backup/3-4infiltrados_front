import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

/**
 * The app component. This component is the base of the BookStore
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    id:string;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "BookStore";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

    isCliente():boolean{
        return localStorage.getItem("role") == "TECNICO";
    }

    isAdmin():boolean{
        return localStorage.getItem("role") == "ADMIN";
    }

    getId():string{
        return localStorage.getItem('id');
    }

}











