// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
//TODO write your code here...
console.log(name.toUpperCase());



// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var str = sentence.replace(/(^\w{1})|(\s{1}\w{1})/g, wordChar => wordChar.toUpperCase());
console.log(str);



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var moneyValue;
var matches = money.match(/(\d+)/g); 
var length = matches.length;

for(let x=0;x<length;x++){
	if(x==0)
		moneyValue = matches[x];
	else
		moneyValue = moneyValue+matches[x];
}
console.log(moneyValue);
