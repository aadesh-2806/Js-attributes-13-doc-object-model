window
//Window {window: Window, self: Window, document: document, name: "", location: Location, …}
document
//shows whole html

console.dir(document)
//VM262:1 #document
//shows whole directory and imp to us

all: HTMLAllCollection(95)
//contain all tags like b p h1 etc

document.all
//HTMLAllCollection(95) [html, head, meta, meta, title, link, body, nav.top, section.top_left, a.home, a.about, section.top_between, a.contact, 

document.all[10]
//<a href=​"#" class=​"about">​About​</a>​
document.all[13]
//<a href=​"#" class=​"email">​Email​</a>​

document.all[13].innerText="Email Us"
//"Email Us"
//change text in page itself

//////////////////////////////////////////////////////////byId//////////////////////////////////////////////////////////////

document.getElementById(root)
//null------------------>no id like root is present
//bring out like image by id="img" etc
//we select not html but element in console.dir('img')

document.querySelector('#heading')
//<h1 id=​"heading">​"Sales"<span>​Force​</span>​</h1>​

//////////////////////////////////////////////////////////byTagName//////////////////////////////////////////////////////////////

document.getElementsByTagName('img')
//HTMLCollection(14) [img.image_src, img.image_src, img.name_image, img.small_button, img.small_button, img.small_button, img.name_image, img small_button, img.small_button, img.small_button, img.name_image, img.small_button, img.small_button, img.small_button]

document.getElementsByTagName('IMG')
//HTMLCollection(14) [img.image_src, img.image_src, img.name_image, img.small_button, img.small_button, img.small_button, img.name_image, img.small_button, img.small_button, img.small_button, img.name_image, img.small_button, img.small_button, img.small_button]

//not cas dependent and give all element with tag name IMG 

document.getElementsByTagName('IMG')[0]
//<img src=​"New folder/​1608991736771.jpg" alt=​"Engineer" class=​"image_src">​

const allImage = document.getElementsByTagName('IMG')

for(img of allImage){
    console.log(img.src)
}

/*VM1602:2 file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736771.jpg
VM1602:2 file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736778.jpeg
VM1602:2 file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736784.png
*/

for(img of allImage){
    img.src='file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736771.jpg'
}
//"file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736771.jpg"

//change all images to a single one

//////////////////////////////////////////////////////////byClassName//////////////////////////////////////////////////////////////

document.getElementsByClassName('secII')
/*
HTMLCollection(7) [a.secII, a.secII, a.secII, a.secII, a.secII, a.secII, a.secII]
0: a.secII
1: a.secII
2: a.secII
3: a.secII
4: a.secII
5: a.secII
6: a.secII
length: 7
__proto__: HTMLCollection
*/
//these all above bring out the attribute by its class name  and modification done accordingly

///////////////////////////////////////////////////QuerySelector&All/////////////////////////////////////////////////////////
document.querySelector('p')
//<p>​…​</p>​
//select only first one but

document.querySelectorAll('p')
//NodeList(4) [p, p, p, p]0: p1: p2: p3: plength: 4__proto__: NodeList
//select all

document.querySelector('.secII')
//<a href=​"www.abc1.com" class=​"secII">​Achievment​</a>​

document.querySelector('.secII:nth-of-type(2)')
//<a href=​"www.abc2.com" class=​"secII">​Our interns​</a>​
//shows first of type but

document.querySelectorAll('.secII')
NodeList(7) [a.secII, a.secII, a.secII, a.secII, a.secII, a.secII, a.secII]
//select all

/////////////////////////////////////////////////////////////////InnerText///////////////////////////////////////////////

document.querySelector('p').innerText
//"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consectetur ullam alias voluptatum explicabo quo quia tempora maiores quibusdam ipsum perferendis ex beatae atque adipisci, nostrum maxime pariatur rerum doloremque? Dicta natus ipsam, repellat, laboriosam sint maiores ex laborum illo quam aspernatur placeat saepe veritatis, voluptatem nisi error voluptatibus consequatur accusamus nemo. Mollitia eos fuga ducimus molestiae saepe eum doloribus. Maxime, vero fuga, libero impedit atque labore repudiandae incidunt rem cupiditate ea a doloribus.
//brings inner text

document.querySelector('p').textContent
//Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex porro facilis, cum molestiae deserunt esse necessitatibus exercitationem in ducimus! Illum ipsa natus debitis architecto sunt ea iste dolores necessitatibus.

//these space are coming from script of html in VsCode as break at any other tag and it closes again p start
//innerText shows which is visible and TextContent shows everything which is also not visible

document.querySelector('h1').innerText = '<i>I am not a Link</i>'
//"<i>I am not a Link</i>"
//<i> does not work because it text but not treat it as html so_____

