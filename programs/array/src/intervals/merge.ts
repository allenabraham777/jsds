/*
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

export const mergeIntervals = (intervals: number[][]) => {
    intervals.sort((x, y) => (x[0] <= y[0] && x[1] <= y[1] ? -1 : 1));
    const output = [intervals[0]];
    for (const interval of intervals) {
        const [start, end] = interval;
        const [prevInterval] = output.slice(-1);
        if (start <= prevInterval[1]) {
            prevInterval[1] = Math.max(prevInterval[1], end);
        } else {
            output.push(interval);
        }
    }
    return output;
};
