/* eslint-env es6, node, commonjs */
/**
 * @module template utils
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

/*
%s/\<\(capitalize\|getModValString\|toObjectKey\|hasNotDefaultModValue\|toModValue\|getEntityName\|getObjectName\|getHeader\)(/utils.\1(/g
*/

module.exports = {

  elemDelim: '__',
  modDelim: '_',

  /** capitalize ** {{{
   */
  capitalize: function(v) {
    return v ? ( String(v)[0].toUpperCase() + String(v).substr(1, v.length) ) : '';
  },/*}}}*/

  /** getModValString ** {{{
   */
  getModValString: function(v) {
    return v == null || v === true ? '' : v;
  },/*}}}*/
  /** hasNotDefaultModValue ** {{{
   */
  hasNotDefaultModValue: function(modVal) {
    return !!modVal && modVal !== true;
  },/*}}}*/
  /** toModValue ** {{{
   */
  toModValue: function(modVal) {
    return typeof modVal === 'boolean' ? modVal : `'${modVal}'`;
  },/*}}}*/
  /** getEntityName ** {{{
   */
  getEntityName: function  ({ block, elem, mod={} }) {
    let entityName = block;
    if ( elem ) {
      entityName += this.elemDelim + elem;
    }
    if ( mod.name ) {
      entityName += this.modDelim + mod.name;
      if ( this.hasNotDefaultModValue(mod.val) ) {
        entityName += '_' + mod.val;
      }
    }
    return entityName;
  },/*}}}*/
  /** getObjectName ** {{{
   */
  getObjectName: function  ({ block, elem, mod={} }) {
    let entityName = block; // this.capitalize(block);
    if ( elem ) {
      entityName += this.capitalize(elem);
    }
    if ( mod.name ) {
      entityName += this.capitalize(mod.name);
      if ( mod.val && mod.val !== true ) {
        entityName += this.capitalize(mod.val);
      }
    }
    return entityName;
  },/*}}}*/

  /** getHeader ** {{{ Module header...
   */
  getHeader: function ({ block, elem, mod={} }) {

    const dateStr = require('dateformat')(new Date(), 'yyyy.mm.dd HH:MM');

    const entityName = this.getEntityName({ block, elem, mod });
    // const objectName = this.getObjectName({ block, elem, mod });
    // const jsEntityName = entityName.replace(/-/g, '__');
    // const jsEntityShortName = ( jsEntityName.length > block.length ) ? jsEntityName.substr(block.length) : jsEntityName;

    const at = '@';

    return `/**
 * ${at}module ${entityName}
 * ${at}author lilliputten <lilliputten@yandex.ru>
 * ${at}since ${dateStr}
 * ${at}version ${dateStr}
 */`;

  },/*}}}*/

};
