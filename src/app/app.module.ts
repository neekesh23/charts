import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighchartsService } from './highcharts.service';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarChartComponent } from './bar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartModule],
  declarations: [AppComponent, HelloComponent, BarChartComponent],
  bootstrap: [AppComponent],
  providers: [HighchartsService],
})
export class AppModule {}
