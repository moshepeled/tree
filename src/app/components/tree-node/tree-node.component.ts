import { Component, OnInit, Input } from '@angular/core';
import { Contacts } from '../../shared/models/contacts'
@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() contacts: Array<Contacts>;
  constructor() { }

  ngOnInit() {
  }

  clickexpdis(contact) {
    contact.expanded = !contact.expanded;
  }

}
