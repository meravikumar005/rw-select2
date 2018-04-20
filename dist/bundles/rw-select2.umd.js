(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('rw-select2', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['rw-select2'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var RwSelect2Component = /** @class */ (function () {
    function RwSelect2Component(el) {
        this.el = el;
        this.selected = new core.EventEmitter();
        this.toggleSelect = false;
        this.selectedItem = "Select";
    }
    RwSelect2Component.prototype.ngOnInit = function () {
        this.selectLable = this.lable;
        this.dataList = this.data;
    };
    RwSelect2Component.prototype.outClick = function ($event) {
        if ($event.target['classList'] == '') {
            this.toggleSelect = false;
        }
    };
    RwSelect2Component.prototype.toggleSelectBox = function ($event) {
        this.toggleSelect = !this.toggleSelect;
    };
    RwSelect2Component.prototype.selectedValue = function (value) {
        this.selectedItem = value.value;
        this.toggleSelect = false;
        this.selected.emit(value);
    };
    return RwSelect2Component;
}());
RwSelect2Component.decorators = [
    { type: core.Component, args: [{
                selector: "rw-select2",
                template: "<div class=\"rw-select-wrapper\">\n  <div class=\"select-box\">\n    <button class=\"select-button\" (click) = \"toggleSelectBox($event)\">\n      <div class=\"text-box\">\n          <span class=\"label\">{{selectLable}}:</span>\n          <span class=\"text\">{{selectedItem}}</span>\n      </div>\n      <span class=\"caret\">&#9660;</span>\n    </button>\n    <!-- <div class=\"search-box\"></div> -->\n    <div class=\"rw-select-list\" *ngIf = \"toggleSelect\">\n      <ul>\n        <li *ngFor = \"let list of dataList\" (click) =\"selectedValue(list)\">\n          {{list.value}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Oxygen);.rw-select-wrapper{width:100%;position:relative}.rw-select-wrapper .select-box .select-button{width:100%;min-height:36px;background-color:#fff;padding:5px 10px;border:1px solid #e6e6e6;cursor:pointer;text-overflow:ellipsis}.rw-select-wrapper .select-box .select-button .text-box{float:left}.rw-select-wrapper .select-box .select-button .text-box .text{font-family:Oxygen,sans-serif;font-size:13px;color:#333c48}.rw-select-wrapper .select-box .select-button .text-box .label{font-family:Oxygen,sans-serif;color:#7f8ea4}.rw-select-wrapper .select-box .select-button .caret{float:right}.rw-select-wrapper .select-box .select-button:focus{outline:0}.rw-select-wrapper .select-box .rw-select-list{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.16);box-shadow:0 3px 6px 0 rgba(0,0,0,.16);padding-top:6px;padding-bottom:8px}.rw-select-wrapper .select-box .rw-select-list ul{margin:0;padding:0}.rw-select-wrapper .select-box .rw-select-list ul li{font-family:Oxygen,sans-serif;font-size:14px;list-style:none;cursor:pointer;line-height:1.21;padding:10px;margin-bottom:4px}.rw-select-wrapper .select-box .rw-select-list ul li:hover{background-color:#3e53fb;color:#fff}.rw-select-wrapper .select-box .rw-select-list ul li:last-child{margin-bottom:0}"],
                host: {
                    "(document:click)": "outClick($event)"
                }
            },] },
];
RwSelect2Component.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
RwSelect2Component.propDecorators = {
    "lable": [{ type: core.Input },],
    "data": [{ type: core.Input },],
    "selected": [{ type: core.Output },],
};
var RwSelect2Module = /** @class */ (function () {
    function RwSelect2Module() {
    }
    return RwSelect2Module;
}());
RwSelect2Module.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    RwSelect2Component
                ],
                imports: [
                    common.CommonModule
                ],
                providers: [],
                exports: [
                    RwSelect2Component
                ]
            },] },
];

exports.RwSelect2Module = RwSelect2Module;
exports.ɵa = RwSelect2Component;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rw-select2.umd.js.map
