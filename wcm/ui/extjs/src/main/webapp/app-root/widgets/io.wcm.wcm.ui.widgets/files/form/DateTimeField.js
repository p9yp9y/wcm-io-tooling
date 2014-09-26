/**
 * Form field for date/time value.
 * <p>Enhancements over CQ5 version:</p>
 * <ul>
 *   <li>Set default date format</li>
 *   <li>Fix problems with setting date field to empty value</li>
 * </ul>
 */
io.wcm.wcm.ui.form.DateTimeField = CQ.Ext.extend(CQ.form.DateTime, {

  /**
   * Creates a new component.
   * @param config configuration
   */
  constructor : function(config) {
    config = config || {};

    // set value to defaultValue to fix problem in CQ54 with applying default values 
    if (config.value===undefined && config.defaultValue!==undefined) {
      config.value = config.defaultValue;
    }

    var defaults = {
      "dateFormat": "m/d/Y"
    };
    CQ.Util.applyDefaults(config, defaults);

    io.wcm.wcm.ui.form.DateTimeField.superclass.constructor.call(this, config);
  },

  /**
   * @private Updates the date part
   */
  updateDate : function() {

    // set to null if date value was erased
    var d = this.df.getValue();
    if (d===null || d==="") {
      this.dateValue = null;
      return;
    }

    io.wcm.wcm.ui.form.DateTimeField.superclass.updateDate.call(this);
  },

  /**
   * private
   * Checks if the object is a date by not using instanceof
   */
  isDate: function(pObj) {
    // extra null check
    if (pObj===null) {
      return false;
    }
    return io.wcm.wcm.ui.form.DateTimeField.superclass.isDate.call(this, pObj);
  }


});

CQ.Ext.reg("io.wcm.wcm.ui.datetimefield", io.wcm.wcm.ui.form.DateTimeField);
