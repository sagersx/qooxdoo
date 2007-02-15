/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 1&1 Internet AG, Germany, http://www.1and1.org

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/* ************************************************************************

#module(core)
#ignore(auto-require)

************************************************************************ */

/**
 * Helper functions to handle Object as a Hash map.
 */
qx.Clazz.define("qx.lang.Object",
{
  /*
  *****************************************************************************
  **** STATICS ****************************************************************
  *****************************************************************************
  */

  statics :
  {
    /**
     * Check if the hash has any keys
     *
     * @type static
     * @param map {Object} the map to check
     * @return {Boolean} whether the map has any keys
     */
    isEmpty : function(map)
    {
      for (var s in map) {
        return false;
      }

      return true;
    },


    /**
     * Check whether the number of objects in the maps is at least "lenght"
     *
     * @type static
     * @param map {Object} the map to check
     * @param length {Integer} minimum number of objects in the map
     * @return {Boolean} whether the map contains at least "lenght" objects.
     */
    hasMinLength : function(map, length)
    {
      var i = 0;

      for (var s in map)
      {
        if ((++i) >= length) {
          return true;
        }
      }

      return false;
    },


    /**
     * Get the number of objects in the map
     *
     * @type static
     * @param map {Object} the map
     * @return {Integer} number of objects in the map
     */
    getLength : function(map)
    {
      var i = 0;

      for (var s in map) {
        i++;
      }

      return i;
    },


    /**
     * Get the keys of a map as array
     *
     * @type static
     * @param map {Object} the map
     * @return {Array} array of the keys of the map
     */
    getKeys : function(map)
    {
      var r = [];

      for (var s in map) {
        r.push(s);
      }

      return r;
    },


    /**
     * Get the keys of a map as string
     *
     * @type static
     * @param map {Object} the map
     * @return {String} String of the keys of the map
     *         The keys are separated by ", "
     */
    getKeysAsString : function(map) {
      return qx.lang.Object.getKeys(map).join(", ");
    },


    /**
     * Get the values of a map as array
     *
     * @type static
     * @param map {Object} the map
     * @return {Array} array of the values of the map
     */
    getValues : function(map)
    {
      var r = [];

      for (var s in map) {
        r.push(map[s]);
      }

      return r;
    },


    /**
     * Merge two objects.
     * 
     * If the Objects both have the same key, the value of the second object is taken.
     *
     * @type static
     * @param vObjectA {Object} target object
     * @param vObjectB {Object} object to be merged
     * @return {Object} ObjectA with merged values from ObjectB
     */
    mergeWith : function(vObjectA, vObjectB)
    {
      for (var vKey in vObjectB) {
        vObjectA[vKey] = vObjectB[vKey];
      }

      return vObjectA;
    },


    /**
     * Merge two objects. Existing values will not be overwritten.
     * 
     * If the Objects both have the same key, the value of the first object is taken.
     *
     * @type static
     * @param vObjectA {Object} target object
     * @param vObjectB {Object} object to be merged
     * @return {Object} vObjectA with merged values from vObjectB
     */
    carefullyMergeWith : function(vObjectA, vObjectB)
    {
      for (var vKey in vObjectB)
      {
        if (typeof vObjectA[vKey] === "undefined") {
          vObjectA[vKey] = vObjectB[vKey];
        }
      }

      return vObjectA;
    },


    /**
     * Merge a number of objects.
     *
     * @type static
     * @param vObjectA {Object} target object
     * @param varargs {Object} variable number of objects to merged with vObjectA
     * @return {Object} vObjectA with merged values from the other objects
     */
    merge : function(vObjectA, varargs)
    {
      var vLength = arguments.length;

      for (var i=1; i<vLength; i++) {
        qx.lang.Object.mergeWith(vObjectA, arguments[i]);
      }

      return vObjectA;
    },


    /**
     * Return a copy of an Object
     *
     * @type static
     * @param vObject {Object} Object to copy
     * @return {Object} copy of vObject
     */
    copy : function(vObject) {
      return qx.lang.Object.mergeWith({}, vObject);
    },


    /**
     * Inverts a Map by exchanging the keys with the values.
     * If the map has the same values for different keys, information will get lost.
     * The values will be converted to Strings using the toString methos.
     *
     * @type static
     * @param vObject {Object} Map to invert
     * @return {Object} inverted Map
     */
    invert : function(vObject)
    {
      var result = {};

      for (var key in vObject)
      {
        var value = vObject[key].toString();
        result[value] = key;
      }

      return result;
    }
  }
});
