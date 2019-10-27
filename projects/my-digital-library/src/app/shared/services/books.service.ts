import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsoleService } from '../../core/console/console.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public formGroup = new FormGroup({
    bookName: new FormControl('', [
      Validators.required
    ]),
    writerName: new FormControl('', [
      Validators.required
    ]),
    publisherName: new FormControl('', [
      Validators.required
    ]),
    numberOfPages: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    datePublished: new FormControl('', [
      Validators.required
    ])
  });

  private collectionName = 'books';

  constructor(private firestore: AngularFirestore) {
  }

  createBook(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  updateBook(data, id) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .doc(id)
        .set(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getBooks() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  filterBooks(start: string, end: string) {
    ConsoleService.log2('keyword', start + ' ' + end);
    return this.firestore.collection(this.collectionName, ref => ref
      .orderBy('bookName')
      .startAt(start.toLowerCase())
      .endAt(end)).snapshotChanges();
  }

  deleteBook(data) {
    return this.firestore.collection(this.collectionName)
      .doc(data.payload.doc.id)
      .delete();
  }

  deleteBookById(id) {
    return this.firestore.collection(this.collectionName)
      .doc(id)
      .delete();
  }
}
