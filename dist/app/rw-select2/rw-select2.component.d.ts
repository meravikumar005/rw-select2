import { ElementRef, OnInit, EventEmitter } from "@angular/core";
export declare class RwSelect2Component implements OnInit {
    private el;
    toggleSelect: boolean;
    selectLable: string;
    selectedItem: string;
    dataList: any;
    label: string;
    data: any;
    selected: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private outClick($event);
    toggleSelectBox($event: any): void;
    selectedValue(value: any): void;
}
