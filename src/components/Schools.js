import {MyCard} from "./MyCard";
import {Col} from "react-bootstrap";
import {Section} from "./Section";
import {array} from "prop-types";

export function Schools(props) {
    const {schools, title} = props;

    const filteredArray = schools.filter(function( element ) {
        return element !== undefined;
    });

    const filteredarrschools = schools.map(s => s.school ).filter(function( element ) {
        return element !== undefined;
    });
    const singleArray = [...new Set(filteredarrschools)]
    return <>
        <Section title={title}>
            <GetSchoolsList Schools={[...filteredarrschools]}
                            Schoolonce={[...singleArray]}
                            filteredArray={filteredArray}/>
        </Section>
    </>
}

export function GetSchoolsList(props) {
    const {Schools} = props
    const {Schoolonce} = props
    const {filteredArray} = props
    let arr2 = []
    for (let i = 0; i < Schoolonce.length; i++) {
        let count = 0
        for (let j = 0; j < Schools.length; j++) {
            if (Schoolonce[i] === Schools[j]) {
                count++
            }
        }
        arr2.push({name: Schoolonce[i], population: count})
    }
    return<>
        {arr2.map(s => <School school={s} filteredArray={filteredArray}/>)}
    </>

}

export function School(props) {
    const {school, filteredArray} = props
    const person = filteredArray.filter(s => s.school === school.name)
    console.log(person)
    return <>
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={school.name}>
                <div>subscriptions:</div>
                <div>{school.population}</div>
                <div>{person.map(p => <div>{p.name}</div>)}</div>
            </MyCard>
        </Col>
    </>
}