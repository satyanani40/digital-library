import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppServiceModule, Languages} from '../shared/app.service.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppUrls} from '../config/constant.config';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  trueFalseArray: any[];
  bookInfo: object = {};
  myParams: any = {};
  languages: any[];
  googleBookInfo: any = {};
  categories: any = [];
  imagePreview: any = {};
  ebookPreview: any = {};
  bookForm = new FormGroup({
    book_title: new FormControl(),
    sub_title: new FormControl(),
    book_summary: new FormControl(),
    book_keywords: new FormControl(),
    no_of_pages: new FormControl(),
    book_authors: new FormControl(),
    book_author_desc: new FormControl(),
    availability: new FormControl(true),
    hcopy_price: new FormControl(),
    ecopy_price: new FormControl(),
    book_categories: new FormControl(),
    language: new FormControl(),
    publisher: new FormControl(),
    ISBN_10: new FormControl(),
    ISBN_13: new FormControl(),
    published_date: new FormControl(),
    image_small_thumbnail: new FormControl(),
    image_thumbnail: new FormControl(),
    no_of_copies: new FormGroup({
      outstore: new FormControl(0, Validators.required),
      instore: new FormControl(1, Validators.compose([Validators.required, Validators.maxLength(1)]))
    })
  });
  @ViewChild('imageUpload') imageInput: ElementRef;
  @ViewChild('eBookUpload') eBookInput: ElementRef;
  constructor(private appService: AppServiceModule,
              private langs: Languages,
              private appUrls: AppUrls,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.myParams = params;
    });
  }
  ngOnInit() {
    this.trueFalseArray = [
      {text: 'Yes', val: true},
      {text: 'No', val: false}
    ];
    this.languages = this.langs.get();
    this.getCategories();
  }
  fileChangeEvent (event) {
    const image = this.imageInput.nativeElement['files'][0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = {
        src: e.target.result,
        title: image['name']
      };
    };

    reader.readAsDataURL(this.imageInput.nativeElement['files'][0]);
  }
  removeImage() {
    this.imageInput.nativeElement.value = '';
    this.imagePreview = {};
  }
  eBookChangeEvent(event) {
    const file = this.eBookInput.nativeElement['files'][0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e, file);
      this.ebookPreview = {
        src: e.target.result,
        title: file['name']
      };
    };
    reader.readAsDataURL(this.eBookInput.nativeElement['files'][0]);
  }
  removeEBook() {
    this.ebookPreview = {};
    this.eBookInput.nativeElement.value = '';
    this.bookForm['ebook'] = '';
    this.bookInfo['ebook'] = '';
  }
  getCategories () {
    this.appService.get(this.appUrls.categories).subscribe((data: any) => {
      console.log(data);
      this.categories = data['_items'];
      this.getBookDetails();
    }, (err) => {
      console.log(err);
    });
  }
  getBookDetails() {
    this.appService.get(this.appUrls.books_list + '/' + this.myParams['_id']).subscribe((data) => {
      console.log(data);
      this.bookInfo = data;
      data['published_date'] = new Date(data['published_date']).toLocaleString().split(',')[0];
      this.bookForm.patchValue(data);
      this.ebookPreview['src'] = data['ebook'];
      this.ebookPreview['title'] = data['ebook'];
      this.imagePreview['src'] = data['image_thumbnail'];
      this.imagePreview['title'] = data['book_title'];
    }, (err) => {
      console.log(err);
    });
  }
  stopLoading () {
    setTimeout(() => {
      this.appUrls.loadingIcon = false;
    }, 500);
  }
  updateBook(bookForm) {
    if (typeof bookForm['book_authors'] === 'string') {
      bookForm['book_authors'] = bookForm['book_authors'].split(',');
    }
    if (typeof bookForm['book_categories'] === 'string') {
      bookForm['book_categories'] = [bookForm['book_categories']];
    }
    bookForm['published_date'] = new Date(bookForm['published_date']).toISOString();
    console.log('-------', bookForm, bookForm['book_categories']);
    this.appService.update(this.appUrls.books_list + '/' + this.myParams['_id'], bookForm).subscribe((data) => {
      console.log(data);
      this.appService.toast(bookForm['book_title'], 'Successfully updated!', 's');
      this.router.navigate(['/homepage']);
    }, (err) => {
      console.log(err);
      this.appService.toast('Something went wrong!', '', 'e');
    });
  }
  checkEBookUpload(bookForm) {
    if (this.eBookInput.nativeElement.value) {
      const formData = new FormData();
      formData.append('file', this.eBookInput.nativeElement['files'][0]);
      this.appService.post(this.appUrls.upload_file, formData, true).subscribe((data) => {
        console.log('Ebook Data', data);
        if (data && data['data']) {
          bookForm['ebook'] = data['data']['path'];
        }
        this.updateBook(bookForm);
      }, (err) => {
        console.log(err);
        this.stopLoading();
      });
    } else {
      this.updateBook(bookForm);
    }
  }
  updateBookDetails(bookForm) {
    if (this.imageInput.nativeElement.value) {
      const formData = new FormData();
      formData.append('file', this.imageInput.nativeElement['files'][0]);
      this.appService.post(this.appUrls.upload_file, formData, true).subscribe((data) => {
        console.log(data);
        if (data && data['data']) {
          bookForm['image_small_thumbnail'] = data['data']['path'];
          bookForm['image_thumbnail'] = data['data']['path'];
        }
        console.log('Book data', bookForm);
        this.checkEBookUpload(bookForm);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.checkEBookUpload(bookForm);
    }
  }

}
