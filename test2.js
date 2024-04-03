window.showElement = (element = getElement()) => {
  const wrapper = document.createElement('div')

  wrapper.style['position'] = 'absolute'
  wrapper.style['width'] = '50%'
  wrapper.style['height'] = '100%'
  wrapper.style['position'] = 'absolute'
  wrapper.style['width'] = 'calc(50% - 40px)'
  wrapper.style['height'] = 'calc(100% - 40px)'
  wrapper.style['margin'] = '20px'
  wrapper.style['top'] = 0
  wrapper.style['right'] = 0
  wrapper.style['background-color'] = '#fff'
  wrapper.style['border'] = '1px solid #ccc'
  wrapper.style['border-radius'] = '4px'
  wrapper.style['z-index'] = 1000

  if (element) {
    wrapper.appendChild(element)
  }

  document.getElementById('app').appendChild(wrapper)
}

function getElement() {
  const content = document.createElement('div')

  content.style.display = 'flex'
  content.style.alignItems = 'center'
  content.style.justifyContent = 'center'
  content.style.height = '100%'
  content.style.fontSize = '24px'

  content.innerHTML = 'Element example'

  return content;
}
