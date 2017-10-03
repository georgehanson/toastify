import BaseLevel from "./../../src/levels/base";
import TestClass from "./testclass";
const options: any = {
    position: 'bottom-right',
    delay: 5000,
    speed: 10
};

test("It can build a HTML Div Element", () => {
    let notification = TestClass.buildNotification(options, 'success', 'This is the title', 'This is the body');
    let childNodes = notification.childNodes;

    expect(notification).toBeInstanceOf(HTMLDivElement);
    expect(childNodes.length).toBe(3);
    expect(childNodes.item(0).innerHTML).toBe('This is the title');
    expect(childNodes.item(1).innerHTML).toBe('This is the body');
});
