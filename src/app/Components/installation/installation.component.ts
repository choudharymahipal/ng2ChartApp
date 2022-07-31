import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {
  installStep1:string=`npm install --save ng2-charts`;
  installStep2:string=`npm install --save chart.js`;
  appModuleCode: string = `
  import { NgChartsModule } from 'ng2-charts';

  @NgModule({

    imports: [

      NgChartsModule

    ]

  })`;
  constructor() { }

  ngOnInit(): void {
  }

}
