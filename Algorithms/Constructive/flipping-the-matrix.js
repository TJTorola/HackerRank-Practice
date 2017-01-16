const input = (() => {
	let collection = "";

	return {
		append: input => collection += input,
		return: () => collection
	};
})();

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", input.append);
process.stdin.on("end", () => main(input.return()));

const main = input => {
	const matrices = parseInput(input),
	      maxVals  = matrices.map(findMax);

	maxVals.forEach(val => console.log(val));
	return maxVals;
};

const parseInput = input => {
	const lines = input.split('\n'),
	      [ _, ...mData ] = lines;

	return parseMatricies(mData);
};

const parseMatricies = (data, matrices = []) => {
	if (data.length === 0) return matrices;

	const [ strCount, ...body ] = data,
	      count                 = Number(strCount),
	      [ rows, tail ]        = take(count * 2, body),
	      matrix                = toNumMatrix(rows);

	return parseMatricies(tail, [...matrices, matrix]);
};

const take = (times, data, rows = []) => {
	if (times === 0) return [ rows, data ];

	const [ row, ...rest ] = data;
	return take(times - 1, rest, [...rows, row]);
};

const toNumMatrix = rows => rows.map(rowStr => (
	rowStr.split(' ').map(Number)
));

const findMax = matrix => {
	const { length }     = matrix[0],
	      cornerMatrix   = idxMatrix(length / 2),
	      cornerPosx     = flatten(cornerMatrix),
	      possibleMapper = toPossiblePosx(length),
	      possiblePosx   = cornerPosx.map(possibleMapper),
	      matrixMapper   = toMatrixVals(matrix),
	      possibleVals   = possiblePosx.map(matrixMapper),
	      maxVals        = possibleVals.map(vals => Math.max(...vals))
	      max            = maxVals.reduce((acc, val) => acc + val);

	return max;
};

const toMatrixVals = matrix => arr => (
	arr.map(([x, y]) => matrix[x][y])
);

const flatten = arr => (
	arr.reduce((acc, el) => (
		[...acc, ...el]
	), [])
);

const times = (func, input, count) => {
	if (count === 0) return input;
	return times(func, func(input), count - 1);
};

const idxMatrix = length => (
	Array(Length).fill(null).map(
        Array(Length).fill(null).map((_, idx) => idx)
    )
);

const range = (max, min = 0, arr = []) => {
	if (min >= max) return arr;
	return range(max, min + 1, [...arr, min]);
};

const toPossiblePosx = size => {
	const r = reflection(size),
          rx = x + r(x),
          ry = y + r(y);

	return ([x, y]) => ([
		[ x,  y  ],
		[ rx, y  ],
		[ x,  ry ],
		[ rx, ry ]
	]);
};

const reflection = size => idx => (
	(((size / 2) - idx) * 2) - 1
);