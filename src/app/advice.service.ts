import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { AdviceDto } from './advice.dto';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  private readonly API_URL = 'https://api.adviceslip.com/advice';
  private readonly http = inject(HttpClient);

  getAdvice() {
    return this.http.get<AdviceDto>(this.API_URL);
  }
}
