import Option from "./Option"
import IBlock from "../Interfaces/IBlock";
import { ElementHandle } from "puppeteer";

export default class RadioButton extends Option {
	constructor(parent: IBlock, tag: ElementHandle) {
		super(parent, tag);
	}
}
