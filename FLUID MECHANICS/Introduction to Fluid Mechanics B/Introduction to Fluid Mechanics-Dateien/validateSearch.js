function openPopup(url) 
{
	top.NewWin=window.open(url,'popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=400,height=225,top=80,left='+(screen.width/4));
	if (parseInt(navigator.appVersion) >= 4) top.NewWin.focus(); 
}

function validateFields(caller, object)
{
	var first = 0, second = 0, third = 0;
	var gotFirst = false, gotSecond = false, gotThird = false; 
	var firstTerm = '', secondTerm = '', thirdTerm = '';
	var firstBoolean, secondBoolean, queryStr, booleanOperator;
	var bop = object.BooleanOperator1.value;
	
	if(bop == '0') booleanOperator = 'And';
	else if(bop == '1') booleanOperator = 'Or';
	else booleanOperator = 'Not';
	
	//Start by combining all search terms into one String
	
	//First check if SearchTermA1 is null.
	if(object.SearchTermA1.value != '')
	{
	  var term = object.SearchTermA1.value;
    term = replace(term, '"', '');
		term = replace(term, '(', '');
		term = replace(term, ')','');
		
		queryStr = term +  ' ';
	}
	
	//Check if SearchTermB1 is null.
	if(object.SearchTermB1.value != '')
	{
	  var term = object.SearchTermB1.value;
    term = replace(term, '"', '');
		term = replace(term, '(', '');
		term = replace(term, ')','');
		
		queryStr += booleanOperator +  ' ' +  term;
	}

	var string = queryStr.toLowerCase();
	// replace "AND NOT with NOT
	string = replace(string, 'and not', 'not');
	
	//Check, for booleans. If none,return.
	if(string.indexOf(' or ' ) == -1 && string.indexOf(' and ' ) == -1 && string.indexOf(' not ' ) == -1) 
	  return true;
	
	// check how many booleans there and break up the query appropriately
	else
	{
		var numBooleans = 0;
		// split the sentence into an array of words
		var a = string.split(/\s+/g); 
		
		//loop thro' all the words and pick out the booleans
		for(var i = 0; i < a.length; i++)
		{
			if(a[i] == 'and' || a[i] == 'or' || a[i] == 'not' || (gotFirst && gotSecond))
			{
				numBooleans++;
				//first part of query
				if(!gotFirst) 
				{ 
					first = i;
					firstBoolean = a[i];
					gotFirst = true;
					continue;
				}
				//section part of query
				if(gotFirst && !gotSecond) 
				{
					second = i;
					secondBoolean = a[i];
					gotSecond = true;
					continue;
				}
				//third part of query if available
				thirdTerm += a[i];
				if( (i+1) < a.length) thirdTerm+= ' ';
			}
			else if(!gotFirst)
			{
				firstTerm += a[i];
				if( (i+1) < a.length && a[i+1] != 'and' && a[i+1] != 'or' && a[i+1] != 'not') firstTerm+= ' ';
			}
			else if(gotFirst && !gotSecond) 
			{
				secondTerm += a[i];
				if( (i+1) < a.length && a[i+1] != 'and' && a[i+1] != 'or' && a[i+1] != 'not') secondTerm+= ' ';
			}
		}	
		//Reconvert boolean operators to their numeric equivalent
		if(firstBoolean == 'and') firstBoolean = '0';
		else if(firstBoolean == 'or') firstBoolean = '1';
		else if(firstBoolean == 'not') firstBoolean = '2'; 
	
		if(secondBoolean == 'and') secondBoolean = '0';
		else if(secondBoolean == 'or') secondBoolean = '1';
		else if(secondBoolean == 'not') secondBoolean = '2'; 
			
		//If more than one boolean, then we need to show pop up
		if(numBooleans > 1)
		{
		  var specialLocation = '0'; 
			if(object.SpecialLocation != null)
			{
			  if(object.SpecialLocation[0].checked) specialLocation = object.SpecialLocation[0].value;
			  if(object.SpecialLocation[1].checked) specialLocation = object.SpecialLocation[1].value;
			  if(object.SpecialLocation[2] != null && object.SpecialLocation[2].checked) specialLocation = object.SpecialLocation[2].value;
			}
		  var spaceID = object.SpaceID[object.SpaceID.selectedIndex].value;
			var bookID = '';
			var searchBookID = '';
			if(object.BookID != null) bookID = '&BookID='+object.BookID.value;
			if(object.SearchBookID != null) searchBookID = '&SearchBookID='+object.SearchBookID.value;
			
			//show popup
			openPopup('SearchError.jsp?SearchTermA1='+firstTerm+'&SearchTermB1='+secondTerm+'&SearchTermC1='+thirdTerm+'&BooleanOperator1='+firstBoolean+'&BooleanOperator2='+secondBoolean+'&SpaceID='+spaceID+bookID+searchBookID+'&SpecialLocation='+specialLocation+'&Caller='+caller);
			return false;
		}		
		//check if user enetered "AND NOT and change it to the appropriate value and then submit form
		else
		{
			object.SearchTermA1.value = firstTerm;
			object.BooleanOperator1.value = firstBoolean;
			object.SearchTermB1.value = secondTerm;
			return true;
		}
	}
}

