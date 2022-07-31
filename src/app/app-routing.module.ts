import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './Components/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './Components/doughnut-chart/doughnut-chart.component';
import { DynamicChartComponent } from './Components/dynamic-chart/dynamic-chart.component';
import { InstallationComponent } from './Components/installation/installation.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './Components/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './Components/radar-chart/radar-chart.component';

const routes: Routes = [
  { path: "*", component: InstallationComponent },
  { path: "", component: InstallationComponent },
  { path: "chart/line", component: LineChartComponent },
  { path: "chart/bar", component: BarChartComponent },
  { path: "chart/doughnut", component: DoughnutChartComponent },
  { path: "chart/radar", component: RadarChartComponent },
  { path: "chart/pie", component: PieChartComponent },
  { path: "chart/polararea", component: PolarAreaChartComponent },
  { path: "chart/bubble", component: BubbleChartComponent },
  { path: "chart/dynamic", component: DynamicChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
