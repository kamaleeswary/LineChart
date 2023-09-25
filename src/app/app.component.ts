import { Component } from '@angular/core';
import chartData from './data/chartData.json'
import lastThirtyDays from './data/lastThirtyDays.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // chart.js input data
  type = 'bar';
  filteredProducts = {    // Default Value
    labels: ["day 1", "day 2", "day 3", "day 4"],
    datasets: chartData,
    id: 1
  };
  options = {
    responsive: true,
  };

  // Filter Data
  product: any;
  productsFilter = [
    {
      "id": 1,
      "values": {
        labels: ["day 1", "day 2", "day 3", "day 4"],
        datasets: chartData
      },
      "displayText": "Last 4 Days",
    },
    {
      "id": 2,
      "values": {
        labels: ["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15"],
        datasets: lastThirtyDays
      },
      "displayText": "Last 15 Days",
    }
  ];

  /**
   * 
   * @param current - filtered value on select
   */
  onChange(current) {
    this.filteredProducts = current.values;
    console.log('payLoad', current)
  }

  /**
   * 
   * @param event - selected Date
   */
  OnDateChange(dateObj): void {
    // convert date obj to number
    const stringified = JSON.stringify(dateObj);
    const date = parseInt(stringified.substring(1, 11).split('-')[2]) + 1;

    // Updating the filtered data by selected date value
    this.filteredProducts = {
      labels: [],
      datasets: chartData,
      id: 3
    };

    // Updating the chartdata product value by using Math random functionality
    chartData.forEach(product => {
      product.data = []
      for (let i = 1; i <= date; i++) {
        product.data.push(Math.floor((Math.random() * 10) + 1))
      }
    })

    // Update the filtered data day values dynamically based on the date selected
    for (let i = 1; i <= date; i++) {
      this.filteredProducts.labels.push('day' + ' ' + i)
    }
  }
}
