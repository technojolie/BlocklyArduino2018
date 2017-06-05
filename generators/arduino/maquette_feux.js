Blockly.Arduino.feux_appel_pieton_voie1 = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
 // Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
 // var code = 'digitalRead('+dropdown_pin+')==0';
//  return [code, Blockly.Arduino.ORDER_ATOMIC];

 Blockly.Arduino.setups_['setup_btn1white_'] = 'pinMode(12, INPUT);';
  var code = 'digitalRead(12)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.feux_appel_pieton_voie2 = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
 // Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
 // var code = 'digitalRead('+dropdown_pin+')==0';
//  return [code, Blockly.Arduino.ORDER_ATOMIC];

 Blockly.Arduino.setups_['setup_btn2white_'] = 'pinMode(11, INPUT);';
  var code = 'digitalRead(11)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.feux_detection_ils = function() {
	Blockly.Arduino.definitions_['define_feux_detection_ils'] = '#define detect_ils 8 \n';  
	Blockly.Arduino.setups_['setup_det_feux_ils'] = 'pinMode(detect_ils, INPUT);';
	var code = 'digitalRead(detect_ils)==1';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.feux_detection_ir = function() {

 Blockly.Arduino.setups_['setup_det_feux_ir'] = 'pinMode(5, INPUT);';
  var code = 'digitalRead(5)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.feux_detection_ldr = function() {

 Blockly.Arduino.setups_['setup_det_feux_ldr'] = 'pinMode(9, INPUT);';
  var code = 'digitalRead(9)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.jeulin_feux_voie1_led1red = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};




Blockly.Arduino.feux_voie1_rouge = function() {
/*  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
  */
  
 // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie1'] = '// Feux voie 1 \n'+
  'pinMode(4, OUTPUT);\n'+
  'pinMode(3, OUTPUT);\n'+
  'pinMode(2, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu rouge voie 1 \n'+
  'digitalWrite(4,'+dropdown_stat+');\n' + 
  'digitalWrite(3,LOW);\n' + 
  'digitalWrite(2, LOW);\n'  //code à insérer dans la loop Arduino
  return code;
};
Blockly.Arduino.feux_voie1_orange = function() {
/*  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
  */
  
 // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie1'] = '// Feux voie 1 \n'+
  'pinMode(4, OUTPUT);\n'+
  'pinMode(3, OUTPUT);\n'+
  'pinMode(2, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu orange voie 1 \n'+
  'digitalWrite(4, LOW);\n' + 
  'digitalWrite(3,'+dropdown_stat+');\n' + 
  'digitalWrite(2, LOW);\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.feux_voie1_vert = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie1'] = '// Feux voie 1 \n'+
  'pinMode(4, OUTPUT);\n'+
  'pinMode(3, OUTPUT);\n'+
  'pinMode(2, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu vert voie 1 \n'+
  'digitalWrite(4, LOW);\n' + 
  'digitalWrite(3, LOW);\n' + 
  'digitalWrite(2, '+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.feux_voie2_rouge = function() {
/*  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
  */
  
 // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie2'] = '// Feux voie 2 \n'+
  'pinMode(A2, OUTPUT);\n'+
  'pinMode(A1, OUTPUT);\n'+
  'pinMode(A0, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu rouge voie 2 \n'+
  'digitalWrite(A2,'+dropdown_stat+');\n' + 
  'digitalWrite(A1,LOW);\n' + 
  'digitalWrite(A0, LOW);\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.feux_voie2_orange = function() {

  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie2'] = '// Feux voie 2 \n'+
  'pinMode(A2, OUTPUT);\n'+
  'pinMode(A1, OUTPUT);\n'+
  'pinMode(A0, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu orange voie 2 \n'+
  'digitalWrite(A2, LOW);\n' + 
  'digitalWrite(A1,'+dropdown_stat+');\n' + 
  'digitalWrite(A0, LOW);\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.feux_voie2_vert = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_feux_voie2'] = '// Feux voie 2 \n'+
  'pinMode(A2, OUTPUT);\n'+
  'pinMode(A1, OUTPUT);\n'+
  'pinMode(A0, OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = '// Feu vert voie 2 \n'+
  'digitalWrite(A2, LOW);\n' + 
  'digitalWrite(A1, LOW);\n' + 
  'digitalWrite(A0, '+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


Blockly.Arduino.feux_alarme_pieton = function() {
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC); 
  
  Blockly.Arduino.setups_['setup_feux_buzzer'] = 'pinMode(10, OUTPUT);\n'; //code à insérer dans le setup Arduino
   var code = '// Buzzer \n'+
  'digitalWrite(10, HIGH); \n'+
	'delay('+value_tps+'); \n'+
	 'digitalWrite(10, LOW); \n'//code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.jeulin_alarme_pieton_buzzer1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);;
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC); 
  //dans fonctions
   Blockly.Arduino.definitions_['define_playTone'] = "void playTone(int pintone,int freq, int duration) {\n"+
   " int tone=500000/freq;\n"+       
   " for (long i = 0; i < duration * 1000L; i += tone * 2) {\n"+
   " digitalWrite(pintone, HIGH);\n"+
   " delayMicroseconds(tone);\n"+
   " digitalWrite(pintone, LOW);\n"+
   " delayMicroseconds(tone);\n"+
   " }\n"+
   "}\n";    
  //dans setup    
  Blockly.Arduino.setups_['setup_buzzer_pin_'+dropdown_pin] = 'pinMode('+dropdown_pin+',OUTPUT);';
  var code = 'playTone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;    
    
};

