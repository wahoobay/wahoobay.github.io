// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// stores
import weatherStore from '../../utils/weatherStore';


// components
import StatisticsWidget from '../../components/StatisticsWidget';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';


// images
import cardImg1 from '../../assets/images/small/fp1.jpg';
import cardImg2 from '../../assets/images/small/fp2.jpg';
import cardImg3 from '../../assets/images/small/fp3.jpg';
import cardImg4 from '../../assets/images/small/fpSmall1.jpg';
import cardImg5 from '../../assets/images/small/fpSmall2.jpg';
import cardImg6 from '../../assets/images/small/fpSmall3.jpg';



const SlidesWithCaptionsAndIndicaticators = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Card>
            <Card.Body>
                <Carousel indicators={true} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg1 }
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Live from Pompano Beach</h3>
                            <p>Live video from the Pier at Pompano Beach</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg2 }
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Live from the North Shore</h3>
                            <p>Live video from Wahoo Bay's Northern Shore</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg3 }
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Live from the Pier</h3>
                            <p>Live video from the pier at Wahoo Bay</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br />
                <h4 className="header-title">Welcome to Wahoo Bay!</h4>
                <p className="text-muted font-14">
                    
                
                Wahoo Bay is envisioned to provide an immersive experience for park visitors, 
                especially young children. Its purpose is to raise awareness of the importance 
                of keeping our oceans and reefs healthy and thriving in an entertaining, 
                educational and memorable way.
                </p>
            </Card.Body>
        </Card>
    );
};

const TempChart = (): React$Element<any> => {

// weather
const weather = weatherStore();
// Use effect
useEffect(() => {weather.sunFunction();}, []);
useEffect(() => {weather.latestFunction();}, []);
useEffect(() => {weather.lastMonthFunction();}, []);
useEffect(() => {weather.twoMonthsAgoFunction();}, []);
useEffect(() => {weather.threeMonthsAgoFunction();}, []);
useEffect(() => {weather.fourMonthsAgoFunction();}, []);
useEffect(() => {weather.fiveMonthsAgoFunction();}, []);
useEffect(() => {weather.sixMonthsAgoFunction();}, []);

    // default options
    const apexLineChartWithLables = {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#ff6633', '#0099ff'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth',
        },
        // title: {
        //     text: 'Average High & Low Temperature',
        //     align: 'left',
        //     style: {
        //         fontSize: '14px',
        //     },
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.3,
            },
            borderColor: '#f1f3fa',
        },
        markers: {
            style: 'inverted',
            size: 6,
        },
        xaxis: { 
            categories: [
                [weather.sixMonthsAgo && weather.sixMonthsAgo.month],
                [weather.fiveMonthsAgo && weather.fiveMonthsAgo.month],
                [weather.fourMonthsAgo && weather.fourMonthsAgo.month],
                [weather.threeMonthsAgo && weather.threeMonthsAgo.month],
                [weather.twoMonthsAgo && weather.twoMonthsAgo.month],
                [weather.lastMonth && weather.lastMonth.month],
                ],
            title: {
                text: 'Month',
            },
        },
        yaxis: {
            title: {
                text: '',
            },
            min: 70,
            max: 90,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
        }, 
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexLineChartWithLablesData = [
        { 
            name: 'Average Temp',
            data: [
                weather.sixMonthsAgo && Math.round(weather.sixMonthsAgo.airTempF),
                weather.fiveMonthsAgo && Math.round(weather.fiveMonthsAgo.airTempF),
                weather.fourMonthsAgo && Math.round(weather.fourMonthsAgo.airTempF),
                weather.threeMonthsAgo && Math.round(weather.threeMonthsAgo.airTempF),
                weather.twoMonthsAgo && Math.round(weather.twoMonthsAgo.airTempF),
                weather.lastMonth && Math.round(weather.lastMonth.airTempF),
            ],
        },
        // {
        //     name: 'Low - 2022',
        //     data: [10, 13, 11, 16, 17, 19, 21],
        // },
    ]; 



return (
    <Card>
        <Card.Body>
            <h4 className="header-title mb-3">Today's Weather</h4>

            
            
            <p className="display-6">
                {weather.latest && weather.latest.airTempF}°F
                &nbsp;
            


                <i className="uil uil-thunderstorm-sun"></i>
            </p>   

            <hr className="mt-1 mb-1" />
            
            <Chart
                options={apexLineChartWithLables}
                series={apexLineChartWithLablesData}
                type="line"
                className="apex-charts"
            />
        </Card.Body>
    </Card> 
)
 
}


