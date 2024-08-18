import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';

export default function List({ classData }) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <MDBListGroup className='' style={{ minWidth: '70%' }} light>
                <MDBListGroupItem tag='a' href='#' action noBorders aria-current='true' className='d-flex justify-content-between align-items-center'>
                    <h5>{classData.class || classData.form}</h5>
                    <MDBBadge pill light>
                        {classData.total}
                    </MDBBadge>
                </MDBListGroupItem>
                <hr></hr>
            </MDBListGroup>
        </div>
    );
}
