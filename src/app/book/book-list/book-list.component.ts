import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Book} from '../../book/book';
import {BookService} from '../../book/book.service';
import { BookDetail } from '../book-detail';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() books: BookDetail[];

    /**
    * The component's constructor
    */
    constructor(private bookService: BookService, private route: ActivatedRoute) {}

    allbooks: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.getBooks();
    }

}
