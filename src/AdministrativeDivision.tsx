import * as React from "react";
import "./AdministrativeDivision.css"

interface IProps {
    title: string;
}

const AdministrativeDivision: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className="division">
            <h3>{props.title}</h3>
            <div className="row">
                <div className="col-3">
                    <input type="checkbox" checked={true} />
                </div>
                <div className="col-9">
                    <textarea className="editor">
                        {'create table ' + props.title}
                    </textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <input type="checkbox" checked={true} />
                </div>
                <div className="col-9">
                    <textarea className="editor">
                        {'insert into ' + props.title}
                    </textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    Available column name
                </div>
            </div>
        </div>
    )
};

export default AdministrativeDivision