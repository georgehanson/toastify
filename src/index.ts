import Success from "./levels/success";
import Info from "./levels/info";
import Warning from "./levels/warning";
import Error from "./levels/error";
import Default from "./levels/default";

export class Toastify {

    /**
     * The different type of levels
     * @type {object}
     */
    protected levels: any = {
        success: Success,
        info: Info,
        warning: Warning,
        error: Error,
        default: Default,
    }

    /**
     * The configuration options
     *
     * @type {object}
     */
    protected options: any = {
        position: 'bottom-right',
        delay: 5000,
        speed: 10
    };

    /**
     * Set an option value
     *
     * @param {string} key   [description]
     * @param {any}    value [description]
     */
    public setOption(key: string, value: any): void {
        if (this.options.hasOwnProperty(key)) {
            this.options[key] = value;
            return;
        }

        throw `The option key ${key} is not a valid option`;
    }

    /**
     * Fire a success message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    public success(title: string, body: string = null): void {
        this.levels.success.fire(this.options, title, body);
    }

    /**
     * Fire an info message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    public info(title: string, body: string = null): void {
        this.levels.info.fire(this.options, title, body);
    }

    /**
     * Fire a warning message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    public warning(title: string, body: string = null): void {
        this.levels.warning.fire(this.options, title, body);
    }

    /**
     * Fire a error message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    public error(title: string, body: string = null): void {
        this.levels.error.fire(this.options, title, body);
    }

    /**
     * Fire a default message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    public default(title: string, body: string = null): void {
        return this.levels.default.fire(this.options, title, body);
    }
}

export default new Toastify();
