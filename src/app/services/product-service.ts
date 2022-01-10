import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    public products: Product[]  = [
        { id: 1, name: "DE0-nano FPGA Board", description: "DE0-Nano Development and Education Board", rating: 5, category: "Electronic Boards", price: 3600, price_before:4500, inventoryStatus: "LOWSTOCK", img: "de0_nano.jfif",
        full_description:"The DE0-Nano board introduces a compact-sized FPGA development platform suited for\nprototyping circuit designs such as robots and \"portable\" projects. The board is\ndesigned to be used in the simplest possible implementation targeting the Cyclone\nIV device up to 22,320 LEs.\n\nThe DE0-Nano has a collection of interfaces including two external GPIO headers to\nextend designs beyond the DE0-Nano board, on-board memory devices including SDRAM\nand EEPROM for larger data storage and frame buffering, as well as general user\nperipheral with LEDs and push-buttons.\n\nThe advantages of the DE0-Nano board include its size and weight, as well as its\nability to be reconfigured without carrying superfluous hardware, setting itself\napart from other general purpose development boards. In addition, for mobile designs\nwhere portable power is crucial, the DE0-Nano provides designers with three power\nscheme options including a USB mini-AB port, 2-pin external power header and two\nDC 5V pins." },
        
        { id: 2, name: "DuPont Head Test Hook Line", description: "10pin DuPont Head Test Hook Line 30cm Long", rating: 4, category: "Wires & Crocodiles", price: 45, inventoryStatus: "INSTOCK", img: "1.1.jpg",
        full_description:"10pin DuPont Head Test Hook Line 30cm Long\nThese test hook clips are Perfect for use with Components USB 24M 8CH logic analyzer"  },
        
        { id: 3, name: "Banana Terminals Wire Test Cable", description: "4mm Banana Terminals Wire Test Cable – 1m length (Black Color)", rating: 3, category: "Wires & Crocodiles", price: 25, inventoryStatus: "INSTOCK", img: "1.2.jpg",
        full_description:"4mm Banana Terminals Wire, 1m length – Extendible (Black Color)\nVery good quality cable.\n Max Current 5A"  },

        { id: 4, name: "Stepper Motor", description: "5V Small Stepper Motor", rating: 3, category: "Motors & Drives", price: 45, inventoryStatus: "INSTOCK", img: "2.5.jpg",
        full_description:"Voltage: DC 5V\nDiameter: 28mm\nStep Angle: 5.625 x 1/64\nReduction Ratio: 1/64"  },
        
        { id: 5, name: "Voltage Protector", description: "63A 230V Adjustable Over Under Voltage Protector (TVPS1-63B)", rating: 3, category: "Protectors / Stabilizers / Inverters", price: 400, price_before:460, inventoryStatus: "LOWSTOCK", img: "Voltage Protector.jpg",
        full_description:"63A 230V Adjustable Voltage Protector Auto Recover Over Under Voltage Monitor Protect\nLimit over Current Protection Relay\n\nFunctions:\n\nOver-voltage protection\nUnder-voltage protection\nOver-current protection\nAutomatic recovery\nVoltage display(voltage measurement)\nCurrent display (current measurement)\n\nProduct Parameters:\n\nModel number:TVPS1-63B\nPower supply:230VAC 50/60Hz\nMax.Loading power: 1~63A Adjustable(default:63A)\nOver-voltage protection value range: 230V~300~OFF (default:270V)\nOver-voltage recovery voltage range: 225V–295V (default:250V)\nOver-voltage protection action time: 0.1s~30s (default value:0.5s)\nOver-voltage r ecovery delay time: 1s~500s(default:30s)\nUnder-voltage protection value range: 140V–210V –OFF(default:170V)\nUnder-voltage recovery voltage range: 145V–215V (default:190V)\nUnder-voltage protection action time: 0.1s~30s(default:0.5s)\nUnder-voltage r ecovery delay time: 1s~500s(default:30s)\nOver-current adjustment range: 1-63A (default:40A)\nOver-current action range: 0.1~30 second (default:0.5s)\nOver-current r ecovery delay time: 1s~500s(default:30s)\nPower-on delay time: 1s~500s(default:10s)\nPower consumption : <2W\nElectric machinery life : 100,000 times\nInstallation:35mm DIN rail\nNoted: When you first connect the product, you have to wait about 10 seconds\n( Power-on delay time:1 s~50 0s(default:10 s)), after the red light turns off,\nthen the product will work."  },
        
        { id: 6, name: "Arduino Mega", description: "Arduino Board – Arduino Mega2560 Rev3", rating: 4, category: "Electronic Boards", price: 1000, inventoryStatus: "INSTOCK", img: "arduino_mega.jpg",
        full_description:"The Arduino Mega 2560 is a microcontroller board based on the ATmega2560. It has 54\ndigital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4\nUARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an\nICSP header, and a reset button. It contains everything needed to support the microcontroller\nsimply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or\nbattery to get started. The Mega is compatible with most shields designed for the Arduino\nDuemilanove or Diecimila.\n\nSummary\n\nMicrocontroller: ATmega2560\nOperating Voltage: 5V\nInput Voltage (recommended): 7-12V\nInput Voltage (limits): 6-20V\nDigital I/O Pins: 54 (of which 15 provide PWM output)\nAnalog Input Pins: 16\nDC Current per I/O Pin: 40 mA\nDC Current for 3.3V Pin:50 mA\nFlash Memory: 256 KB of which 8 KB used by bootloader\nSRAM: 8 KB\nEEPROM: 4 KB\nClock Speed: 16 MHz"},

        { id: 7, name: "Digital Thermometer", description: "Digital Thermometer With Probe TPM-10 (With Battery)", rating: 4, category: "Measuring Instruments", price: 50, inventoryStatus: "INSTOCK", img: "Digital_Thermometer.jpg",
        full_description:"Parameters:\n\nDimension: 48.5*28*15.2mm\nTemperature range: -50°C~ 110°C\nTemperature accuracy: ±1°C\nResolution: 0.1°C\nOperating Voltage: LR44 batteries\nProbe cable length: 1m\nSampling period: 2 Sec\n"  },
        
        { id: 8, name: "Connecting Jumper Wires", description: "Connecting Jumper Wires for Bread Board & Arduino (65 Wire) 22AW", rating: 3, category: "Wires & Crocodiles", price: 30, inventoryStatus: "INSTOCK", img: "1.3.jpg",
        full_description:"65 pcs of 22AWG jumper wire for breadboard or Arduino\nCompletely reusable\nColored coordinates for easy component placement\n65 PCS of 22 AWG solid jumper\nLine of different colors can be re-used\nLengths and quantity: 100mm 50PCS, 140mm 10PCS, 180mm 5PCS, 230mm 5PCS"  },
        
        { id: 9, name: "Motor Speed Control Switch", description: "10A PWM Motor Speed Control Switch Manual (12Vdc to 40Vdc)", rating: 4, category: "Motors & Drives", price: 125, inventoryStatus: "INSTOCK", img: "2.4.jpg",
        full_description:"12V-40V 10A Modulation PWM DC Motor Speed Control Switch Governor\n\nFeatures:\n\nControl the speed of a DC motor with this controller.\nHigh efficiency, high torque, low heat generating.\nWith reverse polarity protection, high current protection.\nWorking Voltage: DC 12V – DC 40V.\nControl Power:0.01 – 400W.\nStatic Current:0.02 A (Standby).\nPWM Duty Cycle:10% -100%.\nPWM Frequency:13 KHz.\nSize:6cm x 7.5cm x 2.8cm\nWeight: 70g\n\nNote: the white connector on PCB to extend the potentiometer 100k Ohm with wire"  },
        
        { id: 10, name: "Microwave Oven Magnetron", description: "Microwave Oven Magnetron 900W (6 Sheet 6 Hole-900W)", rating: 2, category: "Protectors / Stabilizers / Inverters", price: 150, inventoryStatus: "LOWSTOCK", img: "Microwave Oven Magnetron.jpg",
        full_description:"Microwave Oven Magnetron 900W (6 Sheet 6 Hole 900W)\n– used in most Microwave ovens."  },
        
        { id: 11, name: "Illuminometers", description: "UT381 Illuminometers (LUX Meters) – Advanced", rating: 3, category: "Measuring Instruments", price: 750, price_before:800, inventoryStatus: "INSTOCK", img: "Illuminometers.jpg",
        full_description:"UT381 Illuminometer\nUNI-T’s UT381 is a 1999-count auto range illuminometer with 20~20000 Lux (Fc) range.\n2044-group data storage and auto power off are available.\n\nFeatures\n\nAuto/manual range, data hold\nAuto power off (cancelable)\nMAX/MIN modes\n2044 sets data storage\nDisplays time and adjustable record intervals (0.5~255s)\nRestore to default mode\nLux/FC selectable\n"  },

        { id: 12, name: "Raspberry Pi", description: "Raspberry Pi 4B – 8GB – MADE IN UK", rating: 4, category: "Electronic Boards", price: 2600, price_before:3500, inventoryStatus: "INSTOCK", img: "raspberry_pi.jpg",
        full_description:"Specifications\n\nBroadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz\n2GB, 4GB or 8GB LPDDR4-3200 SDRAM (depending on model)\n2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE\nGigabit Ethernet\n2 USB 3.0 ports; 2 USB 2.0 ports.\nRaspberry Pi standard 40 pin GPIO header (fully backwards compatible with previous\n boards)\n2 × micro-HDMI ports (up to 4kp60 supported)\n2-lane MIPI DSI display port\n2-lane MIPI CSI camera port\n4-pole stereo audio and composite video port\nH.265 (4kp60 decode), H264 (1080p60 decode, 1080p30 encode)\nOpenGL ES 3.0 graphics\nMicro-SD card slot for loading operating system and data storage\n5V DC via USB-C connector (minimum 3A*)\n5V DC via GPIO header (minimum 3A*)\nPower over Ethernet (PoE) enabled (requires separate PoE HAT)\nOperating temperature: 0 – 50 degrees C ambient"  },
        
        { id: 13, name: "Crocodile (Alligator)", description: "Crocodile (Alligator) 10 Wires Different Colors 45cm Length", rating: 4, category: "Wires & Crocodiles", price: 30, inventoryStatus: "LOWSTOCK", img: "1.4.jpg",
        full_description:"10 different colored wires (Red, Yellow, Black, White, Green) ended by crocodiles\neach wire is 45 cm long."  },
        
        { id: 14, name: "Female to Female Jumper Wires", description: "PHcr- 20Cm Female to Female 40 Jumper Set Connecting Wire", rating: 4, category: "Wires & Crocodiles", price: 22, inventoryStatus: "INSTOCK", img: "1.5.jpg",
        full_description:"Arduino Jumper Wire Set (40 Jumper)\nHandy for making wire harnesses or jumpers between headers on PCB’s. These premium\njumper wires are 20cm long and come in a strip of 40.\nThey have 0.1″ male header contacts on one end and female header on the other.\nThey fit cleanly next to each other on standard-pitch 0.1″ (2.54mm) header.\n\nFeatures:\n\nSuitable for Female Headers (Such as in Arduino Board)\nCurrent Rating up to 1A\nMixed Colors\nLength 20 cm"  },
        
        { id: 15, name: "Female to Male Jumper Wires", description: "PHcr- 20Cm Female to Male 40 Jumper Set Connecting Wire", rating: 4, category: "Wires & Crocodiles", price: 22, inventoryStatus: "INSTOCK", img: "1.6.jpg",
        full_description:"Arduino Jumper Wire Set (40 Jumper)\nHandy for making wire harnesses or jumpers between headers on PCB’s. These premium\njumper wires are 20cm long and come in a strip of 40.\nThey have 0.1″ male header contacts on one end and female header on the other.\nThey fit cleanly next to each other on standard-pitch 0.1″ (2.54mm) header.\n\nFeatures:\n\nSuitable for Female Headers (Such as in Arduino Board)\nCurrent Rating up to 1A\nMixed Colors\nLength 20 cm"  },

        { id: 16, name: "Digital Multimeter", description: "UT61E 1000V True RMS Digital Multimeter", rating: 4, category: "Measuring Instruments", price: 1200, price_before:1350, inventoryStatus: "LOWSTOCK", img: "Digital_Multimeter.jpg",
        full_description:"UT61E+ 1000V True RMS Digital Multimeter UT61+ series are reliable true RMS digital\nmultimeters with display counts 6000 (UT61B+/D+) and 22,000 (UT61E+). It can measure\nup to 1000V AC/DC. Equipped with audible and visible alarm, this series can provide\nwarning especially when measuring high voltage/current and temperature.\n\nFeatures\n\nTrue RMS\nData hold/backlight\nMax/Min/Relative mode\nUSB communication\nInput protection\nDiode/continuity test\nNCV (audible/visual alarm)\nLPF ACV\nACV+DCV\nTransistor hFE\nPeak HoldNOTE: UT161E = UT61E+\n"  },
                
        { id: 17, name: "2-phase Digital Stepper Drive", description: "EM882S \"2-phase Digital Stepper Drive; I/P:20~80VDC; O/P:2.1~8.2A", rating: 3, category: "Motors & Drives", price: 1350, inventoryStatus: "OUTOFSTOCK", img: "2.3.jpg",
        full_description:"Introductions\n\nThe EM882S is a new digital stepper drive based on Leadshine’s widely implemented DM\nstepper drives (10 millions of units in field). While retaining features of simple design, easy\nsetup, high precision and reliability, Leadshine has also upgraded it by adopting the latest\nstepper control technology and added additional advanced features for better torque\n(10-25%), quicker response time, control command smoothing, alarm and brake\noutput, etc.\nThe EM882S is able to power 2 phase and 4 phase stepper motors smoothly with very low\nmotor heating & noise. It can take 20-80VDC supply voltage and output 0.5 to 8.2A current.\nIts control type (step & direction or CW/CCW) and command smooth filtering can also be\nconfigured via Leadshine ProTuner. Therefore, the EM882S is an ideal choice for many\napplications requiring simple step & direction or CW/CCW control of NEMA 23, 24 and 34\nstepper motors.\n\nFeatures\n\nStep & direction (PUL/DIR) or CW/CCW (double pulse) control\n20-80VDC supply voltage\n200 KHz max pulse input frequency\nMicrostep resolutions programmable, from 200 to 51,200\nOutput current programmable, from 0.5A to 8.2A\nConfigurable control command smoothing for motor vibration\nAutomatic idle current reduction to 50%\nAutomatic self-configuration to match NEMA 23, 24 and 34 stepper motors\nAnti-Resonance for optimal torque, extra smooth motion, low motor heating and noise\nSoft start with no “jump” when powered on\nOptically isolated inputs\nFault Output Control\nOver-voltage, over-current and sensor less detection position protections\nCE certified and RoHS compliant\nApplications\n\nThe EM882S stepper drive are designed to power 2 phase (1.8°) or 4-phase (0.9°)\nNEMA 23, 24, 34, and 42 hybrid stepper motors. It can be easily adopted in many industries\n(CNC, medical, automation, packaging…), such as X-Y tables, engraving machines, labeling\nmachines, mills, plasma, laser cutters, pick and place devices, and so on. Its excellent\nperformance, simple design, and easy setup make it ideal for many step & direction\ncontrol type applications."  },
        
        { id: 18, name: "Single Phase Wattmeter", description: "Single Phase Two Wire LCD Digital Display Wattmeter Power Consumption Energy Meter", rating: 4, category: "Protectors / Stabilizers / Inverters", price: 275, inventoryStatus: "INSTOCK", img: "Single Phase Wattmeter.jpg",
        full_description:"Model:  6619-008\n\nBacklit Single Phase Two Wire LCD Digital Display Wattmeter Power Consumption Energy\nMeter kWh AC 230V 50Hz Electric Din Rail Features:\n\nCompared with the traditional meter, this product looks small and beautiful, light weight,\neasy to install!\nThe traditional maximum current meter is 4 times the rated current, the product is smart\nmeters, overload capacity.\n\nParameters:\n\nRated current: 5A\nMaximum current: 80A\nLCD display with backlight\nPulse LED indicates working of meter\nPulse output with optical coupling isolation\n35mm DIN rail installation\nDimensions:78*66*36mm"  },
        
        { id: 19, name: "FPGA Kit", description: "FPGA Development Board ALTERA IV – EP4CE", rating: 5, category: "Electronic Boards", price: 2000, price_before:3000, inventoryStatus: "OUTOFSTOCK", img: "fpga.jpg",
        full_description:"Altera Cyclone IV EP4CE FPGA Development Board NIOSII Core Board – Send Infrared\nRemote Controller Downloader\n\nAltera FPGA Development Board:\n\nFPGA development board using Altera company Hurricane fourth generation development\nboard, the chip is rich in resources, high utilization rate, rather than using QFP package,\nBGA package,\nso simple for beginners to learn, easy DIY error, test investigation. The chip pins are all\nled out, and various modules can be connected according to their own requirements,\nthe expansion is convenient and powerful.\n\nPerformance configuration: \n\nThe main chip: the ALTERA FPGA CycloneIV series EP4CE6E22C8N the fourth generation.\nStorage configuration: onboard M25P16 large capacity storage chip 16Mbit, support\nJTAG/AS mode, on board 64Mbit SDRAM, support SOPC, NIOSII development.\nDownload mode: JTAG download port, Download Sof files, download speed, but also\ncuring, curing procedures, power loss is not lost.\nRegulator chip: 1117-3.3V regulator chip, to provide 3.3V voltage output; 1117-1.2V\nvoltage regulator chip to\nprovide FPGA kernel voltage; 1117-2.5V regulator chip to provide PLL voltage.\n\nRich peripheral resources:\n\n4 independent buttons, buttons control, digital logic, basic experiments, etc.\n4 bit LED LED can be used for LED control, digital logic, basic experiments and so on.\n4 – bit code tube, frequency meter, stopwatch.\n4 position dial switch can be used for switch control and other experiments.\nWith 1X20 LCD screen row seat, support LCD1602, LCD12864, TFT LCD screen.\nPrecision adjustable resistor to adjust LCD contrast.\n1 buzzer, audible and music experiments can be done.\nPS2 interface, can do PS/2 keyboard experiment.\nTemperature sensor chip LM75A can do thermometer experiment.\nRS232 serial port can do serial communication experiment.\nVGA interface, do monitors, experiments and so on.\nI2C serial EEPROM AT24C08, do IIC bus experiment.\nInfrared receiving module.\n"  },
        
        { id: 20, name: "Male to Male Jumper Wires", description: "PHcr- 20Cm Male to Male 40 Jumper Set Connecting Wire", rating: 4, category: "Wires & Crocodiles", price: 22, inventoryStatus: "INSTOCK", img: "1.7.jpg",
        full_description:"Arduino Jumper Wire Set (40 Jumper)\nHandy for making wire harnesses or jumpers between headers on PCB’s. These premium\njumper wires are 20cm long and come in a strip of 40.\nThey have 0.1″ male header contacts on one end and female header on the other.\nThey fit cleanly next to each other on standard-pitch 0.1″ (2.54mm) header.\n\nFeatures:\n\nSuitable for Female Headers (Such as in Arduino Board)\nCurrent Rating up to 1A\nMixed Colors\nLength 20 cm"  },
        
        { id: 21, name: "2-phase Stepper Drive", description: "ADT80 (2-phase) Stepper Drive AC & DC Voltage & Current 8A", rating: 4, category: "Motors & Drives", price: 1200, price_before:1450, inventoryStatus: "LOWSTOCK", img: "2.1.jpg",
        full_description:"The ADT-80 is a high-performance micro stepping driver based on digital signal processing\ncontrol technology. Owing to this advanced technology, the driven motor can run with\nsmaller noise, lower heating, smoother movement and have better performance at a higher\nspeed than most of the drivers in the markets. It is suitable for driving 2-phase and\n4-phase hybrid stepping motors.\n\nFeatures:\n\nHigh performance, cost-effective\n32-bit digital signal processing technology\nExtremely low motor noise\nBoth driver and motor are low heating\nEspecially in high speed, it can keep high torque\nSupply voltage up to DC:80V or AC:60V\nOutput current up to 8.0A\nPulse input frequency up to 300 KHz\nTTL compatible and optically isolated input\nAutomatic idle-current reduction\n15 selectable resolutions, up to 10000 steps/rev\nSuitable for 2-phase and 4-phase motors\nSupport PUL/DIR and CW/CCW modes\nOver-voltage, over-current, and over-temperature protection\n 51*107*48(mm)\n\nApplications:\n\nSuitable for a wide range of stepping motors, from NEMA size 17 to 43. It can be used in\nvarious kinds of machines, such as X-Y tables, labeling machines, laser cutters, engraving\nmachines, pick-place devices, and so on. Particularly adapt to the applications desired\nwith low noise, low heating, high speed, and high precision."},
                
        { id: 22, name: "Power Supply Module", description: "ZVS 12-48V 20A 1000W Induction Heating Power Supply Module With Coil", rating: 3, category: "Protectors / Stabilizers / Inverters", price: 700,  price_before:820, inventoryStatus: "INSTOCK", img: "Power Supply Module.jpg",
        full_description:"High Frequency Induction Heating Machine Module\n\nFeatures:\n\nThis section of induction heating using low-voltage DC power supply 12-48V\nMaximum current 20A, maximum power 1000W.\nTested 53V power supply when working properly.\nBecause of its moderate power, can be used for small parts DIY players do hardening,\nannealing and other heat treatment, Also can be used with a graphite crucible melting gold,\nsilver, copper, aluminum and other metals, uniform heating fast, very convenient.\nInside diameter of the coil: 40mm\nHeight of the coil: 50mm\n24V input with no load current of 3A\n48V input with no load current of 6A\nThe higher the voltage, the greater the heating current when the same thing, the effect is\nbetter, But at the same time heat is also large, so to eradicate the actual situation to select\nthe input voltage, the general use of the words 24V or 36V power supply is enough.\nIt suits 12-36V power supply (not included)\nThe coil accepts 40mm crucible.\n\nPackage Included:\n\n1 x induction heating power supply module\n1 x coil"  },

        { id: 23, name: "3 Phase Digital Stepper Drive", description: "3DM2283 – 3 Phase Digital Stepper Drive; 90-230 VAC; Max 11.7A", rating: 5, category: "Motors & Drives", price: 3000, price_before:3600, inventoryStatus: "LOWSTOCK", img: "2.2.jpg",
        full_description:"Features\n\nStep & direction or CW/CCW control\nAnti-resonance\nAutomatic motor identification and self-configuration\nExtra low noise\nExtra smooth movement Low drive & motor heating\nMaximum frequency: 200KHz\nInput voltage: 90 – 230 VAC / 115 – 325 VDC\nOutput current: 7 selections of 2.1 – 11.7A via DIP switches; or any value of 0.5 – 11.7A via\nsoftware configuration\nMicro steps: 16 selections of full – 128 steps via DIP switches; or full – 512 steps via\nsoftware configuration\nAutomatic idle current reduction"  },
        
        { id: 24, name: "Digital Oscilloscope", description: "Hantek MSO5102D Digital Oscilloscope – 100MHz + Logic Analyzer", rating: 5, category: "Measuring Instruments", price: 9500, price_before:10000, inventoryStatus: "LOWSTOCK", img: "Digital_Oscilloscope.jpg",
        full_description:"Features:\n\n16 channels logic analyzer + 2 channels oscilloscope + external trigger.\nBig and clear display (7.0-inch color LCD, high revolution 800 x 480), clear lifelike \n waveform display.\n1GSa/s real time sampling rate.\nUSB host, support flash memory card storage and USB interface system upgrade.\nUltrathin design, handy volume, easily portable.\nVGA Optional\nOscilloscope Function\n\nBandwidth 100MHz.\nEach channel record length up to 1M.\nReal time sampling rate up to 1GSa/s.\nPowerful trigger function.\n32 kinds of automatic measurement function.\nLogic Analyzer Function\n\n16 channels divided into 2 groups which is able to setup threshold level individually.\nReal time sampling rate up to 500MSa/s.\nPowerful trigger function: edge, duration, pulse width, code-type, queen, repeat."},
        
        { id: 25, name: "Anemoscopes", description: "UT361 Anemoscopes (Wind Speed Measurement)", rating: 2, category: "Measuring Instruments", price: 1750, inventoryStatus: "OUTOFSTOCK", img: "Anemoscopes.jpg",
        full_description:"UT361 Anemoscope\n\nUNI-T’s UT361 Anemoscope tests 2m/s~30m/s wind speed, wind count and temperature.\nIt features Max/Min testing mode, record interval setup and data storage.\n\nFeatures\n\nData hold, LCD backlight\nâ„ƒ/â„‰ selectable\nAuto power off (cancelable)\n2044 sets data storage\nAuto record function with 0 .5~255s interval\nWearproof fan shaft for improved accuracy and reliability\nWind speed modes: MAX, MIN, Real-timeWind count modes: MAX, 2/3 MAX, MIN, AVG,\nreal-time7 selectable units: m/s, km/h, ft/min, MPH, KNOTS, CFM, CMM"  },
        
        { id: 26, name: "Power Socket", description: "UT230B-EU Power Socket (Power Consumption Meter)", rating: 4, category: "Protectors / Stabilizers / Inverters", price: 450, inventoryStatus: "OUTOFSTOCK", img: "Power Socket.jpg",
        full_description:"Watt Meter – Digital Power Meter UT230B\n\nUT230B series power sockets can be inserted to monitor operation status\n(voltage, current, time, and power consumption) of electrical appliances. The socket jacks\nare designed to meet the needs of different regions with proper certifications. UT230B series\nare ideal tools for maintaining equipment power consumption and managing energy saving\nin homes, offices, schools, and other places."  },
    ];

    users: User[] = [];
    current_user_index: number = 0;
    public current_user: User;

    public search_text = new BehaviorSubject('');

    constructor() {
        if(localStorage.getItem('users') == null || localStorage.getItem('users') == undefined)
            localStorage.setItem('users', JSON.stringify([new User]));
            
        this.users = JSON.parse(localStorage.getItem('users')!)

        // localStorage.setItem('current_user', JSON.stringify(0));
        // this.current_user_index = JSON.parse(localStorage.getItem('current_user')!)
        this.current_user_index = 0

        this.current_user = this.users[this.current_user_index];
    }

    toggle_fav(product_id: number) {
        if (this.current_user.fav_list.includes(product_id))
            this.current_user.fav_list.forEach((element, index) => {
                if (element == product_id) this.current_user.fav_list.splice(index, 1);
            });
        else
            this.current_user.fav_list.push(product_id);

        localStorage.setItem('users', JSON.stringify(this.users));
    }

    add_to_cart(product_id: number) {
        this.current_user.cart_list.push({id: product_id, count: 1});
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    plus(product_id: number) {
        this.current_user.cart_list.forEach((element) => {if (element.id == product_id) element.count += 1});
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    minus(product_id: number) {
        this.current_user.cart_list.forEach((element, index) => {
            if (element.id == product_id) {
                element.count -= 1;
                if (element.count <= 0) this.current_user.cart_list.splice(index, 1);
            };
        });
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    get_fav(product_id: number) {
        return this.current_user.fav_list.includes(product_id);
    }

    get_count(product_id: number) {
        var c = 0
        this.current_user.cart_list.forEach((element) => {if (element.id == product_id) c = element.count});
        return c;    
    }

    get_n_cart_items() {
        var n = 0;
        this.current_user.cart_list.forEach((element) => {
            n += element.count;
        })
        return n;
    }

    get_total_cart_items() {
        var total = 0;
        this.current_user.cart_list.forEach((element) => {
            var price = 0;
            this.products.forEach((e) => {
                if (element.id == e.id) price = e.price;
            })
            total += (element.count * price);
        })
        return total;
    }
}
