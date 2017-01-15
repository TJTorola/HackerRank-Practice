const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/strange-advertising

const main = input => {
	const days = Number(input.read()),
	      likes = countLikes(days);

	console.log(likes);
	return likes;
}

const countLikes = (days, people = 5, total = 0) => {
	if (days === 0) return total;

	const likes = Math.floor(people / 2);
	return countLikes(days - 1, likes * 3, total + likes);
}