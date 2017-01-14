const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/sock-merchant

const main = input => {
	let sockSet = new Set();

	const socks = input.readNumArr(1),
	      pairs = pairCount(socks);

	console.log(pairs);
	return pairs;
}

const pairCount = arr => {
	let set = new Set();

	return arr.reduce((cnt, el) => {
		if (set.has(el)) {
			set.delete(el);
			return cnt + 1;
		} else {
			set.add(el);
			return cnt;
		}
	}, 0);
};
