import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-taipeiopendata',
  templateUrl: './taipeiopendata.component.html',
  styleUrls: ['./taipeiopendata.component.css']
})
export class TaipeiopendataComponent implements OnInit {
  data: any;
  posts:any[];

  constructor(private _http: Http) { }

  ngOnInit() {
    let url = "/opendata/datalist/apiAccess?scope=resourceAquire&rid=5697d81f-7c9d-43fc-a202-ae8804bbd34b";
    //this.data = this._http.get(url).map(x => x.json());
    // this._http.get(url).map(x=>x.json()).subscribe((obj)=>{
    //   this.posts=obj;
    // })
    this._http.get(url).map(x=>x.json());
  }

}
