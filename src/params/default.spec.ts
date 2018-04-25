describe('default parameters', () => {

  it('can be triggered when the incoming argument is undefined', () => {
    function shoot(name = 'Steve') {
      return name
    }

    expect(shoot('Chris')).toBe('Chris'/* YOUR ANSWER */)
    expect(shoot(undefined)).toBe('Steve'/* YOUR ANSWER */)
    expect(shoot(null)).toBe(null/* YOUR ANSWER */)
    expect(shoot()).toBe('Steve'/* YOUR ANSWER */)
  })

  it('are not included in arguments', () => {
    function shoot(name = 'Steve') {
      return arguments.length
    }

    expect(shoot('Chris')).toBe(1/* YOUR ANSWER */)
    expect(shoot(null)).toBe(1/* YOUR ANSWER */)
    expect(shoot()).toBe(0/* YOUR ANSWER */)
  })

  it('can trigger a function call', () => {
    let triggerCount = 0

    function shoot(name = getDefault()) {
      return name
    }

    function getDefault() {
      triggerCount++
      return 'Steve'
    }

    expect(triggerCount).toBe(0/* YOUR ANSWER */)
    expect(shoot('Chris')).toBe('Chris'/* YOUR ANSWER */)
    expect(shoot()).toBe('Steve'/* YOUR ANSWER */)
    expect(shoot(undefined)).toBe('Steve'/* YOUR ANSWER */)
    expect(triggerCount).toBe(2/* YOUR ANSWER */)
  })

  it('can default all arguments, optionally', () => {
    // Modify the method signature of `myFunction` to allow for all args to be optional

    function myFunction({ name = 'love', age = 20, favoriteBand = 'BANGBANG' } = {}) {
      expect(name).toBeDefined()
      expect(age).toBeDefined()
      expect(favoriteBand).toBeDefined()
    }

    myFunction({name: 'John', age: 40, favoriteBand: 'The Beatles'})
    myFunction({name: 'John', age: 40})
    myFunction({name: 'John'})
    myFunction({})
    myFunction()
  })

})
