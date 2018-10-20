/* eslint-env es6, node, commonjs */
/**
 * @module css template
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

const utils = require('./utils');

/** module.exports ** {{{
 */
module.exports = function ({ block, elem, mod={} }) {

  const header = utils.getHeader({block, elem, mod});

  /** Content ... {{{*/
  return `// vim: ft=stylus
${header}

.${block} {${elem? `
  &${utils.elemDelim}${elem} {${mod.name? `
    &${utils.modDelim}${mod.name} {${mod.val && mod.val !== true? `
      &${utils.modDelim}${mod.val} {
      }` : ''}
    }` : ''}
  }` : (mod.name? `
  &${utils.modDelim}${mod.name} {${mod.val && mod.val !== true? `
    &${utils.modDelim}${mod.val} {
    }` : ''}
  }` : '')}
}
`;/* ...Content }}}*/

};/*}}}*/
