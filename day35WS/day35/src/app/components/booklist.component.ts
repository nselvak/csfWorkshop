import { Component, OnInit } from '@angular/core';
import { BookSummary } from '../models';
import { BookService } from '../service/BookService';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: BookSummary[] = []
  a= 'c1706249'

  constructor(private svc: BookService) { }

  ngOnInit(): void {
    const i = Math.floor(Math.random()* 20) +1
    const j = Math.floor(Math.random()* 10) +1

    console.info(">>>>>> limit: ", i)
    console.info(">>>>>> offset: ", j)

    this.svc.getBooks(i,j)
      .then(result => {
        console.info('>>> books: ', result)
        this.books = result
      })
      .catch(error => {
        console.error('>>>> error: ', error)
      })
  }

}
