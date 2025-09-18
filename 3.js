function whatCentury(year) {
    let firstPartOfYear = year.slice(0, 2);
    let secondPartOfYear = year.slice(2);
    let century;
    
    if (secondPartOfYear === "00") {
        century = parseInt(firstPartOfYear);
    } else {
        century = parseInt(firstPartOfYear) + 1;
    }

    if (century % 100 >= 11 && century % 100 <= 13) {
        return century + "th";
    }
    
    switch (century % 10) {
        case 1:
            return century + "st";
        case 2:
            return century + "nd";
        case 3:
            return century + "rd";
        default:
            return century + "th";
    }
}