const Ribbon1 = ({ label, color, direction }) => {
    return (
        <Card className="ribbon-box">
            <Card.Body>
                <div
                    className={classNames(
                        'ribbon',
                        'ribbon-' + color,
                        { 'bg-dark text-light': color === 'dark' },
                        direction === 'left' ? 'float-start' : 'float-end'
                    )}>
                    <i className="mdi mdi-access-point me-1"></i> {label}
                </div>
                <h5 className={classNames('text-' + color, 'mt-0', direction === 'left' ? 'float-end' : 'float-start')}>
                    {label} Wahoo Bay
                </h5>
                <div className="ribbon-content">
                    <p className="mb-0">
                        Read more about the immersive educational park experience 
                        and the importance of keeping our oceans and reefs healthy.
                        <br /><br />
                        <span className="h3">
                        <button className={classNames('btn', 'btn-sm', [`btn-${color}`])}>Get Involved</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <Link to="https://www.facebook.com/wahoobaypompano/"><i className="uil  uil-facebook"></i></Link>&nbsp;
                        <Link to="https://www.instagram.com/wahoobaypompano/"><i className="uil  uil-instagram"></i></Link>&nbsp;
                        </span>
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
}; 

const CheckboxesandRadios = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Education Portal</h4>
                    <p className="text-muted font-14">
                        Learn about the many educational resources available right here on our webite.
                    </p>

                    <ListGroup>
                        <ListGroup.Item>
                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                            Meet our native fish species
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                            Oh, no! Coastal erosion!
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                            Learn about water salinity
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                            Coral reef dos and don'ts
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
};

const DefaultSlides = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Historical Look</h4>
                <p className="text-muted font-10">
                    &nbsp;
                </p>

                <Carousel indicators={false} controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg4 }
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg5 }
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ cardImg6 }
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
    );
};


// actual page
// actual page
// actual page

