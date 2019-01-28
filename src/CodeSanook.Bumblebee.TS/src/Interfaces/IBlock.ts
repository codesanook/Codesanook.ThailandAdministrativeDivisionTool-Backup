import IHasParent from "./IHasParent";
import IHasSession from "./IHasSession";
import IHasTag from "./IHasTag";
import { ElementHandle } from "puppeteer";

export default interface IBlock extends IHasParent, IHasSession, IHasTag {
    findElement(selector): Promise<ElementHandle>;
    findElements(selector: string): Promise<ElementHandle[]>; 
}
