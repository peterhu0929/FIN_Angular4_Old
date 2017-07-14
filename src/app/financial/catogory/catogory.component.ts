import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.scss']
})
export class CatogoryComponent implements OnInit {
  private catogories = [
    { text: '總帳模組', value: 'GL', remark: 'VOUSET',photoSrc:'assets/image/accouting.jpeg' },
    { text: '零星模組', value: 'VOU', remark: 'VOUCHER' ,photoSrc:'assets/image/cash.jpeg'},
    { text: '現金模組', value: 'CM', remark: 'CASH' ,photoSrc:'assets/image/e-invoice.jpeg'},
    { text: '應付憑單', value: 'VU', remark: 'PAY',photoSrc:'assets/image/cash.jpeg' },
    { text: '固定資產', value: 'SK', remark: 'ASSET' ,photoSrc:'assets/image/accouting.jpeg'}
  ];

  nativeWindow: any;
  constructor(
    private winRef: WindowRefService
  ) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  protected PopModuleWindow(type: string): void {
    var newWindow = this.nativeWindow.open('./main');
  }

  ngOnInit() {
  }
}
