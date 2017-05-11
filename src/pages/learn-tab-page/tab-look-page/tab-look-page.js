"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var Constants_1 = require("../../../providers/Constants");
var TabBroadcastPage = (function () {
    function TabBroadcastPage(navCtrl, navParams, lookservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lookservice = lookservice;
        this.tabToShow = [true, true, true, true, true, true, true, true, true];
        this.scrollableTabsopts = {};
        this.obj_CategorysListData = [];
        this.obj_GoodsListData = [];
        this.tabsPlacement = "top";
        this.Image_head_Url = Constants_1.GOODLIST_head_URL;
    }
    TabBroadcastPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.lookservice.getAllcategory().subscribe(function (countries) { return _this.obj_CategorysListData = countries; }, function (error) { return _this.errorMessage = error; }, function complete() {
        });
        this.lookservice.getGoodsList().subscribe(function (countries) { return _this.obj_GoodsListData = countries; }, function (error) { return _this.errorMessage = error; }, function complete() {
        });
    };
    TabBroadcastPage.prototype.selectedFriends = function (index) {
        console.log("Segment changed to", index);
    };
    return TabBroadcastPage;
}());
__decorate([
    core_1.ViewChild('mySlider')
], TabBroadcastPage.prototype, "slider", void 0);
TabBroadcastPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-tab-broadcast-page',
        templateUrl: 'tab-look-page.html',
    })
], TabBroadcastPage);
exports.TabBroadcastPage = TabBroadcastPage;
