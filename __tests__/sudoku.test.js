import {Grid} from "./../src/sudoku.js";

describe("Grid", () => {
  test("should create an empty sudoku grid", () => {
    const grid = new Grid();
    expect(grid.grid00).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid01).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid02).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid10).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid11).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid12).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid20).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid21).toEqual([['','',''],['','',''],['','','']]);
    expect(grid.grid22).toEqual([['','',''],['','',''],['','','']]);
  });
});