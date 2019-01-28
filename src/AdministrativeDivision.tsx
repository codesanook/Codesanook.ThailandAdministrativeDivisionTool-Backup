import * as React from 'react'
import { FunctionComponent, useState } from "react"
import "./AdministrativeDivision.css"

interface IProps {
    title: string;
}

const AdministrativeDivision: FunctionComponent<IProps> = (props: IProps) => {
    const [selectedCreateStatement, setSelectedCreateStatement] = useState(true);
    const [selectedInsertStatement, setSelectedInsertStatement] = useState(true);

    const handleSelectedCreateStatement = (): void => {
        const newValue = !selectedCreateStatement;
        setSelectedCreateStatement(newValue)
    };

    const handleSelectedInsertStatement = (): void => {
        const newValue = !selectedInsertStatement;
        setSelectedInsertStatement(newValue)
    };

    return (
        <div className="division">
            <h5>{props.title}</h5>
            <ul>
                <li>
                    <input type="checkbox" checked={selectedCreateStatement} onClick={handleSelectedCreateStatement} />
                    <textarea className="editor" placeholder={'create table ' + props.title} disabled={!selectedCreateStatement} />
                </li>
                <li>
                    <input type="checkbox" checked={selectedInsertStatement} onClick={handleSelectedInsertStatement} />
                    <textarea className="editor" placeholder={'insert into ' + props.title} disabled={!selectedInsertStatement} />
                </li>
                <li>
                    Available column name
                </li>
            </ul>

        </div>
    )
};

export default AdministrativeDivision