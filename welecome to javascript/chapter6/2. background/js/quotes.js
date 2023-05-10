const quotes = [
{
quote: 'I never dreamed about success, I worked for it',
author: 'Estee Lauder',
},
{
quote: 'Do not try to be original, just try to be good.',
author: 'Paul Rand',
},
{
quote: 'Do not be afraid to give up the good to go for the great',
author: 'John D. Rockefeller',
},
{
quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
author: 'Martin Luther King Jr.',
},
{
quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
author: 'Thomas Edison',
},
{
quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
author: 'REid Hoffman',
},
{
quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
author: 'Tim O Reilly',
},
{
quote: 'Some people dream of success, while other people get up every morning and make it happen',
author: 'Wayne Huizenga',
},
{
quote: 'The only thing worse than starting something and falling.. is not starting something',
author: 'SEth Godin',
},
{
quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
author: 'Jim Rohn',
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[Math.floor(Math.random() * 10)]);
//console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//[1,2,3,4,5].length 를 하면 배열의 길이를 반환해줌

//console.log(quotes[0]);

//Math.random(); 랜덤숫자를 아무거나 내뱉는 함수

/* Math.random() * 10;  하면 x.xxxxxx 숫자가 나오는데
	소숫점 뒤에 숫자를 버리고 싶을떄 가능한 3가지

	1.Math.round(); 소숫점 숫자를 반올림해줌
	ex) 1.1 => 1
		1.2 => 1
		1.6 => 2 
	
	2.Math.ceil(); 소숫점 값의 최대값으로 올려줌 => 올림
	ex) 1.1 => 2
		1.2 => 2
		1.01 = > 2

	3.Math.floor(); 소숫점 값의 최소값으로 내려줌 => 내림
	ex) 1.1 => 1
		1.9 => 1
		1.99 => 1
*/