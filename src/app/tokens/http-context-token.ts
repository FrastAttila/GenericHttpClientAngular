import { HttpContextToken } from '@angular/common/http';

export const ReqType = new HttpContextToken<string>(() => '');
