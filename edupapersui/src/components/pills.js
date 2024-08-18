import React, { useState } from 'react';
import List from './Listgroup';
import classdata from '../classdata';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Pills() {
    const [basicActive, setBasicActive] = useState('');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };
    const primaryClasses = classdata.level.primary.map((cls, index) => (
        <List key={index} classData={cls} />
    ));

    const highschoolClasses = classdata.level.Highschool.map((cls, index) => (
        <List key={index} classData={cls} />
    ));
    return (
        <>
            <MDBTabs pills className='mb-3 justify-content-center'>
                <MDBTabsItem>
                    <MDBTabsLink className='text-dark bg-primary' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        primary school
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink className='text-dark bg-secondary' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        High school
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink className='text-dark bg-warning' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Higher learning
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane open={basicActive === 'tab1'}>{primaryClasses}</MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}>{highschoolClasses}</MDBTabsPane>

            </MDBTabsContent>
        </>
    );
}