/**
 * Generator Editor
 * Shield Arduino
 * 
 * Didier Dumas - 2016
 */


goog.require('Blockly.Arduino');

/*
Blockly.Arduino.LCD_Keypad_Shield_DFR_09 = function() {
  var text1 = Blockly.Arduino.valueToCode(this, 'TEXT1',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  //if(text.length>16||text2.length>16){
  //    alert("string is too long");
  //}
  
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';

   Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  var code = 'lcd.clear(); \n';
  code	  += 'lcd.setCursor(0,0); \n';
  code    += 'lcd.print('+text1+'); \n';
  code    += 'lcd.setCursor(0,1); \n';
  code    += 'lcd.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};


Blockly.Arduino.LCD_Keypad_Shield_DFR_09_lc = function(block) {
  var value_num_ligne = Blockly.Arduino.valueToCode(this, 'ligne', Blockly.Arduino.ORDER_ATOMIC)-1;
  var value_num_colonne = Blockly.Arduino.valueToCode(this, 'colonne', Blockly.Arduino.ORDER_ATOMIC)-1;
  var text4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.setCursor('+value_num_colonne+','+value_num_ligne+'); \n';
  code    += 'lcd.print('+text4+'); \n';
  return code;
};


Blockly.Arduino.LCD_Keypad_Shield_DFR_09_RAZ = function(block) {
  
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.clear(); \n';
  return code;
};


Blockly.Arduino.ArduiLed = function(block) {
  // Ce programme permet d'allumer la led 13 en utilisant l'application Android ArduiLed
  Blockly.Arduino.includes_['define_LedPin'] = '#define LedPin 13 \n';  
  Blockly.Arduino.definitions_['define_RecvDonnees'] = 'byte RecvDonnees; \n';    
  Blockly.Arduino.setups_['setup_LedPin'] = '  pinMode(LedPin, OUTPUT);'; 
  
  var code = 
  'while(1){ \n'+
  '  if(blueToothSerial.available()){          // Vérifie que toutes les données ont été envoyées \n'+
  '    RecvDonnees = blueToothSerial.read();   // Lecture des données\n'+  
  '    Serial.print("RecvDonnees = ");\n'+  
  '    Serial.println(RecvDonnees);\n'+  
  '// l application ArduiLed envoie un nombre pour modifie l état de la Led\n'+  
  '// Normallement 1 ou 0, mais une autre valeur est reçue dans RecvDonnees ! A debugger \n'+  
  '    if (RecvDonnees == 128){               // 128 correspond à la valeur envoyée par l application Android (2)\n'+
  '       digitalWrite(LedPin,LOW);\n'+
  '    } else if (RecvDonnees == 120) {       // 120 correspond à la valeur envoyée par l application Android (1)\n'+  
  '       digitalWrite(LedPin,HIGH);\n'+  
  '    }\n'+
  '  }\n'+  
  '  if(Serial.available()){                 //Vérifie s il y a des données envoyées\n'+  
  '    RecvDonnees  = Serial.read();\n'+
  '    Serial.print("RecvDonnees = ");\n'+ 
  '    Serial.println(RecvDonnees);\n'+ 
  '    blueToothSerial.print(RecvDonnees);\n'+ 
  '  }\n'+ 
  '}\n'+ 
  '\n'; 
  return code;
};
*/
/*
Blockly.Arduino.LC05BT = function(block) {
  // Ce programme permet d'initialiser le module bluetooth LC05BT
  Blockly.Arduino.definitions_['define_BlueToothConnection'] = 'void setupBlueToothConnection() {// fonction de configuration du module bluetooth \n'+
'  Serial.begin(9600); //vitesse de bluetooth \n'+
'  Serial.print("\\r\\n+STBD=38400\\r\\n"); // fixe la vitesse du bluetooth \n'+
'  Serial.print("\\r\\n+STWMOD=0\\r\\n"); //bluetooth en mode esclave \n'+
'  Serial.print("\\r\\n+STNA=LC05BT"); //nom de lappareil \n'+
'  Serial.print("\\r\\n+STPIN=1234\\r\\n");//code pin "1234" \n'+
'  Serial.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me \n'+
'  Serial.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here \n'+
'  delay(2000); // This delay is required. \n'+
'  Serial.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable  \n'+
'  delay(2000); // This delay is required. \n'+
'  Serial.flush(); \n'+
'}'+
'\n';  
  Blockly.Arduino.setups_['setup_BlueToothConnection'] = '    Serial.begin(38400); // initialisation de la connexion série (avec le module bluetooth)  \n'+
'    setupBlueToothConnection(); // démarrage liason série bluetooth \n'; 
  
  var code = '';
  return code;
};

*/
/*
Blockly.Arduino['soft_serialavailablerx0'] = function(block) {
  // TODO: Assemble Python into code variable.
  // Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';
  var code = 'Serial.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/
Blockly.Arduino['soft_serialavailable'] = function(block) {
  // TODO: Assemble Python into code variable.
  // Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';
  var code = 'blueToothSerial.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*Blockly.Arduino['soft_recvdonnees_setrx0'] = function(block) {
	
  Blockly.Arduino.definitions_['define_RecvDonnees'] = 'byte RecvDonnees; \n';  
  //var text_name = block.getFieldValue('NAME');
  //var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RecvDonnees  = Serial.read();\n';
  return code;
};
*/
Blockly.Arduino['soft_recvdonnees_set'] = function(block) {
  // TODO: Assemble Python into code variable.
  // Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';
  var code = 'blueToothSerial.read()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.Bluetooth_Shield_duinoFun = function() {
	// on croise les données rx <---> tx
  var value_RX_pin = Blockly.Arduino.valueToCode(this, 'BT_TX', Blockly.Arduino.ORDER_ATOMIC);
  var value_TX_pin = Blockly.Arduino.valueToCode(this, 'BT_RX', Blockly.Arduino.ORDER_ATOMIC);   
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n'; 
  Blockly.Arduino.definitions_['define_RxTx'] = 
  '#define RxD '+ value_RX_pin +'\n' + 
  '#define TxD '+ value_TX_pin +'\n'; 
  
  Blockly.Arduino.definitions_['define_var_bt'] = 'SoftwareSerial blueToothSerial(RxD,TxD);\n';   

  Blockly.Arduino.setups_['setup_bt'] = 
  '  Serial.begin(9600); \n'+
  '  pinMode(RxD, INPUT); \n' +
  '  pinMode(TxD, OUTPUT); \n';
  Blockly.Arduino.setups_['setup_bt_connection'] = 'setupBlueToothConnection();'; 

  Blockly.Arduino.definitions_['define_setupBlueToothConnection'] = 'void setupBlueToothConnection()\n'+
  '{\n'+
  '  blueToothSerial.begin(9600); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial.print("\\r\\n+STNA=SeeedBTSlave\\r\\n"); //set the bluetooth name as SeeedBTSlave\n'+
  '//blueToothSerial.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial.flush();\n'+
  '}\n';
  
 var code = '';
 return code;
};



