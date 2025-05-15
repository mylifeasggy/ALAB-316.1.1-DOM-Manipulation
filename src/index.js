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


//PART III Creating the Submenu


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
 a.text = link.text 
 topMenuEl.appendChild(a)

 });



// //Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu')
// //Set the height subMenuEl element to be "100%".
subMenuEl.style.height = ('100%')
// //Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg: #3da4ab;)'
// //Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')
// //Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = ('absolute')
// //Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.t




var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let topMenuLinks= []

for (let a of topMenuEl.children) {
  topMenuLinks.push(a)

}

topMenuEl.addEventListener("click", function preventDefault(event) {
console.log(event.target)
event.target.classList.toggle("active")
return event.target
})
