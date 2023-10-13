import { Component, OnInit } from '@angular/core';
import { Iglossyz } from './../../glossyz';
import { GlossyzService } from '../services/glossyz.service';

@Component({
  selector: 'app-glossyz',
  templateUrl: './glossyz.component.html',
  styleUrls: ['./glossyz.component.css']
})
export class GlossyzComponent implements OnInit {
  glossyzItems:any = [];
  Iglossyz:any;
  errMsg = [];
  constructor(private glossyzService:GlossyzService){}
  
  
  ngOnInit(){
    this.glossyzService.getitems()
  .subscribe(data => this.glossyzItems= data,
      error => this.errMsg =error);
  }

}
