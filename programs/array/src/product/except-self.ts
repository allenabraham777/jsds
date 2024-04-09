export const productExceptSelf = (array: number[]) => {
    let product_left = 1;
    let product_right = 1;
    const n = array.length;
    const output = new Array(n).fill(1);
    for (let i = 0; i < n - 1; i++) {
        product_left *= array[i];
        output[i + 1] = product_left;
    }
    for (let i = n - 1; i > 0; i--) {
        product_right *= array[i];
        output[i - 1] *= product_right;
    }
    return output;
};
