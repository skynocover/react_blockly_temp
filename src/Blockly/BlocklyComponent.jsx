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
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './BlocklyComponent.css';
import { useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import {
  ContinuousToolbox,
  ContinuousFlyout,
  ContinuousMetrics,
} from '@blockly/continuous-toolbox';
import DarkTheme from '@blockly/theme-dark';


Blockly.setLocale(locale);

export default function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = () => {
    const xmlDom = Blockly.Xml.workspaceToDom(primaryWorkspace.current);
    const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    console.log(xmlText);

    let code = BlocklyJS.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      theme: DarkTheme,
      toolbox: toolbox.current,
      plugins: {
        toolbox: ContinuousToolbox,
        flyoutsVerticalToolbox: ContinuousFlyout,
        metricsManager: ContinuousMetrics,
      },
      move: {
        wheel: true, // Required for wheel scroll to work.
      },
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace.current);
    }

    // const backpack = new Backpack(primaryWorkspace.current);
    // backpack.init();
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <>
      <button onClick={generateCode}>Convert</button>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </>
  );
}
