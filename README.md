# fluidPaginator
Paginator interface with JavaScript and CSS3

Example

<img src="https://github.com/ugputu/fluidPaginator/blob/master/paginator.gif?raw=true">

To include paginator script you can call this code:

	$( "#paginator" ).Paginator( {
		total : 300,  // total pages in range
		value : 1,    // initial value (current page number)
		btn_prev: $('#paginator .p_pages .prev'),   // prev. button element
		btn_next: $('#paginator .p_pages .next'),   // next  button element
		div_display_current: $('#paginator .p_pages .current'), // element with current page number
		slider_input: $('#paginator .p_slider input'),          // input[type=range] element
		div_pages: $('#paginator .p_pages'),                    // prev, next, current container
		div_slider: $('#paginator .p_slider'),                  // input[type=range] container
		on_new_page: function(page_num){                        // callback function
		  alert(page_num);
		},
	});
	
HTML page you can view in sources.
