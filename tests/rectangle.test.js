import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from "../js/rectangle";

test('Should calculate perimeter correctly', () => {
    const perimeter = getRectanglePerimeter(10, 20);
    expect(perimeter).toBe(60);
});

test('Should calculate area correctly', () => {
    const area = getRectangleArea(10, 20);
    expect(area).toBe(200);
});

test('Should retrive info correctly', () => {
    const info = getRectangleInfo(10, 20);
    expect(info).toBe('The perimeter of a rectangle is 60 and the area is 200');
});