export const API_KEY = 'AIzaSyCsL1m7GTOYnal5P4t6V5drFAJjgi6JU_o'

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}