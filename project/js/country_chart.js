var cs = 'bar';
var ar = 'Continent';
var rd = "data/Events-Continent/"+cs+"/Events-"+ar+".csv";

Plot = function(rd, cs){    
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                url: rd,
                type: cs,
                x: 'Country',
            },
            pie: {
                label: {
                     format: function (value, ratio, id) {
                          return d3.format('')(value);
                     }
                }
            }, 
            bar: {
                width: {
                ratio: 0.5
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        rotate: 75,
                        multiline: false,
                    },   
                    height: 130 
                }
            },
            legend: {
                position: 'right'
            },
            color:{
              pattern:[
              '#F37C78','#E77FA5','#BE91C8','#7EA4D4','#32B0C4','#21B69D','#5FB56F','#95AD49','#C69F3D','#EC8D54',
              '#E19F91','#DAA1A6','#C6A8B6','#ADB0BB','#98B7B5','#91BBA4','#9BBB8F','#AFB77D','#C7B176','#DBA97B',
              '#A77069','#9F737B','#8D7988','#76808B','#658684','#628874','#6D8862','#808454','#957F4F','#A57856',
              '#A04F50','#97536D','#7A5E84','#4F6B8B','#1D7380','#127666','#3A7547','#5E702E','#7F6724','#985B32']
            },
        });
};

Plot(rd,cs);
$(document).ready(function () {
    $("#style,#area").change(function () {
        cs = $("#style").find('option:selected').val();
        ar = $("#area").find('option:selected').val();
        rd = "data/Events-Continent/"+cs+"/Events-"+ar+".csv";
        Plot(rd,cs);
    });
});

