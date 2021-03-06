import { Component, ElementRef, OnInit, HostListener, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector:"rw-select2",
  templateUrl:"./rw-select2.component.html",
  styleUrls:["./rw-select2.component.scss"],
  host:{
    "(document:click)":"outClick($event)"
  }

})

export class RwSelect2Component implements OnInit {
  public toggleSelect:boolean;
  public selectLable:string;
  public selectedItem:string;
  public dataList:any;


  @Input() label:string;
  @Input() data:any;
  @Output() selected:EventEmitter<any> = new EventEmitter();


  constructor(private el:ElementRef) {
    this.toggleSelect = false;
    this.selectedItem = "Select";
  }

  ngOnInit() {
    this.selectLable = this.label;
    this.dataList = this.data;
  }

  private outClick($event:Event):void {
    let classList = $event.target['classList'][0];
    if(classList !== 'select-button' && classList !== 'text' && classList !== 'label' && classList !== 'caret' ) {
      this.toggleSelect = false;
    }
  };

  public toggleSelectBox($event:any):void {
    this.toggleSelect = !this.toggleSelect;
  };

  public selectedValue(value) {
    this.selectedItem = value.value;
    this.toggleSelect = false;
    this.selected.emit(value);
  }
}
