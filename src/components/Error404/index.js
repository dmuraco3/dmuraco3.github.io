import {Link} from 'react-router-dom';
export default function NotFound() {
    return (
        <div>
            <h1
                style={{textAlign: "center"}}
            >
                It looks like your are lost 
            </h1>
            <h1 
                style={{textAlign: "center"}}
            >
                <Link to="/home" >Return Home</Link>
            </h1>
        </div>
    );
};