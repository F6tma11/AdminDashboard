import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

 let loogUserData:any;
  const localData=localStorage.getItem('logintoken');
 
  loogUserData=JSON.stringify("localData.tokens")
  const cloneRequest= req.clone({
    setHeaders:{
      Authorization:`Bearer ${localData}`
    }
  })
  
  return next(cloneRequest).pipe(
    catchError((error:HttpErrorResponse)=>{
      if(error.status== 401){
        const isRefresh=confirm("your session is expired, Do you want to continue")
      }
return throwError(error)
    }))
}
