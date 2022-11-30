signed up with tomorrow.io for weather data api (dzimmerman2021@fau.edu/myusualpw)
- [x]  added .env with api url and api key for
- [x]  added variable configuration in config.js


sitedata:
    allOf:
      - $ref: '#/definitions/sitedata'
    properties:
          time:
            type: string
            format: date-time
          readings:
            description: "Data in the readings array is always returned in the following order. For unit conversions, x = the numerical reading:\n
            1. Barometric pressure, units: hecto pascals\n
            2. Wind direction minimum, units: degrees\n
            3. Wind direction average, units: degrees\n
            4. Wind direction maximum, units: degrees\n
            5. Wind speed minimum, units: m/s\n
            6. Wind speed average, units: m/s\n
            7. Wind speed maximum, units: m/s\n
            8. Air temperature, units: celsius\n
            9. Internal temperature, units: celsius\n
            10. Relative humidity, units: % RH\n
            11. Rain accumulation, units: millimeters\n
            12. Rain duration, units: x / 3600 hours\n
            13. Rain intensity, units: mm/h\n
            14. Hail accumulation, units: count\n
            15. Hail duration\n
            16. Hail intensity\n
            17. Rain peak intensity, units: mm/h\n
            18. Hail peak intensity\n
            19. Water level, units: 1024 * 10 * x / 3.3 millimeters\n
            20. Solar radiation, units: x * 566.25 W/m^2\n
            21. Heating temperature, units: celsius\n
            22. Heating voltage, units: volts\n
            23. Supply voltage, units: volts\n
            24. 3.5V Ref. Voltage, units: volts"

