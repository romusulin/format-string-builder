var expect = require("chai").expect;
var FormatStringBuilder = require("../lib/format-string-builder");
describe("Format string builder tests", () => {
	it ("should format single arg", () => {
		const Builder = new FormatStringBuilder();
		Builder.format("Hello {0}", "world");

		expect(Builder.toString()).to.equal("Hello world");
		expect(Builder.clear().toString()).to.equal("");
	});

	it ("should format multiple args", () => {
		const Builder = new FormatStringBuilder();
		Builder.format("Hello {0}, my name is {1} {2} and i am very {3} to {4} you", "you", "uncle", "bob", "pleased", "meet");

		expect(Builder.toString()).to.equal("Hello you, my name is uncle bob and i am very pleased to meet you");
		expect(Builder.clear().toString()).to.equal("");
	});

	it("should append and appendLn", () => {
		const Builder = new FormatStringBuilder();

		Builder.append("first line");
		expect(Builder.toString()).to.equal("first line");

		Builder.append(" ");
		Builder.append("still first line");
		expect(Builder.toString()).to.equal("first line still first line");

		Builder.appendLn();
		Builder.append("second line");
		expect(Builder.toString()).to.equal("first line still first line\nsecond line");

		expect(Builder.lines.length).to.equal(2);
		expect(Builder.lines[0]).to.equal("first line still first line");
		expect(Builder.lines[1]).to.equal("second line");

		expect(Builder.length).to.equal("first line still first line\nsecond line".length)

	});

	it("should get and set newline", () => {
		const Builder = new FormatStringBuilder();
		expect(Builder.newline).to.equal("\n");

		Builder.newline = "rakija";
		expect(Builder.newline).to.equal("rakija");
	});
});



