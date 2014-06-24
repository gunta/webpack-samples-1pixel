/*jshint esnext:true */

// ES5 modules
var $ = require('jquery')
var _ = require('lodash')
var Backbone = require('backbone')
require('backbone.localStorage')


const { Model, View, Collection, Router, LocalStorage } = Backbone

const ENTER_KEY = 13
let TodoFilter = ''

// Todo Model class
class Todo extends Model {

  defaults() {
    return {
      title: '',
      completed: false
    }
  }

  toggle() {
    this.save({
      completed: !this.get('completed')
    })
  }
}


// TodoList Collection class
class TodoList extends Collection {

  constructor(options) {
    super(options)

    this.model = Todo

    this.localStorage = new LocalStorage('todos-traceur-backbone')
  }

  completed() {
    return this.filter(todo => todo.get('completed'))
  }

  remaining() {
    return this.without(...this.completed())
  }

  nextOrder() {
    if (!this.length) {
      return 1
    }

    return this.last().get('order') + 1
  }

  comparator(todo) {
    return todo.get('order')
  }
}

// Global collection of Todos
let Todos = new TodoList()

// Todo Item View class
class TodoView extends View {

  constructor(options) {
    this.tagName = 'li'

    this.template = _.template($('#item-template').html())

    this.input = ''

    this.events = {
      'click .toggle': 'toggleCompleted',
      'dblclick label': 'edit',
      'click .destroy': 'clear',
      'keypress .edit': 'updateOnEnter',
      'blur .edit': 'close'
    }

    super(options)

    this.listenTo(this.model, 'change', this.render)
    this.listenTo(this.model, 'destroy', this.remove)
    this.listenTo(this.model, 'visible', this.toggleVisible)

  }

  render() {
    this.$el.html(this.template(this.model.toJSON()))
    this.$el.toggleClass('completed', this.model.get('completed'))
    this.toggleVisible()
    this.input = this.$('.edit')
    return this
  }

  toggleVisible() {
    this.$el.toggleClass('hidden', this.isHidden)
  }

  get isHidden() {
    const isCompleted = this.model.get('completed')
    return (// hidden cases only
      (!isCompleted && TodoFilter === 'completed') ||
      (isCompleted && TodoFilter === 'active')
      )
  }

  toggleCompleted() {
    this.model.toggle()
  }

  edit() {
    const value = this.input.val()

    this.$el.addClass('editing')
    this.input.val(value).focus()
  }

  close() {
    const title = this.input.val()

    if (title) {
      this.model.save({ title })
    } else {
      this.clear()
    }

    this.$el.removeClass('editing')
  }

  updateOnEnter(e) {
    if (e.which === ENTER_KEY) {
      this.close()
    }
  }

  clear() {
    this.model.destroy()
  }
}

// The Application class
class AppView extends View {

  constructor() {
    this.setElement($('#todoapp'), true)

    this.statsTemplate = _.template($('#stats-template').html())

    this.events = {
      'keypress #new-todo': 'createOnEnter',
      'click #clear-completed': 'clearCompleted',
      'click #toggle-all': 'toggleAllComplete'
    }

    this.allCheckbox = this.$('#toggle-all')[0]
    this.$input = this.$('#new-todo')
    this.$footer = this.$('#footer')
    this.$main = this.$('#main')

    this.listenTo(Todos, 'add', this.addOne)
    this.listenTo(Todos, 'reset', this.addAll)
    this.listenTo(Todos, 'change:completed', this.filterOne)
    this.listenTo(Todos, 'filter', this.filterAll)
    this.listenTo(Todos, 'all', this.render)

    Todos.fetch()

    super()
  }

  render() {
    const completed = Todos.completed().length
    const remaining = Todos.remaining().length

    if (Todos.length) {
      this.$main.show()
      this.$footer.show()

      this.$footer.html(
        this.statsTemplate({
          completed, remaining
        })
      )

      this.$('#filters li a')
        .removeClass('selected')
        .filter('[href="#/' + (TodoFilter || '') + '"]')
        .addClass('selected')
    } else {
      this.$main.hide()
      this.$footer.hide()
    }

    this.allCheckbox.checked = !remaining
  }

  addOne(model) {
    const view = new TodoView({ model })
    $('#todo-list').append(view.render().el)
  }

  addAll() {
    this.$('#todo-list').html('')
    Todos.each(this.addOne, this)
  }

  filterOne(todo) {
    todo.trigger('visible')
  }

  filterAll() {
    Todos.each(this.filterOne, this)
  }

  newAttributes() {
    return {
      title: this.$input.val().trim(),
      order: Todos.nextOrder(),
      completed: false
    }
  }

  createOnEnter(e) {
    if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
      return
    }

    Todos.create(this.newAttributes())
    this.$input.val('')
  }

  clearCompleted() {
    _.invoke(Todos.completed(), 'destroy')
    return false
  }

  toggleAllComplete() {
    const completed = this.allCheckbox.checked
    Todos.each(todo => todo.save({ completed }))
  }
}

// The Filters Router class
class Filters extends Router {

  constructor() {
    this.routes = {
      '*filter': 'filter'
    }

    this._bindRoutes()
  }

  filter(param = '') {
    TodoFilter = param

    Todos.trigger('filter')
  }
}


export { AppView, Filters }
