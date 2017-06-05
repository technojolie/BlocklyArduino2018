//www.jeulin.fr

// define blocks
'use strict';

//appel_pieton_voie1
Blockly.Blocks['feux_appel_pieton_voie1'] = {
  init: function() {
    this.setColour("#0099FF");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField("appel piéton voie 1")
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//appel_pieton_voie2
Blockly.Blocks['feux_appel_pieton_voie2'] = {
  init: function() {
//    this.setColour("#37AFFF");
	this.setColour("#5EBEFF");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField("appel piéton voie 2")
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};


//detection ils
Blockly.Blocks['feux_detection_ils'] = {
  init: function() {
    this.setColour("#0099FF");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField("détection ILS")
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//detection ir
Blockly.Blocks['feux_detection_ir'] = {
  init: function() {
    this.setColour("#0099FF");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField("détection infrarouge")
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};
//detection ldr
Blockly.Blocks['feux_detection_ldr'] = {
  init: function() {
    this.setColour("#0099FF");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField("détection obscurité")
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};


//feux_voie1_feux_rouge
Blockly.Blocks['feux_voie1_rouge'] = {
  init: function() {
    this.setColour("#FF0033");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu rouge de la voie 1")
    //    .appendField(Blockly.Msg.TECHNOZONE51_TEXT175)
    //    .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie1_led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
   // this.appendValueInput("PIN")
	//	.setCheck('Number')
   //     .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
  //	this.appendDummyInput("")
   //     .appendField(" le feu rouge de la voie 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie1_feux_orange
Blockly.Blocks['feux_voie1_orange'] = {
  init: function() {
    this.setColour("#FF9933");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu orange de la voie 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie1_feux_vert
Blockly.Blocks['feux_voie1_vert'] = {
  init: function() {
    this.setColour("#00CC00");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu vert de la voie 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie2_feux_rouge
Blockly.Blocks['feux_voie2_rouge'] = {
  init: function() {
    this.setColour("#FF0033");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu rouge de la voie 2")
    //    .appendField(Blockly.Msg.TECHNOZONE51_TEXT175)
    //    .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie1_led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
   // this.appendValueInput("PIN")
	//	.setCheck('Number')
   //     .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
  //	this.appendDummyInput("")
   //     .appendField(" le feu rouge de la voie 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};


//feux_voie2_feux_orange
Blockly.Blocks['feux_voie2_orange'] = {
  init: function() {
    this.setColour("#FF9933");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu orange de la voie 2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie2_feux_vert
Blockly.Blocks['feux_voie2_vert'] = {
  init: function() {
    this.setColour("#00CC00");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
		.appendField(" le feu vert de la voie 2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};


//alarme_pieton_buzzer1 OK
Blockly.Blocks['feux_alarme_pieton'] = {
  init: function() {
    this.setColour("#646464");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendValueInput("TPS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FEUX_DUREE_BUZZER)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};



//alarme_pieton_buzzer1 OK
Blockly.Blocks['jeulin_alarme_pieton_buzzer1'] = {
  init: function() {
    this.setColour("#646464");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT43)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/alarme_pieton_buzzer1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendValueInput("NUM")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT44)
    this.appendValueInput("TPS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT45)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};