const Main = (): React$Element<React$FragmentType> => {

// weather
const weather = weatherStore();
// Use effect
useEffect(() => {weather.latestFunction();}, []);
useEffect(() => {weather.yesterdayFunction();}, []);
useEffect(() => {weather.lastMonthFunction();}, []);
useEffect(() => {weather.twoMonthsAgoFunction();}, []);
useEffect(() => {weather.threeMonthsAgoFunction();}, []);
useEffect(() => {weather.fourMonthsAgoFunction();}, []);
useEffect(() => {weather.fiveMonthsAgoFunction();}, []);
useEffect(() => {weather.sixMonthsAgoFunction();}, []);


if (weather.latest && weather.yesterday) {

    var barDiff = weather.yesterday.barPressConv - weather.latest.barPressConv;
    var barDiffAbs = Math.abs(barDiff).toFixed(2);
    if (weather.latest.barPressConv > weather.yesterday.barPressConv) {
        var barDiffSign = "mdi mdi-arrow-down-bold";
    } else {
        var barDiffSign = "mdi mdi-arrow-up-bold";
    }

    var waterLevelDiff = weather.yesterday.waterLevelR - weather.latest.waterLevelR;
    var waterLevelAbs = Math.abs(waterLevelDiff).toFixed(2);
    if (weather.latest.waterLevelR > weather.yesterday.waterLevelR) {
        var waterDiffSign = "mdi mdi-arrow-down-bold";
    } else {
        var waterDiffSign = "mdi mdi-arrow-up-bold";
    }

    var windSpeedDiff = weather.yesterday.windSpeedAvg - weather.latest.windSpeedAvg;
    var windSpeedAbs = Math.abs(windSpeedDiff).toFixed(1);
    if (weather.latest.windSpeedAvg > weather.yesterday.windSpeedAvg) {
        var windDiffSign = "mdi mdi-arrow-down-bold";
    } else {
        var windDiffSign = "mdi mdi-arrow-up-bold";
    }

    var rainAccumDiff = weather.yesterday.rainAccum - weather.latest.rainAccum;
    var rainAccumAbs = Math.abs(rainAccumDiff).toFixed(1);
    if (weather.latest.rainAccum > weather.yesterday.rainAccum) {
        var rainDiffSign = "mdi mdi-arrow-down-bold";
    } else {
        var rainDiffSign = "mdi mdi-arrow-up-bold";
    }


}


    return (
        <>
            
            <br />
            <Row>
                <Col sm={8} lg={8}>
                    <SlidesWithCaptionsAndIndicaticators />
                </Col>
                <Col sm={4} lg={4}>
                



            <TempChart />
        





                <Ribbon1 label="About" color="danger" direction="right" />

                </Col>
            </Row>
            <Row>
                <Col sm={4} lg={4}>
                    <StatisticsChartWidget

                        description="Barometer"
                        title="Barometer"
                        stats={weather.latest && weather.latest.barPressConv + " mmHg"}
                        trend={{
                            textClass: 'text-success',
                            icon: barDiffSign,
                            value: barDiffAbs +  ' mmHg from yesterday',
                        }}
                        colors={['#727cf5']}
                        type="line"
                        data={[
                            weather.sixMonthsAgo && weather.sixMonthsAgo.barPressConv,
                            weather.fiveMonthsAgo && weather.fiveMonthsAgo.barPressConv,
                            weather.fourMonthsAgo && weather.fourMonthsAgo.barPressConv,
                            weather.threeMonthsAgo && weather.threeMonthsAgo.barPressConv,
                            weather.twoMonthsAgo && weather.twoMonthsAgo.barPressConv,
                            weather.lastMonth && weather.lastMonth.barPressConv,
                            weather.latest && weather.latest.barPressConv,
                            ]}></StatisticsChartWidget>
                </Col>

                <Col sm={2} lg={2}>

                    <StatisticsChartWidget
                        description="Water Level"
                        title="Water Level"
                        stats={weather.latest && weather.latest.waterLevelR + ' mm'}
                        trend={{
                            textClass: 'text-success',
                            icon: waterDiffSign,
                            value: waterLevelAbs + ' mm from yesterday',
                        }}
                        colors={['#f4516c']}
                        type="bar"
                        data={[
                            weather.sixMonthsAgo && weather.sixMonthsAgo.waterLevelR,
                            weather.fiveMonthsAgo && weather.fiveMonthsAgo.waterLevelR,
                            weather.fourMonthsAgo && weather.fourMonthsAgo.waterLevelR,
                            weather.threeMonthsAgo && weather.threeMonthsAgo.waterLevelR,
                            weather.twoMonthsAgo && weather.twoMonthsAgo.waterLevelR,
                            weather.lastMonth && weather.lastMonth.waterLevelR,
                            ]}></StatisticsChartWidget>
                        
                </Col>

                <Col sm={2} lg={2}>

                    <StatisticsChartWidget
                        description="Avg Wind Speed"
                        title="Wind Speed"
                        stats={weather.latest && weather.latest.windSpeedAvg + ' m/s'}
                        trend={{
                            textClass: 'text-success',
                            icon: windDiffSign,
                            value: windSpeedAbs + ' m/s from yesterday',
                        }}
                        colors={['#34bfa3']}
                        type="line"
                        data={[
                            weather.sixMonthsAgo && weather.sixMonthsAgo.windSpeedAvg,
                            weather.fiveMonthsAgo && weather.fiveMonthsAgo.windSpeedAvg,
                            weather.fourMonthsAgo && weather.fourMonthsAgo.windSpeedAvg,
                            weather.threeMonthsAgo && weather.threeMonthsAgo.windSpeedAvg,
                            weather.twoMonthsAgo && weather.twoMonthsAgo.windSpeedAvg,
                            weather.lastMonth && weather.lastMonth.windSpeedAvg,
                        ]}></StatisticsChartWidget>
                </Col>

                <Col sm={4} lg={4}>
                    <StatisticsWidget
                        icon="uil-raindrops-alt bg-light-lighten rounded-circle text-white"
                        description="Rain Accumulation"
                        title="Rain Accumulation"
                        stats={weather.latest && weather.latest.rainAccum + ' mm'}
                        trend={{
                            textClass: 'badge bg-info',
                            icon: rainDiffSign,
                            value: rainAccumAbs + ' mm',
                            time: 'since yesterday',
                        }}
                        bgclassName="bg-primary"
                        textClass="text-white"></StatisticsWidget>
                </Col>

            </Row>


            <Row>

                <Col sm={4} lg={4}>

                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Project Overview</h4>
                            <p className="text-muted font-10">
                                {/* {weather.lastMonth && weather.lastMonth.date} */}
                                &nbsp;
                            </p>
                            {/*
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/bcCbQQAq-2E?rel=0&amp;start&amp;end&amp;controls=1&amp;mute=0&amp;modestbranding=0&amp;autoplay=0"
                                    title="iframe"></iframe>
                            </div> 
                            */}
                        </Card.Body>
                    </Card>

                </Col>
                <Col sm={4} lg={4}>

                    <CheckboxesandRadios />

                </Col>
                <Col sm={4} lg={4}>
                    <DefaultSlides />
                </Col>
            </Row>





        </>
    );
};

export default Main;
