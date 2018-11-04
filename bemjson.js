/* eslint-env es6, node, commonjs */
/* eslint quotes:0, no-unused-vars:0 */
'use strict';
/**
 * @module bemjson template
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

const utils = require('./utils');

/** module.exports ** {{{
 */
module.exports = function (entity, naming) {

  const entityName = utils.getEntityName({ block: entity });
  const header = utils.getHeader({block: entity});

  /** Content ... {{{*/
  return `/* eslint-env es6, node, commonjs */
// vim: ft=javascript
${header}

const

  Env = require('../../Env.js'),

  pageId = Env.getPageId(__dirname),

  // config = Env.config,

  /** pageContent ** {{{ Page content
   */
  pageContent = {
    block: 'test',
    cls: 'container',
    content: [
      '${entityName} content',
    ],
  },/*}}}*/

  /** bemjson ** {{{ Entire page
   */
  bemjson = Env.page({
    pageId,
    content: pageContent,
  })/*}}}*/

;

module.exports = bemjson; // Result
`;/* ...Content }}}*/

};/*}}}*/
