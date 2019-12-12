import { Cliente } from './cliente';
import { Book } from '../book/book';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class ClienteDetail extends Cliente {
   
    libros_comprados: Book[];
}