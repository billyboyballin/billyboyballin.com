(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("0ec5bebf-c876-43a1-a465-fe36106baeaf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0ec5bebf-c876-43a1-a465-fe36106baeaf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"5343d61b-7720-4b41-9ccf-591d65494c19":{"roots":{"references":[{"attributes":{"overlay":{"id":"1029","type":"BoxAnnotation"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100,110,110,120,120],"y":[55.5,0,0,55.5,55.5,0,0,55.5,55.5,0,0,55.5,55.5,0,0,55.5,55.5,0,0,55.5,55.5,0,0,0]},"selected":{"id":"1070","type":"Selection"},"selection_policy":{"id":"1071","type":"UnionRenderers"}},"id":"1039","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1011","type":"LinearAxis"}],"left":[{"id":"1016","type":"LinearAxis"}],"plot_height":400,"plot_width":800,"renderers":[{"id":"1011","type":"LinearAxis"},{"id":"1015","type":"Grid"},{"id":"1016","type":"LinearAxis"},{"id":"1020","type":"Grid"},{"id":"1029","type":"BoxAnnotation"},{"id":"1036","type":"BoxAnnotation"},{"id":"1037","type":"BoxAnnotation"},{"id":"1038","type":"BoxAnnotation"},{"id":"1042","type":"GlyphRenderer"},{"id":"1046","type":"GlyphRenderer"},{"id":"1054","type":"GlyphRenderer"},{"id":"6184","type":"LabelSet"}],"title":{"id":"1063","type":"Title"},"toolbar":{"id":"1027","type":"Toolbar"},"x_range":{"id":"1003","type":"Range1d"},"x_scale":{"id":"1007","type":"LinearScale"},"y_range":{"id":"1005","type":"Range1d"},"y_scale":{"id":"1009","type":"LinearScale"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1075","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"grey"},"left":0,"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"right":10},"id":"1037","type":"BoxAnnotation"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"green"},"left":0,"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"right":120},"id":"1036","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":1},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1053","type":"Circle"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"data_source":{"id":"1051","type":"ColumnDataSource"},"glyph":{"id":"1052","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1053","type":"Circle"},"selection_glyph":null,"view":{"id":"1055","type":"CDSView"}},"id":"1054","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":120},"id":"1003","type":"Range1d"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{"source":{"id":"1051","type":"ColumnDataSource"}},"id":"1055","type":"CDSView"},{"attributes":{"callback":null,"end":53.3},"id":"1005","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1021","type":"PanTool"},{"id":"1022","type":"WheelZoomTool"},{"id":"1023","type":"BoxZoomTool"},{"id":"1024","type":"SaveTool"},{"id":"1025","type":"ResetTool"},{"id":"1026","type":"HelpTool"}]},"id":"1027","type":"Toolbar"},{"attributes":{"height":100,"text":"2016-08-20 21:04:07.200","width":200},"id":"1056","type":"Div"},{"attributes":{"line_color":"grey","x":{"field":"x"},"y":{"field":"y"}},"id":"1040","type":"Line"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1029","type":"BoxAnnotation"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"////36PwT0AAAABgZuZPQP///99RmElAAQAAgD16UEAAAADgenRQQAAAAAApfFBAAAAA4HqEUEAAAABAM2NQQAEAAADXw09AAQAAYLheUUAAAAAghWtRQAAAAGCPclFAAQAAgBQuUEAAAACgcL1PQAAAAMD1KE9AAQAAIK4HTkABAAAA1/NYQAAAAGBmxk9AAAAAoJlZT0AAAADAzOxOQAAAAEAzg1BA////v8x8UEA=","dtype":"float64","shape":[22]},"y":{"__ndarray__":"AAAAwB4FRkAAAADAHgUgQAAAAGBmJj5AAAAAwPUoOUABAADAzEw7QAEAAGCPAj1AAAAAAAAAQUABAAAgrkc/QAAAAIA9ij5AAQAAIFzPN0ABAAAgXA88QAAAAGC4Hj9AAAAAYLgePkD9///fo3A/QAAAAMD16D9AAAAAQOE6PED////fUfg9QAAAAIA9Cj1AAAAAgMI1PEAAAABguN47QAAAAKBwPSBAAAAAQOH6RUA=","dtype":"float64","shape":[22]}},"selected":{"id":"1074","type":"Selection"},"selection_policy":{"id":"1075","type":"UnionRenderers"}},"id":"1051","type":"ColumnDataSource"},{"attributes":{},"id":"6213","type":"UnionRenderers"},{"attributes":{"children":[{"id":"1059","type":"Slider"}]},"id":"1060","type":"WidgetBox"},{"attributes":{"formatter":{"id":"1065","type":"BasicTickFormatter"},"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"ticker":{"id":"1012","type":"BasicTicker"}},"id":"1011","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1041","type":"Line"},{"attributes":{},"id":"6212","type":"Selection"},{"attributes":{"callback":{"id":"1058","type":"CustomJS"},"end":740,"start":1,"title":"position within play","value":1},"id":"1059","type":"Slider"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1039","type":"ColumnDataSource"},"glyph":{"id":"1040","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1041","type":"Line"},"selection_glyph":null,"view":{"id":"1043","type":"CDSView"}},"id":"1042","type":"GlyphRenderer"},{"attributes":{},"id":"1074","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"1063","type":"Title"},{"attributes":{"source":{"id":"1039","type":"ColumnDataSource"}},"id":"1043","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"ticker":{"id":"1012","type":"BasicTicker"}},"id":"1015","type":"Grid"},{"attributes":{"children":[{"id":"1060","type":"WidgetBox"},{"id":"1002","subtype":"Figure","type":"Plot"},{"id":"1061","type":"WidgetBox"}]},"id":"1062","type":"Column"},{"attributes":{"children":[{"id":"1056","type":"Div"}],"height":100,"width":200},"id":"1061","type":"WidgetBox"},{"attributes":{"formatter":{"id":"1067","type":"BasicTickFormatter"},"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"ticker":{"id":"1017","type":"BasicTicker"}},"id":"1016","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"red"},"line_alpha":{"value":0.5},"line_color":{"value":"red"},"radius":{"units":"data","value":1},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1052","type":"Circle"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1045","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"ticker":{"id":"1017","type":"BasicTicker"}},"id":"1020","type":"Grid"},{"attributes":{"data_source":{"id":"1044","type":"ColumnDataSource"},"glyph":{"id":"1045","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1047","type":"CDSView"}},"id":"1046","type":"GlyphRenderer"},{"attributes":{},"id":"1065","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"text":["10","20","30","40","50","40","30","20","10"],"x":[20,30,40,50,60,70,80,90,100],"y":[5,5,5,5,5,5,5,5,5]},"selected":{"id":"1072","type":"Selection"},"selection_policy":{"id":"1073","type":"UnionRenderers"}},"id":"1044","type":"ColumnDataSource"},{"attributes":{},"id":"1067","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"grey"},"left":110,"plot":{"id":"1002","subtype":"Figure","type":"Plot"},"right":120},"id":"1038","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1044","type":"ColumnDataSource"}},"id":"1047","type":"CDSView"},{"attributes":{"callback":null,"data":{"gsisid":["GL","GR","P","PDL1","PDL2","PDL3","PDR1","PDR2","PLG","PLL1","PLL2","PLR","PLS","PLT","PLW","PPR","PR","PRG","PRT","PRW","VL","VR"],"x":{"__ndarray__":"////36PwT0AAAABgZuZPQP///99RmElAAQAAgD16UEAAAADgenRQQAAAAAApfFBAAAAA4HqEUEAAAABAM2NQQAEAAADXw09AAQAAYLheUUAAAAAghWtRQAAAAGCPclFAAQAAgBQuUEAAAACgcL1PQAAAAMD1KE9AAQAAIK4HTkABAAAA1/NYQAAAAGBmxk9AAAAAoJlZT0AAAADAzOxOQAAAAEAzg1BA////v8x8UEA=","dtype":"float64","shape":[22]},"y":{"__ndarray__":"AAAAwB4FRkAAAADAHgUgQAAAAGBmJj5AAAAAwPUoOUABAADAzEw7QAEAAGCPAj1AAAAAAAAAQUABAAAgrkc/QAAAAIA9ij5AAQAAIFzPN0ABAAAgXA88QAAAAGC4Hj9AAAAAYLgePkD9///fo3A/QAAAAMD16D9AAAAAQOE6PED////fUfg9QAAAAIA9Cj1AAAAAgMI1PEAAAABguN47QAAAAKBwPSBAAAAAQOH6RUA=","dtype":"float64","shape":[22]}},"selected":{"id":"6212","type":"Selection"},"selection_policy":{"id":"6213","type":"UnionRenderers"}},"id":"6183","type":"ColumnDataSource"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1072","type":"Selection"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{"level":"glyph","plot":{"id":"1002","subtype":"Figure","type":"Plot"},"source":{"id":"6183","type":"ColumnDataSource"},"text":{"field":"gsisid"},"x":{"field":"x"},"x_offset":{"value":5},"y":{"field":"y"},"y_offset":{"value":5}},"id":"6184","type":"LabelSet"},{"attributes":{},"id":"1073","type":"UnionRenderers"},{"attributes":{"code":"\\nif (IPython.notebook.kernel !== undefined) {\\n    var kernel = IPython.notebook.kernel;\\n    cmd = \\"plot_time_pos(\\" + cb_obj.value + \\")\\";\\n    kernel.execute(cmd, {}, {});\\n}\\n"},"id":"1058","type":"CustomJS"}],"root_ids":["1062"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"5343d61b-7720-4b41-9ccf-591d65494c19","roots":{"1062":"0ec5bebf-c876-43a1-a465-fe36106baeaf"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();