let lastHref = "";
let startingDate = new Date();

module.exports = {
    parse: (html) => {
        console.log(html.length);
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
            console.log(`New ad: ${title}, ${rent}, ${size}, ${rooms}, ${date}, ${href}`);
            lastHref = href;
            return `${title}, ${rent}, ${size}, ${rooms}, ${date}, ${href}`;
        }
    }
};

// works for YYYY-MM-DD hh:mm:ss
const toDate = (str) => {
    return new Date(str.replace(/-/g, '/'));
};