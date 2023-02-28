function firstReversePair(str)// Возвращает индекс последнего элемента первого фрагмента максимальной длины, перевернутая версия которого встречается в строке
{
	var strLen = StringLength(str);
	var endReverseIndex = -1;
	var k = 0;
	for(i = 0; i < strLen - 1; i++)
	{
		//alert(i);
		if(MySubString(str, i + 1).search(str[i]) != -1)// Если символ встречается дальше в строке
		{
			//alert(i + "После условия");
			//alert("У символа есть пара");
			var j = 1;
			k = 1;
			while(MySubString(str, i + j).search(ReverseString(MySubString(str, i, i + j + 1))) != -1)//Если проверяемая строка содержит после себя перевернутую версию себя
			{
				//alert("Пара найдена");
				k++;
				endReverseIndex = i + j;
				j++;
			}
			if(k > 1) break;
		}
	}
	return endReverseIndex;
}

function StringLength(str)
{
	var k = 0;
	while (str != "")
	{
		str = str.substring(1);
		k++;
	}
	return k;
} 

function ReverseString(str)
{
	var strLen = StringLength(str);
	let ar = new Array();
	ar = str.split("");
	for (var i = 0; i < strLen / 2; i++)
	{
		c = ar[i];
		ar[i] = ar[strLen - i - 1];
		ar[strLen - i - 1] = c;
	}
	return ar.join("");
} 

function MySubString(str, indSt, indEnd = -1)
{
	var output = "";
	var strLen = StringLength(str);
	if (indEnd == -1)
		indEnd = strLen;

	if (indSt >= strLen)
		return -1;

	for (var k = indSt; k < indEnd; k++)
	{
		output += str[k];
	}

	return output;
} 

/*
inp = prompt("");
a = 2;
b = 4;
alert(ReverseString(inp));
*/

var str_inp = prompt("Введите строку для проверки:");
//alert("Перевернутая строка " + str_inp.split("").reverse().join(""));
var k1 = 0;
while(firstReversePair(str_inp) != -1)
{
	str_inp = str_inp.substring(firstReversePair(str_inp) + 1);
	k1++;
}
alert(k1);
alert(str_inp);

