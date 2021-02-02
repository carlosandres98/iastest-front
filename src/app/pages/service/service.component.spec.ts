import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

import { ServiceComponent } from './service.component';
import { ServiceResponseMock, ServiceRequestMock } from '../../mocks/service.mock';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServiceComponent', () => {

  let service: ServiceService;

  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceComponent],
      imports: [HttpClientModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        { provide: ServiceComponent, useValue: { login: () => of(ServiceResponseMock) } },
        FormBuilder
      ]
    })
      .compileComponents();
    service = TestBed.inject(ServiceService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test SERVICE success', () => {
    spyOn(service, 'setService').and.callThrough();
    component.setService();
    service.setService(ServiceRequestMock);
    fixture.detectChanges();
    expect(service.setService).toHaveBeenCalledWith(ServiceRequestMock);
  });
});
