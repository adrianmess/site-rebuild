import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { FormService } from '../form.service';
import { setCards} from '../json-to-firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FormService]
})
export class AdminComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  submitForm(title: string, bgImgUrl: string, pillTxt: string, h4text: string, divId: string) {
    var newForm: Form = new Form(title, bgImgUrl, pillTxt, h4text, divId);
    this.formService.addForm(newForm);
  }

  resetForm(){
    setCards();
  }

}
