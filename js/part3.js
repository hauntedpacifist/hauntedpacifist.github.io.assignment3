$(document).ready(function(){
	$( document ).on( "click", ".show-page-loading-msg", function() {
    var $this = $( this ),
        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData( "textonly" );
        html = $this.jqmData( "html" ) || "";
	    $.mobile.loading( "show", {
	            text: msgText,
	            textVisible: textVisible,
	            theme: theme,
	            textonly: textonly,
	            html: html
	    });
	})
	.on( "click", ".hide-page-loading-msg", function() {
	    $.mobile.loading( "hide" );
	});

	$("#beach").bind("taphold", function(event) {
        $("#beach").removeClass().addClass("night");           
    }); //end taphold

}); //end ready