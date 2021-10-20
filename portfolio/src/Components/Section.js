import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Contact from './Contact';
import globals from '../config/globals';
import { philosophyImg, aboutMeImg, projectsImg, contactsImg } from '../img/photos';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: philosophyImg
        }

        this.renderLinks = this.renderLinks.bind(this);
    }

    componentWillMount() {
        if(this.props.sectionId === 'home') {
            this.setState({
                content: globals.home,
                mainImage: philosophyImg
            })
        }
        else if(this.props.sectionId === 'about') {
            this.setState({
                content: globals.about,
                mainImage: aboutMeImg
            })
        }
        else if(this.props.sectionId === 'projects') {
            this.setState({
                content: globals.projects,
                mainImage: projectsImg
            })
        }
        else if(this.props.sectionId === 'contact') {
            this.setState({
                content: globals.contact,
                mainImage: contactsImg
            })
        }
    }

    renderLinks() {
        if(this.props.sectionId === 'projects') {
            return (
                <div>
                    <Button variant="primary" href={this.state.content.primaryLink}>GitHub</Button>
                    <Button variant="primary" href={this.state.content.secondaryLink}>LinkedIn</Button>
                </div>
            )
        } 
        else if(this.props.sectionId === 'contact') {
            return (
                <div>
                    <Contact placement='bottom' email={this.state.content.primaryLink} />
                </div>
            )
        }
    }

    render() {
        return (
            <div id={this.props.sectionId}>
                <Card className="text-center">
                <Image src={this.state.mainImage} />
                    <Card.Header>{this.state.content.sectionHeader}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.state.content.title}</Card.Title>
                        <Card.Text>
                            {this.state.content.mainText}
                        </Card.Text>
                        {
                            this.renderLinks()
                        }
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default Section;