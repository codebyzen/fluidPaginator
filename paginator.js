/*
	Title	: jQuery fadePaginator
	Version	: v0.1
	Date	: 05 apr 2015
	Author	: Eugene Che
	Site	: http://iteye.ru/
	License	: GPL-3.0
*/

(function( $ ) {

	var toType = function(obj) {
 		return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
	}
	
	function msieversion() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
		} else { 
			return false; 
		}
	}	

	$.fn.Paginator = function(options) {
	
		var settings = $.extend( {
			'total' : 20,
			'value' : 1
		}, options);

		var methods = {
			init : function() {
			
				$(settings.slider_input).prop({'max': settings.total });

				$(settings.btn_next).on('click',function(){ methods.next.apply(); });
				$(settings.btn_prev).on('click',function(){ methods.prev.apply(); });
				
				$(settings.slider_input).on('change',function(){ methods.slide.apply(); });
				$(settings.slider_input).mousemove(function(){ settings.value = $(this).val(); $(settings.div_display_current).html(settings.value); });
				$(settings.slider_input).on('click',function(){ methods.show_hide_slider.apply(); });				
				
				$(settings.div_display_current).on('click',function(){ methods.show_hide_slider.apply(); });

				$(settings.div_display_current).html(settings.value);
				$(settings.slider_input).val(settings.value);

				settings.value = parseInt(settings.value);
				
			},
			
			
			
			prev : function() {
				if (settings.value<=1) return false;
				settings.value = parseInt(parseInt(settings.value)-1);
				methods.set_value.apply();
			},
			
			next : function() {
				if (settings.value>=settings.total) return false;
				settings.value = parseInt(parseInt(settings.value)+1);
				methods.set_value.apply();
			},
			
			slide : function() {
				$(settings.div_display_current).html(settings.value);
				settings.value = $(settings.slider_input).val();
				methods.set_value.apply();
				methods.show_hide_slider.apply();
			},
			
			show_hide_slider: function(){
				if (msieversion()!==false) return false;
				if ($(settings.div_slider).is(':visible')) {
					// $(settings.div_pages).fadeIn();
					$(settings.div_slider).fadeOut();
				} else {
					// $(settings.div_pages).fadeOut();
					$(settings.div_slider).fadeIn();
				}

			},
			
			set_value: function(){
				$(settings.slider_input).val(settings.value);
				$(settings.div_display_current).html(''+settings.value);
				settings.on_new_page(settings.value);
			}
			
		};
		
		// init
		methods.init.apply();

	};
})(jQuery);
