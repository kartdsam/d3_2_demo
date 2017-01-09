(function(){
    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd = document.getElementById('0cc3be37-9b73-4763-86e8-1297e24ad3a2')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }

    
    window.addEventListener('resize', function() {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });
    
    
    Plotly.plot(gd,  {
        data: figure.data,
        layout: figure.layout,
        frames: figure.frames,
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": false}
    });
    
}());
(function(){
    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd = document.getElementById('0cc3be37-9b73-4763-86e8-1297e24ad3a2')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }

    
    window.addEventListener('resize', function() {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });
    

    
    Plotly.plot(gd,  {
        data: figure.data,
        layout: figure.layout,
        frames: figure.frames,
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": false}
    });
    
}());

