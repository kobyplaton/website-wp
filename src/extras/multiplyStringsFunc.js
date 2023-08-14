export default function multiplyStrings(str1, str2) {
    const num1 = parseFloat(str1)
    const num2 = parseFloat(str2)
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const result = num1 * num2;
        return result.toFixed(2)
    }
}