var parent=document.getElementById('content-items')/**/

var send=document.getElementById('send')
send.addEventListener('click',function(){

    console.log(666)
var li=document.createElement('li')
li.setAttribute('class','content-item')/*修改标签的类名 */

var divPic=document.createElement('div');
divPic.setAttribute('class','pic');
li.appendChild(divPic)

var img=document.createElement('img')
img.setAttribute('src','http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg')
divPic.appendChild(img)

var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')//创建元素节点
p1.setAttribute('class','name')
var p1Text=document.createTextNode('土豆')/*创建文本节点 */
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p2.setAttribute('class','detail')
var p2Text=document.createTextNode('中午一起吃饭')
p2.appendChild(p2Text)
message.appendChild(p2)

parent.appendChild(li)
console.log(li)
})

var li=document.createElement('li')
li.setAttribute('class','content-item')/*修改标签的类名 */

var divPic=document.createElement('div');
divPic.setAttribute('class','pic');
li.appendChild(divPic)

var img=document.createElement('img')
img.setAttribute('src','http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg')
li.appendChild(img)

var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')//创建元素节点
p1.setAttribute('class','name')

var p1Text=document.createTextNode('土豆')/*创建文本节点 */
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p2.setAttribute('class','detail')

var p2Text=document.createTextNode('中午一起吃饭')
p2.appendChild(p2Text)
message.appendChild(p2)
console.log(li)