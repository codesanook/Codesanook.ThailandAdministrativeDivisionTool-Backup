import Block from "codesanook-bumblebee-ts/dist/implementations/Block";
import ICheckbox from "codesanook-bumblebee-ts/dist/interfaces/ICheckbox";
import Checkbox from "codesanook-bumblebee-ts/dist/implementations/Checkbox";
import ITextField from "codesanook-bumblebee-ts/dist/interfaces/ITextField";
import TextField from "codesanook-bumblebee-ts/dist/implementations/TextField";

export default class AdministrativeSectionBase extends Block {
    public get includeCreateTable(): ICheckbox {
        return new Checkbox(this, '.sql-create input[type="checkbox"]');
    }

    public get createTableStatement(): ITextField {
        return new TextField(this, '.sql-create textarea');
    }

    public get includeInsertStatement(): ICheckbox {
        return new Checkbox(this, '.sql-insert input[type="checkbox"]');
    }

    public get insertStatement(): ITextField {
        return new TextField(this, '.sql-insert textarea');
    }
}