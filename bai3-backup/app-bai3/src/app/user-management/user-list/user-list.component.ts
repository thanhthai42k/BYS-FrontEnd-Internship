import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import {UsergroupService} from '../../usergroup.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {UserGroup} from '../../../model/user-group';
import { User } from 'src/app/úser/user';
import { ActivatedRoute, Router } from '@angular/router';
// import {Function} from '../../../model/function';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('addOption' , { static: true }) addOption: ElementRef;
  @ViewChild('abcd',{static: true}) 
  private abcd: ElementRef;
  @Input() bindinguserGr : UserGroup;
  // userFunction = new Function();
   
  formaddgroupuser : FormGroup;
data : string [];
numbers: number[] = [];
userGr = new UserGroup();
  constructor(private service: UsergroupService, private modalService: NgbModal, private renderer: Renderer2, private activatedRoute : ActivatedRoute, private router : Router) {
   }

  ngOnInit() {
    this.service.getDataUserGroupById().subscribe(data => {
      console.log(data.result);
      this.data = data.result
    })

    //
    
    
  }
  closeResult: string;
  

    
  open(content) {
    this.formaddgroupuser = new FormGroup ({
      id : new FormControl(this.service.arrUserGroup.length + 1),
      tennhom: new FormControl(),
      mota: new FormControl(),
      dschucnang : new FormControl(this.service.arrChucNang),
      chucnangduocdung : new FormControl()
    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  addAllFunction() {
    this.formaddgroupuser.get('chucnangduocdung').patchValue(this.formaddgroupuser.get('dschucnang').value);
    this.formaddgroupuser.get('dschucnang').patchValue(null);
    return;
  }
  addSomeFunction(id : number) {
    const i = this.service.arrChucNang.findIndex( i => i.id === id)
      this.formaddgroupuser.get('chucnangduocdung').patchValue(this.formaddgroupuser.get('dschucnang').value);
      this.formaddgroupuser.get('dschucnang').patchValue(null);
   
  }
  removeAllFunction() {
    this.formaddgroupuser.get('dschucnang').patchValue(this.formaddgroupuser.get('chucnangduocdung').value);
    this.formaddgroupuser.get('chucnangduocdung').patchValue(null);
  }
  removeSomeFunction() {
    this.formaddgroupuser.get('dschucnang').patchValue(this.formaddgroupuser.get('chucnangduocdung').value);
    this.formaddgroupuser.get('chucnangduocdung').patchValue(null);
  }
  addUserGroup(){
    console.log(this.formaddgroupuser.value)
    this.service.arrUserGroup.unshift(
      {
        id : this.formaddgroupuser.value.id,
        tennhom : this.formaddgroupuser.value.tennhom,
        mota : this.formaddgroupuser.value.mota,
        chucnangduocdung : this.formaddgroupuser.value.chucnangduocdung
      }
    )
  }

  removeStudent (id : number) {
    const index = this.service.arrUserGroup.findIndex(i => i.id === id);
    this.service.arrUserGroup.splice(index,1);
  }
}
