/**
 * selected 배열에 포함된 data 배열의 원소들을 왼쪽으로 한 칸씩 옴기는 프로그램을 작성해주세요.
 *
 * 예) data = [1, 2, 3], selected = [1],       data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2],       data' = [2, 1, 3]
 * 예) data = [1, 2, 3], selected = [3],       data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [1, 2],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2, 1],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [1, 3],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [3, 1],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [2, 3],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [3, 2],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [1, 2, 3], data' = [1, 2, 3]
 */

const data = [1, 2, 3];
const selected = [1];

function shiftSelectedLeft(data, selected) {
	const result = [...data];
	const sortedSelected = [...new Set(selected)].sort((a, b) => a - b);

	if (sortedSelected.length <= 1 || sortedSelected.length === data.length) {
		return result;
	}
	let groups = [];
	let currentGroup = [sortedSelected[0]];

	for (let i = 1; i < sortedSelected.length; i++) {
		if (sortedSelected[i] - sortedSelected[i - 1] === 1) {
			currentGroup.push(sortedSelected[i]);
		} else {
			groups.push([...currentGroup]);
			currentGroup = [sortedSelected[i]];
		}
	}
	groups.push(currentGroup);
	for (let group of groups) {
		if (group.length > 1) {
			const firstVal = result[group[0] - 1];
			for (let i = 0; i < group.length - 1; i++) {
				result[group[i] - 1] = result[group[i + 1] - 1];
			}
			result[group[group.length - 1] - 1] = firstVal;
		}
	}

	return result;
}

console.log(shiftSelectedLeft(data, selected));
