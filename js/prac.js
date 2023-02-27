function firstReversePair(str)// Возвращает индекс последнего элемента первого фрагмента максимальной длины, перевернутая версия которого встречается в строке
{
	strLen = str.length;
	endReverseIndex = -1;
	k = 0;
	for(i = 0; i < strLen - 1; i++)
	{
		if(str.substring(i + 1).search(str[i]) != -1)// Если символ встречается дальше в строке
		{
			//alert("У символа есть пара")
			j = 1;
			k = 1;
			while(str.substring(i + j).search(str.substring(i, i + j + 1).split("").reverse().join("")) != -1)//Если проверяемая строка содержит после себя перевернутую версию себя
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
	k = 0;
	while (str != "")
	{
		str = str.substring(1);
		k++;
	}
	return k;
} 

function ReverseString(str)
{
	strLen = StringLength(str);
	let ar = new Array();
	ar = str.split("");
	for (i = 0; i < strLen / 2; i++)
	{
		c = ar[i];
		ar[i] = ar[strLen - i - 1];
		ar[strLen - i - 1] = c;
	}
	return ar.join("");
} 

function MySubString(str, indSt)
{
	output = "";
	for (i = indSt; i < StringLength(str); i++)
	{
		output += str[i];
	}
	return output;
} 

inp = prompt("");
alert(MySubString(inp, 2));

/*

str_inp = prompt("Введите строку для проверки:");
//alert("Перевернутая строка " + str_inp.split("").reverse().join(""));
k1 = 0;
while(firstReversePair(str_inp) != -1)
{
	str_inp = str_inp.substring(firstReversePair(str_inp));
	k1++;
}
alert(k1);
alert(str_inp)

*/

