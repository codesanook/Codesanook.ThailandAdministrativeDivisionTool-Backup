import { ElementHandle } from "puppeteer";

export default interface IHasTag {
	tag: Promise<ElementHandle>
}