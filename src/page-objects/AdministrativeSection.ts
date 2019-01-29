import Block from "../CodeSanook.Bumblebee.TS/src/Implementation/Block";
import ICheckbox from "../CodeSanook.Bumblebee.TS/src/Interfaces/ICheckbox";
import Checkbox from "../CodeSanook.Bumblebee.TS/src/Implementation/Checkbox";
import ITextField from "../CodeSanook.Bumblebee.TS/src/Interfaces/ITextField";
import TextField from "../CodeSanook.Bumblebee.TS/src/Implementation/TextField";

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