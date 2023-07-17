export const convertImageSizes = ({width = 250, height = 250}, optimalLength = 250) => {
    const ratio = height / width;
    
    if (width > height) {
        console.log(width, height, ratio)
        console.log({width: String(optimalLength), height: String(optimalLength * ratio)})
        return {width: String(optimalLength), height: String(optimalLength * ratio)}
    } else {
        return {width: String(optimalLength / ratio), height: String(optimalLength)}
    }

} 