import Toastify from "./../src/index";

test("It can call a default notification", () => {
    let mock = jest.fn();
    mock.fire = jest.fn();

    Toastify.levels.default = mock;
    let notification = Toastify.default("test", "test");

    expect(mock.fire).toHaveBeenCalledTimes(1);
});

test("It can call a success notification", () => {
    let mock = jest.fn();
    mock.fire = jest.fn();

    Toastify.levels.success = mock;
    let notification = Toastify.success("test", "test");

    expect(mock.fire).toHaveBeenCalledTimes(1);
});

test("It can call an info notification", () => {
    let mock = jest.fn();
    mock.fire = jest.fn();

    Toastify.levels.info = mock;
    let notification = Toastify.info("test", "test");

    expect(mock.fire).toHaveBeenCalledTimes(1);
});

test("It can call a warning notification", () => {
    let mock = jest.fn();
    mock.fire = jest.fn();

    Toastify.levels.warning = mock;
    let notification = Toastify.warning("test", "test");

    expect(mock.fire).toHaveBeenCalledTimes(1);
});

test("It can call a error notification", () => {
    let mock = jest.fn();
    mock.fire = jest.fn();

    Toastify.levels.error = mock;
    let notification = Toastify.error("test", "test");

    expect(mock.fire).toHaveBeenCalledTimes(1);
});
