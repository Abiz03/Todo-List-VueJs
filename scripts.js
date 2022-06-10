var todos = []

const todo = {
  data() {
    return {
      todoList: window.todos,
      newTodo: {
        active: false,
      },
    }
  },
  methods: {
    addNewTodo() {
      if (this.newTodo.item) {
        this.todoList.push(this.newTodo);
        this.newTodo = { active: false }
        localStorage.setItem('todos', JSON.stringify(this.todoList))
      } else {
        alert("There is no task to add !")
      }
    },
  },
  created() {
    this.todoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todoList
  },
  updated() {
    localStorage.setItem('todos', JSON.stringify(this.todoList))
  }
}

Vue.createApp(todo).mount('#app')