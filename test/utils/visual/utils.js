import allComponents from '../../../autodocs-registry/autodocs-registry.json';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Col, Container, Row } from '../../../src/Grid';

function getTestValues(
  { type, required, defaultValue },
  { skipUndefinedValue },
) {
  const testValues = [];

  if (!skipUndefinedValue && !required && !defaultValue) {
    testValues.push(undefined);
  }

  switch (type.name) {
    case 'bool':
      testValues.push(false, true);
      break;

    case 'string':
      testValues.push('Hello World');
      break;

    case 'number':
      testValues.push(5);
      break;

    case 'enum':
      type.value.forEach(value => {
        if (value.computed) {
          testValues.push(value.value);
        } else {
          // eslint-disable-next-line no-eval
          testValues.push(eval(value.value));
        }
      });
      break;

    default:
  }

  return testValues;
}

function getPropsPermutations(componentName, options) {
  const { props } = options;
  let permutations = [];
  const component = allComponents[componentName];
  const propsMap = {};

  props.forEach(propName => {
    if (!component.props[propName])
      throw new Error(
        `prop ${propName} does not exist in component ${componentName}`,
      );
    propsMap[propName] = getTestValues(component.props[propName], options);
  });

  Object.keys(propsMap).forEach(key => {
    if (permutations.length === 0) {
      propsMap[key].forEach(value => permutations.push({ [key]: value }));
    } else {
      const arr = [];
      propsMap[key].forEach(value =>
        permutations.forEach(group => arr.push({ ...group, [key]: value })),
      );
      permutations = arr;
    }
  });

  return permutations;
}

/**
 * Create a story of props permutations
 * @param Story - A renderable node
 * @param Component - The component class
 * @param options - {
 *   props - string[] - Names of the props to test
 *   skipUndefinedValue - boolean - If true, will not test undefined values
 * }
 */
export const storyOfAllPermutations = (Story, Component, options = {}) => {
  const permutations = getPropsPermutations(Component.displayName, options);
  const { storyName = 'Props Permutations' } = options;
  storiesOf(Component.displayName, module).add(storyName, () => (
    <Container>
      {permutations.map((props, key) => (
        <Row key={key}>
          <Col span={1}>{key}</Col>
          <Col span={11}>
            <Story {...props} />
          </Col>
        </Row>
      ))}
    </Container>
  ));
};
