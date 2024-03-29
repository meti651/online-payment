export function formatCreditNum(num) {
    return [...num.replaceAll(" ", "")]
        .reduce((acc, curr, index) => {
            let result = acc + curr;
            if (index % 4 === 3) result += " ";
            return result;
        }, "")
        .trim();
}
