import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() data:any[] = []
  @Output() selectedValue = new EventEmitter()

  constructor() { }

  detectedChanges(categories:any){
    this.selectedValue.emit(categories)

  }

  ngOnInit(): void {
    
  }

}
