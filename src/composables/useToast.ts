import type { IVToastProps } from '../types';
import { createElement } from '../utils';
import { VToastContainer, VToast } from '../components';
import { createVNode, render } from 'vue';

export function useToast (props: IVToastProps) {
  if (import.meta.server) {
    return;
  }

  const { body } = document;
  const container = createElement('div');

  const VToastContainerVNode = createVNode(VToastContainer);
  const VToastVNode = createVNode(VToast, props);

  VToastVNode.props!.onClose = () => {
    render(null, container);
  };

  render(VToastContainerVNode, body);
  render(VToastVNode, container);

  VToastContainerVNode.el?.appendChild(container.firstElementChild);
}
