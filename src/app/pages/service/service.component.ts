import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  createServiceForm: FormGroup;
  constructor(private fb: FormBuilder, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.createServiceForm = this.fb.group({
      techId: ['', Validators.required],
      serviceId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  setService() {
    const body = {
      technicialId: this.createServiceForm.get('techId').value,
      serviceId: this.createServiceForm.get('serviceId').value,
      startDateTime: this.createServiceForm.get('startDate').value,
      endDateTime: this.createServiceForm.get('endDate').value,
    }

    this.serviceService.setService(body).subscribe((res => {
      alert("Se creo correctamente el servicio");
    }));
  }

}
