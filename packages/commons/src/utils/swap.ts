export const swap = <T>(array1: T[], array2: T[], idx1: number, idx2: number) => {
    const temp = array1[idx1];
    array1[idx1] = array2[idx2];
    array2[idx2] = temp;
};
