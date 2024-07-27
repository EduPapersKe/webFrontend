import React, { useState } from 'react';
import List from './Listgroup';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Pills() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <MDBTabs pills className='mb-3 justify-content-center'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        primary school
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        High school
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Higher learning
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <h6 className='bg-light p-2 border-top border-bottom'>which class are you in?</h6 >
                <MDBTabsPane open={basicActive === 'tab1'}><List /></MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}><List /></MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab3'}><List /></MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}