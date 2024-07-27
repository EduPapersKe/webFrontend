import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';

export default function List() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <MDBListGroup className='mb-3' style={{ minWidth: '70%' }} light>
                <MDBListGroupItem tag='a' href='#' action noBorders aria-current='true' className='d-flex justify-content-between align-items-center'>
                    class 1
                    <MDBBadge pill light>
                        14
                    </MDBBadge>
                </MDBListGroupItem>
                <hr></hr>
                <MDBListGroupItem tag='a' href='#' action noBorders className='d-flex justify-content-between align-items-center'>
                    class 2
                    <MDBBadge pill light>
                        2
                    </MDBBadge>
                </MDBListGroupItem>

                <MDBListGroupItem tag='a' href='#' action noBorders className='d-flex justify-content-between align-items-center'>
                    class 3
                    <MDBBadge pill light>
                        1
                    </MDBBadge>
                </MDBListGroupItem>
            </MDBListGroup>
        </div>
    );
}