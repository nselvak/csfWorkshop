import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../models';
import { BookService } from '../service/BookService';

@Component({
  selector: 'app-bookdisplay',
  templateUrl: './bookdisplay.component.html',
  styleUrls: ['./bookdisplay.component.css']
})
export class BookdisplayComponent implements OnInit {

  constructor(private svc: BookService, private activatedRoute: ActivatedRoute) { }

  bookId!: string;

  details!: Details 

  

  ngOnInit(): void {
    this.details =     {
      book_id: '',
      title: '',
      authors: '',
      description: '',
      edition: '',
      format : '',
      pages: 0,
      rating : 0, 
      rating_count : 0,
      review_count : 0,
      genres : '',
      image_url : ''
  }
    this.bookId = this.activatedRoute.snapshot.params['book_id']
    console.info(">>>>>", this.bookId)
    this.svc.getDetails(this.bookId)
      .then(result => {
        console.info('>>> Result Details: ', result)
        this.details = result[0]
        console.info('>>> Details: ', this.details)

      })
      .catch(error => {
        console.error('>>>> error: ', error)
      })
    
  }



}
