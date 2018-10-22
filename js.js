/* eslint-env es6, node, commonjs */
/* eslint-disable semi */
/**
 * @module js template
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

const utils = require('./utils');

/** elemTmpl ** {{{
 */
const elemTmpl = (block, elem) => {

  const header = utils.getHeader({block, elem});
  // const objectName = utils.getObjectName({ block, elem });
  const entityName = utils.getEntityName({ block, elem });

  /** Content... {{{*/
  return `${header}

modules.define('${block}__${elem}', [
  'i-bem-dom',
  // 'config',
  // 'vow',
],
function define(provide,
  bemDom,
  // config,
  // vow,
// eslint-disable-next-line no-unused-vars
__BASE) {

  /**
   * @exports
   * @class ${entityName}
   * @bem
   */
  var _${entityName}_proto = /** @lends ${entityName}_prototype */ {

    // /** _getDefaultParams ** {{{ */
    // _getDefaultParams: function() {
    //   // var params = this.__base(); // NOTE: For \`Object.assign\`
    //   return {
    //
    //     // paramName: 'value',
    //
    //   };
    // },/*}}}*/
    //
    // /** _${entityName}_init ** {{{ Module init... */
    // _${entityName}_init: function() {
    // },/*}}}*/
    //
    // /** onSetMod ** {{{ Modifiers... */
    // onSetMod: {
    //
    //   /** js ** {{{ JS lifecycle... */
    //   js: {
    //     inited: function() {
    //       this.__base.apply(this, arguments);
    //       this._${entityName}_init && this._${entityName}_init();
    //     },
    //   },/*}}}*/
    //
    // },/*}}}*/

  };

  // /** _${entityName}_static ** {{{ Static properties... */
  // var _${entityName}_static = /** @lends ${entityName} */ {
  //
  //   // lazyInit : true,
  //
  //   /** onInit ** {{{ Static init...
  //    */
  //   onInit: function() {
  //
  //     // var proto = this.prototype;
  //     // this._events({ block : Button, modName : 'action', modVal : 'itemClose' }).on('click', proto.onItemCloseButtonClick);
  //
  //     return this.__base.apply(this, arguments);
  //
  //   }/*}}}*/
  //
  // };/*}}}*/

  // Provide element...
  provide(bemDom.declElem('${block}', '${elem}', _${entityName}_proto));

}); // Module end
`;/* ...Content }}}*/

};/*}}}*/

/** elemModTmpl ** {{{
 */
const elemModTmpl = (block, elem, mod) => {

  const { name: modName, val: modVal } = mod;
  const header = utils.getHeader({block, elem, mod});
  // const objectName = utils.getObjectName({ block, elem, mod });
  const entityName = utils.getEntityName({ block, elem, mod });
  // const blockElemName = block + utils.capitalize(elem);
  // const blockElemModName = blockElemName + utils.capitalize(modName) + utils.capitalize(utils.getModValString(modVal));

  /** Content... {{{*/
  return `${header}

modules.define('${block}__${elem}', [
  // 'i-bem-dom',
  // 'config',
  // 'vow',
],
function define(provide,
  // bemDom,
  // config,
  // vow,
${block}__${elem}) {

  /**
   * @exports
   * @class ${entityName}
   * @bem
   */
  var _${entityName}_proto = /** @lends ${entityName}_prototype */ {

    // /** _getDefaultParams ** {{{ */
    // _getDefaultParams: function() {
    //   // var params = this.__base(); // NOTE: For \`Object.assign\`
    //   return {
    //
    //     // paramName: 'value',
    //
    //   };
    // },/*}}}*/
    //
    // /** _${entityName}_init ** {{{ Module init... */
    // _${entityName}_init: function() {
    // },/*}}}*/
    //
    // /** onSetMod ** {{{ Modifiers... */
    // onSetMod: {
    //
    //   /** js ** {{{ JS lifecycle... */
    //   js: {
    //     inited: function() {
    //       this.__base.apply(this, arguments);
    //       this._${entityName}_init && this._${entityName}_init();
    //     },
    //   },/*}}}*/
    //
    // },/*}}}*/

  };

  // /** _${entityName}_static ** {{{ Static properties... */
  // var _${entityName}_static = /** @lends ${entityName} */ {
  //
  //   // lazyInit : true,
  //
  //   /** onInit ** {{{ Static init...
  //    */
  //   onInit: function() {
  //
  //     // var proto = this.prototype;
  //     // this._events({ block : Button, modName : 'action', modVal : 'itemClose' }).on('click', proto.onItemCloseButtonClick);
  //
  //     return this.__base.apply(this, arguments);
  //
  //   }/*}}}*/
  //
  // };/*}}}*/

  // Provide element modifier
  provide(${block}__${elem}.declMod({modName: '${modName}', modVal: ${utils.toModValue(modVal)}}, _${entityName}_proto));

}); // Module end
`;/* ...Content }}}*/

};/*}}}*/

/** blockTmpl ** {{{
 */
