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

			let constructor: any = this.constructor;
			let typeName: string = constructor.name;

			let propertyName: string = null;
			if (typeName === 'Checkbox' || typeName === 'RadioButton') {
				propertyName = 'checked';
			} else if (typeName === 'Option') {
				propertyName = 'selected';
			} else {
				throw new Error('selected property support only checkbox, radio and option element');
			}

			const valueHandler = await (await this.tag).getProperty(propertyName); //selected
			const selectedValue: boolean = await valueHandler.jsonValue();
			return selectedValue;
		})();
	}

	public get text(): Promise<string> {
		return (async () => {
			const valueHandler = await (await this.tag).getProperty('value');
			return await valueHandler.jsonValue();
		})();
	}
}