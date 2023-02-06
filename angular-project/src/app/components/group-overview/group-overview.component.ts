import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '../model/group';
import { GroupService } from 'src/app/services/group.service';
import { functionsList } from 'src/app/data/functions';
import { IFunctionElement } from '../model/functionElement';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {
  constructor(private route:ActivatedRoute, private GroupService: GroupService) {}

  group?:IGroup;
  functionsList:IFunctionElement[] = [...functionsList]

  same:boolean

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    console.log(id)
    let findGroup = this.GroupService.getGroup(id)
    if(findGroup) this.group = findGroup
    console.log(findGroup?.groupName)

    for (let i=0; i<this.functionsList.length; i++) {
      
    }

    this.functionsList.forEach(funcEl => {
      let el = this.group?.functions.find(func=>func.title == funcEl.function_name)
      if(el) {
        this.same = true
      }
    }
  
     
       
    )

     
       
  }

  // func() {
  //  let el =  this.group?.functions.forEach(func=>
  //     this.functionsList.find(funcEl=>funcEl.function_name == func.title))

  //     if(el) {
  //       this.same = true
  //     }
       
  // }
}
