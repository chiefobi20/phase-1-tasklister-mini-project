document.addEventListener("DOMContentLoaded", () => {

    const createTaskElement = document.getElementById('create-task-form')
    createTaskElement.addEventListener('submit', (event) => {
    event.preventDefault()


    const newTaskDescriptionElement = document.getElementById('new-task-description')

    const liElement = document.createElement('li')
    liElement.textContent = newTaskDescriptionElement.value

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.setAttribute('date-description', newTaskDescriptionElement.value)
    deleteButton.addEventListener('click', (event) => {
      //liElement.remove()
      event.target.parentNode.remove()
    })

    liElement.appendChild(deleteButton)

    const tasksUlElement = document.getElementById('tasks')
    tasksUlElement.append(liElement)

    createTaskElement.reset()
  })
});