const blockTmpl = (block) => {

  const header = utils.getHeader({block});
  const entityName = utils.getEntityName({ block });
  // const objectName = utils.getObjectName({ block });

  /** Content... {{{*/
  return `${header}

modules.define('${entityName}', [
  'i-bem-dom',
  // 'config',
  // 'vow',
],
function define(provide,
  bemDom,
  // config,
  // vow,
// eslint-disable-next-line no-unused-vars
__BASE) {

  /**
   * @exports
   * @class ${entityName}
   * @bem
   */
  var _${entityName}_proto = /* @lends ${entityName}.prototype */ {

    // /** _getDefaultParams ** {{{ */
    // _getDefaultParams: function() {
    //   // var params = this.__base(); // NOTE: For \`Object.assign\`
    //   return {
    //
    //     // paramName: 'value',
    //
    //   };
    // },/*}}}*/
    //
    // /** _${entityName}_init ** {{{ Block init...
    //  */
    // _${entityName}_init: function() {
    // },/*}}}*/
    //
    // /** onSetMod ** {{{ Modifiers... */
    // onSetMod: {
    //
    //   /** js ** {{{ JS lifecycle... */
    //   js: {
    //     inited: function() {
    //       this.__base.apply(this, arguments);
    //       this._${entityName}_init && this._${entityName}_init();
    //     },
    //   },/*}}}*/
    //
    // },/*}}}*/

  };

  // /** _${entityName}_static ** {{{ Static properties... */
  // var _${entityName}_static = /** @lends ${entityName} */ {
  //
  //   // lazyInit : true,
  //
  //   /** onInit ** {{{ Static init...
  //    */
  //   onInit: function() {
  //
  //     // var proto = this.prototype;
  //     // this._events({ block : Button, modName : 'action', modVal : 'itemClose' }).on('click', proto.onItemCloseButtonClick);
  //
  //     return this.__base.apply(this, arguments);
  //
  //   }/*}}}*/
  //
  // };/*}}}*/

  // Provide block...
  provide(bemDom.declBlock(this.name, _${entityName}_proto));

}); // Module end
`;/* ...Content }}}*/

};/*}}}*/

/** blockModTmpl ** {{{
 */
const blockModTmpl = (block, mod) => {

  const { name: modName, val: modVal } = mod;
  const header = utils.getHeader({block, mod});
  // const parentObjectName = utils.getObjectName({ block });
  // const objectName = utils.getObjectName({ block, mod });
  const entityName = utils.getEntityName({ block, mod });

  /** Content... {{{*/
  return `${header}

modules.define('${block}', [
  'i-bem-dom',
  // 'config',
],
  // 'vow',
function define(provide,
  bemDom,
  // config,
${block}) {
  // vow,

  /**
   * @exports
   * @class ${entityName}
   * @bem
   */
  var _${entityName}_proto = /** @lends ${entityName}_prototype */ {

    // /** _getDefaultParams ** {{{ */
    // _getDefaultParams: function() {
    //   // var params = this.__base(); // NOTE: For \`Object.assign\`
    //   return {
    //
    //     // paramName: 'value',
    //
    //   };
    // },/*}}}*/
    //
    // /** _${entityName}_init ** {{{ Module init... */
    // _${entityName}_init: function() {
    // },/*}}}*/
    //
    // /** onSetMod ** {{{ Modifiers... */
    // onSetMod: {
    //
    //   /** js ** {{{ JS lifecycle... */
    //   js: {
    //     inited: function() {
    //       this.__base.apply(this, arguments);
    //       this._${entityName}_init && this._${entityName}_init();
    //     },
    //   },/*}}}*/
    //
    // },/*}}}*/

  };

  // /** _${entityName}_static ** {{{ Static properties... */
  // var _${entityName}_static = /** @lends ${entityName} */ {
  //
  //   // lazyInit : true,
  //
  //   /** onInit ** {{{ Static init...
  //    */
  //   onInit: function() {
  //
  //     // var proto = this.prototype;
  //     // this._events({ block : Button, modName : 'action', modVal : 'itemClose' }).on('click', proto.onItemCloseButtonClick);
  //
  //     return this.__base.apply(this, arguments);
  //
  //   }/*}}}*/
  //
  // };/*}}}*/

  // Provide block modifier
  provide(${block}.declMod({modName: '${modName}', modVal: ${utils.toModValue(modVal)}}, _${entityName}_proto));

}); // Module end
`;/* ...Content }}}*/

}/*}}}*/

/** module.exports ** {{{
 */
module.exports = ({ block, elem, mod={} }) => {

  const { name: modName } = mod;

  // TODO: elemModTmpl?
  if (block && elem && modName) {
    return elemModTmpl(block, elem, mod);
  }
  else if (block && elem) {
    return elemTmpl(block, elem);
  }
  else if (block && modName) {
    return blockModTmpl(block, mod);
  }
  else if (block) {
    return blockTmpl(block);
  }

}/*}}}*/
