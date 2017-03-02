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

  constructor(private _http: Http) { }

  ngOnInit() {
    let url = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5";
    // this.data = this._http.get(url).map(x => x.json());
    // this._http.get(url).map(x=>x.json()).subscribe((obj)=>{
    //   this.data=obj;
    // })
    console.log(url);    
    
    this.data = this._http.get(url).map(x => x.json());
  }

}
