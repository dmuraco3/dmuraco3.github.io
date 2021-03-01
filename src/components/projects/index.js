import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Placeholder from '../../laptopBackground.jpg'

export default function Projects() {
    const projects = [
        {
            title: "test",
            description: "this is a test",
            codeLink: "https://google.com",
            displayLink: ""
        },
        {
            title: "test2",
            description: "this is a test2",
            codeLink: "",
            displayLink: ""
        }
    ]
    return (
        <main>
            <div className="ProjectsFlex">
                {projects.map((project, index) => (
                    <Card style={{width: '18rem'}} className="text-center">
                        <Card.Img variant="top"  src={Placeholder}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button target="_blank" href={project.codeLink} variant="primary"   style={{margin: 10}}>Code</Button>
                            <Button target="_blank" href={project.displayLink} variant="secondary" style={{margin: 10}}>View</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
        </main>
    )
}