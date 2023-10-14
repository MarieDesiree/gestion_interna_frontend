import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ActivityService } from 'src/app/activity.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

  charrelate: any;
  constructor(private actService: ActivityService) { }

  ngOnInit(): void {
    this.actService.getChar().subscribe((da) => {
      this.actService.getCharc().subscribe((db) => {
            this.actService.getCharr().subscribe((ac) => {

              this.charrelate = document.getElementById('charina');
              Chart.register(...registerables);
              this.chartfonct(da, db, ac);
            });
      });
    });

  }

  chartfonct(da: any, db: any, ac: any): void {
    new Chart(this.charrelate, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [da.lundi, da.mardi, da.mercredi, da.jeudi, da.vendredi, da.samedi, da.dimanche],
            label: 'Visiteur',
            backgroundColor: 'rgba(91, 50, 99, 0.2)',
            tension: 0.3,
            borderColor: '#b30086',
            pointBackgroundColor: 'red',
            fill: true,
          },
          {
            data: [ac.lundi, ac.mardi, ac.mercredi, ac.jeudi, ac.vendredi, ac.samedi, ac.dimanche],
            label: 'Même Visiteur',
            backgroundColor: 'rgba(112, 49, 58, 0.2)',
            tension: 0.3,
            borderColor: '#b3003f',
            pointBackgroundColor: 'green',
            fill: true,
          },
          {
            data: [db.lundi, db.mardi, db.mercredi, db.jeudi, db.vendredi, db.samedi, db.dimanche],
            label: "Compte",
            backgroundColor: '#007bff63',
            tension: 0.3,
            borderColor: '#007bff',
            pointBackgroundColor: 'rgb(243, 6, 17)',
            fill: true,

          }
        ],
        labels: [
          'Lundi',
          'Mardi',
          'Mercredi',
          'Jeudi',
          'Vendredi',
          'Samedi',
          'Dimanche'
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    })
  }

}

