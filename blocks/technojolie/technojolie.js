/**
 * Visual Blocks Editor
 * Shield Arduino
 * 
 * Didier Dumas - 2016
 */


// goog.require('Blockly.Blocks');
/*
Blockly.Blocks['LCD_Keypad_Shield_DFR_09'] = {
  init: function() {
    this.setColour("#F39800");
	this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/arduino_shield/400px-LCD_Keypad_Shield.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("TEXT1")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT1);
    this.appendValueInput("TEXT2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT2);
    this.appendValueInput("DELAY_TIME")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP);
  }
};

Blockly.Blocks.LCD_Keypad_Shield_DFR_09_lc = {
  init: function() {
    this.setColour("#F39800");
	this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/arduino_shield/400px-LCD_Keypad_Shield.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    
	this.appendValueInput("ligne")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("écrire à la ligne");
    this.appendValueInput("colonne")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("écrire à partir de la colonne");
	this.appendValueInput("TEXT4")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Message à afficher");
    //this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.LCD_Keypad_Shield_DFR_09_RAZ = {
  init: function() {
    this.setColour("#F39800");
	this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/arduino_shield/400px-LCD_Keypad_Shield.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
		.appendField("Effacer l'écran")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['ArduiLed'] = {
  init: function() {
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setColour("#8ec31f");
    this.appendDummyInput()
        .appendField("Utiliser l'application ArduiLed");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocks/grove/QRCode_ArduiLed.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize,"ArduiLed ou http://google.fr"));
    //    .appendField(new Blockly.FieldImage("blocks/arduino_shield/Logo_android.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize,"ArduiLed ou http://google.fr"));
    this.setTooltip('');
    this.setHelpUrl('http://technojolie.fr/ftp/apps/QRCode_ArduiLed.png');
  }
};
*/

/*Blockly.Blocks['LC05BT'] = {
  init: function() {
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setColour("#4BB5C1");
    this.appendDummyInput()
        .appendField("utiliser le module bluetooth LC05BT");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocks/technojolie/LC05BT.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setTooltip('');
    this.setHelpUrl('http://www.centralmedia.fr/robotique/06-modules/module-bluetooth-lc05-host-slave-lc05bt,g324p44270.html');
  }
};
*/

Blockly.Blocks['Bluetooth_Shield_duinoFun'] = {
  init: function() {
    this.setColour("#4BB5C1");
	this.setHelpUrl('http://www.seeedstudio.com/wiki/Bluetooth_Shield');
    this.appendDummyInput("")
        .appendField('Initialise le module Bluetooth');
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technojolie/LC05BT.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField('cavaliers sur les broches');
    this.appendValueInput("BT_RX", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX ");
    this.appendValueInput("BT_TX", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT158);
  }
};

/*Blockly.Blocks['soft_serialavailablerx0'] = {
  init: function() {
	this.setHelpUrl('');
    this.setColour("#4BB5C1");
	this.appendDummyInput("")
	    .appendTitle("une donnée est transmise via bluetooth");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};*/

Blockly.Blocks['soft_serialavailable'] = {
  init: function() {
	this.setHelpUrl('');
    this.setColour("#4BB5C1");
	this.appendDummyInput("")
	    .appendTitle("une donnée est transmise par bluetooth");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};
/*
Blockly.Blocks['soft_recvdonnees_setrx0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("récupérer les données bluetooth dans RecvDonnees");
	//this.appendValueInput("NAME")
    //    .setCheck("")
    //    .appendField("Mettre ")
    //    .appendField(new Blockly.FieldTextInput("RecvDonnees"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4BB5C1");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/
Blockly.Blocks['soft_recvdonnees_set'] = {
  init: function() {
	this.setHelpUrl('');
    this.setColour("#4BB5C1");
	this.appendDummyInput("")
	    .appendTitle("données recues par bluetooth");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};


Blockly.Blocks['cap_us_sr04'] = {
  init: function() {
    //this.setColour("#608621");
	this.setColour("#337AB7");
	this.setHelpUrl(Blockly.Msg.TJCAP367_HELPURL);
    this.appendDummyInput()
        .appendField("la distance mesurée par le capteur ultrason")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/technojolie/hc_sr04.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("TRIGER")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Trig sur la broche");
	this.appendValueInput("ECHO")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Echo sur la broche");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TJCAP367_TOOLTIP);
  }
};

Blockly.Blocks['cap_temperature_sensor_367'] = {
  init: function() {
    //this.setColour("#608621");
	this.setColour("#337AB7");
	this.setHelpUrl(Blockly.Msg.TJCAP367_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TJCAP367_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/technojolie/400px-CAP367.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TJCAP367_PIN_DIGITAL);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TJCAP367_TOOLTIP);
  }
};


Blockly.Blocks['servo_rot_continue_param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner ")
		.appendField(new Blockly.FieldTextInput("MoteurDroit"), "TEXT")
	this.appendDummyInput()
		.appendField("(servomoteur à rotation continue)")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/technojolie/servomoteur_rot_continue.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		
	this.appendValueInput("PIN", 'Number')
        .appendField("connecté à la broche")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
 //   this.appendDummyInput()
//        .appendField(new Blockly.FieldTextInput("MoteurDroit"), "TEXT")
 //       .appendField("connecté à la broche")
//        .appendField(new Blockly.FieldNumber(0), "PIN");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("à la vitesse de [50~200]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#D9534F");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servo_param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Orienter le servomoteur")
		.appendField(new Blockly.FieldTextInput("servo"), "TEXT")
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/technojolie/servomoteur.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		
	this.appendValueInput("PIN", 'Number')
        .appendField("connecté à la broche")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("d'un angle de [0°~180°]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#D9534F");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

