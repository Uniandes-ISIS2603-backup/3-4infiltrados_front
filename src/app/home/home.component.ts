import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bs: BookService) { }

  books: Book[];
  booksSorteable: Book[];
  bestsellers: Book[];
  novedades: Book[];
  descuentos: Book[];


  ngOnInit() {
    this.getBooks();
    
    var that=this;
    setTimeout(function(){
      that.booksSorteable = that.books;
      that.getBestsellers();
     
      that.getNovedades();
      that.getDescuentos();
     }, 500);
    
  }

  getBooks(): void {
    this.bs.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

  getBestsellers(): void {
   
    this.booksSorteable.sort((b1, b2) => b1.vendidos - b2.vendidos);

   this.bestsellers=this.booksSorteable
  }

  getNovedades(): void {
    
    this.booksSorteable.sort(function(b1, b2){
      let newDate = new Date(b1.publishingdate);
      let newDate2=new Date (b2.publishingdate);
    return  newDate.getTime()- newDate2.getTime();
     }) 

    this.novedades=this.booksSorteable
  }

  getDescuentos(): void {
   

    for (let e of this.booksSorteable) {
        if (e.descuento>0){
          this.descuentos.push(e);
        }
      }
    }
  
}

