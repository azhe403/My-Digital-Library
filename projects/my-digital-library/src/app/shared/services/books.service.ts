import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  form = new FormGroup({
    idBook: new FormControl(''),
    bookName: new FormControl(''),
    writerName: new FormControl(''),
    publisherName: new FormControl(''),
    numberOfPages: new FormControl(''),
    datePublished: new FormControl('')
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

  getBooks() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
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
