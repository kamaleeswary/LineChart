import { Component } from '@angular/core';
import chartData from './data/chartData.json'
import lastThirtyDays from './data/lastThirtyDays.json'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsForm: FormGroup;
  type = 'bar';
  selectedFilter: 'Last 4 Days'
  filteredProducts = {    // Default Value
    labels: ["day 1", "day 2", "day 3", "day 4"],
    datasets: chartData,
    id: 1
  }; 
  options = {
    responsive: true,
  };
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

  constructor(private fb: FormBuilder) {
    this.productsForm = this.fb.group({
      filterProduct: [''],
      date: ['']
    })
  }

  /**
   * 
   * @param index 
   * @returns updated value after Choosing the filter
   */
  getValue(index) {
    // receive the custom date value if I have mock api data
    // if (this.productsForm.value.date)
    // console.log(this.productsForm.value.date)
    return {
      value: this.productsFilter[index].values,
      id: this.productsFilter[index].id,
      displayText: this.productsFilter[index].displayText,
    }
  }

  onChange(current) {
    this.filteredProducts = current.value;
    console.log('payLoad',current)
  }
}
