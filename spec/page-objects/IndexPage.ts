import Block from "codesanook-bumblebee-ts/dist/implementations/Block";
import IClickable from "codesanook-bumblebee-ts/dist/interfaces/IClickable";
import Clickable from "codesanook-bumblebee-ts/dist/implementations/Clickable";
import AdministrativeSection from "./AdministrativeSection"

export default class IndexPage extends Block {

    public get province(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.province', this);
    }

    public get district(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.district', this);
    }

    public get subdistrict(): AdministrativeSection {
        return new AdministrativeSection(this.session, '.division.subdistrict', this);
    }

    public get export(): IClickable {
        return new Clickable(this, '.sql-export button');
    }
}