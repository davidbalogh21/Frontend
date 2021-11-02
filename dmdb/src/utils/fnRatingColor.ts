export default function getColorOfRating(number: number) {
    if (number <= 5.5) {
        return '#B22222';
    } else if (number > 5.5 && number < 7.5) {
        return '#999900';
    } else if (number >= 7.5) {
        return '#008000';
    }
}