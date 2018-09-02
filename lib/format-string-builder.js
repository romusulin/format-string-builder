class FormatStringBuilder {
    constructor(str = "") {
        this.nl = "\n";
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    get lines() {
        return this.str.split(this.nl);
    }
    get newline() {
        return this.nl;
    }
    set newline(newline) {
        this.nl = newline;
    }
    append(str) {
        this.str += str;
        return this;
    }
    appendLn(str = "") {
        return this.append(str + this.nl);
    }
    format(...args) {
        const regex = /{(\d+)}/gm;
        let formatString = args[0];
        let matches;
        while ((matches = regex.exec(formatString))) {
            const matchedString = matches[0];
            const index = Number(matches[1]) + 1;
            if (args[index]) {
                formatString = formatString.replace(matchedString, args[index]);
            }
        }
        return this.append(formatString);
    }
    clear() {
        this.str = "";
        return this;
    }
    toString() {
        return this.str;
    }
}
module.exports = FormatStringBuilder;
//# sourceMappingURL=format-string-builder.js.map