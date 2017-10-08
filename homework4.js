// 1. If you don't understand what's happening here, please follow this link: https://youtu.be/DbXjQEnjOp0

// 2. A function  that prints an upside-down triangle to the console of the given height.  

const triangleStars = function(n) {

	const k = n*2-1;

	const inner = function(n, index) {

		if ( n >= k ) {
			return ' ';
		}

		const spaces = function(index) {
		  	if(index>=n) {
		  		return ' ';
		  	}

		  	return ' ' + spaces(index+1);
		}

		const stars = function(n) {
		  	if(n>=k) {
		  		return ' ';
		  	}
		  	return '*' + stars(n+1);
		}

		console.log(spaces(index) + stars(n))
		return inner(n+2, index+1)
		
	}		

	return inner(0,0)
}

// 3. A function which takes two arguments, base and n.  It should than return the result of multiplying the base times itself n time (that is to say, return base to the power of n).

const pow = function(base, n) {

	if(base < 0 || n < 0) {
		return "Hey bro! Insert only with positive numbers."
	}

	if(n === 1) {
		return base;
	}

	return base * pow(base, n-1);
}

// 4. A function that reverses a string with recursion. 
// See the explanation here: https://youtu.be/f8Kh-7Mq47Y

const reverseString = function(str) {

	const inner = function(str, index) {
		if(index>=str.length) {
			return '';
		}
		else {
			return str[(str.length-1)-index] + inner(str, index+1);
		}
	};

	return inner(str, 0);
}


// 5. A function which, given a size argument, will draw an n by n checkerboard on the screen. 

//Prints in the console

const checkerboardConsole = function(n) {
	const inner = function(n) {

		const k = n;		

		const other = function(n, index) {
			if ( n <= 0 || index >= k) {
				return ' ';
			}

			const stars = function(n) {
				if( n <= 0 ) {
					return ' ';
				}

				return '*' + ' ' + stars(n-1);
			}

			const frontSpace = function(index) {
				if( index%2 === 0 ) 
					return ''
				return ' '
			}

			console.log(frontSpace(index) + stars(n))
			return other(n, index+1);

		}

		return other(n,0);

	}		

	return inner(n)
}

//Prints on the screen

const checkerboard = function(n) {

	const inner = function(n, index) {
		if ( n <= 0 || index >= n) {
			return ' ';
		}

		const stars = function(n) {
			if( n <= 0 ) {
				return ' ';
			}

			return '*' + ' ' + stars(n-1);
		}

		const frontSpace = function(index) {
			if( index%2 === 0 ) 
				return ''
			return "&nbsp;"
		}

		return document.getElementById('root').innerHTML = frontSpace(index) + stars(n)  + "<br>" + inner(n, index+1);

	}

	return inner(n,0);

}