document.querySelector('h1').innerHTML = '<i>I am not a Link</i>'
//"<i>I am not a Link</i>"
//it works as Html

document.querySelector('h1').innerHTML
//"<i>I am not a Link</i>"
//it shows with att but

document.querySelector('h1').innerText
//"I am not a Link"
//donot show

////////////////////////////////////////////////attribute//////////////////////////////////////////////////////////////
document.querySelector('#heading')
//<h1 id=​"heading">​"Sales"<span>​Force​</span>​</h1>​

document.querySelector('#heading').id
//"heading"

document.querySelector('#heading').id = 'whoops'
//"whoops"
//can be changed like --------><h1 id="whoops">Sales<span>Force</span></h1>

document.querySelector('a').href
//"file:///D:/aadesh%20imp%20files/web%20development/site.html#"

document.querySelector('a').getAttribute('href')
//"#"
//above tells what in written html link

document.querySelector('a').getAttribute('alt')
//null

document.querySelector('link').href
//"file:///D:/aadesh%20imp%20files/web%20development/site.css"

document.querySelector('h1').style
//CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}alignContent: ""alignItems: ""alignSelf: ""alignmentBaseline: ""all: ""animation: ""animationDelay: ""animationDirection: ""animationDuration: ""animationFillMode: 
document.querySelector('h1').style.color
//""

document.querySelector('h1').style.color='yellow'
//"yellow"
//change to Yellow

//////////////////////////////////////////////////////////computed style/////////////////////////////////////////////////////////

window.getComputedStyle(document.querySelector('h1'))
//give value of all style related to h1

window.getComputedStyle(document.querySelector('h1')).font
//"700 
//32px 
//-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif"

window.getComputedStyle(document.querySelector('h1')).fontSize
"32px"
//font size

window.getComputedStyle(document.querySelector('h1')).margin
"21.44px 0px"
//margin default

//whole docoment style is shown as sometime there can be multiple css sheets

/////////////////////////////////////////////////////////class list/////////////////////////////////////////////////////////////

const h2= document.querySelector('h2')

h2.getAttribute('class')
//null

h2.setAttribute('class' , 'border')

h2.getAttribute('class')
//"border"
//get att name

h2.setAttribute('class' , "small_bu")
//'small_bu'
//set name of its class

h2.setAttribute('class' , "log_in")

h2.setAttribute('class' , "sign_up")

const x= h2.getAttribute('class')

h2.setAttribute('class' , `${x} log_in`)

h2.getAttribute('class')
//"sign_up log_in"
//make class intact

const h2= document.querySelector('a')

h2.classList
//DOMTokenList ["home", value: "home"]0: "home"length: 1value: "home"__proto__: DOMTokenList

h2.classList.add("log_in")

h2.classList.add("small_bu")

h2.classList
//DOMTokenList(3) ["home", "log_in", "small_bu", value: "home log_in small_bu"]0: "home"1: "log_in"2: "small_bu"length: 3value: "home log_in small_bu"__proto__: DOMTokenList
//add in class list

h2.classList.remove("small_bu")

h2.classList
//DOMTokenList(2) ["home", "log_in", value: "home log_in"]
//remove from class list

h2.classList.toggle("small_bu")
true
h2.classList.toggle("small_bu")
false
h2.classList.toggle("small_bu")
true

//add and than remove if -nt or +nt resp
//help in navigation system

//////////////////////////////////////////////////////////////parent_child_sibling///////////////////////////////////////////

const p= document.querySelector('p')

p.parentElement
//<div class=​"sectionI">​…​</div>​

p.parentElement.parentElement
//<div class=​"section">​…​</div>​

p.parentElement.parentElement.parentElement
//<body>​…​</body>​

const child = p.parentElement.parentElement

child.childElementCount
//2-------------------->total children

child.children
//not an array but seems like to be

child.children.children

child.children[0].children
//HTMLCollection(6) [h1#heading, h3.about_us, p, div.name_img_div, h3.hirings, p, heading: h1#heading]0: h1#heading1: h3.about_us2: p3: div.name_img_div4: h3.hirings5: plength: 6heading: h1#heading__proto__: HTMLCollection

child.children[0].nextSibling
//#text
//tells only text as contain text but

child.children[0].nextElementSibling
//<div class=​"sectionII">​…​</div>​
//shows element

child.children[0].nextElementSibling.previousSibling
//#text
//tell previous sibling---------------------------------------------------------------------->null if not

child.children[0].nextElementSibling.previousElementSibling
//<div class=​"sectionI">​…​</div>​

child.children[0].nextElementSibling.previousElementSibling.previousElementSibling
//null    

const img = document.createElement('img')