Blockly.Arduino.cap_us_sr04 = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
	var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC); 
	var dropdown_echo_pin = Blockly.Arduino.valueToCode(this, 'ECHO', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_mesure_distance_hcsr04'] = "int distance_hcsr04(byte trig_pin,byte echo_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(50);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(echo_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}";
  Blockly.Arduino.setups_['setup_sonar_' + dropdown_triger_pin] = 'pinMode('+dropdown_triger_pin+',OUTPUT);//Sonar triger pin\n'
  + '  pinMode('+dropdown_echo_pin+',INPUT);//Sonar distance pulse pin';
  var code = 'distance_hcsr04('+dropdown_triger_pin+','+dropdown_echo_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];	

	
};


Blockly.Arduino.cap_temperature_sensor_367 = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
	Blockly.Arduino.includes_['define_OneWire'] = '#include <OneWire.h>\n';
	Blockly.Arduino.definitions_['var_OneWirePIN'] = 'OneWire  ds('+dropdown_pin+'); // Création objet OneWire \n'+
	'byte i;\n'+
	'byte present = 0;\n'+
	'byte type_s;\n'+
	'byte data[12];\n'+
	'byte addr[8];\n'+
	'float celsius;\n'
	;
	Blockly.Arduino.definitions_['var_OneWireMesure'] = 'float mesuretemp() { \n'+
	' if ( !ds.search(addr)) { \n'+
	'   ds.reset_search(); \n'+
    '   delay(250); \n'+
    '   return; \n'+
	'} \n'+
  'ds.reset(); \n'+
  'ds.select(addr); \n'+
  'ds.write(0x44, 1);        // start conversion, with parasite power on at the end \n'+
  
  'delay(1000);     // maybe 750ms is enough, maybe not \n'+
  '// we might do a ds.depower() here, but the reset will take care of it. \n'+
  
  'present = ds.reset(); \n'+
  'ds.select(addr);     \n'+
  'ds.write(0xBE);         // Read Scratchpad \n'+

  'for ( i = 0; i < 9; i++) {           // we need 9 bytes \n'+
  '  data[i] = ds.read(); \n'+
  '} \n'+
