import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Person(props) {
    const {person} = props;
    const {schoolneeded} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={person.name}>
                <div>{person.age}</div>
                <div>{person.city}</div>
                <div>{(schoolneeded)?person.school:""}</div>
            </MyCard>
        </Col>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
    })
}

export function Persons(props) {
    const {persons, title,schoolneeded} = props;
    return (
        <Section title={title}>
            {persons.map(p => <Person key={p.id} person={p} schoolneeded={schoolneeded}/>)}
        </Section>
    );
}

Persons.propTypes = {
    persons: PropTypes.array,
    title: PropTypes.string
}