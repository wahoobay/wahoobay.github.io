//import axios from 'axios'
import create from 'zustand';


const weatherStore = create((set) => ({ 

    // axios not working
    // const res = await axios.get("/api/v1/sitedata/latest?site=1")
    // using fetch instead
    
    oneMin: 60000,
    oneHr: 3600000,
    oneDay: 86400000,
    oneWeek: 604800000,
    oneMonth: 2592000000,
    oneYear: 31536000000,

    sunFunction: async () => {
        const res = await fetch("https://api.sunrise-sunset.org/json?lat=26.231480&lng=-80.126122")
        const data = await res.json()
        set({sunFunc: {
            sunrise: data.results.sunrise,
            sunset: data.results.sunset
        }})
    },

    // sunCalcFunction: async () => {
    //     const res = await SunCalc.getTimes(new Date(), 26.231480, -80.126122)
    //     set({sunCalcFunc: {
    //         sunrise: res.sunrise,
    //         sunset: res.sunset
    //     }})
    //     console.log("sunCalcFunc sunrise: ", res.sunrise)
    //     console.log("sunCalcFunc sunset: ", res.sunset)
    // },

    latestFunction: async () => { 
    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata/latest?site=1`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ latest: {
                time: data.time,
                day: new Date(data.time).getDate(), // Day of the month
                month: new Date(data.time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data.time).getFullYear(), // Year
                date: new Date(data.time).toDateString(), // Date String
                barPress: data.readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data.readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data.readings[2], // Wind direction average, units: degrees
                windDirMax: data.readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data.readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data.readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data.readings[6], // Wind speed maximum, units: meters per second
                airTemp: data.readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data.readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data.readings[9], // Relative humidity, units: percent RH
                rainAccum: data.readings[10],  // Rain accumulation, units: millimeters
                rainDur: data.readings[11], // Rain duration, units: x/3600 hours
                rainInt: data.readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data.readings[13], // Hail accumulation, units: count
                hailDur: data.readings[14], // Hail duration
                hailInt: data.readings[15], //eless intensity
                rainPeakInt: data.readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data.readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data.readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data.readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data.readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data.readings[21], // Heating voltage, units: volts
                supplyVolt: data.readings[22], // Supply voltage, units: volts
                refVoltage: data.readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data.time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data.readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data.readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data.readings[18].toFixed(1), // Water level, units: millimeters
                
                }})
            console.log("CURRENT WEATHER: ", data);
        })
        .catch((err) => {
            console.log(err);
        });
    },

    yesterdayFunction: async () => {
        const now = Date.now();
        const oneInd = 301000;
        const oneDay = 86400000;
        const yesterday = now - oneDay;
        const start = yesterday;
        const end = yesterday + oneInd;

        const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        };
        await fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                set({ yesterday: {
                    time: data[0].time,
                    day: new Date(data[0].time).getDate(), // Day of the month
                    month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                    year: new Date(data[0].time).getFullYear(), // Year
                    date: new Date(data[0].time).toDateString(), // Date String
                    barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                    windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                    windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                    windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                    windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                    windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                    windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                    airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                    internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                    relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                    rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                    rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                    rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                    hailAccum: data[0].readings[13], // Hail accumulation, units: count
                    hailDur: data[0].readings[14], // Hail duration
                    hailInt: data[0].readings[15], //eless intensity
                    rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                    hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                    waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                    solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                    heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                    heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                    supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                    refVoltage: data[0].readings[23], // Reference voltage, units: volts
                    // time conversion
                    timeConv: new Date(data[0].time).toLocaleString(), // local time
                    // barometric pressure conversion
                    barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                    // temp conversion
                    airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                    // water level rounded
                    waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters
                        
                    }})
                console.log("LAST MONTH'S WEATHER: ", data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
        },

    lastMonthFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const lastMonth = now - 2592000000;
    const start = lastMonth;
    const end = lastMonth + oneInd;

    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ lastMonth: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters
                    
                }})
            console.log("LAST MONTH'S WEATHER: ", data[0]);
        })
        .catch((err) => {
            console.log(err);
        });
    },

    twoMonthsAgoFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const twoMonthsAgo = now - 5184000000;
    const start = twoMonthsAgo;
    const end = twoMonthsAgo + oneInd;

    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            
            set({ twoMonthsAgo: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters

                }})
            console.log("TWO MONTHS AGO'S WEATHER: ", data[0]);
        })
        .catch((err) => {
            console.log(err);
        }
        );
    },

    threeMonthsAgoFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const threeMonthsAgo = now - 7776000000;
    const start = threeMonthsAgo;
    const end = threeMonthsAgo + oneInd;
    
    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ threeMonthsAgo: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters
            }})
            console.log("THREE MONTHS AGO'S WEATHER: ", data[0]);
        })
        .catch((err) => {
            console.log(err);
        }
        );
    },

    fourMonthsAgoFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const fourMonthsAgo = now - 10368000000;
    const start = fourMonthsAgo;
    const end = fourMonthsAgo + oneInd;

    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ fourMonthsAgo: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters
            }})
            console.log("FOUR MONTHS AGO'S WEATHER: ", data[0]);
        })
        .catch((err) => {
            console.log(err);
        }
        );
    },

    fiveMonthsAgoFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const fiveMonthsAgo = now - 12960000000;
    const start = fiveMonthsAgo;
    const end = fiveMonthsAgo + oneInd;

    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ fiveMonthsAgo: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters

                }})
            console.log("FIVE MONTHS AGO'S WEATHER: ", data[0]);
            })
            .catch((err) => {
                console.log(err);
            }
            );
    },

    sixMonthsAgoFunction: async () => {
    const now = Date.now();
    const oneInd = 301000;
    const sixMonthsAgo = now - 15552000000;
    const start = sixMonthsAgo;
    const end = sixMonthsAgo + oneInd;
        
    const url = `http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com/api/v1/sitedata?site=1&start=${start}&end=${end}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
    await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            set({ sixMonthsAgo: {
                time: data[0].time,
                day: new Date(data[0].time).getDate(), // Day of the month
                month: new Date(data[0].time).toLocaleString('en-us', { month: 'short' }), // Month of the year
                year: new Date(data[0].time).getFullYear(), // Year
                date: new Date(data[0].time).toDateString(), // Date String
                barPress: data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
                windDirMin: data[0].readings[1], // Wind direction minimum, units: degrees
                windDirAvg: data[0].readings[2], // Wind direction average, units: degrees
                windDirMax: data[0].readings[3], // Wind direction maximum, units: degrees
                windSpeedMin: data[0].readings[4], // Wind speed minimum, units: meters per second
                windSpeedAvg: data[0].readings[5], // Wind speed average, units: meters per second
                windSpeedMax: data[0].readings[6], // Wind speed maximum, units: meters per second
                airTemp: data[0].readings[7], // Air temperature, units: degrees Celsius
                internalTemp: data[0].readings[8], // Internal temperature, units: degrees Celsius
                relHumidity: data[0].readings[9], // Relative humidity, units: percent RH
                rainAccum: data[0].readings[10],  // Rain accumulation, units: millimeters
                rainDur: data[0].readings[11], // Rain duration, units: x/3600 hours
                rainInt: data[0].readings[12], // Rain intensity, units: millimeters per hour
                hailAccum: data[0].readings[13], // Hail accumulation, units: count
                hailDur: data[0].readings[14], // Hail duration
                hailInt: data[0].readings[15], //eless intensity
                rainPeakInt: data[0].readings[16], // Rain peak intensity, units: millimeters per hour
                hailPeakInt: data[0].readings[17], // Hail peak intensity, units: millimeters per hour
                waterLevel: data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
                solarRad: data[0].readings[19], // Solar radiation, units: watts per square meter
                heatingTemp: data[0].readings[20], // Heating temperature, units: degrees Celsius
                heatingVolt: data[0].readings[21], // Heating voltage, units: volts
                supplyVolt: data[0].readings[22], // Supply voltage, units: volts
                refVoltage: data[0].readings[23], // Reference voltage, units: volts
                // time conversion
                timeConv: new Date(data[0].time).toLocaleString(), // local time
                // barometric pressure conversion
                barPressConv: (data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
                // temp conversion
                airTempF: ((data[0].readings[7] * 9/5) + 32).toFixed(1), // Air temperature, units: degrees Fahrenheit
                // water level rounded
                waterLevelR: data[0].readings[18].toFixed(1), // Water level, units: millimeters
                    
                }})
            console.log("SIX MONTHS AGO'S WEATHER: ", data[0]);
        })
        .catch((err) => {
            console.log(err);
        }
        );
    },
}));

export default weatherStore;

