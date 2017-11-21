function handleClick () {
  const clickEvent = {
    value: 'converted',
    event: 'click'
  }
  const request = new XMLHttpRequest()
  const url = '/events'
  request.open('POST',url)
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(JSON.stringify(clickEvent))
}
