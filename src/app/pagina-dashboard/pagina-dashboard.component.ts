import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../book/book';
import { ClienteService } from '../cliente/cliente.service';
import { ClienteDetail } from '../cliente/cliente-detail';

@Component({
  selector: 'app-pagina-dashboard',
  templateUrl: './pagina-dashboard.component.html',
  styleUrls: ['./pagina-dashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {

  constructor(private cs: ClienteService) { }

  books: Book[];
  cliente: ClienteDetail;


  ngOnInit() {
    this.getCliente();
    this.getBooks();
  }

  getBooks(): void {
    this.books =    this.cliente.libros_comprados;
  }

  getCliente(): void {
    this.cs.getClienteDetail(+localStorage.getItem('id'))
    .subscribe(c => {
      this.cliente = c;
    });
  }

  esVacia():boolean {
    if(this.books.length==0){
      return true;
    }
    else {
      return false;
    }
  }
 
}
