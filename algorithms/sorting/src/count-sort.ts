export const countSort = (array: number[], asc: boolean = true) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    if (min < 0) throw new Error('Negative elements are not allowed in count sort');
    const count = Array(max + 1).fill(0);
    for (const item of array) {
        count[item]++;
    }
    const incrementer = asc ? 1 : -1;
    let i = asc ? 0 : max;
    const limit = asc ? max + 1 : -1;
    for (let j = 0; i !== limit && j < array.length; i += incrementer) {
        while (count[i] > 0) {
            count[i]--;
            array[j++] = i;
        }
    }
    return array;
};
