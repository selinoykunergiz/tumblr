import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md/lib/free/modals/modal.directive';
import { CommonService } from 'src/app/services/_index';
import data from '../common/json/data.json';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  //We call the service typed method here.
  constructor(private commonService: CommonService) { }

  @ViewChild('postBody') public postBodyModal: ModalDirective;
  commonList: any;
  modalData: [];
  filteredByDay = [];

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.commonList = data;
    var dayArray = [];
    this.commonList.posts.map(obj => {
      var day = obj['date-gmt'].split('-')[2].split(" ")[0];
      dayArray.push(day);
    });
    dayArray = [...new Set(dayArray)];
    for (let i = 0; i < dayArray.length; i++) {
      var dateObj = this.commonList.posts.filter(date => date['date-gmt'].split('-')[2].split(" ")[0] ==  dayArray[i] );
      
      var dayname = "";
      var month = "";

      dateObj.map(obj => {
        dayname = obj.date.split(",")[0];
        month = obj.date.split(",")[1].split(" ")[2];
      });

      var obj = {
        day: dayArray[i],
        dayname: dayname,
        month: month,
        data: dateObj
      };
      this.filteredByDay.push(obj);
    }
  }


  openDetailBody(id) {
    var data = this.commonList.posts.find(data => data['id'] == id);
    this.modalData = data['regular-body'];
    this.postBodyModal.show();
  }
}
