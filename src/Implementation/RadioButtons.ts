import IRadioButtons from "../Interfaces/IRadioButtons";
import IOption from "../Interfaces/IOption";
import RadioButton from "./RadioButton";
import { ElementHandle } from "puppeteer";
import IBlock from "../Interfaces/IBlock";

export default class RadioButtons implements IRadioButtons {

	constructor(public parent: IBlock, public selector: string | ElementHandle<Element>[]) {
	}

	_tags: ElementHandle<Element>[];
	get tags(): Promise<ElementHandle<Element>[]> {
		return (async () => {
			if (this._tags != null) return Promise.resolve(this._tags);

			if (typeof (this.selector) === 'string' || this.selector instanceof String) {
				this._tags = await this.parent.findElements(<string>this.selector);
			} else {
				this._tags = <ElementHandle<Element>[]>this.selector;
			}
			return Promise.resolve(this._tags);
		})();
	}

	get options(): Promise<IOption[]> {
		return (async () => {
			let radioButtons: RadioButton[] = [];
			let tags = await this.tags;

			for (let index = 0; index < tags.length; index++) {
				await this.parent.session.page.waitFor(250);
				let item = new RadioButton(this.parent, tags[index]);
				radioButtons.push(item);
			}
			return Promise.resolve(radioButtons);
		})();
	}
}
