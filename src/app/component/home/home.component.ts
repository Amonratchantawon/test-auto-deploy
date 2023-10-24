import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  datas = [
    {
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item cccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item cccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item cccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item cccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item cccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    },{
      name: 'The current link item',
      value: "1"
    }, {
      name: 'second link item',
      value: "1"
    }, {
      name: 'third link item',
      value: "1"
    }, {
      name: 'fourth link item',
      value: "1"
    }
  ]
  options: Array<any> = [];
  searchTxt: string;
  constructor() {
    this.searchTxt = ''
  }

  keyup(){
    console.log('keyup',this.searchTxt);
    this.onSearch();
  }

  onChangeEvent($event: any) {
    console.log($event);
  }

  onSearch(){
    this.options = this.datas.filter(option => {return option.name.toLowerCase().includes(this.searchTxt.toLowerCase());});
    console.log(this.options);
  }

  focus() {
    console.log('focus');
    this.onSearch();
  }

  async focusout() {
    await this.waiting();
    console.log('focusout');
    this.options = [];
  }

  waiting() {
    return new Promise(resolve => setTimeout(resolve, 200));
  }

  selectItem(item: any) {
    console.log('item---',item);
    this.searchTxt = item.name;
  }

}
