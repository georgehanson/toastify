import TestClass from "./testclass";
const options: any = {
    position: 'bottom-right',
    delay: 5000,
    speed: 10
};

test("It can build a HTML Div Element", () => {
    let notification = TestClass.buildNotification(options, 'success', 'This is the title', 'This is the body');
    let notificationContentDiv = notification.childNodes[0];

    expect(notification).toBeInstanceOf(HTMLDivElement);
    expect(notificationContentDiv).toBeInstanceOf(HTMLDivElement);

    let childNodes = notificationContentDiv.childNodes;
    expect(childNodes.length).toBe(3);
    expect(childNodes.item(0).textContent).toBe('This is the title');
    expect(childNodes.item(1).textContent).toBe('This is the body');
});