'  \n'+
  'int16_t raw = (data[1] << 8) | data[0]; \n'+
  'if (type_s) { \n'+
  '  raw = raw << 3; // 9 bit resolution default \n'+
  '  if (data[7] == 0x10) { \n'+
  '    // "count remain" gives full 12 bit resolution \n'+
  '    raw = (raw & 0xFFF0) + 12 - data[6]; \n'+
  '  } \n'+
  '} else { \n'+
  '  byte cfg = (data[4] & 0x60); \n'+
  '  // at lower res, the low bits are undefined, so let s zero them \n'+
  '  if (cfg == 0x00) raw = raw & ~7;  // 9 bit resolution, 93.75 ms \n'+
  '  else if (cfg == 0x20) raw = raw & ~3; // 10 bit res, 187.5 ms \n'+
  '  else if (cfg == 0x40) raw = raw & ~1; // 11 bit res, 375 ms \n'+
  '  //// default is 12 bit resolution, 750 ms conversion time \n'+
  '} \n'+
  'celsius = (float)raw / 16.0; \n'+
  'return celsius;\n'+
  '//Serial.print("  Temperature = "); \n'+
  '//Serial.print(celsius); \n'+
  '//Serial.println(" Celsius"); \n'+
	' } \n';

	var code = 'mesuretemp()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
	
};



Blockly.Arduino['servo_rot_continue_param'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  var number_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_NONE);
  //var number_pin = block.getFieldValue('PIN');
  var value_speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + text_text] = 'Servo servo_' + text_text + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + text_text] = 'servo_' + text_text + '.attach(' + number_pin + ');\n';
  var code = 'servo_' + text_text + '.write(' + value_speed + ');\n';
  return code;
};

Blockly.Arduino['servo_param'] = function(block) {
  var number_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_NONE);
  var text_text = block.getFieldValue('TEXT');
 // var number_pin = block.getFieldValue('PIN');
  var value_angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
 
  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + text_text] = 'Servo servo_' + text_text + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + text_text] = 'servo_' + text_text + '.attach(' + number_pin + ');\n';
  var code = 'servo_' + text_text + '.write(' + value_angle + ');\n';
  return code;
 
// Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
//  Blockly.Arduino.definitions_['var_servo' + text_text] = 'Servo servo_' + text_text + '_' + number_pin + ';\n';
//  Blockly.Arduino.setups_['setup_servo_' + text_text] = 'servo_' + text_text + '_' + number_pin + '.attach(' + number_pin + ');\n';
//  var code = 'servo_' + text_text + '_' + number_pin + '.write(' + value_angle + ');\n';
//  return code;
};