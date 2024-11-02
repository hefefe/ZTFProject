import { HttpErrorResponse, HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { inject } from '@angular/core';
import { SharedService } from './shared.service';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const toaster = inject(MessageService);
  const sharedService = inject(SharedService);
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    toaster.add({ severity: 'error', summary: 'Error', detail: 'Could not retrieve resources', life: 3000 });
    if(req.url.includes("character")){
      sharedService.clearCharacterData();
    }else if(req.url.includes("location")){
      sharedService.clearLocationData();
    }
    return throwError(()=> error);
  }));
};
