
const list = document.querySelector('.list-group');

const input = document.querySelector('.form-control')

const button = document.querySelector('.btn')

button.addEventListener('click',()=>{
    let item = document.createElement('li')
    item.setAttribute('class', 'list-group-item d-flex align-items-center justify-content-between')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.setAttribute('class', 'chackbok me-3')
    let heading = document.createElement('h5')
    heading.classList.add('.heading')
    heading.textContent = input.value
    let buttons = document.createElement('div')
    let deleter = document.createElement('button')
    deleter.setAttribute('class', 'me-3')
    deleter.textContent = 'Delete me'
    let render = document.createElement('button')
    render.textContent = 'Render me'

    item.appendChild(checkbox)
    item.appendChild(heading)
    item.appendChild(buttons)
    buttons.appendChild(deleter)
    buttons.appendChild(render)

    list.appendChild(item)

    input.value = ''

    checkbox.addEventListener('click', ()=>{
        if(heading.style.color == 'red')  {
            heading.style.color = 'black'
        }else {
            heading.style.color = 'red'
        }
    })

    deleter.addEventListener('click', ()=>{{
        deleter.parentNode.parentNode.remove()
    }})
})