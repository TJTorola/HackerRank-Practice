const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

const main = input => {
	const factorial = bigFactorial(input.read());

	console.log(factorial);
	return factorial;
};

const range = (max, min = 1, arr = []) => {
	if (min > max) return arr;
	return range(max, min + 1, [...arr, min]);
};

const bigFactorial = num => {
	const nums    = range(Number(num)),
	      product = bigProductArray(nums);

	return product;
}

const bigProductArray = ([first, ...nums]) => (
	nums.map(num => (num).toString())
	    .reduce((left, right) => bigProduct(left, right), (first).toString())
);

const bigProduct = (left, right) => (
	toNums(left).reduce((acc, num, place) => (
		bigSum(productStep(right, num, place), acc)
	), '0')
);

const toNums = num => num.split('').reverse().map(Number);

const productStep = (num, left, place) => {
	const product = productWithSingleDigit(num, left),
	      result  = addPlaces(product, place);

	return result;
};

const productWithSingleDigit = (num, right) => (
	addCarry(toNums(num).reduce(({ val, carried }, left) => ({
		val: ((left * right + carried) % 10) + val,
		carried: Math.floor((left * right + carried) / 10)
	}), { val: '', carried: 0 }))
);

const addCarry = result => (
	(result.carried > 0) ? result.carried + result.val : result.val
);

const addPlaces = (num, place, added) => {
	if (!added) return addPlaces(num, place, num);
	if (place === 0) return added;
	return addPlaces(num, place - 1, added + '0');
};

const bigSum = (left, right) => (
	addCarry(twoReduce(left, right, ({ val, carried }, lNum, rNum) => ({
		val: ((lNum + rNum + carried) % 10) + val,
		carried: (lNum + rNum + carried > 9) ? 1 : 0
	}), { val: '', carried: 0 }))
);

const twoReduce = (left, right, callback, acc) => {
	const lNums = toNums(left),
	      rNums = toNums(right),
	      maxLength = Math.max(lNums.length, rNums.length),
	      idxs = range(maxLength - 1, 0);

	return idxs.reduce((acc, idx) => (
		callback(acc, (lNums[idx] || 0), (rNums[idx] || 0), idx)
	), acc);
};
