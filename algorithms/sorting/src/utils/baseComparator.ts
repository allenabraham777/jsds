export const baseComparator = <T>(a: T, b: T): -1 | 0 | 1 => {
    if (a === b) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
};
