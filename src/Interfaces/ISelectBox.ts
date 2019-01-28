import IElement from "./IElement";
import IOption from "./IOption";

export default interface ISelectBox extends IElement {
	options: Promise<IOption[]>;
}