import { useState } from 'react';
import Rating from './StarRating';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardFooter,
    MDBCardText,
    MDBBtn,
    MDBBadge,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Card(props) {
    const [rating, setRating] = useState(0)
    return (
        <div className="p-3 col-md-4">
            <MDBCard className='mb-3'>
                <MDBCardBody>
                    {props.info.isFavorite === "True" ?
                        (<MDBIcon size='lg' className='favoriteicon' far icon="kiss-wink-heart" />) : null
                    }
                    <MDBCardTitle className='papertitle'>{props.info.name}
                        <p><small className='author'>owned by:{props.info.author}</small></p>
                    </MDBCardTitle>
                    <MDBCardText>
                        {props.info.content}
                    </MDBCardText>
                    <MDBBtn className='btn-outline-primary' href='#'>READ PAPER</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter border='secondary' background='white' className='mb-3' >
                    <span>
                        <Rating rating={rating} setRating={setRating} readOnly={props.readOnly} />
                    </span>
                </MDBCardFooter>
            </MDBCard>
        </div >
    );
}