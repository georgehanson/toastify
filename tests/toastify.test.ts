import Toastify from "./../src/index";

test("It can call a default notification", () => {
    const spy = jest.spyOn(Toastify.levels.default, 'fire');
    Toastify.default("test", "test");
    expect(spy).toHaveBeenCalled();
});

test("It can call a success notification", () => {
    const spy = jest.spyOn(Toastify.levels.success, 'fire');
    Toastify.success("test", "test");
    expect(spy).toHaveBeenCalled();
});

test("It can call an info notification", () => {
    const spy = jest.spyOn(Toastify.levels.info, 'fire');
    Toastify.info("test", "test");
    expect(spy).toHaveBeenCalled();
});

test("It can call a warning notification", () => {
    const spy = jest.spyOn(Toastify.levels.warning, 'fire');
    Toastify.warning("test", "test");
    expect(spy).toHaveBeenCalled();
});

test("It can call a error notification", () => {
    const spy = jest.spyOn(Toastify.levels.error, 'fire');
    Toastify.error("test", "test");
    expect(spy).toHaveBeenCalled();
});
