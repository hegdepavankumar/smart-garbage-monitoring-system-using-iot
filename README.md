# Smart Garbage Monitoring System Using IOT

 
![GitHub](https://img.shields.io/github/license/hegdepavankumar/smart-garbage-monitoring-system-using-iot?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/hegdepavankumar/smart-garbage-monitoring-system-using-iot?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/hegdepavankumar/smart-garbage-monitoring-system-using-iot?style=flat)
![ViewCount](https://views.whatilearened.today/views/github/hegdepavankumar/smart-garbage-monitoring-system-using-iot.svg?cache=remove)

## Overview

We are living in the era of Smart cities where everything is planned and systematic. The problem we are facing is the population, which is rising rapidly. In recent years, urban migration has skyrocketed. This has resulted in the rise of garbage waste everywhere. Dumping of garbage in public places creates a polluted environment in the neighborhood. It could cause several serious diseases to the people living around. This will embarrass the evaluation of the affected area. To reduce waste and maintain good hygiene, we need a systematic approach to tackle the problem.  The traditional way of manually monitoring the wastes in waste bins is a complex, cumbersome process and utilizes more human effort, time, and cost which is not compatible with the present-day technologies in any way. We propose a solution to this waste problem which manages the garbage waste smartly. This research paper proposes an IoT-based smart system based on clean waste management that assesses the level of waste on dustbins through sensory systems. In this system, the microcontroller is used as a visual connector connecting the sensor and the IoT system. This is an advanced method in which waste management is automated. This project IoT Garbage Monitoring system is a very innovative system that will help to keep the cities clean. This system monitors the garbage bins and informs about the level of garbage collected in the garbage bins via a web page. This web page also sends all information to garbage collection vehicles.

<br>

# Real-Time Implemented Images: [click here to view](https://github.com/hegdepavankumar/smart-garbage-monitoring-system-using-iot/tree/main/sample-project-images)
# Project Report: [click here to download](https://github.com/user-attachments/files/15880862/Report.Content.pdf)

<br>


## Hardware Requirements

1) ### Ulteasonic Sensor

![image](https://user-images.githubusercontent.com/85627085/235177501-32c84273-4d46-4518-960e-3edf8aee552b.png)

<br>
An ultrasonic sensor is an electronic device that measures the distance of a target object by emitting ultrasonic sound waves and converts the reflected sound into an electrical signal. Ultrasonic waves travel faster than the speed of audible sound (i.e. the sound that humans can hear). Ultrasonic sensors have two main components: the transmitter (which emits the sound using piezoelectric crystals) and the receiver (which encounters the sound after it has traveled to and from the target).

To calculate the distance between the sensor and the object, the sensor measures the time it takes between the emission of the sound by the transmitter to its contact with the receiver. The formula for this calculation is D = ½ T x C (where D is the distance, T is the time, and C is the speed of sound ~ 343 meters/second).
<br>

2) ### Arduino UNO R3

![image](https://user-images.githubusercontent.com/85627085/235177985-42b9792e-5ec4-468d-8ad0-ee05d52e814b.png)

<br>

Arduino UNO is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with an AC-to-DC adapter or battery to get started.

<br>

3) ### GPS Module

![image](https://user-images.githubusercontent.com/85627085/235178820-0b356695-8667-4847-88ac-0c4257ed9e4a.png)

<br>
These GPS modules are compatible with Arduino and Raspberry Pi, making it easy for you to start to try out. The Air 530 Module in Grove - GPS(Air 530) is a high-performance, highly integrated multi-mode satellite positioning and navigation module. It supports GPS / Beidou / Glonass / Galileo / QZSS / SBAS, which makes it suitable for GNSS positioning applications such as car navigation, smart wear, and drones. And Air530 module is also supports NMEA 0183 V4.1 protocol and compatible with previous versions. Meanwhile, the E-1612-UB module series of Grove - GPS Module is a family of stand-alone GPS receivers featuring the high-performance u-blox 5 positioning engine. The 50-channel u-blox 5 positioning engine boasts a Time-To-First-Fix ( TTFF ) of under 1 second. The dedicated acquisition engine, with over 1 million correlators, is capable of massive parallel time/frequency space searches, enabling it to find satellites instantly.

<br>
<br>

4) ### GSM/GPRS Module <br>
<br>

![image](https://user-images.githubusercontent.com/85627085/235181834-9da83f7b-62f2-4f13-a14d-0e01c9c88718.png)



<br>
  - What is GSM? <br>
  GSM (Global System for Mobile Communications, originally Groupe Spécial Mobile), is a standard developed by the European Telecommunications Standards Institute (ETSI).
It was created to describe the protocols for second-generation (2G) digital cellular networks used by mobile phones and is now the default global standard for mobile communications – with over 90% market share, operating in over 219 countries and territories.
<br>
  - What is GPRS? <br>
  General Packet Radio Service (GPRS) is a packet-oriented mobile data service on the 2G and 3G cellular communication system’s global system for mobile communications (GSM). GPRS was originally standardized by the European Telecommunications Standards Institute (ETSI) in response to the earlier CDPD and i-mode packet-switched cellular technologies. It is now maintained by the 3rd Generation Partnership Project (3GPP).


<br>
<br>



5) ### Buzzer 
<br>

![image](https://user-images.githubusercontent.com/85627085/235182600-a0037ef0-0a29-450b-9c12-2e72f58e3903.png)

<br>

A buzzer or beeper is an audio signaling device, which may be mechanical, electromechanical, or piezoelectric (piezo for short). Typical uses of buzzers and beepers include alarm devices, timers, training and confirmation of user input such as a mouse click or keystroke.

<br>


6) ### Connecting Wires

<br>

![image](https://user-images.githubusercontent.com/85627085/235187067-c6bc9a3e-2112-49f5-962f-e3123f8fb0d5.png)

<br>

A connecting wire allows the electric current from one point to another point without resistivity. The resistance of the connecting wire should always be near zero. Copper wires have low resistance and are therefore suitable for low resistance.


<br>


7) ### NodeMCU(Node MicroController Unit) 
<br>

![image](https://user-images.githubusercontent.com/85627085/235187953-d709a102-3247-4f2b-bbe8-c1292dd6dff6.png)

<br>

NodeMCU is an open-source firmware for which open-source prototyping board designs are available. The name "NodeMCU" combines "node" and "MCU" (micro-controller unit). Strictly speaking, the term "NodeMCU" refers to the firmware rather than the associated development kits. NodeMCU was created shortly after the ESP8266 came out. On December 30, 2013, Espressif Systems began production of the ESP8266.NodeMCU started on 13 Oct 2014, when Hong committed the first file of nodemcu-firmware to GitHub.Two months later, the project expanded to include an open-hardware platform when developer Huang R committed the Gerber file of an ESP8266 board, named devkit v0.9.

<br>

8) ### 16x2 LCD
 <br>
 
 ![image](https://user-images.githubusercontent.com/85627085/235443559-a2a7fdfc-966e-4357-b004-9edb3c93a655.png)


<br>
The Liquid Crystal library allows you to control LCDs that are compatible with the Hitachi HD44780 driver. There are many of them out there, and you can usually tell them by the 16-pin interface. The LCDs have a parallel interface, meaning that the microcontroller has to manipulate several interface pins at once to control the display.

<br>

## Software Requirements

  - Windows 7/10/11 OS with Min 4GB RAM and 250GB Hard Disk <br>
  - [Arduino IDE](https://www.arduino.cc/en/software) <br>
  - Local Server and web Page for Monitoring
<br>

## Implementation & Testing

  - Sketch (Fritzing) <br>
  
  ![image](https://user-images.githubusercontent.com/85627085/235192027-edc61f5f-6932-4436-9cac-e4d0db5209d3.png)
  
  <br>
  
  The above diagram shows a sketch of connection devices or sensors using Fritzing software. This figure shows an ultrasonic sensor connected with Node MCU and to the Cytron Uno or Arduino Uno. An ultrasonic sensor will read the distance of the garbage and compare it with the bin depth. This sketch is one of the important parts of the Garbage Monitoring System using IoT.
  
  
  <br>
  
  ## Source Code
  
 1) ### Code for NodeMCU
 
 <br>
 
 ```
  #include <ESP8266WiFi.h>
const char* ssid = "Pavankumar"; //ssid of your wifi  // Mavayya-5G
const char* password = "12345678"; //password of your wifi
WiFiServer server(80);
////////////////////////////////////
#include <Arduino_JSON.h>
String inputData = "";
boolean data_complete = false;
String vala;
String valb;
String valc;
String vald;
/////////////////////////////////////

void setup()

{
  Serial.begin(115200);
  inputData.reserve(200);
  Serial.println("Hello");
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password); //connecting to wifi
  while (WiFi.status() != WL_CONNECTED)// while wifi not connected
  {
    delay(500);
    Serial.print("."); //print "...."
  }
  Serial.println("");
  Serial.println("WiFi connected");
  server.begin();
  Serial.println("Server started");
  Serial.println(WiFi.localIP());  // Print the IP address
}
void loop()
{
  while(Serial.available() > 0)
  {
   char inChar = Serial.read();
   if( inChar == '\r')
   {
    inputData = "";
   }
   else if(inChar == '\n')
   {
    data_complete = true;
   }
   else
   {
    inputData+=inChar;
   }
  }

  if(data_complete)
  {
   data_complete = false;
   Serial.println(inputData);
   demoParse();
  }
  //int a=vala.toInt();
 
  WiFiClient client = server.available(); // Check if a client has connected
 /* if (!client)
  {
   return;
  }   */ 
  String s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n <!DOCTYPE html> <html> <head> <title>..........</title> <style>";
  s += "a:link {background-color: RED;text-decoration: none;}";
  s += "table, th, td </style> </head> <body> <h1  style=";
  s += "font-size:250%;";
  s += " ALIGN=CENTER> Dustbin data</h1>";
  s += "<p ALIGN=CENTER style=""font-size:200%;""";
  s += "> <b> Location -001</b></p> <table ALIGN=CENTER style=";
  s += "width:10%";
  s += "> <tr> <th>Level : </th>";
  s += "<td ALIGN=CENTER >";
  s += vala;
  //s += "</td> </tr> <tr> <th>Tds Value : </th> <td ALIGN=CENTER >";
  //s += valb;
  //s += "</td> </tr> <tr>  <th>Water Level</th> <td ALIGN=CENTER >";
  //s += valc;
  //s += "</td></tr> <tr> <th>Water intake</th> <td ALIGN=CENTER >";
  //s += vald;
  s += "</td>  </tr> </table> ";
  s += "</body> </html>";
  client.print(s); // all the values are send to the webpage
  delay(100);
}
void demoParse() 
 {
  Serial.println("parse");
  Serial.println(vala);
  Serial.println("=====");
  JSONVar myObject = JSON.parse(inputData);    
  if (JSON.typeof(myObject) == "undefined") 
  {
   Serial.println("Parsing input failed!");
   return;
  }
  Serial.print("JSON.typeof(myObject) = ");
  Serial.println(JSON.typeof(myObject)); // prints: object
  // myObject.hasOwnProperty(key) checks if the object contains an entry for key
  if (myObject.hasOwnProperty("anloga")) {
  Serial.print("myObject[\"anloga\"] = ");
  vala = (const char*) myObject["anloga"];//to get value in  vala
  Serial.println(vala);
  Serial.println((const char*) myObject["anloga"]);
 }
  if (myObject.hasOwnProperty("anlogb")) {
    Serial.print("myObject[\"anlogb\"] = ");
    valb = (const char*) myObject["anlogb"];
    Serial.println(valb); 
    Serial.println((const char*) myObject["anlogb"]);
  }
  if (myObject.hasOwnProperty("anlogc")) {
    Serial.print("myObject[\"anlogc\"] = ");
    valc = (const char*) myObject["anlogc"];
    Serial.println(valc); 
    Serial.println((const char*) myObject["anlogc"]);
  }
  if (myObject.hasOwnProperty("anlogd")) {
    Serial.print("myObject[\"anlogd\"] = ");
    vald = (const char*) myObject["anlogd"];
    Serial.println(vald); 
    Serial.println((const char*) myObject["anlogd"]);
  }
  // JSON vars can be printed using print or println
  Serial.print("myObject = ");
  Serial.println(myObject);
  Serial.println();
}

 ```
  
2) ### Code for Arduino UNO R3

<br>

```
#include <SoftwareSerial.h>
SoftwareSerial esp8266(2,3);
 #include <LiquidCrystal.h>
LiquidCrystal lcd(8,9,10,11,12,13);//RS,EN,D4,D5,D6,D7
#include <Servo.h>
#define buzzer 4
#define trigPin1 A4  //// front
#define echoPin1 A5
int lvl1=0;
long duration, distance,sensor1,sensor2,sensor3; // us variable
int onetime=0,onetime1=0 ;
int wet=0,moisture=0,object=0,cabin2=0,c1=0,c2=0;
int powers=0,powers1=0,powers2=0,powers3=0;
void setup() 
{
 Serial.begin(115200);
 esp8266.begin(9600);
 lcd.begin(16, 2);//initializing LCD
 lcd.setCursor(0,0); 
 lcd.print("Automatic WASTE");
 delay(3000);
 pinMode(buzzer,OUTPUT);
 pinMode(trigPin1, OUTPUT);
 pinMode(echoPin1, INPUT);
 delay(3000);
}
void loop()
{
 ultrasensor(trigPin1, echoPin1);
 sensor1 = distance;  
 delay(10);
 esp8266.println(sensor1);
 lvl1=(20-sensor1)*7;
 esp8266.println(lvl1);
 if(lvl1<0){lvl1=0;}
 if(lvl1>100){lvl1=100;}
 lcd.clear();
 lcd.setCursor(0,0); 
 lcd.print("Dustbin Level");
 lcd.setCursor(6,1); 
 lcd.print(lvl1);
 delay(1000);
 if(lvl1>70)
 {      
  if(onetime==0)
  {
    lcd.clear();
   lcd.setCursor(0,0); 
   lcd.print("-send msg-");
   digitalWrite(buzzer,HIGH); 
   tracking(); 
   digitalWrite(buzzer,LOW);
   onetime=1;
  }
 }  
 else
 {
  onetime=0;
 }
 ////////////////////////////////////////////////
 String data = "";
 data+= "{";
 data+= "\"anloga\":";
 data+= "\""+String(lvl1)+"\",";
 data+= "\"anlogb\":";
 data+= "\""+String(powers)+"\",";
 data+= "\"anlogc\":";
 data+= "\""+String(powers1)+"\",";
 data+= "\"anlogd\":";
 data+= "\""+String(powers2)+"\"";
 data+= "}";
 Serial.print('\r');
 Serial.print(data);
 delay(10);
 Serial.print('\n');
 delay(200);
 ///////////////////////////////////////////////   
}
 void init_sms()
 {
  esp8266.println("AT+CMGF=1");
  delay(400);
  esp8266.println("AT+CMGS=\"+919X083X52XX\"");   // use your 10 digit cell no. here //
  delay(400);
 }
 void init_sms1()
 {
  esp8266.println("AT+CMGF=1");
  delay(400);
  esp8266.println("AT+CMGS=\"+918XX227XX8X\"");   // use your 10 digit cell no. here
  delay(400);
 }  
 void send_data(String message)
 {
  esp8266.println(message);
  delay(200);
 }
 
 void send_sms()
 {
  esp8266.write(26);
 }
  void tracking()
 {
  init_sms();
  send_data("dustbin-001  is almost full:\n");
  send_sms();
  delay(6000);
  init_sms1();
  send_data("dustbin-001  is almost full:\n");
  esp8266.print(" Level in %");
   esp8266.print(lvl1);
  send_sms();
  delay(6000);
 }
 void ultrasensor(int trigPin,int echoPin)
 { 
  digitalWrite(trigPin, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
 }

```
## Instructions/Setup

- Download and install Arduino IDE
- Make all the necessary connections
- Compile and upload the code to the board
<br>

## Conclusion

While completing this project proposal, there are a few constraints that come up. First, the reading of sensors is less accurate, and need to be extra careful in handling the sensors. Second, notification to the mobile phone cannot be done because the cloud platform used is an open-source platform and cannot be used to send an alert or notification to the users. Development of the system needs to be done thoroughly to decrease the possibility of errors. However, added value has been added to this system to make the system more reliable. Normalization is being used to eliminate the outliers which can help to increase the accuracy of the distance reads by an ultrasonic sensor.
  

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Creators [🔝](# smart-garbage-monitoring-system-using-iot)

This Project is Created by:-

  - [Pavankumar Hegde](https://github.com/hegdepavankumar) [Team Leader]
  - [Sushil Kumar Sah](https://github.com/sushilsah)
  - [Safina Fathima](https://github.com/safinafab)
  - [Santhosh Reddy](https://github.com/)



<br>
<h3 align="center">Show some &nbsp;❤️&nbsp; by starring some of the repositories!</h3>
<br>


 <!-- Support Me --> 

 
if you like what I do, maybe consider buying me a coffee 🥺👉👈

<a href="https://www.buymeacoffee.com/hegdepavankumar" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" width="150" ></a>



