import IBlock from "../Interfaces/IBlock";
import { ElementHandle } from "puppeteer"
import IElement from "../Interfaces/IElement";
import Session from "../Setup/Session";

export default abstract class Element implements IElement {

	constructor(public parent: IBlock, public selector: string | ElementHandle) {
	}

	_tag: ElementHandle;
	get tag(): Promise<ElementHandle> {
		return (async () => {
			if (this._tag != null) return Promise.resolve(this._tag);

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this._tag = await this.parent.findElement(<string>this.selector);
			} else {
				this._tag = <ElementHandle>this.selector;
			}
			return Promise.resolve(this._tag);
		})();
	}

	get session(): Session {
		return this.parent.session;
	}

	get selected(): Promise<boolean> {
		return (async () => {
			let valueHandler = await (await this.tag).getProperty("selected");
			let selectedValue: string = await valueHandler.jsonValue();
			return selectedValue.toLowerCase() === 'selected';
		})();
	}

	get text(): Promise<string> {
		return (async () => {
			let valueHandler = await (await this.tag).getProperty("value");
			return await valueHandler.jsonValue();
		})();
	}
}