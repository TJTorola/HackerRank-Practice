// https://www.hackerrank.com/challenges/divisible-sum-pairs

// 6 3
// 1 3 2 6 1 2
// => 5

// 2 2
// 8 10
// => 1

const input = (() => {
	let collection = "",
	    line = 0;

	return {
		append: input => {
			collection = [...collection, ...input.split("\n")]
		},

		read: l => collection[l || line++],

		readNumArr: l => (
			collection[l || line++].split(' ').map(Number)
		)
	};
})();

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", input.append);
process.stdin.on("end", () => main(input));

const main = input => {
	const [ _, target ] = input.readNumArr(),
	      vals  = input.readNumArr(),
	      count = countDivisiblePairs(target, vals);

	console.log(count);
	return count;
};

const countDivisiblePairs = (target, vals) => (
	vals.reduce(({ partners, count }, val) => ({
		count: count + partners[(target - (val % target)) % target],
		partners: incArray(partners, val % target)
	}), {
		partners: zeroArray(target),
		count: 0
	}).count
);

const incArray = (arr, inc) => arr.map((val, idx) => (
	(idx === inc) ? val + 1 : val
));

const prodArray = (length, producer, arr = []) => {
	if (arr.length === length) return arr;
	return prodArray(length, producer, [...arr, producer(arr.length)]);
};

const zeros = () => 0;
const zeroArray = (length) => prodArray(length, zeros);