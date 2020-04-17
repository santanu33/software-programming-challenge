const {LinkedList} = require("./singly-linked-list");
const assert = require("chai").assert;

function assertListValues(list, values) {
    const listValues = [...list.values()];
    expect(listValues).toEqual(values);
}

describe("LinkedList", () => {

    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe("add()", () => {

        it("should store an item when one item is added", () => {
            list.add(1);
            const listValues = [...list.values()];
            expect(listValues).toEqual([1]);
        });

        it("should store multiple items when multiple items are added", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            const listValues = [...list.values()];
            expect(listValues).toEqual([1, 2, 3]);
        });
    });

    describe("insertBefore()", () => {

        it("should store an item when one item is inserted at the start", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertBefore(0, 0);
            assertListValues(list, [0, 1, 2, 3]);
        });

        it("should store an item when one item is inserted in the middle", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertBefore(1.5, 1);
            assertListValues(list, [1, 1.5, 2, 3]);
        });

        it("should store an item when one item is inserted at the end", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertBefore(2.5, 2);
            assertListValues(list, [1, 2, 2.5, 3]);
        });

        it("should throw an error when the list is empty", () => {
            expect(()=>list.insertBefore(1, 0)).toThrow('Index 0 does not exist in the list.');
        });

        it("should throw an error when the index is out of range", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);
            expect(()=> list.insertBefore(1, 5)).toThrow('Index 5 does not exist in the list.');

        });

    });

    describe("insertAfter()", () => {

        it("should store an item when one item is inserted at the start", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertAfter(1.5, 0);
            assertListValues(list, [1, 1.5, 2, 3]);
        });

        it("should store an item when one item is inserted in the middle", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertAfter(2.5, 1);
            assertListValues(list, [1, 2, 2.5, 3]);
        });

        it("should store an item when one item is inserted at the end", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            list.insertAfter(3.5, 2);
            assertListValues(list, [1, 2, 3, 3.5]);
        });

        it("should throw an error when the list is empty", () => {
            expect(()=> list.insertAfter(1, 0)).toThrow('Index 0 does not exist in the list.');
        });

        it("should throw an error when the index is out of range", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);
            expect(()=> list.insertAfter(1, 5)).toThrow('Index 5 does not exist in the list.');
        });

    });

    describe("get()", () => {

        it("should return the first item when get(0) is called", () => {
            list.add(1);
            assert.strictEqual(list.get(0), 1);
        });

        it("should return the correct value when get() is called multiple times", () => {
            list.add(1);
            list.add(2);
            assert.strictEqual(list.get(0), 1);
            assert.strictEqual(list.get(1), 2);
        });

        it("should return undefined when get() is called with -1", () => {
            expect(list.get(-1)).toEqual(undefined);

        });

        it("should return undefined when get() is called with an out-of-range index in an empty list", () => {
            expect(list.get(1)).toEqual(undefined);
        });

        it("should return undefined when get() is called with an out-of-range index in a non-empty list", () => {
            list.add(1);
            list.add(2);
            expect(list.get(5)).toEqual(undefined);
        });

    });

    describe("indexOf()", () => {

        it("should return -1 when the list is empty", () => {
            assert.strictEqual(list.indexOf(1), -1);
        });

        it("should return 0 when the list has one item", () => {
            list.add(1);
            assert.strictEqual(list.indexOf(1), 0);
        });

        it("should return 1 when the list has two items", () => {
            list.add(1);
            list.add(2);
            assert.strictEqual(list.indexOf(2), 1);
        });

        it("should return -1 when the list doesn't contain the value", () => {
            list.add(1);
            list.add(2);
            assert.strictEqual(list.indexOf(3), -1);
        });

    });

    describe("remove()", () => {

        it("should remove an item when there is only one item", () => {
            list.add(1);
            assertListValues(list, [1]);

            assert.strictEqual(list.remove(0), 1);
            assertListValues(list, []);
        });

        it("should remove an item when multiple items are in the list and the middle item is removed", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            // remove middle item
            assert.strictEqual(list.remove(1), 2);
            assertListValues(list, [1, 3]);
        });

        it("should remove an item when multiple items are in the list and the last item is removed", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            // remove last item
            assert.strictEqual(list.remove(2), 3);
            assertListValues(list, [1, 2]);
        });

        it("should remove an item when multiple items are in the list and the first item is removed", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            // remove first item
            assert.strictEqual(list.remove(0), 1);
            assertListValues(list, [2, 3]);
        });

        it("should throw an error when multiple items are in the list and an out-of-bounds index is used", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            // remove unknown item
            assert.throws(() => {
                list.remove(5);
            }, "Index 5 does not exist in the list.");
        });

        it("should throw an error when multiple items are in the list and a negative index is used", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            assertListValues(list, [1, 2, 3]);

            // remove unknown item
            assert.throws(() => {
                list.remove(-1);
            }, "Index -1 does not exist in the list.");
        });

        it("should throw an error when the list is empty", () => {
            assert.throws(() => {
                list.remove(0);
            }, "Index 0 does not exist in the list.");
        });
    });

    ["values", Symbol.iterator].forEach(method => {

        describe(String(method) + "()", () => {

            it("should create empty array when there are no items", () => {
                assert.deepStrictEqual([...list[method]()], []);
            });

            it("should iterate over list when there is one item", () => {
                list.add(1);

                assert.deepStrictEqual([...list[method]()], [1]);
            });

            it("should iterate over list when there are multiple items", () => {
                list.add(1);
                list.add(2);
                list.add(3);

                assert.deepStrictEqual([...list[method]()], [1, 2, 3]);
            });

        });

    });

});
