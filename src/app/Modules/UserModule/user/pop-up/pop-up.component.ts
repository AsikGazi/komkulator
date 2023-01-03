import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Computer programming, consultancy and related activities'},
  {position: 2, name: 'Electricity, gas, steam and air conditioning supply'},
  {position: 3, name: 'Extraction of crude petroleum and natural gas'},
  {position: 4, name: 'Financial service activities, except insurance and pension funding'},
  {position: 5, name: 'Information service activities'},
  {position: 6, name: 'Insurance, reinsurance and pension funding, except compulsory social security   '},
  {position: 7, name: 'Manufacture of articles of straw and plaiting materials  '},
  {position: 8, name: 'Manufacture of basic metals   '},
  {position: 9, name: 'Manufacture of beverages  '},
  {position: 10, name: 'Manufacture of chemicals and chemical products  '},

  {position: 11, name: 'Manufacture of coke and refined petroleum products' },
  {position: 12, name: 'Manufacture of computer, electronic and optical products   '},
  {position: 13, name: 'Manufacture of electrical equipment   '},
  {position: 14, name: 'Manufacture of fabricated metal products, except machinery and equipment   '},
  {position: 15, name: 'Manufacture of food products   '},
  {position: 16, name: 'Manufacture of furniture  '},
  {position: 17, name: 'Manufacture of leather and related products  '},
  {position: 18, name: 'Manufacture of machinery and equipment   '},
  {position: 19, name: 'Manufacture of motor vehicles, trailers and semi-trailers   '},
  {position: 20, name: 'Manufacture of other non-metallic mineral products   '},

  {position: 21, name: 'Manufacture of other transport equipment  '},
  {position: 22, name: 'Manufacture of paper and paper products   '},
  {position: 23, name: 'Manufacture of pharmaceuticals, medicinal chemical and botanical products   '},
  {position: 24, name: 'Manufacture of rubber and plastics products   '},
  {position: 25, name: 'Manufacture of textiles   '},
  {position: 26, name: 'Manufacture of tobacco products  '},
  {position: 27, name: 'Manufacture of wearing apparel  '},
  {position: 28, name: 'Manufacture of wood and of products of wood and cork, except furniture   '},
  {position: 29, name: 'Mining of coal and lignite  '},
  {position: 30, name: 'Mining of metal ores  '},

  {position: 31, name: 'Mining support service activitie  '},
  {position: 32, name: 'Motion picture, video and television programme production, sound recording and music publishing activities   '},
  {position: 33, name: 'Other financial activities   '},
  {position: 34, name: 'Other manufacturing   '},
  {position: 35, name: 'Other mining and quarrying  '},
  {position: 36, name: 'Printing and reproduction of recorded media   '},
  {position: 37, name: 'Programming and broadcasting activities   '},
  {position: 38, name: 'Publishing activities   '},
  {position: 39, name: 'Remediation activities and other waste management services   '},
  {position: 40, name: 'Repair and installation of machinery and equipment   '},

  {position: 41, name: 'Sewerage  '},
  {position: 42, name: 'Telecommunications   '},
  {position: 43, name: 'Waste collection, treatment and disposal activities; materials recovery   '},
  {position: 44, name: 'Water collection, treatment and supply  '},
];


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
   
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
