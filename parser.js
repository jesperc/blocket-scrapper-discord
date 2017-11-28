let lastHref = "";
let startingDate = new Date();

const MIN_PRICE = 7000;

module.exports = {
    parse: (html) => {
        let href, title, rooms, rent, size, date;

        // href
        let start = html.indexOf("item_link");
        start = html.indexOf("href", start);
        start = html.indexOf('\"', start) + 1;
        let end = html.indexOf('\"', start);
        href = html.substring(start, end);

        // title
        start = html.indexOf(">", start) + 1;
        end = html.indexOf("<", start);
        title = html.substring(start, end).trim();

        // rooms
        start = html.indexOf("first rooms", start);
        start = html.indexOf(">", start) + 1;
        end = html.indexOf("<", start);
        rooms = html.substring(start, end);

        // rent
        start = html.indexOf("monthly_rent", start);
        start = html.indexOf(">", start) + 1;
        end = html.indexOf("<", start);
        rent = html.substring(start, end);

        // size
        start = html.indexOf("size", start);
        start = html.indexOf(">", start) + 1;
        end = html.indexOf("<", start);
        size = html.substring(start, end);

        // date
        start = html.indexOf("datetime", start);
        start = html.indexOf('\"', start) + 1;
        end = html.indexOf('\"', start);
        date = html.substring(start, end);      

        if (href !== lastHref && toDate(date) > startingDate) {
            console.log(" ");
            console.log(`${title}, ${rent}, ${size}, ${rooms}, ${date}, ${href}`);
            lastHref = href;
            return `${title}, ${rent}, ${size}, ${rooms}, ${date}, ${href}`;
        }
    }
};

const rentIsLargerThan = (rentStr, min) => {
    let index = rentStr.indexOf('k');
    console.log(index);
    if (index >= 0) {
        console.log(rentStr.substring(0, index));
        rentStr = rentStr.substring(0, index);
        rentStr = rentStr.replace(/\s+/g, '');
        console.log(rentStr);
        let rent = Number(rentStr.substring(0, index));
        console.log(rent);
        if (! isNaN(rent)) {
            console.log(rent + " => " + min);
            return rent >= min;
        }
    }
    // if the parsing failed, just return true. The rent will
    // atleast be less then the max rent passed in the URL.
    console.log("parsing failed, returns true");
    return true;
}

// works for YYYY-MM-DD hh:mm:ss
const toDate = (str) => {
    return new Date(str.replace(/-/g, '/'));
};