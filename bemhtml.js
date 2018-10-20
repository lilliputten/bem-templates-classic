/* eslint-env es6, node, commonjs */
/**
 * @module bemhtml template
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

const utils = require('./utils');

const extraHeaders = `// vim: ft=javascript
/* globals config, addAttrs, addElemMods, addJs, addMix, addMods, appendContent, apply, applyCtx, applyNext, attrs, bem, block, cls, content, def, elem, elemMod, elemMods, extend, js, local, match, mix, mod, mode, mods, oninit, prependContent, replace, tag, wrap, xjstOptions */`;

/** elemTmpl ** {{{
 */
const elemTmpl = (block, elem) => {

  const header = utils.getHeader({block, elem});
  // const objectName = utils.getObjectName({ block, elem });
  const entityName = utils.getEntityName({ block, elem });

  /** Content... {{{*/
  return `${extraHeaders}
${header}

block('${block}').elem('${elem}')(

  // def()(function(){
  //   this.escapeContent = false;
  //   return applyNext();
  // }),
  //
  // content()(function(){
  //   return [
  //     '${entityName}',
  //   ];
  // }),
  //
  // tag()()

);
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
  return `${extraHeaders}
${header}

block('${block}').elem('${elem}').elemMod('${modName}', ${utils.toModValue(modVal)})(

  // def()(function(){
  //   this.escapeContent = false;
  //   return applyNext();
  // }),
  //
  // content()(function(){
  //   return [
  //     '${entityName}',
  //   ];
  // }),
  //
  // tag()()

);
`;/* ...Content }}}*/


};/*}}}*/

/** blockTmpl ** {{{
 */
const blockTmpl = (block) => {

  const header = utils.getHeader({block});
  const entityName = utils.getEntityName({ block });
  // const objectName = utils.getObjectName({ block });

  /** Content... {{{*/
  return `${extraHeaders}
${header}

block('${block}')(

  // def()(function(){
  //   this.escapeContent = false;
  //   return applyNext();
  // }),
  //
  // content()(function(){
  //   return [
  //     '${entityName}',
  //   ];
  // }),
  //
  // tag()()

);
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
  return `${extraHeaders}
${header}

block('${block}').mod('${modName}', ${utils.toModValue(modVal)})(

  // def()(function(){
  //   this.escapeContent = false;
  //   return applyNext();
  // }),
  //
  // content()(function(){
  //   return [
  //     '${entityName}',
  //   ];
  // }),
  //
  // tag()()

);
`;/* ...Content }}}*/

};/*}}}*/

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

};/*}}}*/
