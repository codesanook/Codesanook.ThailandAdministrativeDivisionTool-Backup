import IHasTag from "./IHasTag"
import IHasParent from "./IHasParent";
import IHasSession from "./IHasSession";

export default interface IElement extends IHasTag, IHasParent, IHasSession {

}
