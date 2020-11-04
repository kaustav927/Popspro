import React from 'react';

import Card from '../components/Card';

import StBrigids from '../assets/images/StBrigids.JPG'
import Leslie from '../assets/images/LeslieFinch.JPG';
import StDavids from '../assets/images/StDavidsVillage.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: `St Brigid's School`,
                    subTitle: 'School',
                    imgSrc: StBrigids,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: `Leslie & Finch`,
                    subTitle: 'Leslie & Finch',
                    imgSrc: Leslie,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: `St David's Village`,
                    subTitle: `St David's Village`,
                    imgSrc: StDavids,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;