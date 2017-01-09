var chart = c3.generate({
    bindto: '#year_chart',
    padding: {
               top: 40,
               right: 100,
               bottom: 0,
               left: 100,
             },
    data: {
            x: 'Year',
            xFormat: '%Y',
            url: 'data/EventofYear.csv',
            types:{
                    Events:'area-step',
                  },
            colors: {
                      Events: '#F37C78',
          
                    },
          },
    bar: {
           width: {
                    ratio: 0.8
                  }
         },
  
    axis: {
            x: {
                 type: 'timeseries',
                 
                 
                 tick: {
                         format: '%Y',
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

});
