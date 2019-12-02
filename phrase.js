var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
{
	var stringEntry = $("phrase").value;
    //set the entry string to lower case
	stringEntry = stringEntry.toLowerCase();
    //make sure something was entered
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //this part counts the vowels
		var intVowels = 0;
		var intJ;
        for(intJ = 0; intJ < stringEntry.length; intJ++)
        {
            //test all vowels
            switch(stringEntry.charAt(intJ))
            {
                case 'a':
                    intVowels++;
                    break;
                case 'e':
                    intVowels++;
                    break;
                case 'i':
                    intVowels++;
                    break;
                case 'o':
                    intVowels++;
                    break;
                case 'u':
                    intVowels++;
                    break;
                default:
                    break;
            }
        }
		
		
		$("output").value = "There are " + intVowels + " vowels in the above phrase.";
	}	
} 

var consonants = function () 
{
    //get the entry string and make it lower case
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toLowerCase();
	//make sure something was entered
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //count the consonants, which are just not vowels or spaces
		var intConsonants = 0;
		
        var intJ;
        for(intJ = 0; intJ < stringEntry.length; intJ++)
        {
            switch(stringEntry.charAt(intJ))
            {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case ' ':
                    break;
                default:
                    intConsonants++;
                    break;
            }
        }
		
		
		$("output").value = "There are " + intConsonants + " consonants in the above phrase.";
	}
}


var reverse = function () 
{
    //get the entry value and make sure something was entered
	var stringEntry = $("phrase").value;
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //start at the last position in the string and work backwards
        //adding the characters to the back of the output string
		var stringReversed = "";
        var intI;
        for(intI = stringEntry.length - 1; intI >= 0; intI--)
        {
            stringReversed = stringReversed + stringEntry.charAt(intI);
        }
		
		
		$("output").value = "The reverse of the above phrase is:\n" + stringReversed;
	}
}

var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("non-vowels").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  