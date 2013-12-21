var onesite;

$(document).ready(function() {

   onesite = new Onesite();
   onesite.init();
   

});

var siteLoaded = false;



function Onesite() {
	
	// SELECT ONCE
	var els = {
        window: $(window),
		document: $(document),
		page: $('html, body'),
		body: $('body'),
		logos: $('#logos li'),
		fixed: $('#fixed'),
		navLink: $('.more_shadow, .more, .more_shadow_white'),
		nav: $('#nav'),
		showLink: $('a.showall'),
		hideLink: $('a.hideall'),
		menuNavItem: $('.menu_nav li'),
		bigger: $('.bigger_items'),
		smaller: $('.smaller_items'),
		sides: $('.sides_items'),
		container: $('.container'),
		loader: $('#loader'),
		sections: $('.section'),
		fadeIn: $('.section, #fixed, .nav')
		
    }

	var sections = {};
	
	function showSite() {
		//els.fadeIn.removeClass('invisible').addClass('fadeIn');
		
		// RETURN
		
				
	}
	
	
	function init() {
		
		//
	
		// ON LOAD
		
		els.window.load(function(){
			
			
			$("#gcdl .downloadlinksclose").click(
			
				function () {
					
					$("#downloadlinksoverlay").fadeOut();
					$("#gcdl").fadeOut();
				}
				
			
			);
			
			$("#jvmdl .downloadlinksclose").click(
			
				function () {
					
					$("#downloadlinksoverlay").fadeOut();
					$("#jvmdl").fadeOut();
				}
				
			
			);
			
			$("#fsmdl .downloadlinksclose").click(
			
				function () {
					
					$("#downloadlinksoverlay").fadeOut();
					$("#fsmdl").fadeOut();
				}
				
			
			);
			
			
			
			$("#pdl .downloadlinksclose").click(
			
				function () {
					
					$("#downloadlinksoverlay").fadeOut();
					$("#pdl").fadeOut();
				}
				
			
			);
			
			
			$(".downloadgifchat").click(
			
			
			
				function () {
					
					if( /Android/i.test(navigator.userAgent) ) {
						window.open("https://play.google.com/store/apps/details?id=com.pinger.gif.chat.text.free");
					} else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
						window.open("https://itunes.apple.com/us/app/gif-chat-send-private-looping/id650973630?mt=8");
					} else {
						$("#downloadlinksoverlay").fadeIn();
						$("#gcdl").fadeIn();
					}
					
					
					
				}
			
			);
			
			$(".downloadtextfree").click(
			
			
			
				function () {
					
					if( /Android/i.test(navigator.userAgent) ) {
						window.open("http://pinger.com/content/exit.html?url=https://market.android.com/details?id=com.pinger.textfree");
					} else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
						window.open("http://click.linksynergy.com/fs-bin/stat?id=hDU53YXwIEk%26offerid=146261%26type=3%26subid=0%26tmpid=1826%26u1=XXX_pinger.com_TFV%26RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fus%252Fapp%252Fid399355755%253Fmt%253D8%2526uo%253D6%2526partnerId%253D30");
					} else {
						$("#downloadlinksoverlay").fadeIn();
						$("#gcdl").fadeIn();
					}
					
					
					
				}
			
			);
			
			
			$(".downloadjvm").click(
			
				function () {
					if( /Android/i.test(navigator.userAgent) ) {
						window.open("https://play.google.com/store/apps/details?id=com.pinger.juke.vox.messenger.free");
					} else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
						window.open("https://itunes.apple.com/us/app/jukevox-messenger-send-funny/id650975924?mt=8");
					} else {
						$("#downloadlinksoverlay").fadeIn();
					$("#jvmdl").fadeIn();
					}
					
					
				}
			
			);
			
			$(".downloadfsm").click(
			
				function () {
					if( /Android/i.test(navigator.userAgent) ) {
						window.open("https://play.google.com/store/apps/details?id=com.pinger.free.style.messenger.text");
					} else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
						window.open("https://itunes.apple.com/us/app/free-style-messenger-text/id651122548?mt=8");
					} else {
						$("#downloadlinksoverlay").fadeIn();
						$("#fsmdl").fadeIn();
					}
					
				}
			
			);
			
			$(".downloadp").click(
			
				function () {
					if( /Android/i.test(navigator.userAgent) ) {
						window.open("https://play.google.com/store/apps/details?id=com.pinger.ppa");
					} else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
						window.open("https://itunes.apple.com/us/app/pinger-ex-text-free-+-free/id570756103?mt=8");
					} else {
						$("#downloadlinksoverlay").fadeIn();
						$("#pdl").fadeIn();
					}
					
				}
			
			);
			
			//alert("init");
			siteLoaded = true;
			showSite();
			
			
		});
		
		
		
		
		// NAV CLICK HANDLERS
		els.navLink.click(function(){
			
			var $this = $(this);
			if ($this.attr('href') == '#sec2') {
				els.page.animate({scrollTop:($('#sec2').offset().top)}, 500);
				//$('.section').animate({'top':-570}, 500);
			} else if ($this.attr('href') == '#sec3') {
				els.page.animate({scrollTop:($('#sec3').offset().top)}, 500);
			} else if ($this.attr('href') == '#sec4') {
				els.page.animate({scrollTop:($('#sec4').offset().top)}, 500);
			} else if ($this.attr('href') == '#sec5') {
				els.page.animate({scrollTop:($('#sec5').offset().top)}, 500);
			}
			
			
			return false;
		});

	};

	


	// RETURN
	return {
		init: init,
		showSite: showSite
	}
	
};




function initialize() {
	
	
	   
	
}





