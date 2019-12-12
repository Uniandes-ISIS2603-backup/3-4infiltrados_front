import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-pagina-dashboard',
  templateUrl: './pagina-dashboard.component.html',
  styleUrls: ['./pagina-dashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {

  constructor(private bs: BookService) { }

  books: Book[];
  booksSorteable: Book[];
  bestsellers: Book[];
  novedades: Book[];
  descuentos: Book[];


  ngOnInit() {
    this.getBooks();
    this.booksSorteable = this.books;
    this.getBestsellers();
    this.getNovedades();
    this.getDescuentos();
  }

  getBooks(): void {
    this.bs.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

  getBestsellers(): void {
    console.log("booksSorteable");
    console.log(this.books);
    console.log(this.booksSorteable);
    this.booksSorteable.sort((b1, b2) => b1.vendidos - b2.vendidos);
    
    
    for (let e of this.booksSorteable) {
      
      if (this.bestsellers.length < 5) {
        this.bestsellers.push(e);
      }
    }
  }

  getNovedades(): void {
    this.booksSorteable.sort((b1, b2) => b1.publishingdate - b2.publishingdate);

    for (let e of this.booksSorteable) {
      if (this.novedades.length < 5) {
        this.novedades.push(e);
      }
    }
  }

  getDescuentos(): void {
   

    for (let e of this.booksSorteable) {
        if (e.descuento>0){
          this.descuentos.push(e);
        }
      }
    }
  
}
