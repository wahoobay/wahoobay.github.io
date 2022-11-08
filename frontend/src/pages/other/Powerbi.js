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
                            id: '6b8487da-1f7d-47c2-9804-1fcb7fb4ebca',
                            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=6b8487da-1f7d-47c2-9804-1fcb7fb4ebca&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d',
                            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjNjM2M5YzEtZTgyNC00MTNmLWI0MzUtMmYwY2FiYjI4MjhmLyIsImlhdCI6MTY2NzY2OTMzOSwibmJmIjoxNjY3NjY5MzM5LCJleHAiOjE2Njc2NzQwODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFVcUw1emNlaUV1MGZDcWhGcHFDSC9XcWNJUE9vRWRRV1Q1QUcvS2pkTUlBaGh1enBMSEtJSVVURldHUE9BaDNKQ2s4VWNURndsbGdMZ0k1OVlhYnZpR0VqVGN2MHNJOUJZQ0NwUThVWVJ2ND0iLCJhbXIiOlsibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJaaW1tZXJtYW4iLCJnaXZlbl9uYW1lIjoiRGFuIiwiaXBhZGRyIjoiOTkuNzYuMTQ5LjI4IiwibmFtZSI6IkRhbiBaaW1tZXJtYW4iLCJvaWQiOiIxOWY0MzEzYS04MzYyLTQ0YjctOWU2ZC04Y2FmYzc3ZDdiYjAiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjYzNjkzMDkyLTkxNDkzNzg4OS0xNjgzNTM2MzA1LTY5MDYyOSIsInB1aWQiOiIxMDAzMjAwMEVERTc4MjY2IiwicmgiOiIwLkFUY0F3Y25EWXlUb1AwRzBOUzhNcTdLQ2p3a0FBQUFBQUFBQXdBQUFBQUFBQUFBM0FFYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvdUVabG9kZFRlR0lid2lMMmRxZWxsWExFY19WTHllTG5FdEV2cDdJQ0pNIiwidGlkIjoiNjNjM2M5YzEtZTgyNC00MTNmLWI0MzUtMmYwY2FiYjI4MjhmIiwidW5pcXVlX25hbWUiOiJkemltbWVybWFuMjAyMUBmYXUuZWR1IiwidXBuIjoiZHppbW1lcm1hbjIwMjFAZmF1LmVkdSIsInV0aSI6IlcwbWNqU0pIRjBlRmc3S21jS2hJQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.mCyQPQg59bnuEbHjARh7_5d1rAZdIK5QAZ85IL2bNozlQfcROVPT6lisprvyMQGQ3XzaQHyP1ISGA4qs5GImVtq8mT5W8QceCvuHzbn6obj17iAqlS1vyzu_eqvWQ_NcuOejnVOzaengtFOUcPQ0Liz3q9506NwoZDpAynlKEFrnIjj3f92TYVC3Uc3LrUMdK392JPzrtKsjTS6SVtISdQPAWbGG5qxISafZhKtfCVlxod8FIkpzwVeb7-wUY3WOnTXwTwmkiXn_qjlwqxuUfpWoA9R7lPQ9LRJqgu0ZRjfmU_VNFE9ns6E7XTEr74ASS4YXEG7ciqVfupprUMwh2A',
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
