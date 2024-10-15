
export const formatPrice = (price) =>{
    if (price >= 10000) {
        const billion = Math.floor(price / 10000);
        const remainder = price % 10000;
        if (remainder === 0) {
            return `${billion}억`;
        }
        return `${billion}억 ${remainder.toLocaleString()}만원`;
    } else {
        return `${price.toLocaleString()}만원`;
    }
};