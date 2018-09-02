declare const module;

class FormatStringBuilder {
	private nl: string;
	private str: string;

	constructor(str: string, nl?: string) {
		this.str = str ? str : "";
		this.nl = nl ? nl : "\n";
	}

	get length(): number {
		return this.str.length;
	}

	get lines(): string[] {
		return this.str.split(this.nl);
	}

	get newline(): string {
		return this.nl;
	}

	append(str: string): FormatStringBuilder {
		this.str += str;

		return this;
	}

	appendLn(str: string = ""): FormatStringBuilder {
		return this.append(str + this.nl);
	}

	format(...args: string[]): FormatStringBuilder {
		const regex: RegExp = /{(\d+)}/gm;
		let formatString: string = args[0];

		let matches: RegExpExecArray;
		while ((matches = regex.exec(formatString))) {
			const matchedString: string = matches[0];
			const index: number = Number(matches[1]) + 1;

            if (args[index]) {
                formatString = formatString.replace(matchedString, args[index]);
            }
		}

		return this.append(formatString);
	}

	clear(): FormatStringBuilder {
		this.str = "";

		return this;
	}

	toString(): string {
		return this.str;
	}
}
module.exports = FormatStringBuilder;