import IHasBackingElement from "./IHasBackingElement";
import IPerformsDragAndDrop from "./IPerformsDragAndDrop";

export default interface IDraggable extends IHasBackingElement {
	GetDragAndDropPerformer(): IPerformsDragAndDrop;
}
