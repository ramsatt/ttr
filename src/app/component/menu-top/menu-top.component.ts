import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {

      let topMenuChart = $("#topMenuChart").peity("bar", {
        fill: ['#01a8fe'],
        height: 22,
        width: 44
      });

      setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = topMenuChart.text().split(",");
        values.shift();
        values.push(random);
        topMenuChart.text(values.join(",")).change()
      }, 1000);

    });
  }

}
