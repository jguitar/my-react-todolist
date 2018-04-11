/* global describe, it, browser, beforeEach */

const expect = require('chai').expect

describe('TodoList App', () => {
  const todoText = 'Get better at testing'

  beforeEach(() => {
    browser.url('http://localhost:3000/')
  })

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle()

    expect(actualTitle).to.eql('Todo List')
  })

  it('should allow me to create a Todo', () => {
    browser.element('.todo-input').setValue(todoText)
    browser.click('.todo-submit')
    const actual = browser.element('.todo-text').getText()

    expect(actual).to.equal(todoText)
  })

  it('should allow me to delete a Todo', () => {
    browser.element('.todo-input').setValue(todoText)
    browser.click('.todo-submit')
    browser.click('.todo-delete')
    const actual = browser.element('.todo-text')

    expect(actual.state).to.equal('failure')
  })

  it('should allow me to undelete a Todo', () => {
    browser.element('.todo-input').setValue(todoText)
    browser.click('.todo-submit')
    browser.click('.todo-delete')
    expect(browser.isExisting('.todo-text')).to.equal(false)
    browser.click('.todo-undelete')
    expect(browser.isExisting('.todo-text')).to.equal(true)
  })

  it('should allow me to undelete a Todo when there are items deleted and not before', () => {
    expect(browser.isEnabled('.todo-undelete')).to.equal(false)

    browser.element('.todo-input').setValue(todoText)
    browser.click('.todo-submit')

    expect(browser.isEnabled('.todo-undelete')).to.equal(false)

    browser.click('.todo-delete')

    expect(browser.isEnabled('.todo-undelete')).to.equal(true)
  })
})
