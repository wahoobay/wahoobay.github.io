// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
                            <h3>Live from underwater at Wahoo Bay</h3>
                            <p>Get up close and personal with our marine ecosystem</p>
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

// simple line chart
const LineChart = (): React$Element<any> => {
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
            width: [3, 3],
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
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
        },
        markers: {
            style: 'inverted',
            size: 6,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month',
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
            },
            min: 5,
            max: 40,
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
            name: 'High - 2022',
            data: [21, 26, 23, 27, 25, 28, 30],
        },
        {
            name: 'Low - 2022',
            data: [10, 13, 11, 16, 17, 19, 21],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Today's Weather</h4>
                <p className="display-6">24&deg;C 
                &nbsp;
                
                <i className="uil uil-thunderstorm-sun"></i>
                
                <hr className="mt-1 mb-1" />
                
                </p> 
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts"
                />
            </Card.Body>
        </Card>
    );
};

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
                        
                        <Link to="#"><i className="uil  uil-facebook"></i></Link>&nbsp;
                        <Link to="#"><i className="uil  uil-twitter"></i></Link>&nbsp;
                        <Link to="#"><i className="uil  uil-instagram"></i></Link>&nbsp;
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

const Starter = (): React$Element<React$FragmentType> => {
    return (
        <>
            
            <br />
            <Row>
                <Col sm={8} lg={8}>
                    <SlidesWithCaptionsAndIndicaticators />
                </Col>
                <Col sm={4} lg={4}>
                
                <LineChart />

                <Ribbon1 label="About" color="danger" direction="right" />

                </Col>
            </Row>
            <Row>
                <Col sm={4} lg={4}>

                    <StatisticsChartWidget
                        description="Water Level"
                        title="Water Level"
                        stats="-2100 mm"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '3.27%',
                        }}
                        colors={['#727cf5']}
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>

                <Col sm={4} lg={4}>

                    <StatisticsChartWidget
                        description="Barometer"
                        title="Barometer"
                        stats="1014.4"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '3.2 hPa',
                        }}
                        colors={['#727cf5']}
                        type="line"
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget>
                </Col>

                <Col sm={4} lg={4}>
                    <StatisticsWidget
                        icon="uil-raindrops-alt bg-light-lighten rounded-circle text-white"
                        description="Rain Accumulation"
                        title="Rain Accumulation"
                        stats="18.51 cm"
                        trend={{
                            textClass: 'badge bg-info',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '17.26%',
                            time: 'Since yesterday',
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
                                &nbsp;
                            </p>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/bcCbQQAq-2E?rel=0&amp;start&amp;end&amp;controls=1&amp;mute=0&amp;modestbranding=0&amp;autoplay=0"
                                    title="iframe"></iframe>
                            </div>
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

export default Starter;
