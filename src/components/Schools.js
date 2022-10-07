import {MyCard} from "./MyCard";
import {Col} from "react-bootstrap";
import {Section} from "./Section";

export function Schools(props) {
    const {schools, title} = props;
    const filteredarr = schools.filter(function( element ) {
        return element !== undefined;
    });
    const singleArray = [...new Set(filteredarr)]
    return <>
        <Section title={title}>
            <GetSchoolsList Schools={[...filteredarr]}
                            Schoolonce={[...singleArray]}/>
        </Section>
    </>
}

export function GetSchoolsList(props) {
    const {Schools} = props
    const {Schoolonce} = props
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
    console.log(arr2)
    return<>
        {arr2.map(s => <School school={s}/>)}
    </>

}

export function School(props) {
    const {school} = props
    return <>
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={school.name}>
                <div>subscriptions:</div>
                <div>{school.population}</div>
            </MyCard>
        </Col>
    </>
}