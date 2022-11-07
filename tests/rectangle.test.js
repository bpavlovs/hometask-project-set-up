import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from "../js/rectangle";

test('Should calculate perimeter correctly', () => {
    const perimeter = getRectanglePerimeter(10, 20);
    expect(perimeter).toBe(60);
});

test('Should calculate area correctly', () => {
    const area = getRectangleArea(10, 20);
    expect(area).toBe(200);
});

test('Should pass correct data to console.log', () => {
    const logSpy = jest.spyOn(console, 'log');
    getRectangleInfo(10, 20);
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 60 and the area is 200');
});