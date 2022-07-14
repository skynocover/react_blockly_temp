/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';
import './blocks/customblocks';
import './generator/generator';

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './Blockly';

function App(props) {
  return (
    <div>
      <BlocklyComponent
        readOnly={false}
        trashcan={true}
        media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<Block type="controls_ifelse" x="0" y="0"></Block>
</xml>
`}
      >
        <Category name="Logic" categorystyle="logic_category">
          <Block type="controls_if" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          <Block type="logic_null" />
          <Block type="logic_ternary" />
        </Category>

        <Category name="Loops" categorystyle="loop_category">
          <Block type="controls_repeat_ext" />
          <Block type="controls_repeat" />
          <Block type="controls_whileUntil" />
          <Block type="controls_for" />
          <Block type="controls_forEach" />
          <Block type="controls_flow_statements" />
        </Category>

        <Category name="Math" categorystyle="math_category">
          <Block type="math_number" gap="32">
            <Field name="NUM">123</Field>
          </Block>
          <Block type="math_arithmetic">
            <Value name="A">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="B">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_single">
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">9</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_trig">
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">45</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_constant"></Block>
          <Block type="math_number_property">
            <Value name="NUMBER_TO_CHECK">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_round">
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">3.1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_on_list"></Block>
          <Block type="math_modulo">
            <Value name="DIVIDEND">
              <Shadow type="math_number">
                <Field name="NUM">64</Field>
              </Shadow>
            </Value>
            <Value name="DIVISOR">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_constrain">
            <Value name="Value">
              <Shadow type="math_number">
                <Field name="NUM">50</Field>
              </Shadow>
            </Value>
            <Value name="LOW">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="HIGH">
              <Shadow type="math_number">
                <Field name="NUM">100</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_random_int">
            <Value name="FROM">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="TO">
              <Shadow type="math_number">
                <Field name="NUM">100</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_random_float"></Block>
          <Block type="math_atan2">
            <Value name="X">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="Y">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>

        <Category name="Text" categorystyle="text_category">
          <Block type="text"></Block>
          <Block type="text_multiline"></Block>
          <Block type="text_join"></Block>
          <Block type="text_append">
            <Value name="TEXT">
              <Shadow type="text"></Shadow>
            </Value>
          </Block>
          <Block type="text_length">
            <Value name="VALUE">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_isEmpty">
            <Value name="VALUE">
              <Shadow type="text">
                <Field name="TEXT"></Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_indexOf">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
            <Value name="FIND">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
          <Block type="text_getSubstring">
            <Value name="STRING">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
          <Block type="text_changeCase">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_trim">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_count">
            <Value name="SUB">
              <Shadow type="text"></Shadow>
            </Value>
            <Value name="TEXT">
              <Shadow type="text"></Shadow>
            </Value>
          </Block>
          <Block type="text_replace">
            <Value name="FROM">
              <Shadow type="text"></Shadow>
            </Value>
            <Value name="TO">
              <Shadow type="text"></Shadow>
            </Value>
            <Value name="TEXT">
              <Shadow type="text"></Shadow>
            </Value>
          </Block>
          <Block type="text_reverse">
            <Value name="TEXT">
              <Shadow type="text"></Shadow>
            </Value>
          </Block>
          <label text="Input/Output:" web-class="ioLabel"></label>
          <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_prompt_ext">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>
        <Category name="Lists" categorystyle="list_category">
          <Block type="lists_create_with">
            <mutation items="0"></mutation>
          </Block>
          <Block type="lists_create_with"></Block>
          <Block type="lists_repeat">
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">5</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="lists_length"></Block>
          <Block type="lists_isEmpty"></Block>
          <Block type="lists_indexOf">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_getIndex">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_setIndex">
            <Value name="LIST">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_getSublist">
            <Value name="LIST">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_split">
            <Value name="DELIM">
              <Shadow type="text">
                <Field name="TEXT">,</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="lists_sort"></Block>
          <Block type="lists_reverse"></Block>
        </Category>
        <Category name="Colour" categorystyle="colour_category">
          <Block type="colour_picker"></Block>
          <Block type="colour_random"></Block>
          <Block type="colour_rgb">
            <Value name="RED">
              <Shadow type="math_number">
                <Field name="NUM">100</Field>
              </Shadow>
            </Value>
            <Value name="GREEN">
              <Shadow type="math_number">
                <Field name="NUM">50</Field>
              </Shadow>
            </Value>
            <Value name="BLUE">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="colour_blend">
            <Value name="COLOUR1">
              <Shadow type="colour_picker">
                <Field name="COLOUR">#ff0000</Field>
              </Shadow>
            </Value>
            <Value name="COLOUR2">
              <Shadow type="colour_picker">
                <Field name="COLOUR">#3333ff</Field>
              </Shadow>
            </Value>
            <Value name="RATIO">
              <Shadow type="math_number">
                <Field name="NUM">0.5</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>

        <Category name="Variables" categorystyle="variable_category" custom="VARIABLE"></Category>
        <Category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></Category>

        <Category name="test2">
          <Block type="variables_get">
            <Field name="VAR">text</Field>
          </Block>

          <Block type="text_charAt">
            <Value name="Value">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
        </Category>

        <Category name="custom">
          {/* <Block type="test_react_Field" /> */}
          {/* <Block type="test_react_date_Field" /> */}
          {/* <Block type="controls_ifelse" /> */}
        </Category>
      </BlocklyComponent>
    </div>
  );
}

export default App;
