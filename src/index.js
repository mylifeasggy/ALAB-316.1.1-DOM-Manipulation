// Menu data structure



//PART I 
// 1 Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector('main');


// 2 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg, #4a4e4d)';

// 3 Set the content of mainEl to . There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'; 
//4 Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add ('flex-ctr')


//PART II CREATING A MENU BAR
//Set the height of the topMenuEl element to be 100%.

const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = ('100%');
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg, #0e9aa7)'
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add = ('flex-around')

console.log(topMenuEl)


//PART III


var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
 menuLinks.forEach(link => {
 console.log(link);

 let a = document.createElement('a')

 a.href = link.href
 a.innerText = link.text 
 topMenuEl.appendChild(a)
  console.log(a)

 });



