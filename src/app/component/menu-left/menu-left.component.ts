import { Component, OnInit } from '@angular/core';
declare var $;
declare var Chartist;

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      // CSS STYLING & ANIMATIONS
      var cssAnimationData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            series: [
              [11, 14, 24, 16, 20, 16, 24]
            ]
          },
          cssAnimationOptions = {
            fullWidth: !0,
            chartPadding: {
              right: 2,
              left: 30
            },
            axisY: {
              position: 'end'
            }
          },
          cssAnimationResponsiveOptions = [
            [{
              axisX: {
                labelInterpolationFnc: function(value, index) {
                  return index % 2 !== 0 ? !1 : value
                }
              }
            }]
          ];

      new Chartist.Line(".example-left-menu-chart", cssAnimationData, cssAnimationOptions, cssAnimationResponsiveOptions);

    });
  }

}
