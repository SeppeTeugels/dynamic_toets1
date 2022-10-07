import {Persons} from "../components/Persons";
import * as PropTypes from "prop-types";
import {Schools} from "../components/Schools";

Persons.propTypes = {title: PropTypes.string};

export function TestPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons schoolneeded={true} persons={[...persons]} title="alle personen"/>
            <Persons persons={[...persons].filter(p => p.school ==="ANT")} title="Antwerpen"/>
            <Schools schools={persons} title="alle scholen"/>
        </div>
    );
}

