const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

const main = input => {
	const from = input.read(),
	      too = input.read(),
	      operations = Number(input.read());

	if (from.length + too.length <= operations) return yes();

	const sameCnt = sameStartCnt(from, too),
	      diff = (from.length + too.length) - (sameCnt * 2);

	if (diff > operations) return no();
	if ((operations - diff) % 2 === 0) return yes();
	return no();
};

const sameStartCnt = (left, right, idx = 0) => {
	if (idx === left.length || idx === right.length) return idx;
	if (left[idx] != right[idx]) return idx;
	return sameStartCnt(left, right, idx + 1);
}

const yes = () => {
	console.log('Yes');
	return true;
};

const no = () => {
	console.log('no');
	return false;
};
