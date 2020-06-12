<!-- Window Functions Start Here--->
var winHandle = null;
function select_onchange()
{
}
function showDialog(url)
{
  var winprops = 'height=108,width=300'; //,resizable,scrollbars=yes,menubar=yes
  win = window.open(url, 'ExportWindow', winprops);
  if (parseInt(navigator.appVersion) >= 4) win.window.focus();
}
function openNew(url)
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=500,height=400');
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}
function openWizard(url)
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=615,height=475');
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
	top.NewWin=window.open(theURL,winName,features);
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}
function openSearch(url) 
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=420,height=230,top=80,left='+(screen.width/4));
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}

function openAdvanced(theURL,winName,features) { //v2.0
  features = 'resizable=yes,scrollbars=yes,status=no,toolbar=no,width=650,height=680,top=80,left=150';
	winName = 'advSearch';
	top.NewWin=window.open(theURL,winName,features);
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}
function openKeyword(url) 
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=570,height=195,top=80,left='+(screen.width/4));
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}

function openGraph(url)
{
   //alert(screen.width + ' ' + screen.height);
	var winl, wint, w, h;
	if (screen.width == 640)
	{
		w = 600;
		h = 346;
		winl = (screen.width - w) / 2;
		wint = 1;
	}
	else if (screen.width == 800)
	{
      w = 700;
	  h = 442;
	  winl = 55;
	  wint = 24;
	}
	else if (screen.width == 1024)
	{
		w = 819;
		h = 600;
		winl = 51;
		wint = 31;
	}
	else if (screen.width == 1152)
	{
	    w = 922;
	    h = 690;
		winl = 58;
		wint = 27;
	}
	else if (screen.width == 1280)
	{
		
		w = 1024;
		h = 845;
		winl = 32;
		wint = 33;
	}
	else
	{
	  w = 1150;
	  h = 1000;
	  winl = 80;
	  wint = 33;
	}
   winHandle=window.open(url,'GraphPopup','toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width='+w+',height='+h+',top='+wint+',left='+winl);
   if (winHandle.opener == null) winHandle.opener = self;
   if (parseInt(navigator.appVersion) >= 4) winHandle.focus();
}

function openGraphErrorMessage(url) 
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=580,height=140');
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}

function openExport(url) {
	if(top.browser=="explorer") {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=680,height=400');
	} else {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=680,height=400');
	}
}

function openChangeColumns(url) {
	if(top.browser=="explorer") {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=480,height=400');
	} else {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=480,height=400');
	}
}

function openSort(url) 
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=580,height=400');
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus();
}

function openRowAsText(url) {
	if(top.browser=="explorer") {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yew,resizable=yes,copyhistory=no,width=680,height=420');
	} else {
		top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=680,height=420');
	}
}

function openUnits(url)
{
  w = 560;
  h = 230;
  winl = (screen.width - w) / 2;
  wint = (screen.height - h) / 2;
  
  top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yew,resizable=yes,copyhistory=no,width='+w+',height='+h+',top='+wint+',left='+winl);
  top.NewWin.focus();
}

