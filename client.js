const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const axios = require('axios');
const parser = require('./parser');

const URL = `https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&is=1&save_search=1&l=0&md=th&f=b&ca=14&w=111`;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const client = new Discord.Client({
   token: auth.token,
   autorun: true
});

client.on('ready', (evt) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');

    sendMessage('I will now fetch new apartments from blocket every 60 seconds and print them in this channel. :D');
});

const sendMessage = (message) => {
    client.sendMessage({
        to: '384784131432775701',
        message: message
    });
};

const requestLoop = setInterval(() => {
    axios.get(URL).then((response) => {
        let html = response.data;
        let message = parser.parse(html);
        if (message) {
            sendMessage(message);
        }
    }).catch((error) => {
        console.log(error);
    });
}, 60000);

// temp
const getHtml = () => {return `
    






	
	


	
	
	
	
	
			
				
			
		
	
			
				
			
		
	
			
				
			
		
	
			
				
			
		
	








		

		
			
		
		
		
			
		
		
		
	

		

		
		
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
		
		
		
			
		
		
	

		

		
		
		
		
			
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
		
		
		
		
	

		

		
		
		
		
		
	

		

		
		
		
		
			
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
		
				
			
		
		
			
		
		
		
	

		

		
		
		
		
		
	

		

		
		
		
		
			
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
			
		
		
		
			
		
		
		
	

		

		
		
		
		
			
		
		
	

		

		
		
		
		
			
		
		
	

		

		
		
		
		
		
	









	
	

		
			
		
	



	

	

	
		
		
		
		
		
		

		
		
			
		
		
		
			

			
				
					
				
			
			
			
				
			
			
		
	



	
	


	
	
	

	
	
		
	


	

	
	
	
	
	
	

	

<!doctype html><html lang="sv"><head> <meta charset="utf-8"> <link rel="manifest" href="/manifest.json">    <title>Bostäder att hyra i Sverige - Blocket Bostad</title> <meta name="viewport" content="width=1012"> <meta name="application-name" content="Blocket">    <meta name="google" content="nositelinkssearchbox">   <meta name="keywords" content="Bostad,Uthyres,Stockholm" />




    
	
	
	
	    
	
        <meta name="description" content="Sök bland bostäder att hyra i Sverige. Här på Blocket Bostad visar vi bostadsannonser för dig som vill hyra bostad i Stockholm." />
    




	
		
			
				<link rel="canonical" href="https://www.blocket.se/bostad/uthyres">
			
		
	


	
		
		<link rel="next" href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&is=1&save_search=1&md=th&o=2&f=b&ca=14&w=111" />
	

    <meta name="googlebot" content="noarchive">                                    <link href="https://www.blocket.se/css/873f1fed27f707d5d4b9780670f9e60f/sprite_list.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/b29e84b3d87e08f4415734c35ff105f6/sprite_common.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/76cb29d21497a1280713b954c6496e41/blocket_list.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/f9b8e62f98a72fd21e5beec6db30d4ff/sprite_blocket_maps.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/0013b437b9571590c3b277a351c7c7c5/sprite_campaigns.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/3f0e45a38858dfe9b7eaa3f16eb91090/campaigns.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/5ac7dd0a915340501658c711e2a71af6/blocket_common_bootstraped.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/108881/blocket-ui.min.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/108881/bostad/bostad_list.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/b29e84b3d87e08f4415734c35ff105f6/sprite_common.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/47cd418d480c153753429b3220408de6/sprite_bostad_list.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/0013b437b9571590c3b277a351c7c7c5/sprite_campaigns.css" rel="stylesheet" type="text/css">    <link href="https://www.blocket.se/css/3f0e45a38858dfe9b7eaa3f16eb91090/campaigns.css" rel="stylesheet" type="text/css">    <script>
    var conf = {
        common: {},
        postmessage: {}
    };

    conf.common.cookieDomain = '.blocket.se';

    window.conf = conf;
</script>
  <script src="https://www.blocket.se/js/b90b12d9de7128c35c6071dfc60a9475/boilerplate.js"></script> <style> .tag { overflow: hidden; margin-left: auto; margin-right: auto; } .tag.panorama { margin: 0 auto; padding: 15px 15px 0 15px; background-color: white; border: 1px solid #e9e9e9; border-bottom: none; box-sizing: unset; } .tag.takeover { width: 1600px; height: 1200px; position: absolute; top: 57px; left: -100%; right: -100%; margin: 0 auto; } .tag.sticky { margin: 0 0 35px 0; transform-origin: 0 0 0; transform: scale(0.884); }</style><script>var Glimr={};Glimr.cachedTags=[];var cachedTags=localStorage.glimrTags_OYGH3SXYFAQR78LVPNQD;if(cachedTags){Glimr.cachedTags=cachedTags.split('&').map(function(v){return v.split('=')[1];});}var glimrjs=document.createElement('script');glimrjs.defer=true;glimrjs.async=true;glimrjs.src='//storage.googleapis.com/glimr-static/glimrsdk-js/3/glimr.min.js';glimrjs.onload=function(){if(Glimr.setTagCacheTimeInSeconds){Glimr.setTagCacheTimeInSeconds(300);Glimr.getTags('OYGH3SXYFAQR78LVPNQD',function(tags,mappings){if(tags.length){Glimr.cachedTags=tags;Glimr.params=';kvglimr='+tags.join(':');}});}};document.head.appendChild(glimrjs);</script><script>
    function pixelify (s) {
        var v = s ? parseInt(s) : 0;
        return v > 0 ? v + 'px' : 0;
    }

    /**
     * messaging (window.postMessage)
     * ------------------------------
     * postMessage implementation to handle height reporting et c with SafeFrames.
     */
    var message = {
        action: function (target, props) {
            if (props.announce === 'addClass') {
                target.classList.add(props.className);
            } else if (props.announce === 'removeClass') {
                target.classList.remove(props.className);
            } else if (props.announce === 'height') {
                // closure have updated its height
                var height = pixelify(props.height);
                if (height !== target.style.height) {
                    target.style.height = height;
                }
                // set data styles (ie: styles set "on load")
                var dataStyle = target.dataset.style;
                if (dataStyle) {
                    target.style.cssText += dataStyle;
                }
                // collapse margin for hidden targets
                if (height === 0) {
                    target.style.margin = '0 auto';
                }
            } else if (props.announce === 'imp') {
                if (typeof xt_click !== 'function' || !props.label) return; // jshint ignore:line
                xt_click(this, 'C', (xtn2 || 0), props.label, 'A');
            } else if (props.announce === 'adtech-takeover') {
                dom.event.once('dom', function () {
                    target.style.width = props.width + 'px';
                    target.style.height = props.height + 'px';
                    target.style.padding = 0;
                    target.style.border = 'none';

                    var header = document.getElementById('header_navbar');
                    document.body.style.background = "#f9f7f6 url('" + props.backgroundImage + "') no-repeat center " + header.offsetHeight + 'px';
                    document.body.style.backgroundSize = 'inherit';
                    document.body.style.cursor = 'pointer';
                    document.body.classList.add('takeover');

                    if (props.href) {
                        document.body.onclick = function (ev) {
                            var href = props.href;
                            if (
                                ev.target === document.body &&
                                ['index', 'li', 'vi', 'support'].indexOf(document.body.id) !== -1
                            ) {
                                window.open(href);
                            }
                        };
                    }
                });
            }
        },
        recv: function (packet) {
            if (
                packet.origin === env.url.com &&
                typeof packet === 'object' &&
                packet.data &&
                packet.data.type &&
                (packet.data.type === 'safeframe' || packet.data.type === 'legacy') &&
                packet.data.targetId &&
                packet.data.props
            ) {
                var target = document.getElementById(packet.data.targetId);
                if (target) {
                    message.action(target, packet.data.props);
                }
            }
        }
    };

    window.addEventListener('message', message.recv);
</script>
<script>var appl='li';var flags={lazy:1,safeframe:2,nepa:4,npario:8,adtech:16,collapsed:32,sticky:64};var flash=0;var env={url:{safeframe:'https://www.blocket.com/safeframe.html',fif:'https://www.blocket.com/fif.html',cdn:'https://cdn.blocket.com',com:'https://www.blocket.com',se:'https://www.blocket.se'},adtech:{grp:768},lazy:{threshold:600}};function enc(o){return btoa(encodeURIComponent(o));}var tags=obj.parse('[{"adserver":"adtech","tagId":"blocketd_bostad_li_panorama","targetId":"li_panorama_bostad","width":980,"height":240,"threshold":600,"params":"kvadtype=u;kvcounty=%C3%B6sterg%C3%B6tland;kvsection=3020","settings":23},{"adserver":"adtech","tagId":"blocketd_listning_li_widescreen","targetId":"sticky_stamp","width":250,"height":600,"threshold":600,"params":"kvadtype=u;kvcounty=%C3%B6sterg%C3%B6tland;kvsection=3020;kvnp=np5473|np4758|np5718|np7079|np7219|np7235|np7271|np7197|np7514|np7729|np7838|np7975","settings":95},null]');var adtTags=filterProp(tags,'adserver','adtech');var apnTags=filterProp(tags,'adserver','apn');if(adtTags.length){adtTags.forEach(function(o){o.params=enc((o.params?o.params+';':'')+"flashver="+flash+(Glimr.cachedTags?";kvglimr="+Glimr.cachedTags.join(":"):""));});var adtScript=document.createElement('script');adtScript.src='https://www.blocket.se/js/d14cc79b6b122859ed3c870d16bdde03/adtech.js';document.head.appendChild(adtScript);}function setClientApnKeywords(){if(!pageOpts)return;pageOpts.keywords['se-generic-viewportwidth']=window.innerWidth;pageOpts.keywords['se-generic-viewportheight']=window.innerHeight;pageOpts.keywords['se-generic-screenwidth']=screen.width;pageOpts.keywords['se-generic-screenheight']=screen.height;if(Glimr.cachedTags){pageOpts.keywords['se-generic-geo']=Glimr.cachedTags;}var hash=window.location.hash.substring(1).split('=');if(hash[0]==='nepa'&&hash[1].match(/[a-z0-9-_]+/)){pageOpts.keywords['se-blocket-nepa']=hash[1];}}if(apnTags.length){var pageOpts={};pageOpts.member=3296;var apntag=apntag||{};apntag.anq=apntag.anq||[];pageOpts.keywords=obj.parse('{"se-generic-sitemode":"desktop","se-blocket-country":[],"se-blocket-county":"14","se-blocket-section":[3020],"se-blocket-companyad":"0","se-generic-audience":"np5473|np4758|np5718|np7079|np7219|np7235|np7271|np7197|np7514|np7729|np7838|np7975","aa-sch-country_code":"se","aa-sch-publisher":"blocket","se-generic-appmode":"notinapp","se-generic-pagegen":"none"}');setClientApnKeywords();var safeFrameConfig={allowExpansionByPush:true,allowExpansionByOverlay:true};apntag.anq.push(function(){apntag.debug=false;apntag.setPageOpts(pageOpts);apntag.setSafeFrameConfig(safeFrameConfig);apnTags.map(apntag.defineTag);apntag.loadTags();apntag.onEvent('adLoaded',function(adObj){var target=document.getElementById(adObj.targetId);if(!target)return;var creative=target.firstElementChild;if(creative){var height=Number.parseInt(creative.style.height)|| creative.offsetHeight;if(height===1200){target.style.height=null;target.style.width=null;target.classList.add('takeover');target.classList.remove('panorama');var colMain=document.getElementById('blocket');colMain.style.position='relative';colMain.style.marginTop=appl==='index'?'240px':'120px';}else{target.style.height=height+'px';}}var tag=filterProp(apnTags,'targetId',adObj.targetId);if(tag.length){message.action(adObj.targetId,{announce:'imp',label:'ad_impression_count_hack_apn::::'+tag[0].invCode+'::adresponse'});}var dataStyle=target.dataset.style;if(dataStyle){target.style.cssText+=dataStyle;}target.classList.add('load');});apntag.onEvent('adNoBid',function(adObj){document.getElementById(adObj.targetId).style.display='none';});apntag.onEvent('adBadRequest',function(adObj){document.getElementById(adObj.targetId).style.display='none';});apntag.onEvent('adRequestFailure',function(adObj){document.getElementById(adObj.targetId).style.display='none';});dom.event.emit('apntag');});var astScript=document.createElement('script');astScript.src='//acdn.adnxs.com/ast/ast.js';astScript.async=true;astScript.onload=function(){dom.event.emit('ast');};document.head.appendChild(astScript);var apnScript=document.createElement('script');apnScript.src='https://www.blocket.se/js/40889db239692f78ae98e86a9d972e31/apn.js';apnScript.async=true;document.head.appendChild(apnScript);}</script>  <script src="https://www.blocket.se/js/643c1fcd76332135f423623bc61b510f/jquery-1.9.1.min.js"></script>  <script src="https://www.blocket.se/js/ef8d7a8876e8ab344aec7bb383b0d987/bostad_thirdparty_min.js"></script>  <script src="https://www.blocket.se/js/e3ad7b91a9d5622ba7dc32e698a83e15/bostad_common_min.js"></script>  <script src="https://www.blocket.se/js/ef666582e0e50c7c7ad8e196cca14ac0/bostad_list_min.js"></script>  <script src="https://www.blocket.se/js/6a28a079ecaee1a2ecb2106cea1120f9/bostad_autocomplete_min.js"></script>  <script> blocket("@bconf").extend({ common: { cookie_domain : '.blocket.se' }, postmessage: { base_url: { http: 'https://www.blocket.com', https: 'https://www.blocket.com' } } }); </script> 



           <script> var blocketOptimizely = { userId: '6469784', userRole: 'private' }; </script>    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"> <link rel="apple-touch-icon" href="/apple-touch-icon.png"> <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"> <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"> <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"> <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"> <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"> <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png"> <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"> <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ef404f"> <link rel="image_src" href="/apple-touch-icon-152x152.png"> <meta name="msapplication-TileColor" content="#f8edcd"> <meta name="msapplication-TileImage" content="/apple-touch-icon-152x152.png"> <meta name="theme-color" content="#fff">       <script> window.trigTrackEvent = function (stringId, type, ev) { if (typeof window.trackEvent !== 'function') return; if (ev === 'load') { dom.event.once('load', function() { window.trackEvent(stringId, (type || null)); }); return; } window.trackEvent(stringId, (type || null)); }; </script></head>  <body id="li" data-application-name="list_ads" class="chrome chrome_62 realestate">   <noscript> <iframe src="https://www.blocket.se/nojs.htm" style="height: 0; width: 0"></iframe> </noscript>           


	
	
		
		
		
	

 <header id="header_navbar" class="navbar navbar-static-top navbar-default"> <div class="container nopadding"> <div id="blocket_header" class="navbar-header">  <a id="blocket_logo" class="navbar-brand npl prs" href="https://www.blocket.se" onclick="return xt_click(this,'C','','Navigering::Topp::Blocket logo','N');" data-trackable="blocket_logo_clicked" > <span class="svg-icon blocket-logo" style="height: 26px"></span> </a> </div> <nav class="navbar-collapse collapse" role="navigation"> <ul id="top_nav" class="nav navbar-nav font-large">   <li class=""> <a rel="nofollow" onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Alla annonser', 'N');" href="https://www.blocket.se/ostergotland?ca=14" > <strong>Alla annonser</strong> </a> </li>  <li class=""> <a onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Jobb', 'N');" href="https://jobb.blocket.se/?ca=14&amp;w=111" > <strong>Jobb</strong> </a> </li> <li class="selected"> <a onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Bostad', 'N');" href="https://www.blocket.se/bostad/?ca=14&amp;w=111" > <strong>Bostad</strong> </a> </li> <li class=""> <a onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Fordon', 'N');" href="https://www.blocket.se/ostergotland/fordon?ca=14&amp;cg=1000" > <strong>Fordon</strong> </a> </li>  </ul> <ul class="nav navbar-nav navbar-notification navbar-right" role="navigation"> <li class="pts"> <span class="navbar-btn">   <a id="top_nav_ai" class="btn btn-primary btn-sm track-engagement" p2-action="Clicked AI on main menu" onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Lagg in annons', 'N');"  href="https://www.blocket.se/ai?ca=14"   data-trackable="ad_insert_clicked" > Lägg in annons </a>   </span> </li>    <li id="top_nav_support" class="navbar-item-notification secondary_navitem" > <a href="https://blocket.zendesk.com" onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Kundservice', 'N');" class="npl npr" ><i class="blocket-icon blocket-icon-customerservice"></i>Kundservice</a> </li>    <li id="message-center-navbar-icon" class="navbar-item-notification">
	<a 
		href="https://www.blocket.se/konto/meddelanden" 
		onclick="return xt_click('F', '71', 'conversations', 'A');"
		class="npl npr">
		<i class="blocket-icon blocket-icon-chat"></i><span class="visible-md-inline visible-lg-inline">Meddelanden</span>
		<span class="badge badge-danger" data-unread-messages></span>
	</a>
</li>
 <li id="top_nav_mypages" class="navbar-item-notification secondary_navitem " >               <a onclick="return xt_click(this, 'C', '', 'Navigering::Topp::Mina sidor', 'N');" class="nav_link_mypages npr npl" href="https://www.blocket.se/konto/bevakningar" data-trackable="go_to_profile_clicked" ><i class="blocket-icon blocket-icon-avatar"></i>jesper.corell</a>   <span class="new_adwatch_container"> <img src="https://www.blocket.se/img/transparent.gif" class="sprite_common_navbar_new_adwatch new_adwatch" alt="Nya!" title="">
 </span>   </li>  </ul> </nav> </div></header>   <div id="li_panorama_bostad" class="tag panorama" style="width:980px;height:240px"></div>    <section id="blocket" data-js="blocket_container"  style="border-top: none;"  class="container col-main realestate panorama">    <div id="blocket_content" data-js="blocket_content" class="row">     <nav id="subheader" class="col-xs-12">  <div class="row"> <div id="bostad-logo" class="col-xs-2"> <h1> <a href="/bostad"> <img src="https://www.blocket.com/img/transparent.gif" class="sprite_common_bostad_logo_135" alt="Bostad" title="">
 </a> </h1> </div> <ul id="types" class="nav nav-pills col-xs-10">  <li> <a href="https://www.blocket.se/bostad/saljes/ostergotland?sort=&f=b"> Säljes </a> </li>  <li> <a href="https://www.blocket.se/bostad/saljes?sort=&f=p&f=c&ca=14&w=111"> Säljes privat </a> </li>  <li class="active"> <a href="https://www.blocket.se/bostad/uthyres?sort=&f=p&f=c&f=b&ca=14&w=111"> Uthyres </a> </li>  <li> <a href="https://www.blocket.se/bostad/onskar-hyra?sort=&f=p&f=c&ca=14&w=111"> Hitta hyresgäst </a> </li>  <li> <a href="https://www.blocket.se/bostad/kopes?sort=&f=p&f=c&ca=14&w=111"> Hitta köpare </a> </li>  <li> <a href="https://www.blocket.se/bostad/bytes?sort=&f=p&f=c&ca=14&w=111"> Bytes </a> </li>  </ul> </div>  </nav>         	
	

		
			
		
	



	

	

	
		
		
		
		
		
		

		
		
			
		
		
		
			

			
				
					
				
			
			
			
				
			
			
		
	



	
	


	
	
	

	
	
		
	


	

	
	
	
	
	
	

	




	
	
	
	
	
	
	
	
	
	<div class="bostad/list_filter_container  cat_3000 type_u_b col-xs-12">
	<div class="list_top row">
	<div class="list_top_left col-xs-12">
	




	

	

	



		
		

		
	
	
	
	
		
			
		
	
	

	<div class="search-wrapper">

		
			
			
			<form 
				class="form-inline"
				role="form"
				id="search_form" 
				action="https://www.blocket.se/ostergotland?ca=14" 
				method="get" 
				data-job-url="https://jobb.blocket.se/li?ca=14" 
				data-blocket-url="https://www.blocket.se/ostergotland?ca=14">
			<div class="row" id="searchform-place">
						<div class="col-xs-12">
							<div class="form-group">
								<span class="searchform-inline-text first">Hitta</span>
								<input type="hidden" name="cg" value="3000">
								<select id="cg" name="cg_multi" class="multiselect form-control" multiple="multiple">
									<option selected="selected" value="3020">lägenheter</option><option value="3100">villor</option><option value="3120">radhus</option><option value="3060">tomter</option><option value="3070">gårdar</option><option value="3040">fritidsboenden</option><option value="3080">utlandsboenden</option>
								</select>

								<span class="searchform-inline-text">i</span>
								<select id="searchtext" name="ac" multiple="" style="display: none;" placeholder="Lägg till fler platser" tabindex="1" data-placeholder-places="Lägg till fler platser" data-placeholder-countries="Lägg till fler länder">
	
</select>

								
								<select  name="w" onchange="blocket.apps.searchbox.on_search_expanded_change(this);" id="searcharea_expanded" class="search_region search_where" autocomplete="off"  tabindex="10">
	<option value="1">Östergötland</option>
	
	<option value="2" >Angränsande län</option>
	<option value="3" >Hela Sverige</option>
	<option style="background-color:#dcdcc3;" value="00">-- LÄN --</option>
	
		<option value="101" >Norrbotten</option>
	
		<option value="102" >Västerbotten</option>
	
		<option value="103" >Jämtland</option>
	
		<option value="104" >Västernorrland</option>
	
		<option value="105" >Gävleborg</option>
	
		<option value="106" >Dalarna</option>
	
		<option value="107" >Värmland</option>
	
		<option value="108" >Örebro</option>
	
		<option value="109" >Västmanland</option>
	
		<option value="110" >Uppsala</option>
	
		<option value="111" selected='selected'>Stockholm</option>
	
		<option value="112" >Södermanland</option>
	
		<option value="113" >Skaraborg</option>
	
		<option value="115" >Göteborg</option>
	
		<option value="116" >Älvsborg</option>
	
		<option value="117" >Jönköping</option>
	
		<option value="118" >Kalmar</option>
	
		<option value="119" >Gotland</option>
	
		<option value="120" >Halland</option>
	
		<option value="121" >Kronoberg</option>
	
		<option value="122" >Blekinge</option>
	
		<option value="123" >Skåne</option>
	
		<option value="199" >Flera platser</option>
	
</select>

<script type="text/javascript">

window.blocket_searchbox_last_w = '111';

</script>

<div id="bostad_multiselect" class="hide">





<!-- inside -->
<select id="searcharea_region_multiselect" name="place" class="selectpicker" data-width="130px" multiple="multiple" title="V&auml;lj plats">






<!-- munic  116 -->
<option  value="116" data-subtext="32">Botkyrka</option>








<!-- munic  117 -->
<option  value="117" data-subtext="11">Danderyd</option>








<!-- munic  118 -->
<option  value="118" data-subtext="4">Ekerö</option>








<!-- munic  119 -->
<option  value="119" data-subtext="25">Haninge</option>








<!-- munic  120 -->
<option  value="120" data-subtext="52">Huddinge</option>








<!-- munic  121 -->
<option  value="121" data-subtext="22">Järfälla</option>








<!-- munic  122 -->
<option  value="122" data-subtext="15">Lidingö</option>








<!-- munic  123 -->
<option  value="123" data-subtext="26">Nacka</option>








<!-- munic  124 -->
<option  value="124" data-subtext="8">Norrtälje</option>








<!-- munic  125 -->
<option  value="125">Nykvarn</option>








<!-- munic  126 -->
<option  value="126" data-subtext="6">Nynäshamn</option>








<!-- munic  127 -->
<option  value="127" data-subtext="4">Salem</option>








<!-- munic  128 -->
<option  value="128" data-subtext="30">Sigtuna</option>








<!-- munic  129 -->
<option  value="129" data-subtext="25">Sollentuna</option>








<!-- munic  130 -->
<option  value="130" data-subtext="41">Solna</option>








<!-- munic  131 -->
<option  value="131" data-subtext="320">Stockholms stad</option>







<!-- 2 subarea as  msa 131_1 -->
<option  value="131_1" title="Bromma" data-subtext="27">- Bromma</option>






<!-- 2 subarea as  msa 131_2 -->
<option  value="131_2" title="Enskede, Årsta, Skarpnäck" data-subtext="48">- Enskede, Årsta, Skarpnäck</option>






<!-- 2 subarea as  msa 131_3 -->
<option  value="131_3" title="Hägersten, Liljeholmen" data-subtext="25">- Hägersten, Liljeholmen</option>






<!-- 2 subarea as  msa 131_4 -->
<option  value="131_4" title="Katarina, Sofia" data-subtext="20">- Katarina, Sofia</option>






<!-- 2 subarea as  msa 131_5 -->
<option  value="131_5" title="Kista, Hässelby, Vällingby, Spånga" data-subtext="62">- Kista, Hässelby, Vällingby, Spånga</option>






<!-- 2 subarea as  msa 131_6 -->
<option  value="131_6" title="Kungsholmen" data-subtext="12">- Kungsholmen</option>






<!-- 2 subarea as  msa 131_7 -->
<option  value="131_7" title="Maria, Gamla Stan, Högalid" data-subtext="18">- Maria, Gamla Stan, Högalid</option>






<!-- 2 subarea as  msa 131_8 -->
<option  value="131_8" title="Skärholmen, Bredäng" data-subtext="21">- Skärholmen, Bredäng</option>






<!-- 2 subarea as  msa 131_9 -->
<option  value="131_9" title="Vasastan, Norrmalm" data-subtext="17">- Vasastan, Norrmalm</option>






<!-- 2 subarea as  msa 131_10 -->
<option  value="131_10" title="Älvsjö, Farsta, Vantör" data-subtext="41">- Älvsjö, Farsta, Vantör</option>






<!-- 2 subarea as  msa 131_11 -->
<option  value="131_11" title="Östermalm, Djurgården" data-subtext="29">- Östermalm, Djurgården</option>









<!-- munic  132 -->
<option  value="132" data-subtext="25">Sundbyberg</option>








<!-- munic  133 -->
<option  value="133" data-subtext="21">Södertälje</option>








<!-- munic  134 -->
<option  value="134" data-subtext="14">Tyresö</option>








<!-- munic  135 -->
<option  value="135" data-subtext="17">Täby</option>








<!-- munic  136 -->
<option  value="136" data-subtext="17">Upplands Väsby</option>








<!-- munic  137 -->
<option  value="137" data-subtext="12">Upplands-Bro</option>








<!-- munic  138 -->
<option  value="138" data-subtext="5">Vallentuna</option>








<!-- munic  139 -->
<option  value="139" data-subtext="2">Vaxholm</option>








<!-- munic  140 -->
<option  value="140" data-subtext="3">Värmdö</option>








<!-- munic  141 -->
<option  value="141" data-subtext="8">Österåker</option>




</select>
</div>


								<button tabindex="29" id="searchbutton" class="btn btn-primary btn-lg">
	<span class="blocket-icon blocket-icon-search"></span><span class="sr-only">Sök</span>
</button>
								
							</div>

							<input name="sort" type="hidden" value="" />

						</div>
						
					</div>
					

						
						<div class="cat-3000 filter-container">
							<div class="row searchform-filters primary">
							
										
										
									
									<div class="featurebox_col col-xs-2 size sync" data-type="size">
	<h6 class="filter-designation">Boarea</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
	<div id="sizelist_0" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
			<select name="se" class="sizelist" id="se_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5" selected="selected">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
		</div>
	<div id="sizelist_1" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_1" disabled="disabled" tabindex="20">
				<option value="" >Min area</option>
				
					<option value="0" selected="selected">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
			<select name="se" class="sizelist" id="se_1" disabled="disabled" tabindex="20">
				<option value="" >Max area</option>
				
					<option value="0">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
		</div>
	<div id="sizelist_2" class="featurebox active">
			<select name="ss" class="sizelist" id="ss_2"  tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
			<select name="se" class="sizelist" id="se_2"  tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5" selected="selected">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
		</div>
	
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 rooms sync" data-type="rooms">
	<h6 class="filter-designation">Rum</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
		<div id="rooms" class="featurebox active">
			<select name="ros" id="rooms_ros" class="rooms" tabindex="20">
				<option value=""  selected="selected">Rum min</option>
				
					<option value="1" >1</option>
				
					<option value="2" >1,5</option>
				
					<option value="3" >2</option>
				
					<option value="4" >2,5</option>
				
					<option value="5" >3</option>
				
					<option value="6" >3,5</option>
				
					<option value="7" >4</option>
				
					<option value="8" >5</option>
				
					<option value="9" >6</option>
				
					<option value="10" >7</option>
				
					<option value="11" >8</option>
				
					<option value="12" >9</option>
				
					<option value="13" >10</option>
				
			</select>
			<select name="roe" id="rooms_roe" class="rooms" tabindex="20">
				<option value="" >Rum max</option>
				
					<option value="1" >1</option>
				
					<option value="2" >1,5</option>
				
					<option value="3" selected="selected">2</option>
				
					<option value="4" >2,5</option>
				
					<option value="5" >3</option>
				
					<option value="6" >3,5</option>
				
					<option value="7" >4</option>
				
					<option value="8" >5</option>
				
					<option value="9" >6</option>
				
					<option value="10" >7</option>
				
					<option value="11" >8</option>
				
					<option value="12" >9</option>
				
					<option value="13" >10</option>
				
			</select>
		</div>
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 sync beds" data-type="beds">
	<h6 class="filter-designation">Bäddar</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
		<div id="beds" class="featurebox active">
			<select name="bs" id="bs" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum min</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
			<select name="be" id="be" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum max</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
		</div>
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 max-monthly-fee" data-type="max-monthly-fee">
	<h6 class="filter-designation">Hyra</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	<div style="display: none;">
		<div id="max_monthly_fee" class="featurebox active">
			<select name="mre" id="max_monthly_fee_mre" tabindex="20">
				<option value="" >Max avgift</option>
				
					<option value="1000" >1 000 kr/mån</option>
				
					<option value="2000" >2 000 kr/mån</option>
				
					<option value="3000" >3 000 kr/mån</option>
				
					<option value="4000" >4 000 kr/mån</option>
				
					<option value="5000" >5 000 kr/mån</option>
				
					<option value="6000" >6 000 kr/mån</option>
				
					<option value="7000" >7 000 kr/mån</option>
				
					<option value="8000" >8 000 kr/mån</option>
				
					<option value="9000" >9 000 kr/mån</option>
				
					<option value="10000" selected="selected">10 000 kr/mån</option>
				
					<option value="11000" >11 000 kr/mån</option>
				
					<option value="12000" >12 000 kr/mån</option>
				
					<option value="13000" >13 000 kr/mån</option>
				
					<option value="15000" >15 000 kr/mån</option>
				
					<option value="20000" >20 000 kr/mån</option>
				
					<option value="25000" >25 000 kr/mån</option>
				
			</select>
			<br />
		</div>
	</div>
	<div class="content container single">
	
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 q_featurebox oneline searchtext sync" data-type="searchtext">
	<h6 class="filter-designation">Nyckelord</h6>
	<p>T ex: balkong</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div class="content container">
		<div class="row">
			<div class="col-xs-12">
				<div class="form-group">
					<label for="q">Lägg till</label>
					<input name="q" class="q form-control no-placeholder" placeholder="T ex: balkong" value="" />
				</div>
			</div>
		</div>
		<div class="row controls">
	<div class="col-xs-6">
		<button type="button" class="btn btn-default btn-sm reset">Rensa</button>
	</div>
	<div class="col-xs-6 align-right">
		<button class="btn btn-sm btn-primary">Ok</button>
	</div>
</div>
	</div>
</div>
								
							
							</div>
							<div class="row searchform-filters secondary">
							
							</div>
						</div>
					
				
			
		
	
						
						<div class="cat-3040 filter-container">
							<div class="row searchform-filters primary">
							
										
										
									
									<div class="featurebox_col col-xs-2 size sync" data-type="size">
	<h6 class="filter-designation">Boarea</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
	<div id="sizelist_0" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
			<select name="se" class="sizelist" id="se_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5" selected="selected">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
		</div>
	<div id="sizelist_1" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_1" disabled="disabled" tabindex="20">
				<option value="" >Min area</option>
				
					<option value="0" selected="selected">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
			<select name="se" class="sizelist" id="se_1" disabled="disabled" tabindex="20">
				<option value="" >Max area</option>
				
					<option value="0">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
		</div>
	<div id="sizelist_2" class="featurebox active">
			<select name="ss" class="sizelist" id="ss_2"  tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
			<select name="se" class="sizelist" id="se_2"  tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5" selected="selected">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
		</div>
	
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 sync beds" data-type="beds">
	<h6 class="filter-designation">Bäddar</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
		<div id="beds" class="featurebox active">
			<select name="bs" id="bs" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum min</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
			<select name="be" id="be" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum max</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
		</div>
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 max-monthly-fee" data-type="max-monthly-fee">
	<h6 class="filter-designation">Hyra</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	<div style="display: none;">
		<div id="max_monthly_fee" class="featurebox active">
			<select name="mre" id="max_monthly_fee_mre" tabindex="20">
				<option value="" >Max avgift</option>
				
					<option value="1000" >1 000 kr/mån</option>
				
					<option value="2000" >2 000 kr/mån</option>
				
					<option value="3000" >3 000 kr/mån</option>
				
					<option value="4000" >4 000 kr/mån</option>
				
					<option value="5000" >5 000 kr/mån</option>
				
					<option value="6000" >6 000 kr/mån</option>
				
					<option value="7000" >7 000 kr/mån</option>
				
					<option value="8000" >8 000 kr/mån</option>
				
					<option value="9000" >9 000 kr/mån</option>
				
					<option value="10000" selected="selected">10 000 kr/mån</option>
				
					<option value="11000" >11 000 kr/mån</option>
				
					<option value="12000" >12 000 kr/mån</option>
				
					<option value="13000" >13 000 kr/mån</option>
				
					<option value="15000" >15 000 kr/mån</option>
				
					<option value="20000" >20 000 kr/mån</option>
				
					<option value="25000" >25 000 kr/mån</option>
				
			</select>
			<br />
		</div>
	</div>
	<div class="content container single">
	
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 oneline week_calendar" data-type="available_week">
	<h6 class="filter-designation">Vecka</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	
	<div class="content container">
		<div class="row">
			<div class="col-xs-12">

            

                <div class="awc_month_text big_text black_links">
                    <div class="awc_arrow_left hidden"></div>
                    <span class="awc_month_name_long">november</span>
                    <div class="awc_arrow_right"></div>
                </div>

                <table class="awc_table" cellpadding="0" cellspacing="0">
                    <tr>
                        <th class="awc_week">Vecka</th>
                        <th class="awc_weekday">Må</th>
                        <th class="awc_weekday">Ti</th>
                        <th class="awc_weekday">On</th>
                        <th class="awc_weekday">To</th>
                        <th class="awc_weekday">Fr</th>
                        <th class="awc_weekday">Lö</th>
                        <th class="awc_weekday">Sö</th>
                    </tr>
                    <tr class="awc_week awc_select" week="2017:44">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">44</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">30</td>
                            <td class="awc_weekday calendar_no">31</td>
                            <td class="awc_weekday calendar_no">1</td>
                            <td class="awc_weekday calendar_no">2</td>
                            <td class="awc_weekday calendar_no">3</td>
                            <td class="awc_weekday calendar_no">4</td>
                            <td class="last awc_weekday calendar_no">5</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:45">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">45</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">6</td>
                            <td class="awc_weekday calendar_no">7</td>
                            <td class="awc_weekday calendar_no">8</td>
                            <td class="awc_weekday calendar_no">9</td>
                            <td class="awc_weekday calendar_no">10</td>
                            <td class="awc_weekday calendar_no">11</td>
                            <td class="last awc_weekday calendar_no">12</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:46">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">46</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">13</td>
                            <td class="awc_weekday calendar_no">14</td>
                            <td class="awc_weekday calendar_no">15</td>
                            <td class="awc_weekday calendar_no">16</td>
                            <td class="awc_weekday calendar_no">17</td>
                            <td class="awc_weekday calendar_no">18</td>
                            <td class="last awc_weekday calendar_no">19</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:47">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">47</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">20</td>
                            <td class="awc_weekday calendar_no">21</td>
                            <td class="awc_weekday calendar_no">22</td>
                            <td class="awc_weekday calendar_no">23</td>
                            <td class="awc_weekday calendar_no">24</td>
                            <td class="awc_weekday calendar_no">25</td>
                            <td class="last awc_weekday calendar_no">26</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:48">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">48</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">27</td>
                            <td class="awc_weekday calendar_no">28</td>
                            <td class="awc_weekday calendar_no">29</td>
                            <td class="awc_weekday calendar_no">30</td>
                            <td class="awc_weekday calendar_no">1</td>
                            <td class="awc_weekday calendar_no">2</td>
                            <td class="last awc_weekday calendar_no">3</td>
                        </tr>
                    
                </table>
            

			</div>
		</div>
		<div class="row controls">
	<div class="col-xs-6">
		<button type="button" class="btn btn-default btn-sm reset">Rensa</button>
	</div>
	<div class="col-xs-6 align-right">
		<button class="btn btn-sm btn-primary">Ok</button>
	</div>
</div>
	</div>
</div>


								
							
									
									<div class="featurebox_col col-xs-2 q_featurebox oneline searchtext sync" data-type="searchtext">
	<h6 class="filter-designation">Nyckelord</h6>
	<p>T ex: balkong</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div class="content container">
		<div class="row">
			<div class="col-xs-12">
				<div class="form-group">
					<label for="q">Lägg till</label>
					<input name="q" class="q form-control no-placeholder" placeholder="T ex: balkong" value="" />
				</div>
			</div>
		</div>
		<div class="row controls">
	<div class="col-xs-6">
		<button type="button" class="btn btn-default btn-sm reset">Rensa</button>
	</div>
	<div class="col-xs-6 align-right">
		<button class="btn btn-sm btn-primary">Ok</button>
	</div>
</div>
	</div>
</div>
								
							
									
									<div class="featurebox_col col-xs-2 more-filters" data-type="more-filters">
	<a href="#" class="more-filters">Fler sökval</a>
</div>

								
							
							</div>
							<div class="row searchform-filters secondary">
							
									
									
	
	
	
	
	
	
	
	<div class="featurebox_col col-xs-2 skip-header featurebox_multiselect bp_about" data-type="bp">
	<h6 class="filter-designation">Om bostaden</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	
		<div style="display: none;">
			<div id="generic_bp_about" class="featurebox active">
				<select name="bp" id="param_bp_about" multiple="multiple">
					
						<option value=""></option>
					
					
							<option value="near_sea">Sjönära</option>
						
					
							<option value="in_archipelago">Skärgård</option>
						
					
							<option value="pets_allowed">Husdjur tillåtet</option>
						
					
							<option value="has_cleaning_2">Städning</option>
						
					
							<option value="has_dishwasher">Diskmaskin</option>
						
					
							<option value="has_washingmachine">Tvättmaskin</option>
						
					
				</select>
			</div>
		</div>
		<div class="content container single">
	
</div>

	
</div>



								
							
									
									
	
	
	
	
	
	
	
	<div class="featurebox_col col-xs-2 skip-header featurebox_multiselect bp_close_to" data-type="bp">
	<h6 class="filter-designation">Nära till</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	
		<div style="display: none;">
			<div id="generic_bp_close_to" class="featurebox active">
				<select name="bp" id="param_bp_close_to" multiple="multiple">
					
						<option value=""></option>
					
					
							<option value="close_to_swimming">Bad</option>
						
					
							<option value="close_to_fishing">Fiske</option>
						
					
							<option value="close_to_golf">Golf</option>
						
					
							<option value="close_to_skiing">Skidbacke</option>
						
					
							<option value="close_to_nature">Naturnära</option>
						
					
				</select>
			</div>
		</div>
		<div class="content container single">
	
</div>

	
</div>



								
							
							</div>
						</div>
					
				
			
		
	
						
						<div class="cat-3080 filter-container">
							<div class="row searchform-filters primary">
							
										
										
									
									<div class="featurebox_col col-xs-2 size sync" data-type="size">
	<h6 class="filter-designation">Boarea</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
	<div id="sizelist_0" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
			<select name="se" class="sizelist" id="se_0" disabled="disabled" tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10</option>
				
					<option value="1">20</option>
				
					<option value="2">30</option>
				
					<option value="3">40</option>
				
					<option value="4">50</option>
				
					<option value="5" selected="selected">60</option>
				
					<option value="6">70</option>
				
					<option value="7">80</option>
				
					<option value="8">90</option>
				
					<option value="9">100</option>
				
					<option value="10">110</option>
				
					<option value="11">120</option>
				
					<option value="12">130</option>
				
			</select>
		</div>
	<div id="sizelist_1" class="featurebox ">
			<select name="ss" class="sizelist" id="ss_1" disabled="disabled" tabindex="20">
				<option value="" >Min area</option>
				
					<option value="0" selected="selected">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
			<select name="se" class="sizelist" id="se_1" disabled="disabled" tabindex="20">
				<option value="" >Max area</option>
				
					<option value="0">0</option>
				
					<option value="4">50</option>
				
					<option value="9">100</option>
				
					<option value="14">150</option>
				
					<option value="18">200</option>
				
					<option value="19">300</option>
				
					<option value="20">400</option>
				
					<option value="21">500</option>
				
					<option value="22">800</option>
				
					<option value="23">1 000</option>
				
					<option value="24">1 500</option>
				
					<option value="25">2 000</option>
				
					<option value="26">2 500</option>
				
					<option value="27">3 000</option>
				
			</select>
		</div>
	<div id="sizelist_2" class="featurebox active">
			<select name="ss" class="sizelist" id="ss_2"  tabindex="20">
				<option value="" >Boarea min</option>
				
					<option value="0" selected="selected">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
			<select name="se" class="sizelist" id="se_2"  tabindex="20">
				<option value="" >Boarea max</option>
				
					<option value="0">10 m²</option>
				
					<option value="1">20 m²</option>
				
					<option value="2">30 m²</option>
				
					<option value="3">40 m²</option>
				
					<option value="4">50 m²</option>
				
					<option value="5" selected="selected">60 m²</option>
				
					<option value="6">70 m²</option>
				
					<option value="7">80 m²</option>
				
					<option value="8">90 m²</option>
				
					<option value="9">100 m²</option>
				
					<option value="10">110 m²</option>
				
					<option value="11">120 m²</option>
				
					<option value="12">130 m²</option>
				
					<option value="13">140 m²</option>
				
					<option value="14">150 m²</option>
				
					<option value="15">160 m²</option>
				
					<option value="16">170 m²</option>
				
					<option value="17">180 m²</option>
				
			</select>
		</div>
	
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 sync beds" data-type="beds">
	<h6 class="filter-designation">Bäddar</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div style="display: none;">
		<div id="beds" class="featurebox active">
			<select name="bs" id="bs" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum min</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
			<select name="be" id="be" class="beds" tabindex="20">
				<option value=""  selected="selected">Rum max</option>
				
					<option value="1" >1</option>
				
					<option value="2" >2</option>
				
					<option value="3" >3</option>
				
					<option value="4" >4</option>
				
					<option value="5" >5</option>
				
					<option value="6" >6</option>
				
					<option value="7" >7</option>
				
					<option value="8" >8</option>
				
					<option value="9" >9</option>
				
					<option value="10" >10</option>
				
			</select>
		</div>
	</div>
	<div class="content container interval">
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 max-monthly-fee" data-type="max-monthly-fee">
	<h6 class="filter-designation">Hyra</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	<div style="display: none;">
		<div id="max_monthly_fee" class="featurebox active">
			<select name="mre" id="max_monthly_fee_mre" tabindex="20">
				<option value="" >Max avgift</option>
				
					<option value="1000" >1 000 kr/mån</option>
				
					<option value="2000" >2 000 kr/mån</option>
				
					<option value="3000" >3 000 kr/mån</option>
				
					<option value="4000" >4 000 kr/mån</option>
				
					<option value="5000" >5 000 kr/mån</option>
				
					<option value="6000" >6 000 kr/mån</option>
				
					<option value="7000" >7 000 kr/mån</option>
				
					<option value="8000" >8 000 kr/mån</option>
				
					<option value="9000" >9 000 kr/mån</option>
				
					<option value="10000" selected="selected">10 000 kr/mån</option>
				
					<option value="11000" >11 000 kr/mån</option>
				
					<option value="12000" >12 000 kr/mån</option>
				
					<option value="13000" >13 000 kr/mån</option>
				
					<option value="15000" >15 000 kr/mån</option>
				
					<option value="20000" >20 000 kr/mån</option>
				
					<option value="25000" >25 000 kr/mån</option>
				
			</select>
			<br />
		</div>
	</div>
	<div class="content container single">
	
</div>

</div>

								
							
									
									<div class="featurebox_col col-xs-2 oneline week_calendar" data-type="available_week">
	<h6 class="filter-designation">Vecka</h6>
	<p>Alla</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	
	<div class="content container">
		<div class="row">
			<div class="col-xs-12">

            

                <div class="awc_month_text big_text black_links">
                    <div class="awc_arrow_left hidden"></div>
                    <span class="awc_month_name_long">november</span>
                    <div class="awc_arrow_right"></div>
                </div>

                <table class="awc_table" cellpadding="0" cellspacing="0">
                    <tr>
                        <th class="awc_week">Vecka</th>
                        <th class="awc_weekday">Må</th>
                        <th class="awc_weekday">Ti</th>
                        <th class="awc_weekday">On</th>
                        <th class="awc_weekday">To</th>
                        <th class="awc_weekday">Fr</th>
                        <th class="awc_weekday">Lö</th>
                        <th class="awc_weekday">Sö</th>
                    </tr>
                    <tr class="awc_week awc_select" week="2017:44">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">44</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">30</td>
                            <td class="awc_weekday calendar_no">31</td>
                            <td class="awc_weekday calendar_no">1</td>
                            <td class="awc_weekday calendar_no">2</td>
                            <td class="awc_weekday calendar_no">3</td>
                            <td class="awc_weekday calendar_no">4</td>
                            <td class="last awc_weekday calendar_no">5</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:45">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">45</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">6</td>
                            <td class="awc_weekday calendar_no">7</td>
                            <td class="awc_weekday calendar_no">8</td>
                            <td class="awc_weekday calendar_no">9</td>
                            <td class="awc_weekday calendar_no">10</td>
                            <td class="awc_weekday calendar_no">11</td>
                            <td class="last awc_weekday calendar_no">12</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:46">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">46</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">13</td>
                            <td class="awc_weekday calendar_no">14</td>
                            <td class="awc_weekday calendar_no">15</td>
                            <td class="awc_weekday calendar_no">16</td>
                            <td class="awc_weekday calendar_no">17</td>
                            <td class="awc_weekday calendar_no">18</td>
                            <td class="last awc_weekday calendar_no">19</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:47">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">47</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">20</td>
                            <td class="awc_weekday calendar_no">21</td>
                            <td class="awc_weekday calendar_no">22</td>
                            <td class="awc_weekday calendar_no">23</td>
                            <td class="awc_weekday calendar_no">24</td>
                            <td class="awc_weekday calendar_no">25</td>
                            <td class="last awc_weekday calendar_no">26</td>
                        </tr>
                    <tr class="awc_week awc_select" week="2017:48">
                            <td class="first awc_week">
                                <div class="awc_checkbox">
                                    <div class="tick-container">
                                        <span class="tick blocket-icon blocket-icon-check"></span>
                                    </div>
                                    <span class="week_number">48</span>
                                </div>
                            </td>
                            <td class="awc_weekday calendar_no">27</td>
                            <td class="awc_weekday calendar_no">28</td>
                            <td class="awc_weekday calendar_no">29</td>
                            <td class="awc_weekday calendar_no">30</td>
                            <td class="awc_weekday calendar_no">1</td>
                            <td class="awc_weekday calendar_no">2</td>
                            <td class="last awc_weekday calendar_no">3</td>
                        </tr>
                    
                </table>
            

			</div>
		</div>
		<div class="row controls">
	<div class="col-xs-6">
		<button type="button" class="btn btn-default btn-sm reset">Rensa</button>
	</div>
	<div class="col-xs-6 align-right">
		<button class="btn btn-sm btn-primary">Ok</button>
	</div>
</div>
	</div>
</div>


								
							
									
									<div class="featurebox_col col-xs-2 q_featurebox oneline searchtext sync" data-type="searchtext">
	<h6 class="filter-designation">Nyckelord</h6>
	<p>T ex: balkong</p>
	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>
	<div class="content container">
		<div class="row">
			<div class="col-xs-12">
				<div class="form-group">
					<label for="q">Lägg till</label>
					<input name="q" class="q form-control no-placeholder" placeholder="T ex: balkong" value="" />
				</div>
			</div>
		</div>
		<div class="row controls">
	<div class="col-xs-6">
		<button type="button" class="btn btn-default btn-sm reset">Rensa</button>
	</div>
	<div class="col-xs-6 align-right">
		<button class="btn btn-sm btn-primary">Ok</button>
	</div>
</div>
	</div>
</div>
								
							
									
									<div class="featurebox_col col-xs-2 more-filters" data-type="more-filters">
	<a href="#" class="more-filters">Fler sökval</a>
</div>

								
							
							</div>
							<div class="row searchform-filters secondary">
							
									
									
	
	
	
	
	
	
	
	<div class="featurebox_col col-xs-2 skip-header featurebox_multiselect bp_about_abroad" data-type="bp">
	<h6 class="filter-designation">Om bostaden</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	
		<div style="display: none;">
			<div id="generic_bp_about_abroad" class="featurebox active">
				<select name="bp" id="param_bp_about_abroad" multiple="multiple">
					
						<option value=""></option>
					
					
							<option value="has_pool">Pool</option>
						
					
							<option value="has_internet">Internet</option>
						
					
							<option value="has_cleaning">Städning möjligt</option>
						
					
							<option value="has_dishwasher">Diskmaskin</option>
						
					
							<option value="has_washingmachine">Tvättmaskin</option>
						
					
							<option value="has_aircondition">Luftkonditionering</option>
						
					
							<option value="parking_lot_or_garage">Parkering / Garage</option>
						
					
							<option value="has_balcony_or_patio">Balkong / Uteplats</option>
						
					
				</select>
			</div>
		</div>
		<div class="content container single">
	
</div>

	
</div>



								
							
									
									
	
	
	
	
	
	
	
	<div class="featurebox_col col-xs-2 skip-header featurebox_multiselect bp_close_to_abroad" data-type="bp">
	<h6 class="filter-designation">Nära till</h6>
	<p>Alla</p>

	<span class="expand blocket-icon blocket-icon-arrow-down"></span>
	<span class="contract blocket-icon blocket-icon-arrow-up"></span>

	
		<div style="display: none;">
			<div id="generic_bp_close_to_abroad" class="featurebox active">
				<select name="bp" id="param_bp_close_to_abroad" multiple="multiple">
					
						<option value=""></option>
					
					
							<option value="close_to_swimming">Bad</option>
						
					
							<option value="close_to_city">Storstad</option>
						
					
							<option value="close_to_golf">Golf</option>
						
					
							<option value="close_to_skiing">Skidbacke</option>
						
					
							<option value="close_to_nature">Naturnära</option>
						
					
				</select>
			</div>
		</div>
		<div class="content container single">
	
</div>

	
</div>



								
							
							</div>
						</div>
					
				
			
		
	



					<input name="ca" value="14" type="hidden" />
					<input name="is" value="1" type="hidden" />
					<input name="save_search" value="1" type="hidden" />
					<input name="l" value="0" type="hidden" />
					<div class="hide">
							<select name="f" multiple="multiple">
								<option selected="selected" value="b">b</option>
							</select>
						</div>
					
					
					
					
					<input name="st" value="u" type="hidden" />
					
					<input name="md" value="th" type="hidden" />
					
					
					
					
                    
					
				
			
			</form>
		
	</div>


	</div>
</div>


	
	

	
		
	

	
	
	

		
		
		

		
		
		
		

		
		
			

			
			
			
				
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		
			

			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		
			

			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		
			

			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		
			

			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		
			

			
			
			

			
			
			
			
			
			
			
			
			
			
			
			
			

			
			
		

		
		
		

		
		

		

		

		
	

	


		
				
				
					
	<div class="latest-search-ad-list row">
		<div class="col-xs-12">
			<h2>Din senaste sökning: 
				<a href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&ss=0&se=5&roe=3&be=&mre=10000&q=&is=1&l=0&md=th&xc=3080&f=b&f=c&f=p&f=b&ca=14&w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Sokrubrik', 'A');">
					
						<span class="latest-search-title js-latest-search-title-popover " 
								title="Lägenheter uthyres i Stockholm" data-placement="top" data-trigger="hover" data-content="10 m² - 60 m², upp till 2 rum, upp till 10 000 kr/mån">
					
					Lägenheter uthyres i Stockholm
					
						(745)
					
					</span>
				</a> 
				
			</h2>

			

			<ol class="list-unstyled row latest-search-objects">
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Fresh_Rum_uthyres_76788548.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Fresh_Rum_uthyres_76788548.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Fresh Rum uthyres</a></h4>
							
							<span class="secondary-stat size">18 m&sup2;</span> <span class="secondary-stat rooms">1 rum</span>
						</div>
					</li>
				
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Rum_uthyres_i_etage_lagenhet_76347023.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
									<img src="https://cdn.blocket.com/static/2/images_137x91/72/7204733831.jpg" width="137" height="91">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Rum_uthyres_i_etage_lagenhet_76347023.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Rum uthyres i etage lägenhet</a></h4>
							
							<span class="secondary-stat size">50 m&sup2;</span> <span class="secondary-stat rooms">2 rum</span>
						</div>
					</li>
				
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Rum_uthyres_76787785.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
									<img src="https://cdn.blocket.com/static/1/images_137x91/97/9753008918.jpg" width="137" height="91">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Rum_uthyres_76787785.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Rum uthyres</a></h4>
							
							<span class="secondary-stat size">12 m&sup2;</span> <span class="secondary-stat rooms">1 rum</span>
						</div>
					</li>
				
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Nyproducerad___valutrustad_1_a_tillsvidare_76787471.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
									<img src="https://cdn.blocket.com/static/1/images_137x91/97/9730748889.jpg" width="137" height="91">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Nyproducerad___valutrustad_1_a_tillsvidare_76787471.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Nyproducerad & välutrustad 1:a tillsvidare</a></h4>
							
							<span class="secondary-stat size">32 m&sup2;</span> <span class="secondary-stat rooms">1 rum</span>
						</div>
					</li>
				
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Great_corridor_room_near_Gullmarsplan_76786252.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
									<img src="https://cdn.blocket.com/static/0/images_137x91/97/9709536491.jpg" width="137" height="91">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Great_corridor_room_near_Gullmarsplan_76786252.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Great corridor room near Gullmarsplan</a></h4>
							
							<span class="secondary-stat size">15 m&sup2;</span> <span class="secondary-stat rooms">1 rum</span>
						</div>
					</li>
				
			
					
					
					
					
					
					
					
					
					

					<li class="col-xs-2 latest-search-object">
						<div class="sprite_list_placeholder">
							
		
		
		
		
		
		
		
		
		
	

	
		
	

	
	
	
	
	

	
	
	
	

	<ul class="object-attribute-badges">
				
				
				
				
				
				
			</ul>
		
	


							<a class="media-object" href="https://www.blocket.se/stockholm/Apartment_for_rent_temporarily_75913158.htm?ca=14&amp;w=111" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">
								
									<img src="https://cdn.blocket.com/static/2/images_137x91/48/4882915976.jpg" width="137" height="91">
								
							</a>
						</div>
						<div>
							<h4 class="sans-serif"><a href="https://www.blocket.se/stockholm/Apartment_for_rent_temporarily_75913158.htm?ca=14&amp;w=111" class="break-word" onclick="return xt_click(this, 'C', '28', 'Senaste_sokning::Objekt', 'A');">Apartment for rent temporarily</a></h4>
							
							<span class="secondary-stat size">60 m&sup2;</span> <span class="secondary-stat rooms">2 rum</span>
						</div>
					</li>
				
			 
			 
			</ol>
		</div>
	</div>


				
			
		
	
	<div id="list-content" class="list_content row">
		
		<div class="col-xs-9">
					
						<div id="search-results-header" class="row">
							<div class="col-xs-6 search-results-sorting">
								<span class="number_of_hits">
									<span class="num_hits">745</span>
								</span>
								träffar sorterat på
								
	<div id="list-result-sort" class="order_views_container_text btn-group">
	
		
		
		

		
		
			
		

		<button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown">
			<span class="active-sorting">senaste</span> <span class="caret"></span>
		</button>

		<ul class="dropdown-menu" role="menu">			
		<li  class="active">
				<a id="sort-mode-" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&f=b&f=b
							
						&ca=14&w=111
					"
				>
					senaste
				</a>
			</li>
		<li >
				<a id="sort-mode-rdate" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&amp;sort=rdate&f=b&f=b
							
								&ca=14&w=111
					"
				>
					äldst
				</a>
			</li>
		<li >
				<a id="sort-mode-price" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&amp;sort=price&f=b&f=b
							
								&ca=14&w=111
					"
				>
					billigast
				</a>
			</li>
		<li >
				<a id="sort-mode-rprice" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&amp;sort=rprice&f=b&f=b
							
								&ca=14&w=111
					"
				>
					dyrast
				</a>
			</li>
		<li >
				<a id="sort-mode-size" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&amp;sort=size&f=b&f=b
							
								&ca=14&w=111
					"
				>
					minst
				</a>
			</li>
		<li >
				<a id="sort-mode-rsize" onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (senaste)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (äldst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (billigast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (dyrast)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (minst)', 'N');"onclick="return xt_click(this, 'C', '28', 'Listning::Sortering (störst)', 'N');" href="
					https://www.blocket.se/bostad/uthyres?cg_multi=3020&amp;ss=0&amp;se=5&amp;roe=3&amp;mre=10000&amp;l=0&amp;sort=rsize&f=b&f=b
							
								&ca=14&w=111
					"
				>
					störst
				</a>
			</li>
		
		</ul>
	
	</div>



							</div>
							<div class="col-xs-6 search-results-list-modes">
								<div class="list_filtering">
	
	
			
			
	

	
	<a id="create-adwatch-button" href="https://www.blocket.se/redir?s=adwatch&nc=1&url=https://www.blocket.se/konto/bevakningar/skapa?ca=14&st=u&cg=3000&cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&f=b&w=111&token=677e538ec6f34603039ccffda93e45719a0b1ff7" class="adwatch_link underline " rel="nofollow" onclick="return xt_click(this,'C','11','create_adwatch_from_li','N')">Skapa bevakning</a>


		
	
</div>

							</div>
						</div>
					
					<div id="item_list" class="list_mode_thumb list_bostad">
	














<div itemscope itemtype="http://schema.org/Offer" id="item_76788548" class="media item_row_first item_row item_row_no_image clearfix" data-lkf="0191">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Fresh_Rum_uthyres_76788548.htm?ca=14&w=111" title="Läs mer om Fresh Rum uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sigtuna
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Fresh_Rum_uthyres_76788548.htm?ca=14&w=111">
					
						Fresh Rum uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">18 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 19:17:56">Idag <span class="list_date">19:17</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76347023" class="media  item_row clearfix" data-lkf="0126">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/72/7204733831.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_uthyres_i_etage_lagenhet_76347023.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_uthyres_i_etage_lagenhet_76347023.htm?ca=14&w=111" title="Läs mer om Rum uthyres i etage lägenhet"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Huddinge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_uthyres_i_etage_lagenhet_76347023.htm?ca=14&w=111">
					
						Rum uthyres i etage lägenhet
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">6 000 kr/mån</span><span class="li_detail_params size">50 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 18:36:50">Idag <span class="list_date">18:36</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76787785" class="media  item_row clearfix" data-lkf="018039">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/97/9753008918.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_uthyres_76787785.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_uthyres_76787785.htm?ca=14&w=111" title="Läs mer om Rum uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Hägersten, Liljeholmen
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_uthyres_76787785.htm?ca=14&w=111">
					
						Rum uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">4 085 kr/mån</span><span class="li_detail_params size">12 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 18:34:47">Idag <span class="list_date">18:34</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76787471" class="media  item_row clearfix" data-lkf="018031,018038,018041,018042">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9730748889.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Nyproducerad___valutrustad_1_a_tillsvidare_76787471.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Nyproducerad___valutrustad_1_a_tillsvidare_76787471.htm?ca=14&w=111" title="Läs mer om Nyproducerad & välutrustad 1:a tillsvidare"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Kista, Hässelby, Vällingby, Spånga
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Nyproducerad___valutrustad_1_a_tillsvidare_76787471.htm?ca=14&w=111">
					
						Nyproducerad &amp; välutrustad 1:a tillsvidare
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">10 000 kr/mån</span><span class="li_detail_params size">32 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 18:17:46">Idag <span class="list_date">18:17</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76786252" class="media  item_row clearfix" data-lkf="018034,018036">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9709536491.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Great_corridor_room_near_Gullmarsplan_76786252.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Great_corridor_room_near_Gullmarsplan_76786252.htm?ca=14&w=111" title="Läs mer om Great corridor room near Gullmarsplan"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Enskede, Årsta, Skarpnäck
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Great_corridor_room_near_Gullmarsplan_76786252.htm?ca=14&w=111">
					
						Great corridor room near Gullmarsplan
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 17:10:57">Idag <span class="list_date">17:10</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_75913158" class="media  item_row clearfix" data-lkf="018034,018036">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/48/4882915976.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Apartment_for_rent_temporarily_75913158.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Apartment_for_rent_temporarily_75913158.htm?ca=14&w=111" title="Läs mer om Apartment for rent temporarily"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Enskede, Årsta, Skarpnäck
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Apartment_for_rent_temporarily_75913158.htm?ca=14&w=111">
					
						Apartment for rent temporarily
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">8 800 kr/mån</span><span class="li_detail_params size">60 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 17:10:17">Idag <span class="list_date">17:10</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76752781" class="media  item_row clearfix" data-lkf="018009,018010,018011">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/97/9782966347.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Moblerad_Ettan_i_Gardet_76752781.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Moblerad_Ettan_i_Gardet_76752781.htm?ca=14&w=111" title="Läs mer om Möblerad Ettan i Gärdet"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Östermalm, Djurgården
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Moblerad_Ettan_i_Gardet_76752781.htm?ca=14&w=111">
					
						Möblerad Ettan i Gärdet
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 500 kr/mån</span><span class="li_detail_params size">32 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 16:39:15">Idag <span class="list_date">16:39</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76784789" class="media  item_row clearfix" data-lkf="0183">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9738609217.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_med_egen_ingang_76784789.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_med_egen_ingang_76784789.htm?ca=14&w=111" title="Läs mer om Rum med egen ingång"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sundbyberg
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_med_egen_ingang_76784789.htm?ca=14&w=111">
					
						Rum med egen ingång
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">4 200 kr/mån</span><span class="li_detail_params size">16 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 16:10:56">Idag <span class="list_date">16:10</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76784633" class="media  item_row clearfix" data-lkf="018040">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/97/9747747102.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Renting_room_for_3_months_76784633.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Renting_room_for_3_months_76784633.htm?ca=14&w=111" title="Läs mer om Renting room for 3 months"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Skärholmen, Bredäng
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Renting_room_for_3_months_76784633.htm?ca=14&w=111">
					
						Renting room for 3 months
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 500 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 16:02:54">Idag <span class="list_date">16:02</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76784470" class="media  item_row clearfix" data-lkf="018001,018013,018014">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_portrait/97/9777782869.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Sodermalm___2_Rok___5_man___9_258kr_man_76784470.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Sodermalm___2_Rok___5_man___9_258kr_man_76784470.htm?ca=14&w=111" title="Läs mer om Södermalm - 2 Rok - 5 mån - 9.258kr/mån"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Maria, Gamla Stan, Högalid
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Sodermalm___2_Rok___5_man___9_258kr_man_76784470.htm?ca=14&w=111">
					
						Södermalm - 2 Rok - 5 mån - 9.258kr/mån
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">9 257 kr/mån</span><span class="li_detail_params size">60 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 15:55:37">Idag <span class="list_date">15:55</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76782913" class="media  item_row clearfix" data-lkf="0136">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9785289512.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Haninge___1_Rok___9_775kr_man___Tillsv_76782913.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Haninge___1_Rok___9_775kr_man___Tillsv_76782913.htm?ca=14&w=111" title="Läs mer om Haninge - 1 Rok - 9.775kr/mån - Tillsv"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Haninge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Haninge___1_Rok___9_775kr_man___Tillsv_76782913.htm?ca=14&w=111">
					
						Haninge - 1 Rok - 9.775kr/mån - Tillsv
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">9 775 kr/mån</span><span class="li_detail_params size">38 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 14:58:59">Idag <span class="list_date">14:58</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_75380332" class="media  item_row clearfix" data-lkf="018001,018013,018014">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/47/4796135214.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_i_centrala_o_sodra_sthlm_from_1_dec_2017_75380332.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_i_centrala_o_sodra_sthlm_from_1_dec_2017_75380332.htm?ca=14&w=111" title="Läs mer om Rum i centrala o södra sthlm from 1 dec 2017"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Maria, Gamla Stan, Högalid
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_i_centrala_o_sodra_sthlm_from_1_dec_2017_75380332.htm?ca=14&w=111">
					
						Rum i centrala o södra sthlm from 1 dec 2017
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">8 000 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:56:09">Idag <span class="list_date">13:56</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76426896" class="media  item_row clearfix" data-lkf="0126">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/76/7615216703.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_i_radhus_76426896.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_i_radhus_76426896.htm?ca=14&w=111" title="Läs mer om Lägenhet uthyres i radhus"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Huddinge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_i_radhus_76426896.htm?ca=14&w=111">
					
						Lägenhet uthyres i radhus
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">8 500 kr/mån</span><span class="li_detail_params size">52 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:24:31">Idag <span class="list_date">13:24</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780861" class="media  item_row clearfix" data-lkf="018031,018038,018041,018042">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/97/9753490530.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Fin_liten_etta_uthyres_till_veckopendlare_76780861.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Fin_liten_etta_uthyres_till_veckopendlare_76780861.htm?ca=14&w=111" title="Läs mer om Fin liten etta uthyres till veckopendlare"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Kista, Hässelby, Vällingby, Spånga
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Fin_liten_etta_uthyres_till_veckopendlare_76780861.htm?ca=14&w=111">
					
						Fin liten etta uthyres till veckopendlare
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 500 kr/mån</span><span class="li_detail_params size">26 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:21:56">Idag <span class="list_date">13:21</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780582" class="media  item_row clearfix" data-lkf="0183">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9767922228.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Del_i_2a_med_eget_rum_Nyproduktion_76780582.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Del_i_2a_med_eget_rum_Nyproduktion_76780582.htm?ca=14&w=111" title="Läs mer om Del i 2a med eget rum Nyproduktion"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sundbyberg
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Del_i_2a_med_eget_rum_Nyproduktion_76780582.htm?ca=14&w=111">
					
						Del i 2a med eget rum Nyproduktion
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">7 000 kr/mån</span><span class="li_detail_params size">50 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:07:33">Idag <span class="list_date">13:07</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780531" class="media  item_row item_row_no_image clearfix" data-lkf="0183">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Uthyrningsdel_med_badrum_och_egen_ingang_76780531.htm?ca=14&w=111" title="Läs mer om Uthyrningsdel med badrum och egen ingång"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sundbyberg
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Uthyrningsdel_med_badrum_och_egen_ingang_76780531.htm?ca=14&w=111">
					
						Uthyrningsdel med badrum och egen ingång
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:04:34">Idag <span class="list_date">13:04</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780508" class="media  item_row clearfix" data-lkf="0183">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/97/9703827205.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Etta_i_Sundbyberg_uthyres_januari_februari_76780508.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Etta_i_Sundbyberg_uthyres_januari_februari_76780508.htm?ca=14&w=111" title="Läs mer om Etta i Sundbyberg uthyres januari/februari"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sundbyberg
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Etta_i_Sundbyberg_uthyres_januari_februari_76780508.htm?ca=14&w=111">
					
						Etta i Sundbyberg uthyres januari/februari
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">10 000 kr/mån</span><span class="li_detail_params size">31 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 13:03:34">Idag <span class="list_date">13:03</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780319" class="media  item_row clearfix" data-lkf="0127">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9772186983.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Tumba___del_av_bostad___tillsvid___6000kr_man_76780319.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Tumba___del_av_bostad___tillsvid___6000kr_man_76780319.htm?ca=14&w=111" title="Läs mer om Tumba - del av bostad - tillsvid - 6000kr/mån"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Botkyrka
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Tumba___del_av_bostad___tillsvid___6000kr_man_76780319.htm?ca=14&w=111">
					
						Tumba - del av bostad - tillsvid - 6000kr/mån
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">6 000 kr/mån</span><span class="li_detail_params size">30 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 12:54:29">Idag <span class="list_date">12:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76780128" class="media  item_row clearfix" data-lkf="0183">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_portrait/97/9706998969.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_uthyres_i_Rissne_76780128.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_uthyres_i_Rissne_76780128.htm?ca=14&w=111" title="Läs mer om Rum uthyres i Rissne"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Sundbyberg
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_uthyres_i_Rissne_76780128.htm?ca=14&w=111">
					
						Rum uthyres i Rissne
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">4 800 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 12:43:22">Idag <span class="list_date">12:43</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_74171494" class="media  item_row item_row_no_image clearfix" data-lkf="0186">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Single_room_in_Stockholm_74171494.htm?ca=14&w=111" title="Läs mer om Single room in Stockholm"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Lidingö
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Single_room_in_Stockholm_74171494.htm?ca=14&w=111">
					
						Single room in Stockholm
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 500 kr/mån</span><span class="li_detail_params size">16 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 12:18:49">Idag <span class="list_date">12:18</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_75631400" class="media  item_row clearfix" data-lkf="0186">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/33/3385214484.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Moblerat_rum_i_frasch_3_a_uthyres_75631400.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Moblerat_rum_i_frasch_3_a_uthyres_75631400.htm?ca=14&w=111" title="Läs mer om Möblerat rum i fräsch 3:a uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Lidingö
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Moblerat_rum_i_frasch_3_a_uthyres_75631400.htm?ca=14&w=111">
					
						Möblerat rum i fräsch 3:a uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 500 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 11:48:15">Idag <span class="list_date">11:48</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76778272" class="media  item_row item_row_no_image clearfix" data-lkf="0139">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_Uthyres_76778272.htm?ca=14&w=111" title="Läs mer om Rum Uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Upplands-Bro
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_Uthyres_76778272.htm?ca=14&w=111">
					
						Rum Uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">4 000 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 11:08:44">Idag <span class="list_date">11:08</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76586682" class="media  item_row clearfix" data-lkf="018031,018038,018041,018042">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/85/8506120325.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Del_i_lagenhet_uthyres_76586682.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Del_i_lagenhet_uthyres_76586682.htm?ca=14&w=111" title="Läs mer om Del i lägenhet uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Kista, Hässelby, Vällingby, Spånga
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Del_i_lagenhet_uthyres_76586682.htm?ca=14&w=111">
					
						Del i lägenhet uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 200 kr/mån</span><span class="li_detail_params size">16 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 11:04:40">Idag <span class="list_date">11:04</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76778129" class="media  item_row clearfix" data-lkf="0182">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/97/9700776135.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Fin_2_a_uthyres_1_1_31_5_76778129.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Fin_2_a_uthyres_1_1_31_5_76778129.htm?ca=14&w=111" title="Läs mer om Fin 2:a uthyres 1/1-31/5"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Nacka
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Fin_2_a_uthyres_1_1_31_5_76778129.htm?ca=14&w=111">
					
						Fin 2:a uthyres 1/1-31/5
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">8 300 kr/mån</span><span class="li_detail_params size">37 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 11:03:31">Idag <span class="list_date">11:03</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76777910" class="media  item_row item_row_no_image clearfix" data-lkf="0126">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Hus_i_Glomsta__Huddinge_45_kvm_2_rum_o_kok_76777910.htm?ca=14&w=111" title="Läs mer om Hus i Glömsta/ Huddinge 45 kvm 2 rum o kök"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Huddinge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Hus_i_Glomsta__Huddinge_45_kvm_2_rum_o_kok_76777910.htm?ca=14&w=111">
					
						Hus i Glömsta/ Huddinge 45 kvm 2 rum o kök
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">7 500 kr/mån</span><span class="li_detail_params size">45 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:51:43">Idag <span class="list_date">10:51</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76777878" class="media  item_row clearfix" data-lkf="018009,018010,018011">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/97/9783648033.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_i_lagenhet_pa_Ostermalm_76777878.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_i_lagenhet_pa_Ostermalm_76777878.htm?ca=14&w=111" title="Läs mer om Rum i lägenhet på Östermalm"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Östermalm, Djurgården
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_i_lagenhet_pa_Ostermalm_76777878.htm?ca=14&w=111">
					
						Rum i lägenhet på Östermalm
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">7 000 kr/mån</span><span class="li_detail_params size">18 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:50:06">Idag <span class="list_date">10:50</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76777842" class="media  item_row clearfix" data-lkf="018021,018023,018025">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/97/9772139600.jpg);" class="media-object" href="https://www.blocket.se/stockholm/1_a_avlsjo___uthyres_1_a_dec__uthyres_6_man__76777842.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/1_a_avlsjo___uthyres_1_a_dec__uthyres_6_man__76777842.htm?ca=14&w=111" title="Läs mer om 1:a ävlsjö - uthyres 1:a dec, uthyres 6 mån+"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Älvsjö, Farsta, Vantör
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/1_a_avlsjo___uthyres_1_a_dec__uthyres_6_man__76777842.htm?ca=14&w=111">
					
						1:a ävlsjö - uthyres 1:a dec, uthyres 6 mån+
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">9 000 kr/mån</span><span class="li_detail_params size">30 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:48:07">Idag <span class="list_date">10:48</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76777625" class="media  item_row clearfix" data-lkf="018021,018023,018025">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/97/9794881180.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Atterfallshus_uthyres_i_minst_tva_ar_76777625.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Atterfallshus_uthyres_i_minst_tva_ar_76777625.htm?ca=14&w=111" title="Läs mer om Atterfallshus uthyres i minst två år"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Älvsjö, Farsta, Vantör
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Atterfallshus_uthyres_i_minst_tva_ar_76777625.htm?ca=14&w=111">
					
						Atterfallshus uthyres i minst två år
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">8 500 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:30:12">Idag <span class="list_date">10:30</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76777419" class="media  item_row item_row_no_image clearfix" data-lkf="0126">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Uthyrning_av_en_renoverad_och_moblerad_stuga_76777419.htm?ca=14&w=111" title="Läs mer om Uthyrning av en renoverad och möblerad stuga"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Huddinge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Uthyrning_av_en_renoverad_och_moblerad_stuga_76777419.htm?ca=14&w=111">
					
						Uthyrning av en renoverad och möblerad stuga
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">8 000 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:17:23">Idag <span class="list_date">10:17</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76491606" class="media  item_row clearfix" data-lkf="018031,018038,018041,018042">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/80/8005655258.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Nyprod__rinkebyterassen_Spanga_76491606.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Nyprod__rinkebyterassen_Spanga_76491606.htm?ca=14&w=111" title="Läs mer om Nyprod. rinkebyterassen Spånga"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Kista, Hässelby, Vällingby, Spånga
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Nyprod__rinkebyterassen_Spanga_76491606.htm?ca=14&w=111">
					
						Nyprod. rinkebyterassen Spånga
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">9 000 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 10:12:43">Idag <span class="list_date">10:12</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76767348" class="media  item_row clearfix" data-lkf="0127">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/96/9685334013.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_Uthyres_76767348.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_Uthyres_76767348.htm?ca=14&w=111" title="Läs mer om Rum Uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Botkyrka
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_Uthyres_76767348.htm?ca=14&w=111">
					
						Rum Uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">13 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 09:54:02">Idag <span class="list_date">09:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76314841" class="media  item_row clearfix" data-lkf="0114">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_portrait/80/8033186359.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_nara_Stockholm_och_Arlanda_uthyres_76314841.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_nara_Stockholm_och_Arlanda_uthyres_76314841.htm?ca=14&w=111" title="Läs mer om Rum nära Stockholm och Arlanda uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Upplands Väsby
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_nara_Stockholm_och_Arlanda_uthyres_76314841.htm?ca=14&w=111">
					
						Rum nära Stockholm och Arlanda uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">10 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 09:32:50">Idag <span class="list_date">09:32</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776672" class="media  item_row clearfix" data-lkf="0181">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_portrait/97/9779061590.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Jarna___1_rum___tillsv____7_475kr_man_76776672.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Jarna___1_rum___tillsv____7_475kr_man_76776672.htm?ca=14&w=111" title="Läs mer om Järna - 1 rum - tillsv. - 7.475kr/mån"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Södertälje
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Jarna___1_rum___tillsv____7_475kr_man_76776672.htm?ca=14&w=111">
					
						Järna - 1 rum - tillsv. - 7.475kr/mån
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">7 475 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 09:17:46">Idag <span class="list_date">09:17</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776607" class="media  item_row clearfix" data-lkf="0162">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_portrait/97/9753249325.jpg);" class="media-object" href="https://www.blocket.se/stockholm/7_minuter_fran_Morby_C_76776607.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/7_minuter_fran_Morby_C_76776607.htm?ca=14&w=111" title="Läs mer om 7 minuter från Mörby C"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Danderyd
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/7_minuter_fran_Morby_C_76776607.htm?ca=14&w=111">
					
						7 minuter från Mörby C
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">9 900 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 09:12:36">Idag <span class="list_date">09:12</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776466" class="media  item_row clearfix" data-lkf="018040">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/97/9785977389.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_3_1___31_5_76776466.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_3_1___31_5_76776466.htm?ca=14&w=111" title="Läs mer om Lägenhet uthyres 3/1 - 31/5"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Skärholmen, Bredäng
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_3_1___31_5_76776466.htm?ca=14&w=111">
					
						Lägenhet uthyres 3/1 - 31/5
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 800 kr/mån</span><span class="li_detail_params size">58 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 08:58:11">Idag <span class="list_date">08:58</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776432" class="media  item_row clearfix" data-lkf="018027,018029">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/94/9462050380.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Endast_som_inneboende_tjej_dam_OBS_katt_76776432.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Endast_som_inneboende_tjej_dam_OBS_katt_76776432.htm?ca=14&w=111" title="Läs mer om Endast som inneboende tjej/dam OBS katt"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Bromma
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Endast_som_inneboende_tjej_dam_OBS_katt_76776432.htm?ca=14&w=111">
					
						Endast som inneboende tjej/dam OBS katt
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 08:54:44">Idag <span class="list_date">08:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776333" class="media  item_row item_row_no_image clearfix" data-lkf="018034,018036">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/ETT_RUM_I_EN_3a_UTHYRES_DEC_APRIL_76776333.htm?ca=14&w=111" title="Läs mer om ETT RUM I EN 3a UTHYRES DEC-APRIL"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Enskede, Årsta, Skarpnäck
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/ETT_RUM_I_EN_3a_UTHYRES_DEC_APRIL_76776333.htm?ca=14&w=111">
					
						ETT RUM I EN 3a UTHYRES DEC-APRIL
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">3 200 kr/mån</span><span class="li_detail_params size">10 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 08:46:28">Idag <span class="list_date">08:46</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76776015" class="media  item_row item_row_no_image clearfix" data-lkf="0114">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_uthyres_till_Veckopendlare_76776015.htm?ca=14&w=111" title="Läs mer om Rum uthyres till Veckopendlare"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Upplands Väsby
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_uthyres_till_Veckopendlare_76776015.htm?ca=14&w=111">
					
						Rum uthyres till Veckopendlare
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 000 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-27 07:54:13">Idag <span class="list_date">07:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_75209361" class="media  item_row clearfix" data-lkf="018004,018005,018006,018007">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/96/9624209638.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Cozy___quiet_Room_in_shared_Apartment_in_city_75209361.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Cozy___quiet_Room_in_shared_Apartment_in_city_75209361.htm?ca=14&w=111" title="Läs mer om Cozy & quiet Room in shared Apartment in city"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Vasastan, Norrmalm
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Cozy___quiet_Room_in_shared_Apartment_in_city_75209361.htm?ca=14&w=111">
					
						Cozy &amp; quiet Room in shared Apartment in city
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 400 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 23:36:27">Igår <span class="list_date">23:36</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76775310" class="media  item_row clearfix" data-lkf="0160">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/96/9689271870.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Ljus_nyrenoverad_o_moblerad_lagenhet__ca_25m2_76775310.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Ljus_nyrenoverad_o_moblerad_lagenhet__ca_25m2_76775310.htm?ca=14&w=111" title="Läs mer om Ljus nyrenoverad o möblerad lägenhet, ca 25m2"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Täby
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Ljus_nyrenoverad_o_moblerad_lagenhet__ca_25m2_76775310.htm?ca=14&w=111">
					
						Ljus nyrenoverad o möblerad lägenhet, ca 25m2
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1,5 rum</span><span class="li_detail_params monthly_rent">9 000 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 23:16:39">Igår <span class="list_date">23:16</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76775286" class="media  item_row item_row_no_image clearfix" data-lkf="0184">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_i_gamla_rasunda_76775286.htm?ca=14&w=111" title="Läs mer om Lägenhet uthyres i gamla råsunda"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Solna
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Lagenhet_uthyres_i_gamla_rasunda_76775286.htm?ca=14&w=111">
					
						Lägenhet uthyres i gamla råsunda
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">9 500 kr/mån</span><span class="li_detail_params size">28 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 23:15:33">Igår <span class="list_date">23:15</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76775100" class="media  item_row clearfix" data-lkf="0162">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/96/9650561196.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Room_for_rent__aupair_like_help_needed_76775100.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Room_for_rent__aupair_like_help_needed_76775100.htm?ca=14&w=111" title="Läs mer om Room for rent, aupair-like help needed"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Danderyd
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Room_for_rent__aupair_like_help_needed_76775100.htm?ca=14&w=111">
					
						Room for rent, aupair-like help needed
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">700 kr/mån</span><span class="li_detail_params size">15 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 22:54:54">Igår <span class="list_date">22:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76775097" class="media  item_row clearfix" data-lkf="0182">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/96/9619523158.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Rum_i_trevlig_3a_76775097.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Rum_i_trevlig_3a_76775097.htm?ca=14&w=111" title="Läs mer om Rum i trevlig 3a"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Nacka
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Rum_i_trevlig_3a_76775097.htm?ca=14&w=111">
					
						Rum i trevlig 3a
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">5 000 kr/mån</span><span class="li_detail_params size">59 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 22:54:43">Igår <span class="list_date">22:54</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76774048" class="media  item_row clearfix" data-lkf="018034,018036">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_portrait/96/9663916392.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Uthyrningsdel_med_egen_ingang_uthyres_76774048.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Uthyrningsdel_med_egen_ingang_uthyres_76774048.htm?ca=14&w=111" title="Läs mer om Uthyrningsdel med egen ingång uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Enskede, Årsta, Skarpnäck
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Uthyrningsdel_med_egen_ingang_uthyres_76774048.htm?ca=14&w=111">
					
						Uthyrningsdel med egen ingång uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">6 500 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 22:06:39">Igår <span class="list_date">22:06</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76773826" class="media  item_row clearfix" data-lkf="018001,018013,018014">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/0/images_235x162_landscape/96/9693062307.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Etta_pa_Sodermalm_uthyres_fram_till_hosten_76773826.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Etta_pa_Sodermalm_uthyres_fram_till_hosten_76773826.htm?ca=14&w=111" title="Läs mer om Etta på Södermalm uthyres fram till hösten"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Stockholms stad - Maria, Gamla Stan, Högalid
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Etta_pa_Sodermalm_uthyres_fram_till_hosten_76773826.htm?ca=14&w=111">
					
						Etta på Södermalm uthyres fram till hösten
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">7 000 kr/mån</span><span class="li_detail_params size">30 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 21:53:12">Igår <span class="list_date">21:53</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76773824" class="media  item_row clearfix" data-lkf="0184">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/96/9678615162.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Big_room_apartment_for_2_person_76773824.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Big_room_apartment_for_2_person_76773824.htm?ca=14&w=111" title="Läs mer om Big room/apartment for 2 person"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Solna
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Big_room_apartment_for_2_person_76773824.htm?ca=14&w=111">
					
						Big room/apartment for 2 person
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">3 500 kr/mån</span><span class="li_detail_params size">40 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 21:53:05">Igår <span class="list_date">21:53</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76773479" class="media  item_row clearfix" data-lkf="0126">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/96/9639243520.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Nyrenoverat_attefallshus_uthyres_76773479.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Nyrenoverat_attefallshus_uthyres_76773479.htm?ca=14&w=111" title="Läs mer om Nyrenoverat attefallshus uthyres"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Huddinge
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Nyrenoverat_attefallshus_uthyres_76773479.htm?ca=14&w=111">
					
						Nyrenoverat attefallshus uthyres
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">7 000 kr/mån</span><span class="li_detail_params size">25 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 21:34:50">Igår <span class="list_date">21:34</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_75527949" class="media  item_row clearfix" data-lkf="0188">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/1/images_235x162_landscape/27/2766632712.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Lagenhet_i_kallare_75527949.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Lagenhet_i_kallare_75527949.htm?ca=14&w=111" title="Läs mer om Lägenhet i källare"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Norrtälje
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Lagenhet_i_kallare_75527949.htm?ca=14&w=111">
					
						Lägenhet i källare
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">2 rum</span><span class="li_detail_params monthly_rent">5 200 kr/mån</span><span class="li_detail_params size">45 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 21:29:57">Igår <span class="list_date">21:29</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76772505" class="media  item_row item_row_no_image clearfix" data-lkf="0160">
	

	

	
	
		<div class="no-image media-object pull-left"></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Nyrenoverat_rum_i_villa_uthyres_garna_langtid_76772505.htm?ca=14&w=111" title="Läs mer om Nyrenoverat rum i villa uthyres gärna långtid"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Täby
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Nyrenoverat_rum_i_villa_uthyres_garna_langtid_76772505.htm?ca=14&w=111">
					
						Nyrenoverat rum i villa uthyres gärna långtid
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">3 500 kr/mån</span><span class="li_detail_params size">12 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 20:45:34">Igår <span class="list_date">20:45</span></time>
		</div>
	
</div>


	














<div itemscope itemtype="http://schema.org/Offer" id="item_76576698" class="media  item_row clearfix" data-lkf="0127">
	
		
	

	

	
	
		<div class="media-object pull-left nohistory"><div class="sprite_list_placeholder"><ul class="object-attribute-badges"></ul><a onclick="return xt_click(this, 'C', '28', 'Listning::Objektbild', 'N');" style="background-image: url(https://cdn.blocket.com/static/2/images_235x162_landscape/85/8532456558.jpg);" class="media-object" href="https://www.blocket.se/stockholm/Ett_rum_i_frasch_o_ljus_villa_med_fin_utsikt_76576698.htm?ca=14&w=111" rel="nofollow"></a></div></div>

	
	<div class="media-body item_cat_3020" itemprop="itemOffered" itemscope="itemscope" itemtype="http://schema.org/Residence">
			<a class="vi-link-overlay xiti_ad_frame" href="https://www.blocket.se/stockholm/Ett_rum_i_frasch_o_ljus_villa_med_fin_utsikt_76576698.htm?ca=14&w=111" title="Läs mer om Ett rum i fräsch o ljus villa med fin utsikt"></a>
			<div class="cat_geo clean_links item-location">
				
				
					
					
					
					
					
					
	
	
	
		<span class="subject-param category">
			lägenhet
		</span>
		
			
			
				
				<span class="subject-param address separator">
				Botkyrka
				
				</span>
			
		
	


				
			</div>
			<h4 class="media-heading">
				<a tabindex="50" class="item_link xiti_ad_heading" href="https://www.blocket.se/stockholm/Ett_rum_i_frasch_o_ljus_villa_med_fin_utsikt_76576698.htm?ca=14&w=111">
					
						Ett rum i fräsch o ljus villa med fin utsikt
					
					 
					
				</a>
			</h4>
			<div class="details"><span class="li_detail_params first rooms">1 rum</span><span class="li_detail_params monthly_rent">4 500 kr/mån</span><span class="li_detail_params size">20 m²</span></div><div class="other"><div class="broker_list_logo"></div><div class="item-other-actions"></div></div><time class="jlist_date_image" datetime="2017-11-26 20:19:04">Igår <span class="list_date">20:19</span></time>
		</div>
	
</div>

</div><script>var script=document.createElement('script');script.async=true;script.src='//eu.npario-inc.net/DMP/tag.js?ck=C610&ap=0';script.onload=function(){if(typeof nParioObj!=='undefined'){var category_tree=[];var category_root='';var search_query='';var seller=[];var geohem='';var geoannons='';var geofilter=[];var geoland=[];var params=[];var continuous_params=[];var sq=jQuery.cookie_raw('sq');if(sq){sq=sq.replace(/\+/g,'');var qo=blocket.apps.common.queryStringToObject(sq);if('q' in qo&&qo.q.length>0){search_query=encodeURIComponent(qo.q[0]);}}seller.push(encodeURIComponent('blocket:Annonsör:Mäklare'));var adtype=encodeURIComponent('blocket:Annonstyp:Uthyres');category_tree.push(encodeURIComponent('blocket:Bostad:Lägenheter'));category_root=category_tree[0].split(':').splice(0,3).join(':');geohem=encodeURIComponent('blocket:Geohem:Stockholm');var np_C610=nParioObj.newClient('C610');np_C610.setPayload('ck=C610&src=tag');np_C610.setPixSvc('eu.npario-inc.net/DMP/');np_C610.addKVMulti('Category',category_tree);np_C610.addKVMulti('Category',[adtype,geohem]);if(seller.length>0){np_C610.addKVMulti('Category',seller);}if(geofilter.length>0){np_C610.addKVMulti('Category',geofilter);}if(geoland.length>0){np_C610.addKVMulti('Category',geoland);}if(geoannons.length>0){np_C610.addKV('Category',geoannons);}if(search_query.length>0){np_C610.addKV('Search',search_query);}if(params.length>0){var l=params.length;for(var i=0;i<l;i++){np_C610.addKV('Category',params[i]);}}if(continuous_params.length>0){continuous_params.unshift(category_root);var continuous_param_string=continuous_params.map(encodeURIComponent).join('\x7C');np_C610.addKV('Category',continuous_param_string);}if(obj.has(blocket.params,'price')){np_C610.addKV('Category',category_tree+'\x7CPris:'+blocket.params.price);}np_C610.pixel();}};document.body.appendChild(script);</script>

					
						<div class="row">
							<div class="col-xs-12">
								
							</div>
						</div>
					
					
	<div class="text-center pagination-container">
		
		<ul id="pagination" class="pagination nohistory">
		
		

		
		

		
		
			
			
			

			
			

				
				
			
			
				<li class="active">
					<a href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&f=b&ca=14&w=111" class="disabled">1</a>
				</li>
			<li>
					<a  href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=2&f=b&ca=14&w=111">2</a>
				</li>
			<li>
					<a  href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=3&f=b&ca=14&w=111">3</a>
				</li>
			<li>
					<a  href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=4&f=b&ca=14&w=111">4</a>
				</li>
			<li>
					<a  href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=5&f=b&ca=14&w=111">5</a>
				</li>
			<li>
					<a  href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=6&f=b&ca=14&w=111">6</a>
				</li>
			
		

		
		
			<li class="next">
				<a href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=2&f=b&ca=14&w=111"><span class="caret"></span><span class="sr-only">Nästa sida</span></a>
			</li>
		

		
		
			<li class="last">
				<a href="https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&save_search=1&l=0&md=th&o=15&last=1&f=b&ca=14&w=111">Sista sidan</a>
			</li>
		
		</ul>
	</div>


				</div>
			
		
		
			
	<div class="right-bar-campaigns col-xs-3">
              <article data-js-placement="blocketd_bostad_li_post_it_1" id="blocketd_bostad_li_post_it_1" style="" class="fif"></article> <script> data = { id: "blocketd_bostad_li_post_it_1", loadtype: "rsi_segs", lazyload: "0", params: "alias=blocketd_bostad_li_post_it_1;loc=100;target=_blank;kvadtype=u;kvcounty=%C3%B6sterg%C3%B6tland;kvsection=3020", width: 221, height: 0, hash_override_enabled: 1, source: 0, bootstrap: 0 }; blocket.apps.common.placements.push(data); </script> 
              <article data-js-placement="blocketd_bostad_li_post_it_2" id="blocketd_bostad_li_post_it_2" style="" class="fif"></article> <script> data = { id: "blocketd_bostad_li_post_it_2", loadtype: "rsi_segs", lazyload: "0", params: "alias=blocketd_bostad_li_post_it_2;loc=100;target=_blank;kvadtype=u;kvcounty=%C3%B6sterg%C3%B6tland;kvsection=3020", width: 221, height: 0, hash_override_enabled: 1, source: 0, bootstrap: 0 }; blocket.apps.common.placements.push(data); </script> 
              <article data-js-placement="blocketd_bostad_li_post_it_3" id="blocketd_bostad_li_post_it_3" style="" class="fif"></article> <script> data = { id: "blocketd_bostad_li_post_it_3", loadtype: "rsi_segs", lazyload: "0", params: "alias=blocketd_bostad_li_post_it_3;loc=100;target=_blank;kvadtype=u;kvcounty=%C3%B6sterg%C3%B6tland;kvsection=3020", width: 221, height: 0, hash_override_enabled: 1, source: 0, bootstrap: 0 }; blocket.apps.common.placements.push(data); </script> 

			

			 

			

			 
			 
		</div>
	


		

	</div>

	<div class="row">
		
            <div id="bottom_panorama_container">
                
<div class="row"><article id="bottom_panorama" data-js-placement="bottom_panorama" class="col-xs-12"></article></div>
<script>
	data = {
		id:"bottom_panorama",
		loadtype: "normal_iframe",
		lazyload: "1",
		params: "https://www.blocket.se/bostad_bottom_banner.html?parent_appl=li_footer&ca=14&cg=3000&w=111&st=u#bottom_panorama_iframe",
		hash_override_enabled: 1,
		width: 980,
		height:0
	}
	blocket.apps.common.placements.push(data);
</script>


            </div>
		
	</div>
	<div class="row bostad-bottom-ad">
		<div class="col-xs-12">
		</div>
	</div>
</div>



  </div>  <footer id="blocket_footer" class="row" data-print="no">

	
		<div class="pam mtxl">
			
			<div id="footer-info-container" class="row mtm">
				<div class="footer-container">
					<div class="col-xs-12">
						<div id="blocket-footer-intro" class="blocket-footer row">
							<div class="col-xs-3">
								<h1 class="sprite_common_bostad_logo pull-left" alt="Välkommen till nya Blocket Bostad"></h1>
							</div>
							<div class="col-xs-7">
								<h3 class="h4">Om Blocket Bostad</h3>
								<p>På Blocket Bostad hittar du ett stort och brett urval av bostäder under ett och samma tak: mäklarobjekt, uthyresbostäder, bostäder som säljs privat, utlands- och fritidsboende. Bredden gör oss unika. Men vi nöjer oss inte med att vara störst - vi vill vara bäst också. Därför är Blocket Bostad helt omgjord. Vi har lyssnat på våra användare när vi har byggt nya Blocket Bostad som nu är smartare, modernare och effektivare.</p>
								<p>Vår ambition är att det ska bli enklare och roligare att leta bostäder och arbetet har bara börjat. Följ med oss på resan!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	

	<div class="col-xs-12 background-primary">
		<div class="row">
			<div class="col-xs-12">
				<hr>
			</div>
		</div>
		<div class="row pbxl">
			<nav class="col-xs-3">
				
				<h6>Kundservice</h6>
				<ul class="footer-list">
				
					<li class="pbs"><a href="https://blocket.zendesk.com" >Kontakta oss</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/apps/support?id=11" >Butikssupport</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/kundsakerhet.htm" >Kundsäkerhet</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/marketing/marketing_salehints.html" >Säljtips</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/personuppgiftspolicy.htm" >Personuppgiftshantering</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/cookiepolicy.htm" >Cookiepolicy</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/regler.htm" >Användarvillkor</a></li>
				
				</ul>
			</nav>
			<nav class="col-xs-3">
				
				<h6>Hjälp vid affärer</h6>
				<ul class="footer-list">
				
					<li class="pbs">
						
						<a href="https://www.blocket.se/blocketpaketet/blocketpaketet.htm" >Blocketpaketet</a></li>
				
					<li class="pbs">
						
						<a href="https://www.blocket.se/security/mallar.htm" >Köpekontrakt</a></li>
				
					<li class="pbs">
						
						<a href="https://www.blocket.se/insurances/bbf.htm" >Begagnatförsäkring</a></li>
				
					<li class="pbs">
						
							<img src="https://www.blocket.se/img/transparent.gif" class="sprite_common_blocketpaketet_logo" alt="Betala Blocketpaketet" title="">

						
						<a href="https://www.blocket.se/blocketpaketet/betalning.htm" >Betala Blocketpaketet</a></li>
				
				</ul>
			</nav>
			<nav class="col-xs-3">
				
				<h6>Information</h6>
				<ul class="footer-list">
				
					<li class="pbs"><a href="/inspiration" >Inspiration</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/omblocket.htm" >Om Blocket</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/hallbarhetsarbete" >Vårt hållbarhetsarbete</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/apps/support?id=10" >Press</a></li>
				
					<li class="pbs"><a href="http://www.blocketpanelen.se/?referer=blocket.se&utm_source=blocket.se&utm_medium=hemsida&utm_campaign=blocket.se" >Blocketpanelen</a></li>
				
					<li class="pbs"><a href="http://www.blocket.career/" >Jobba på Blocket</a></li>
				
					<li class="pbs"><a href="http://www.facebook.com/blocket" >Blocket på Facebook</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/spid.htm" >Logga in med SPiD</a></li>
				
				</ul>
			</nav>
			<nav class="col-xs-3">
				
				<h6>Marknadsföring</h6>
				<ul class="footer-list">
				
					<li class="pbs"><a href="https://www.blocketsannonswebb.se/" >Annonswebben</a></li>
				
					<li class="pbs"><a href="https://www.blocketsannonswebb.se/butik_pa_blocket.html" >Öppna butik på Blocket</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/ostergotland?ca=14&amp;fk=1" >Visa alla butiker på Blocket</a></li>
				
					<li class="pbs"><a href="https://www.blocket.se/store/login"  onclick="xt_med('C', '', 'Logga_in_i_butiken_footer', 'N');">Inloggning för butiker</a></li>
				
				</ul>
			</nav>
		</div>
		
	</div>
</footer>
   </section>     <script> blocket('@params.base_url').extend({ ai: 'https://www.blocket.se' }); </script>   <script src="https://www.blocket.se/js/82d1480ed23d3a4a23c7a092c39725a1/list.js"></script>          <script>blocket('@params').extend({application:'list',regress:0,protocol:'https'});blocket("@params.calendar").extend({ calendar_year: 2017 });
                    blocket("@params.calendar").extend({ calendar_month: 11 });
                    blocket("@params.calendar").extend({ min_year: 2017 });
                    blocket("@params.calendar").extend({ min_month: 11 });
                blocket("@params.calendar").extend({ calendar_year: 2017 });
                    blocket("@params.calendar").extend({ calendar_month: 11 });
                    blocket("@params.calendar").extend({ min_year: 2017 });
                    blocket("@params.calendar").extend({ min_month: 11 });
                blocket("@params").extend({previous_ads:{limit:9,local_storage_name:"last_viewed_ads",enabled:"1"}});</script><script src="/templates/common/arrays_v2.js?lang=sv&amp;108881"></script>  <script defer async src="https://www.blocket.se/js/d7d268280a56f61917010d8d00e835eb/campaigns.js"></script>  <script id="xiti_tag">xtnv=document;xtsd="https://logs2";xtsite="379341";xtn2="28";xtpage="Search::Uthyres_via_maklare::Lagenheter";xtdi="";xt_an="2335273";xt_ac="1";





xt_multc = "&x9=2";


if(typeof xt_multc=="undefined"){xt_multc='&x11=1';}else{xt_multc+='&x11=1';}xt_multc+='&x14=0';if(typeof has_adblock==="function"){if(has_adblock()){xt_multc+='&x18=1';}else{xt_multc+='&x18=0';}}var badges="";xt_multc+="&x21=";xt_multc+=badges;if(window.xtparam!=null){window.xtparam+="&ac="+xt_ac+"&an="+xt_an+xt_multc;}else{window.xtparam="&ac="+xt_ac+"&an="+xt_an+xt_multc;}</script><script src="/js/e9856aacbbdcf29e55c0edcb108356fb/xtcore.js"></script><noscript><img width="1" height="1" alt="" src="https://logs2.xiti.com/hit.xiti?s=379341&s2=28&p=Search::Uthyres_via_maklare::Lagenheter&di=&x9=2"></noscript> 
			<script type="text/javascript">
				var _gaq = _gaq || [];
				_gaq.push(['_setAccount', 'UA-38241366-1']);
				_gaq.push(['_setCustomVar',	3, 'CA', '14', 2]);
				(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = 'https://www.blocket.se/js/756e943e0a5f7edb0b6315afa31cbbda/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					var value = jQuery.cookie("puff_click");
					if (value){
						var parts = value.split(",");
						_gaq.push(['_setCustomVar', 1, 'Puff version', parts[0], 2 ]); 
						_gaq.push(['_setCustomVar', 2, 'Puff category',parts[1], 2 ]); 
						_gaq.push(['_trackEvent', 'Puff', parts[0], parts[1]]);
						document.cookie = 'puff_click=;-1; path=/';
					}
					_gaq.push(['_trackPageview']);
				})();
			</script>
		
	

  
<!-- Sifo -->
<script type='text/javascript'>
    var _cInfo = _cInfo || [];
    (function () {
        if (document.cookie.match("__codnt") === null) {
            window._cInfo.push(
                { cmd: "_trackContentPath", val: "Bostad" },
                { cmd: "_executeTracking" }
            );
            var ca = document.createElement('script');
            ca.type = 'text/javascript';
            ca.async = true;
            ca.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'analytics.codigo.se/j/65a84280b55a4764ae3b956b467b5ca7.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ca, s);
        }
    })();
</script>
    
   <script src="/js/49476736396b8208d93ac1a4cd31c7cd/advertisement.js" type="text/javascript"></script>
<script type="text/javascript">
	var has_adblock = function(){
		var el = document.getElementById("adblock_detect");
		if (typeof el === "undefined" || el === null || el === "") {
            
			return true;
		}
		return false;
	}
</script>
 

<script>

var itemType = '';
switch('u'){
    case 's': itemType = 'sell'; break;
    case 'k': itemType = 'buy'; break;
    case 'u': itemType = 'let'; break;
    case 'b': itemType = 'swap'; break;
    case 'h': itemType = 'rent'; break;
}
var fuel = '';
switch(parseInt('', 10)){
    case 1: fuel = 'petrol'; break;
    case 2: fuel = 'diesel'; break;
    case 3: fuel = 'hybrid'; break;
}
var addons = {
  autobump: parseInt('', 10),
  gallery: parseInt('', 10),
  freespee: parseInt('', 10),
};

var ad_insertion_addons = Object.keys(addons).filter(function (k) { return addons[k] }).join(',');


if (typeof has_adblock === "function") {
    if (has_adblock()) {
        var adBlocked = '1';
    } else {
        adBlocked = '0';
    }
}



var utag_data = {

    // User
    
    user_id: '6469784',
    user_role: 'private',
    user_name: 'jesper.corell',
    user_email: 'jesper.corell@gmail.com',
    user_phone: '',
    
    user_chosen_region_level_1_id: '14',
    user_chosen_region_level_2_id: '14',

    // Application
    environment: 'prod',
    device: 'Desktop',

    //Search
    
    search_results: '745',
    search_results_page: '15',
    search_query: 'ca%3D14%26st%3Du%26cg%3D3000%26cg_multi%3D3020%26sort%3D%26ss%3D0%26se%3D5%26ros%3D%26roe%3D3%26bs%3D%26be%3D%26mre%3D10000%26q%3D%26q%3D%26q%3D%26is%3D1%26save_search%3D1%26l%3D0%26md%3Dth%26f%3Db%26ca%3D14%26w%3D111',
    search_results_number: '745',
    search_results_position: '0',

    // Region
    region_level1: 'Östergötland',
    region_level1_id: '14',
    
    
    
    

    // Category
    
            
            
                category_level1: 'Bostad',
            
            category_level1_id: '3000',
        

        
        
            
            
            
            
            
             
                category_level2: 'Lägenheter',
            
            
        
    

    

    filters: {},
    banners: [],
    listItems: [],

    // Filter General

    filter_nearby_regions: '0',
    filter_whole_country: '0',

    
    
    
    
    
    


    // Filter Car
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // Filters Motorcycle
    
    
    // Filters Real Estate
    filter_real_estate_surface_min: '10 m²',
    filter_real_estate_surface_max: '60 m²',
    
    filter_real_estate_rooms_max: '2',
    
    
    filter_real_estate_max_mounthly_rent: '10 000',
    
    
    
    filter_category_group_multi: 'Lägenheter,',
    filter_category_group_multi_id: '3020,',

    
    

    
    
    

    

    view_type_id: 'page',
    page_type: 'list',
    page_category: 'list',
    page_name: '',
    application: 'list',
    sub_application: '',
    language: 'sv',
    action_type: 'N',
    ad_insertion_ad_type: '',
    ad_insertion_type: '',
    ad_insertion_step: '',
    ad_insertion_addons: ad_insertion_addons,
    language_id: 'sv',
    user_signed_in: true,
    company_ad: 'false',


    
    // other 
    adblock_detected: adBlocked,
    
    error: {},
}


    
    


</script>

<!-- Tealium Tag -->


<script>
    (function(a,b,c,d){
     a='//tags.tiqcdn.com/utag/schibsted/blocket/prod/utag.js';
     b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
     a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
     })();
</script>

<script>

function live(eventType, elementQuerySelector, cb) {
    document.addEventListener(eventType, function (event) {
        var qs = document.querySelectorAll(elementQuerySelector);
        if (qs) {
            var el = event.target, index = -1;
            while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                el = el.parentElement;
            }
            if (index > -1) {
                 cb.call(el, event);
            }
        }
    });
}

window.addEventListener('load', function (e) {
    live('click', '[data-trackable]', function (event) {  
        var event_name = this.getAttribute("data-trackable");
        trackEvent(event_name);
    });
});




function trackEvent(stringId, type, customParam, callback, useMeta) {

    type = type || "link";
    useMeta = useMeta || false;

    if (typeof stringId === "undefined" || stringId === "") {
        return;
    }
    if (typeof utag_data !== "object") {
        return;
    }
    if (typeof utag !== "object") {
        return;
    }

    var utag_data_clone = $.extend({}, utag_data);

    if (typeof customParam !== "undefined") {
        if (useMeta) utag_data_clone.meta = {};

        for (var key in customParam) {
          if (!customParam.hasOwnProperty(key)) continue;

          if (useMeta) {
            utag_data_clone.meta[key] = customParam[key];
          } else {
            utag_data_clone[key] = customParam[key];
          }
        }
    }

    utag_data_clone.event_name = stringId;

    if (type === "view") {
        utag.view(utag_data_clone, function() {
            if (typeof callback === 'function') callback();
        });
    } else {
        utag.link(utag_data_clone, function() {
            if (typeof callback === 'function') callback();
        });
    }
}



</script>

    <noscript>   <img src="/img/.1511806934.3109/none.gif" alt=""> </noscript>  <script type="text/javascript">
// Message Center feature
// This function polls the backend for the unread counter and updates the DOM
// There may be several DOM elements displaying the counter
var mcUserId = 2011326;
var elements = document.querySelectorAll('[data-unread-messages]');
if(elements.length > 0 && mcUserId) {

    // Track subsequent unsuccessful requests
    var repeatedFails = 0;

    function parse(s) {
        try {
            return JSON.parse(s);
        } catch (ex) {
            //console.warn('failed to parse json:', s);
            return {};
        }
    }

    // Request the unread counter
    var fetchUnreadCounter = function() {
        var success = true;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if(xhr.status == 200 || xhr.status == 304) {
                    var response = parse(xhr.responseText);
                    var counter = response.unread;
                    if (!counter) counter = null;

                    if (typeof counter == 'string' || typeof counter == 'number') {
                        if(counter == 0) counter = ''; // Display nothing when there are no unread messages
                        for(var i = 0; i < elements.length; i++) {
                            var oldCounter = elements[i].innerHTML;
                            if (counter !== oldCounter) elements[i].innerHTML = counter;
                        };
                        repeatedFails = 0;
                    } else {
                        repeatedFails++;
                    }
                } else {
                    repeatedFails++;
                }
            }
        }
        var baseUrl = 'https://www.blocket.se';
        var url = baseUrl + '/messaging/api/users/' + mcUserId + '/counter';
        xhr.withCredentials = true;
        xhr.open('GET', url, true);
        xhr.send();
    }

    // Initial request
    fetchUnreadCounter();

    // Request every minute and stop on three unsuccessful attempts in a row
    var interval = setInterval(function(){
        if(repeatedFails > 2) {
            clearInterval(interval);
        } else {
            fetchUnreadCounter();
        }
    }, 60000);
}
</script>
          <script> var allowed = {  power_format: [  "http://www.blocket.nu" ,  "https://www.blocket.nu" ,  "http://www.blocket.com" ,  "https://www.blocket.com" ,  "http://www.blocket.se" ,  "https://www.blocket.se"   ] ,  resize_iframe: [  "https://www.blocket.com" ,  "http://www.blocket.com" ,  "https://jobb.blocket.se" ,  "http://jobb.blocket.se" ,  "https://www.blocket.se" ,  "http://www.blocket.se"   ] ,  show_hide_iframe: [  "https://www.blocket.nu" ,  "http://www.blocket.nu" ,  "https://jobb.blocket.se" ,  "http://jobb.blocket.se" ,  "https://www.blocket.se" ,  "http://www.blocket.se" ,  "https://www.blocket.com" ,  "http://www.blocket.com"   ]   }; function handleMessage(ev) { if (!ev || !ev.data || !ev.origin) return; var data = obj.parse(ev.data); if ( data && data.func && data.target && Array.isArray(allowed[data.func]) && allowed[data.func].indexOf(ev.origin) !== -1 ) { var target = document.querySelector(data.target); if (target && target.contentWindow === ev.source) { blocket.apps.common.postmessage[data.func](data, ev); } } } window.addEventListener('message', handleMessage); </script> <script> dom.event.once('dom', function() { blocket.init.base(); }); </script></body></html>
<!-- jbw19 379207 -->

}`;};

//console.log(parser.parse(getHtml()));