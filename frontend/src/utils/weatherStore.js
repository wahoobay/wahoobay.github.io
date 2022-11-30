import axios from 'axios'
import create from 'zustand';

const weatherStore = create((set) => ({
    
    oneMin: 60000,
    oneHr: 3600000,
    oneDay: 86400000,
    oneWeek: 604800000,
    oneMonth: 2592000000,
    oneYear: 31536000000,

    latestFunction: async () => { 

        const res = await axios.get("/api/v1/sitedata/latest?site=1")
        console.log("LATEST WEATHER: ", res.data);
        
        set({ latest: {
            time: res.data.time,
            barPress: res.data.readings[0], // Barometric pressure, units: hecto pascals (hPa)
            windDirMin: res.data.readings[1], // Wind direction minimum, units: degrees
            windDirAvg: res.data.readings[2], // Wind direction average, units: degrees
            windDirMax: res.data.readings[3], // Wind direction maximum, units: degrees
            windSpeedMin: res.data.readings[4], // Wind speed minimum, units: meters per second
            windSpeedAvg: res.data.readings[5], // Wind speed average, units: meters per second
            windSpeedMax: res.data.readings[6], // Wind speed maximum, units: meters per second
            airTemp: res.data.readings[7], // Air temperature, units: degrees Celsius
            internalTemp: res.data.readings[8], // Internal temperature, units: degrees Celsius
            relHumidity: res.data.readings[9], // Relative humidity, units: percent RH
            rainAccum: res.data.readings[10],  // Rain accumulation, units: millimeters
            rainDur: res.data.readings[11], // Rain duration, units: x/3600 hours
            rainInt: res.data.readings[12], // Rain intensity, units: millimeters per hour
            hailAccum: res.data.readings[13], // Hail accumulation, units: count
            hailDur: res.data.readings[14], // Hail duration
            hailInt: res.data.readings[15], //eless intensity
            rainPeakInt: res.data.readings[16], // Rain peak intensity, units: millimeters per hour
            hailPeakInt: res.data.readings[17], // Hail peak intensity, units: millimeters per hour
            waterLevel: res.data.readings[18], // Water level, units: (1024 * x / 3.3 mm)
            solarRad: res.data.readings[19], // Solar radiation, units: watts per square meter
            heatingTemp: res.data.readings[20], // Heating temperature, units: degrees Celsius
            heatingVolt: res.data.readings[21], // Heating voltage, units: volts
            supplyVolt: res.data.readings[22], // Supply voltage, units: volts
            refVoltage: res.data.readings[23], // Reference voltage, units: volts
            // time conversion
            timeConv: new Date(res.data.time).toLocaleString(), // local time
            // barometric pressure conversion
            barPressConv: (res.data.readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
            // temp conversion
            airTempF: (res.data.readings[7] * 9/5) + 32, // Air temperature, units: degrees Fahrenheit
            // water level rounded
            waterLevelR: res.data.readings[18].toFixed(1), // Water level, units: millimeters
            
        }})
    },

    previousFunction: async () => {
        
        const fiveMin = 301000;
        const oneHr = 3612000;
        const oneDy = 86688000;
        const oneWk = 606816000;
        const oneMo = 18204480000;
        const oneYr = 31641120000;

        const end = 1669509758000;
        const start = end - oneMo;

        console.log(`/api/v1/sitedata?site=1&start=${start}&end=${end}`)
    
        const res = await axios.get(`/api/v1/sitedata?site=1&start=${start}&end=${end}`)
    
        console.log("PREVIOUS WEATHER: ", res.data);

        set({ previous: {
            barPress: res.data[0].readings[0], // Barometric pressure, units: hecto pascals (hPa)
            windDirMin: res.data[0].readings[1], // Wind direction minimum, units: degrees
            windDirAvg: res.data[0].readings[2], // Wind direction average, units: degrees
            windDirMax: res.data[0].readings[3], // Wind direction maximum, units: degrees
            windSpeedMin: res.data[0].readings[4], // Wind speed minimum, units: meters per second
            windSpeedAvg: res.data[0].readings[5], // Wind speed average, units: meters per second
            windSpeedMax: res.data[0].readings[6], // Wind speed maximum, units: meters per second
            airTemp: res.data[0].readings[7], // Air temperature, units: degrees Celsius
            internalTemp: res.data[0].readings[8], // Internal temperature, units: degrees Celsius
            relHumidity: res.data[0].readings[9], // Relative humidity, units: percent RH
            rainAccum: res.data[0].readings[10],  // Rain accumulation, units: millimeters
            rainDur: res.data[0].readings[11], // Rain duration, units: x/3600 hours
            rainInt: res.data[0].readings[12], // Rain intensity, units: millimeters per hour
            hailAccum: res.data[0].readings[13], // Hail accumulation, units: count
            hailDur: res.data[0].readings[14], // Hail duration
            hailInt: res.data[0].readings[15], //eless intensity
            rainPeakInt: res.data[0].readings[16], // Rain peak intensity, units: millimeters per hour
            hailPeakInt: res.data[0].readings[17], // Hail peak intensity, units: millimeters per hour
            waterLevel: res.data[0].readings[18], // Water level, units: (1024 * x / 3.3 mm)
            solarRad: res.data[0].readings[19], // Solar radiation, units: watts per square meter
            heatingTemp: res.data[0].readings[20], // Heating temperature, units: degrees
            heatingVolt: res.data[0].readings[21], // Heating voltage, units: volts
            supplyVolt: res.data[0].readings[22], // Supply voltage, units: volts
            refVoltage: res.data[0].readings[23], // Reference voltage, units: volts
            // barometric pressure conversion
            barPressConv: (res.data[0].readings[0] * 0.750063755419211).toFixed(1), // Barometric pressure, units: mm of mercury
            // temp conversion
            airTempF: (res.data[0].readings[7] * 9/5) + 32, // Air temperature, units: degrees Fahrenheit
            // water level rounded
            waterLevelR: res.data[0].readings[18].toFixed(1), // Water level, units: millimeters
        }})
    }

    

    //const today = 1669134102000
  
    //const start = today - 86400000;
    //const yesterday = 1669132898000;

    //const end = start + 3000000;

    //const res = await axios.get("/api/v1/sitedata?end=" + today + "&site=1&start" + yesterday)
    //const res = await axios.get("/api/v1/sitedata?site=1&start=1669132898000&end=1669134102000")
    //const res = await axios.get("/api/v1/sitedata?site=1&start=1669132898000&end=1669134102000")
    
    //console.log("NEW API STRING: ", newApiString);

    // console.log(`/api/v1/sitedata?site=1&start=${oneHrAgo}&end=${oneHrTwentyMinAgo}`)


}))

export default weatherStore