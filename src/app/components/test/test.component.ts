import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, snapshotChanges} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  items$: Observable<any[]>;

  constructor(private fsdb: AngularFireDatabase) { }

  ngOnInit(): void {

    this.items$ = this.fsdb.list('testFur').snapshotChanges().pipe(map(snaps => snaps.map(snap => {
      const {payload, key} = snap;
      const data = payload.val() as any;
      return {key, ...data};
    })))
  }

}
