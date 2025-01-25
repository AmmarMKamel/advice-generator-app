import { Component, inject, OnInit, signal } from '@angular/core';

import { AdviceService } from './advice.service';
import { Advice } from './advice.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly adviceService = inject(AdviceService);

  advice = signal<Advice>({
    id: 0,
    advice: '',
  });

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.adviceService.getAdvice().subscribe({
      next: (slip) => {
        this.advice.set(slip.slip);
      },
      error: () => {
        this.advice.set({
          id: 0,
          advice: 'An error occurred while fetching advice.',
        });
      },
    });
  }
}
