import IBlock from "../Interfaces/IBlock";
import { ElementHandle } from "puppeteer"
import IElement from "../Interfaces/IElement";
import Session from "../Setup/Session";

export default abstract class Element implements IElement {

	private tagElement: ElementHandle;

	constructor(public parent: IBlock, public selector: string | ElementHandle) {
	}

	public get tag(): Promise<ElementHandle> {
		return (async () => {
			if (this.tagElement != null) {
				return Promise.resolve(this.tagElement);
			}

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this.tagElement = await this.parent.findElement(this.selector as string);
			} else {
				this.tagElement = this.selector as ElementHandle;
			}
			return Promise.resolve(this.tagElement);
		})();
	}

	public get session(): Session {
		return this.parent.session;
	}

	public get selected(): Promise<boolean> {
		return (async () => {
			const valueHandler = await (await this.tag).getProperty("selected");
			 const selectedValue: string = await valueHandler.jsonValue();
			return selectedValue.toLowerCase() === 'selected';
		})();
	}

	public get text(): Promise<string> {
		return (async () => {
			const valueHandler = await (await this.tag).getProperty("value");
			return await valueHandler.jsonValue();
		})();
	}
}