import type { ObjectDirective } from 'vue';
import type { IVLoadingDirectiveBind } from './types';
import VLoading from './VLoading.vue';
import { isBoolean, isObject } from '../../utils';
import { createVNode, render } from 'vue';

function setParentPositionType (element: HTMLElement, boolean: boolean) {
  const { position } = getComputedStyle(element);

  if (boolean) {
    if (position === 'static') {
      element.style.position = 'relative';
    }
  } else {
    element.style.position = '';
  }
}

function getVisibleValue (value: IVLoadingDirectiveBind) {
  return isBoolean(value) ? value : value.visible;
}

function getProps (value: IVLoadingDirectiveBind) {
  return isObject(value) ? value : {};
}

export const vLoading: ObjectDirective<HTMLElement, IVLoadingDirectiveBind> = {
  mounted (element, bind) {
    const { value } = bind;

    const VLoadingVNode = createVNode(VLoading, getProps(value));

    setParentPositionType(element, getVisibleValue(value));

    VLoadingVNode.props!.visible = getVisibleValue(value);

    if (bind.value) {
      render(VLoadingVNode, element);
    } else {
      render(null, element);
    }
  },
  updated (element, bind) {
    const { value } = bind;

    const VLoadingVNode = createVNode(VLoading, getProps(value));

    setParentPositionType(element, getVisibleValue(value));

    VLoadingVNode.props!.visible = getVisibleValue(value);

    if (bind.value) {
      render(VLoadingVNode, element);
    } else {
      render(null, element);
    }
  }
};
