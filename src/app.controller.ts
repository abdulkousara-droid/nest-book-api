import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getHello(): Book[] {
    return this.booksService.getAllBooks()
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id
    return this.booksService.findById(bookID)
  }
}
