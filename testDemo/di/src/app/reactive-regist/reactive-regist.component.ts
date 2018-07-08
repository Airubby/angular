import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../validator/validators";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  // mobileValidator(control:FormControl):any{
  //   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid=myreg.test(control.value);
  //   console.log("mobile的校验结果是:"+valid)
  //   return valid ? null : {mobile : true};
  // }
  // equalValidator(group:FormGroup):any{
  //     let password:FormControl = group.get("password") as FormControl;
  //     let pconfirm:FormControl = group.get("pconfirm") as FormControl;
  //     let valid:boolean = false;
  //     if(password && pconfirm){
  //       valid = (password.value === pconfirm.value);
  //     }
  //     console.log("密码校验结果:"+valid);
  //     return valid ? null : {equal: {descxxx:"密码和确认密码不匹配"}};
  // }
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['',mobileValidator,mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      },{validator:equalValidator})
    })
  }

  onSubmit(){
    let isValid:boolean = this.formModel.get("username").valid;
    console.log("username的校验结果:"+isValid);
    let errors:any = this.formModel.get("username").errors;
    console.log("username的错误信息是:"+JSON.stringify(errors));
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }

  }

  ngOnInit() {
  }

}
