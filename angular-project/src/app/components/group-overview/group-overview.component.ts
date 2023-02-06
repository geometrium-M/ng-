import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '../model/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {
  constructor(private route:ActivatedRoute, private GroupService: GroupService) {}

  group?:IGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    console.log(id)
    let findGroup = this.GroupService.getGroup(id)
    if(findGroup) this.group = findGroup
    console.log(findGroup?.groupName)
  }
}
