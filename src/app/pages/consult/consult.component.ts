import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultService } from 'src/app/services/consult.service';

export class Result {
  totalHours: number;
  normalHours: number;
  nightHours: number;
  normalExtraHours: number;
  nightExtraHours: number;
  dominicalExtraHours: number;
  dominicalHours: number;
}
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  consultForm: FormGroup;
  response: Result;
  showResults = false;

  constructor(private consultService: ConsultService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.consultForm = this.fb.group({
      technicialId: ['', Validators.required],
      weekNumber: ['', Validators.required],
    })
  }

  consultWork() {
    this.consultService.consultHours(this.consultForm.get('technicialId').value, this.consultForm.get('weekNumber').value).subscribe((res) => {
      this.showResults = true;
      this.response = res;
    });
  }

}
