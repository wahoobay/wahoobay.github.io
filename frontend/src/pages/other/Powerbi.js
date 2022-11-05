// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';



// components


// images




const Powerbi = (): React$Element<React$FragmentType> => {
    return (
        <>  
            <br />
            <Row>
                <Col sm={12} lg={12}>

                    <PowerBIEmbed
                        embedConfig = {{
                            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                            id: '07bc200a-8843-474f-af07-80c097b71d20',
                            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=07bc200a-8843-474f-af07-80c097b71d20&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d',
                            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjNjM2M5YzEtZTgyNC00MTNmLWI0MzUtMmYwY2FiYjI4MjhmLyIsImlhdCI6MTY2NzY2NDQxOCwibmJmIjoxNjY3NjY0NDE4LCJleHAiOjE2Njc2Njk4NzksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFoQkxJWVIyYUNRejduWnRxME9mLzQrZ2IwODNXdm83dVpvV205UCtPZVFraUJEUzB0NGtHcUtJTDB4bzdTL3NGUXo0bzIvdE5tK0hwYWV3ZllBOVFSbmJPbUE1ZGFENkFQQnN5V2t1WTRDYz0iLCJhbXIiOlsibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJaaW1tZXJtYW4iLCJnaXZlbl9uYW1lIjoiRGFuIiwiaXBhZGRyIjoiOTkuNzYuMTQ5LjI4IiwibmFtZSI6IkRhbiBaaW1tZXJtYW4iLCJvaWQiOiIxOWY0MzEzYS04MzYyLTQ0YjctOWU2ZC04Y2FmYzc3ZDdiYjAiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjYzNjkzMDkyLTkxNDkzNzg4OS0xNjgzNTM2MzA1LTY5MDYyOSIsInB1aWQiOiIxMDAzMjAwMEVERTc4MjY2IiwicmgiOiIwLkFUY0F3Y25EWXlUb1AwRzBOUzhNcTdLQ2p3a0FBQUFBQUFBQXdBQUFBQUFBQUFBM0FFYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvdUVabG9kZFRlR0lid2lMMmRxZWxsWExFY19WTHllTG5FdEV2cDdJQ0pNIiwidGlkIjoiNjNjM2M5YzEtZTgyNC00MTNmLWI0MzUtMmYwY2FiYjI4MjhmIiwidW5pcXVlX25hbWUiOiJkemltbWVybWFuMjAyMUBmYXUuZWR1IiwidXBuIjoiZHppbW1lcm1hbjIwMjFAZmF1LmVkdSIsInV0aSI6IktCLXVwVlQ1aEVpeHBXVFE5QUZKQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.kFd-lQUmx8unZrNBPK455naSqLn0KpE0-4oXikNeiOezO3GpE2wwIITjSlmIrOVP6SvaFgy5Wkt-2Mfm88CqplRa_AELD8OyAHpB6rH5OQDeyF9nLYy-mwI3kwWyfKLnO-GfZ2hrHqDkR6Kta9yWTlBnJ2y0gL6tRBk09ZVvguugWSiInSyKIDVps98uqb4dKOGRwZ_bRjyETcPLAUxxyHS0EooWRn1W2661W5yC4kw3FJwKSkl27_I5iwhUpec3bG2YH2ypvxv-rhhsrCb0A7ktNOVzvjwgvF-TE7TByiElIsa8-9QiqtNhbhX4e8rnnU7EGtOpy4igUYoebf6IUg',
                            tokenType: models.TokenType.Aad,
                            settings: {
                                panes: {
                                    filters: {
                                        expanded: false,
                                        visible: false
                                    }
                                },
                                background: models.BackgroundType.Transparent,
                            }
                        }}

                        eventHandlers = { 
                            new Map([
                                ['loaded', function () {console.log('Report loaded');}],
                                ['rendered', function () {console.log('Report rendered');}],
                                ['error', function (event) {console.log(event.detail);}]
                            ])
                        }
                            
                        cssClassName = { 'Embed-container' }

                        getEmbeddedComponent = { (embeddedReport) => {
                            window.report = embeddedReport;
                        }}
                    />


                </Col>
            </Row>
        </>
    );
};

export default Powerbi;
