import { Pipe } from '@angular/core';


@Pipe({ name: 'phone' })
export class CelularPipe {
  formatPhoneNumber(s: string) {
    let s2:any = ("" + s).replace(/\D/g, '');
    let m = s2.match(/^(\d{2})(\d{5})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }
  transform(val: string) {
    let formattedPhone: any = "";
    try {
      formattedPhone = this.formatPhoneNumber(val);

    } catch (error) {
      formattedPhone = val;
    }

    if (formattedPhone == null)
      formattedPhone = val;

    return formattedPhone;
  }
}
