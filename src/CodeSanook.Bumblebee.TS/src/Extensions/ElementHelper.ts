import { ElementHandle } from "puppeteer";
export default class ElementHelper {

    public static async getAngularJSControllerName(tag: ElementHandle): Promise<string> {
        const jsHandler = await tag.getProperty('tagName');
        const element = await jsHandler.jsonValue();
        const elementName = element.toString().toLowerCase();

        console.log(`element name ${elementName}`);
        const elementNameArray = elementName.split('-');
        for (let index = 1; index < elementNameArray.length; index++) {
            elementNameArray[index] = (elementNameArray[index])[0].toUpperCase() + (elementNameArray[index]).substring(1);
        }
        const controllerName = elementNameArray.join('').toString();
        console.log(`controllerName ${controllerName}`);
        return controllerName;
    }
}