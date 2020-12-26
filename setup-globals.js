async function test(title, callback) {
	try {
		await callback();
		console.log(`✔ ${title}`);
	} catch (error) {
		console.log(`❌ ${title}`, error);
	}
}

function expect(actual) {
	return {
		toBe: (expected) => {
			if (actual !== expected)
				throw new Error(`${actual} not equal to ${expected}`);
		},
		toEqual: (expected) => {},
		toBeGreaterThan: (expected) => {
			if (!(actual > expected))
				throw new Error(`${actual} not greater than ${expected}`);
		},
		toBeLessThan: (expected) => {
			if (!(actual < expected))
				throw new Error(`${actual} not less than ${expected}`);
		},
	};
}
global.test = test;
global.expect = expect;
