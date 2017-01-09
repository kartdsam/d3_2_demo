var time = '%Y';
var data = '%25Y';
var fatal = "data/fat-"+data+".csv";
Plot2 = function(fatal,time){    
        var chart = c3.generate({
            bindto: '#fat_chart',
            data: {
                url: fatal,
                type: 'area-step',
                x: 'YMD',
                xFormat: time,
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                         format: time,
                         count : 110,
                         culling : {
                                     max: 110
                                   },
                         rotate: 75,
                        
                        
                       }
                    
                }
            },
            zoom: {
            enabled: true,
            rescale: true,
            extent: [1, 1]
          },
    subchart: {
                show: true,
                size: {
                        height: 40
                      }
                             
              },
           
            color:{
              pattern:[
              '#BE91C8'
              ]
            },
        });
};

Plot2(fatal,time);
$(document).ready(function () {
    $("#range").change(function () {
      time = $("#range").find('option:selected').val();
      if(time=='%Y%m%d'){
         data = '%25Y%25m%25d'
      }else if(time=='%Y%m'){
         data = '%25Y%25m'
      }else{
         data = '%25Y'
      };
      fatal = "data/fat-"+data+".csv";
        
      Plot2(fatal,time);
    });
});

