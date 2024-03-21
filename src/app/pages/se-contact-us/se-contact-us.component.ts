import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-se-contact-us',
  templateUrl: './se-contact-us.component.html',
  styleUrls: ['./se-contact-us.component.scss']
})
export class SeContactUsComponent implements OnInit {

  registrationForm!: FormGroup;

  cntctSucc: boolean = false;
  submitButtonDisable: boolean = false;
  constructor(private fb: FormBuilder, private _http: HttpClient, private _matSnackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      cndt: true,
      rfrr: false,
      mntr: false,
      // cstrTypCd: ['', Validators.required],
      cstrNm: ['', Validators.required],
      cstrEml: ['', [Validators.required, Validators.email]],
      cstrPh: ['', Validators.required],
      cstrCmnt: ['', Validators.required],
    });
  }

  contactUs() {
    console.log(this.registrationForm.getRawValue());
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    // this.submitButtonDisable = true;
    let contactUsData = this.registrationForm.getRawValue();

    if (contactUsData.cndt) {
      contactUsData.cstrTypCd = 1
    }
    if (contactUsData.rfrr) {
      contactUsData.cstrTypCd = 2
    }
    if (contactUsData.mntr) {
      contactUsData.cstrTypCd = 3
    }




    contactUsData['slsLeadTypCd'] = 1
    this._http.post(`${environment.baseURL}/sales-leads/for-registration`, contactUsData).subscribe(
      {
        next: (res: any) => {
          console.log('next', res);
          this.cntctSucc = true;
          this.submitButtonDisable = false;
        },
        error: (res: any) => {
          console.log('error', res);
          this._matSnackBar.open('Something went wrong! please try again later', "Ok", { verticalPosition: "top", duration: 10000, panelClass: ['error-snackbar'] });
          this.submitButtonDisable = false;

        },
        complete() {
          console.log('complete');
          // this.submitButtonDisable = false;
        }
      }

    )
  }

}

