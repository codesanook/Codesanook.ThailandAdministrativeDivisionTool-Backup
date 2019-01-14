import * as React from "react";
import "./AdministrativeDivision.css"

interface IProps {
    title: string;
}

const AdministrativeDivision: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className="division">
            <h5>{props.title}</h5>
            <ul>
                <li>
                    <input type="checkbox" checked={true} />
                    <textarea className="editor" placeholder={'create table ' + props.title}></textarea>
                </li>
                <li>
                    <input type="checkbox" checked={true} />
                    <textarea className="editor" placeholder={'insert into ' + props.title}></textarea>
                </li>
                <li>
                    Available column name
                </li>
            </ul>
            
        </div>
    )
};

export default AdministrativeDivision