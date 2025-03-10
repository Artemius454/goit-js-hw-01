function getElementWidth(content, padding, border) {

    const validBorder = border.replace(`,`, `.`);
    const validPadding = padding.replace(`,`, `.`);
    const validContent = content.replace(`,`, `.`);

    const borderNum = parseFloat(validBorder);
    const paddingNum = parseFloat(validPadding);
    const contentNum = parseFloat(validContent);

    const res = contentNum + paddingNum * 2 + borderNum * 2;
    return res;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
