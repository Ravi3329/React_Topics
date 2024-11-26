function customRender(relement,maincontainer){

  const domElement=document.createElement(relement.type)
  domElement.setAttribute('href',relement.attr.href)
  domElement.setAttribute('target',relement.attr.target)
  domElement.innerHTML =relement.text

  maincontainer.appendChild(domElement);

}


const reactElement={
  type:'a',
  attr:{
    href:"https://google.com",
    target:'_blank'
  },
  text:"Click me to visit google"
}


const container=document.querySelector('#root')

customRender(reactElement,container)