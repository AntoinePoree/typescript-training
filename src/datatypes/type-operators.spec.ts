describe('Object Types', () => {

	describe('typeof operator', () => {
		// define your answers to make tests pass

		it('defines primitive types precisely', () => {
			expect(typeof 2016).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof '2016').toEqual( 'string'/* YOUR ANSWER HERE */ );
			expect(typeof ('2016' + 1)).toEqual( 'string'/* YOUR ANSWER HERE */ );
			expect(typeof ('2016' - 1)).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof ('2016' == 2016)).toEqual( 'boolean'/* YOUR ANSWER HERE */ );
			expect(typeof ('2016' === 2016)).toEqual( 'boolean'/* YOUR ANSWER HERE */ );

			expect(typeof true).toEqual('boolean' /* YOUR ANSWER HERE */ );
			expect(typeof (true + true)).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof true + true).toEqual( 'booleantrue'/* YOUR ANSWER HERE */ );

			var activity = 'training';
			expect(typeof activity).toEqual( 'string'/* YOUR ANSWER HERE */ );
			expect(typeof activity.length).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof activity.split).toEqual( 'function'/* YOUR ANSWER HERE */ );
			expect(typeof activity.split('')).toEqual( 'object'/* YOUR ANSWER HERE */ );
		});

		it('defines complex types not that precisely', () => {
			expect(typeof Math).toEqual('object' /* YOUR ANSWER HERE */ );
			expect(typeof Math.sqrt).toEqual( 'function'/* YOUR ANSWER HERE */ );
			expect(typeof Math.PI).toEqual( 'number'/* YOUR ANSWER HERE */ );

			var list = [1, 2, 3, 4, 5];
			expect(typeof list).toEqual( 'object'/* YOUR ANSWER HERE */ );
			expect(typeof list.length).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof list[0]).toEqual( 'number'/* YOUR ANSWER HERE */ );

			var person = {
				first: "John",
				last: "Lennon"
			}
			expect(typeof person).toEqual( 'object'/* YOUR ANSWER HERE */ );
			expect(typeof person.first).toEqual( 'string'/* YOUR ANSWER HERE */ );
			expect(typeof person['last']).toEqual( 'string'/* YOUR ANSWER HERE */ );
			expect(typeof person['last'].length).toEqual( 'number'/* YOUR ANSWER HERE */ );
		});

		it('defines instances and constructors rather poorly', () => {
			function Person(first, last){
				this.first = first;
				this.last = last;
			}
			Person.prototype.age = 40;

			var john = new Person("John", "Lennon");
			expect(typeof john).toEqual( 'object'/* YOUR ANSWER HERE */ );
			expect(typeof (john + '')).toEqual('string' /* YOUR ANSWER HERE */ );
			expect(typeof Person).toEqual( 'function'/* YOUR ANSWER HERE */ );
			expect(typeof john.age).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof Person.prototype).toEqual( 'object'/* YOUR ANSWER HERE */ );
			expect(typeof Person.prototype.age).toEqual( 'number'/* YOUR ANSWER HERE */ );
			expect(typeof john.constructor).toEqual( 'function' );
		});
	});

	describe('instanceof operator', () => {
		// define your answers to make tests pass

		it('checks if operand 1 is a descendant of operand 2', () => {
			function Person(first, last, age?){
				this.first = first;
				this.last = last;
			}
			var john = new Person("John", "Lennon");
			var paul = {
				first: "Paul",
				last: "McCartney"
			};

			expect(john instanceof Object).toEqual( true/* YOUR ANSWER HERE */ );
			expect(paul instanceof Object).toEqual( true/* YOUR ANSWER HERE */ );
			expect(Person instanceof Object).toEqual(true /* YOUR ANSWER HERE */ );
			expect(Object instanceof Object).toEqual( true/* YOUR ANSWER HERE */ );

			expect(john instanceof Person).toEqual( true/* YOUR ANSWER HERE */ );
			expect(paul instanceof Person).toEqual( false/* YOUR ANSWER HERE */ );
			expect(Person instanceof Person).toEqual( false/* YOUR ANSWER HERE */ );

			expect(Function instanceof Person).toEqual( false/* YOUR ANSWER HERE */ );
			expect(Function instanceof Object).toEqual( true/* YOUR ANSWER HERE */ );
			expect(Person instanceof Function).toEqual( true/* YOUR ANSWER HERE */ );
			expect(Object instanceof Function).toEqual( true/* YOUR ANSWER HERE */ );
		});
	});

});
