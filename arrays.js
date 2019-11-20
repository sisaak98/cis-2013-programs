//Task 1

var arrayNames = new Array('John','Robert','Jimmy','Bonzo');

var arrayInstruments = [];

arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage = "";

var intCount;

for(intCount = 0; intCount < arrayNames.length ;intCount++)
{
	stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] + "\n";
}

alert(stringMessage);

//task 2
var stringOutput = "";
var intI;
var intJ;
for(intI = 1; intI <= 12; intI++)
{
	for(intJ = 1; intJ <= 12; intJ++)
	{
		var intMult = intI * intJ;
		stringOutput = stringOutput + intMult + " ";
	}
	stringOutput = stringOutput + "\n";
}

alert(stringOutput);



//task 3
var arrayTimesTables = [];
var stringEvenTimes = "";

for(var x = 1; x <= 12; x++)
{
	arrayTimesTables[x] = [];
	for(var y = 1; y <= 12; y++)
	{
		arrayTimesTables[x][y] = x*y;
	}
}

var a;
var b;
for(a = 2; a <= 12; a = a + 2)
{
	for(b = 1; b <= 12; b++)
	{
		stringEvenTimes = stringEvenTimes + arrayTimesTables[a][b] + " ";
	}
	stringEvenTimes = stringEvenTimes + "\n";
}
alert(stringEvenTimes);