function validateFieldsForIE(caller, object)
{
	var first = 0, second = 0, third = 0;
	var gotFirst = false, gotSecond = false, gotThird = false; 
	var firstTerm = '', secondTerm = '', thirdTerm = '';
	var firstBoolean, secondBoolean, queryStr;
	
	//Start by combining all search terms into one String
	
	//First check if SearchTermA1 is null.
	if(object.document.BasicSearch.SearchTermA1.value != '')
	{
	  	var term = object.document.BasicSearch.SearchTermA1.value;
    	term = replace(term, '"', '');
		term = replace(term, '(', '');
		term = replace(term, ')','');
		
		queryStr = term +  ' ';
	}

	var string = queryStr.toLowerCase();
	// replace "AND NOT with NOT
	string = replace(string, 'and not', 'not');
	
	//Check, for booleans. If none,return.
	if(string.indexOf(' or ' ) == -1 && string.indexOf(' and ' ) == -1 && string.indexOf(' not ' ) == -1) 
	  return true;
	
	// check how many booleans there and break up the query appropriately
	else
	{
		var numBooleans = 0;
		// split the sentence into an array of words
		var a = string.split(/\s+/g); 
		
		//loop thro' all the words and pick out the booleans
		for(var i = 0; i < a.length; i++)
		{
			if(a[i] == 'and' || a[i] == 'or' || a[i] == 'not' || (gotFirst && gotSecond))
			{
				numBooleans++;
				//first part of query
				if(!gotFirst) 
				{ 
					first = i;
					firstBoolean = a[i];
					gotFirst = true;
					continue;
				}
				//section part of query
				if(gotFirst && !gotSecond) 
				{
					second = i;
					secondBoolean = a[i];
					gotSecond = true;
					continue;
				}
				//third part of query if available
				thirdTerm += a[i];
				if( (i+1) < a.length) thirdTerm+= ' ';
			}
			else if(!gotFirst)
			{
				firstTerm += a[i];
				if( (i+1) < a.length && a[i+1] != 'and' && a[i+1] != 'or' && a[i+1] != 'not') firstTerm+= ' ';
			}
			else if(gotFirst && !gotSecond) 
			{
				secondTerm += a[i];
				if( (i+1) < a.length && a[i+1] != 'and' && a[i+1] != 'or' && a[i+1] != 'not') secondTerm+= ' ';
			}
		}	
		//Reconvert boolean operators to their numeric equivalent
		if(firstBoolean == 'and') firstBoolean = '0';
		else if(firstBoolean == 'or') firstBoolean = '1';
		else if(firstBoolean == 'not') firstBoolean = '2'; 
	
		if(secondBoolean == 'and') secondBoolean = '0';
		else if(secondBoolean == 'or') secondBoolean = '1';
		else if(secondBoolean == 'not') secondBoolean = '2'; 
			
		//If more than one boolean, then we need to show pop up
		if(numBooleans > 1)
		{
		  var specialLocation = '0'; 
			if(object.document.BasicSearch.SpecialLocation != null)
			{
			  if(object.document.BasicSearch.SpecialLocation[0].checked) specialLocation = object.document.BasicSearch.SpecialLocation[0].value;
			  if(object.document.BasicSearch.SpecialLocation[1].checked) specialLocation = object.document.BasicSearch.SpecialLocation[1].value;
			  if(object.document.BasicSearch.SpecialLocation[2] != null && object.document.BasicSearch.SpecialLocation[2].checked) specialLocation = object.document.BasicSearch.SpecialLocation[2].value;
			}
		  var spaceID = object.document.BasicSearch.SpaceID[object.document.BasicSearch.SpaceID.selectedIndex].value;
			var bookID = '';
			var searchBookID = '';
			if(object.document.BasicSearch.BookID != null) bookID = '&BookID='+object.document.BasicSearch.BookID.value;
			if(object.document.BasicSearch.SearchBookID != null) searchBookID = '&SearchBookID='+object.document.BasicSearch.SearchBookID.value;
			
			//Fix Terms
			object.document.BasicSearch.SearchTermA1.value = firstTerm;
			object.document.BasicSearch.SearchTermB1.value = secondTerm;
			object.document.BasicSearch.BooleanOperator1.value = firstBoolean;
			//show popup
			//openPopup('SearchError.jsp?SearchTermA1='+firstTerm+'&SearchTermB1='+secondTerm+'&SearchTermC1='+thirdTerm+'&BooleanOperator1='+firstBoolean+'&BooleanOperator2='+secondBoolean+'&SpaceID='+spaceID+bookID+searchBookID+'&SpecialLocation='+specialLocation+'&FromToolbar=true&Caller='+caller);
			object.parent.mainFrame.location = 'SearchError.jsp?SearchTermA1='+firstTerm+'&SearchTermB1='+secondTerm+'&SearchTermC1='+thirdTerm+'&BooleanOperator1='+firstBoolean+'&BooleanOperator2='+secondBoolean+'&SpaceID='+spaceID+bookID+searchBookID+'&SpecialLocation='+specialLocation+'&FromToolbar=true&Caller='+caller;
			return false;
		}		
		//check if user enetered "AND NOT and change it to the appropriate value and then submit form
		else
		{
			object.document.BasicSearch.SearchTermA1.value = firstTerm;
			object.document.BasicSearch.BooleanOperator1.value = firstBoolean;
			object.document.BasicSearch.SearchTermB1.value = secondTerm;
			return true;
		}
	}
}

function replace(string,text,by) 
{
	// Replaces text with by in string
	var strLength = string.length, txtLength = text.length;
	if ((strLength == 0) || (txtLength == 0)) return string;

	var i = string.indexOf(text);
	if ((!i) && (text != string.substring(0,txtLength))) return string;
	if (i == -1) return string;

	var newstr = string.substring(0,i) + by;

	if (i+txtLength < strLength)
			newstr += replace(string.substring(i+txtLength,strLength),text,by);

	return newstr;
}