function MM_displayStatusMsg(msgStr) 
{ //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}

var browserName=navigator.appName;
var browserVer=parseInt(navigator.appVersion);

if ( (browserName == "Netscape") && (browserVer == 4) ) {
  version="n4";
}

else if ( browserName == "Netscape" && browserVer >= 5) {
  version="n5";
}
 
else if ((browserName=="Microsoft Internet Explorer" && browserVer>=4))
  version="ie4";


//if Browser is Netscape 4

if (version=="n4")
{
		layerStyleRef="layer.";
		layerRef="document.layers";
		styleSwitch="";
}


//if Browser is Netscape 6

if (version=="n5")
{
		layerStyleRef="layer.";
		layerRef="document.getElementById";
		styleSwitch=".style";
}


//if Browser is Internet Exporer 4+	

if (version=="ie4")
{
  layerStyleRef="layer.style.";

  layerRef="document.all";
  styleSwitch=".style";
}

function showLayer(layerName){

	if (version == "n5") {
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="visible"');
	} else {
        eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
	}
}

function showLayerTwo(layerName){

	if (version == "n5") {
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="visible"');
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.position="relative"');
	} else {
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.position="relative"');
	}
}
	
function hideLayer(layerName){

	//document.getElementById('layer1').style.visibility = 'hidden';
	if (version == "n5") {
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="hidden"');
	} else {
        eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
	}

	//eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');

}

function hideLayerTwo(layerName){

	//document.getElementById('layer1').style.visibility = 'hidden';
	if (version == "n5") {
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.visibility="hidden"');
	  eval(layerRef+'("'+layerName+'")'+styleSwitch+'.position="absolute"');
	} else {
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.position="absolute"');
	}
	
	//eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
}
<!-- Window Functions End Here--->

<!-- Start of Color Change Code -->
function colorOn(fontName){

	if (version == "n5") {
	  eval(layerRef+'("'+fontName+'")'+styleSwitch+'.color="#CC0000"');
	} else {
        eval(layerRef+'["'+fontName+'"]'+styleSwitch+'.color="#CC0000"');
	}
}
	
function colorOff(fontName){

	//document.getElementById('layer1').style.visibility = 'hidden';
	if (version == "n5") {
	  eval(layerRef+'("'+fontName+'")'+styleSwitch+'.color="#333399"');
	} else {
        eval(layerRef+'["'+fontName+'"]'+styleSwitch+'.color="#333399"');
	}

	//eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');

}
<!-- End of Color Change Code -->


function NewWindow(mypage, myname, scroll, windowType) 
{
	//alert(screen.width + ' ' + screen.height);
	var winl, wint, w, h;
	if (screen.width == 640)
	{
		w = 600;
		h = 346;
		winl = (screen.width - w) / 2;
		wint = 1;
	}
	else if (screen.width == 800)
	{
		if (windowType == 'Text')
		{
			w = 725;
			h = 460;
			winl = 20;
			wint = 2;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 600;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 720;
			h = 460;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if (windowType == 'Applets')
		{
			w = 750;
			h = 550;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 700;
			h = 442;
			winl = 55;
			wint = 24;
		}
	}
	else if (screen.width == 1024)
	{
		if (windowType == 'Text')
		{
			w = 860;
			h = 630;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 696;
			h = 480;
			winl = 206;
			wint = 63;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 425;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 980;
			h = 630;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if (windowType == 'Help')
		{
			w = 809;
			h = 580;
			winl = 71;
			wint = 31;
		}
		else if (windowType == 'Applets')
		{
			w = 1000;
			h = 700;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 819;
			h = 580;
			winl = 51;
			wint = 31;
		}
	}
	else if (screen.width == 1152)
	{
		if (windowType == 'Text')
		{
			w = 720;
			h = 728;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 783;
			h = 540;
			winl = 228;
			wint = 67;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 425;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 985;
			h = 728;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if (windowType == 'Applets')
		{
			w = 1000;
			h = 700;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 922;
			h = 690;
			winl = 58;
			wint = 27;
		}
	}
	else if (screen.width == 1280)
	{
		if (windowType == 'Text')
		{
			w = 860;
			h = 800;
			winl = ((screen.width - w) / 2) - 10;
			wint = 2;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 888;
			h = 820;
			winl = 210;
			wint = 73;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 425;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 985;
			h = 885;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if (windowType == 'Applets')
		{
			w = 1050;
			h = 775;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 1024;
			h = 845;
			winl = 32;
			wint = 33;
		}
	}
	else if (screen.width == 1400 && screen.height == 1050) //Special case for some laptops
	{
		if (windowType == 'Text')
		{
			w = 860;
			h = 500;
			winl = ((screen.width - w) / 2) - 10;
			wint = 2;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 888;
			h = 700;
			winl = 210;
			wint = 73;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 425;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 985;
			h = 700;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else if (windowType == 'Applets')
		{
			w = 1050;
			h = 700;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 1024;
			h = 700;
			winl = 32;
			wint = 33;
		}
	}
	else
	{
	// greater than 1280x1024 resolution
		if (windowType == 'Text')
		{
			w = 1200;
			h = 1020;
			winl = (screen.width - w) / 2 - 30;
			wint = 10;
		}
		else if ((windowType == 'Row') || (windowType == 'Row_Number'))
		{
			w = 1020;
			h = 900;
			winl = 310;
			wint = 80;
		}
		else if ((windowType == 'Small_Structure'))
		{
			w = 500;
			h = 425;
			winl = 170;
			wint = 60;
		}
		else if ((windowType == 'Small_html'))
		{
			w = 700;
			h = 400;
			winl = 170;
			wint = 60;
		}
		else if (windowType == 'Text_Bookmarks')
		{
			w = 1200;
			h = 1000;
			winl = (screen.width - w) / 2;
			wint = 30;
		}
		else if (windowType == 'Applets')
		{
			w = 1050;
			h = 775;
			winl = (screen.width - w) / 2;
			wint = 2;
		}
		else
		{
			w = 1150;
			h = 1000;
			winl = 80;
			wint = 33;
		}
	}
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable,toolbar=no,location=no,menubar=yes';
	win = window.open(mypage, myname, winprops);
	if (parseInt(navigator.appVersion) >= 4) win.window.focus();
}	
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
