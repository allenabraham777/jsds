/*
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */

export const generatePascalsTriangle = (numRows: number) => {
    const output = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row = [1];
        const [prevRow] = output.slice(-1);
        for (let j = 1; j < prevRow.length; j++) {
            row.push(prevRow[j] + prevRow[j - 1]);
        }
        row.push(1);
        output.push(row);
    }
    return output;
};
