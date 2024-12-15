import type { IVConfirmProps } from '../types';
import { VConfirm } from '../components';
import { createVNode, render } from 'vue';

export async function useConfirm (props: IVConfirmProps) {
  return new Promise(resolve => {
    const { body } = document;

    const VConfirmVNode = createVNode(VConfirm, props);

    VConfirmVNode.props!.onSuccess = () => {
      render(null, body);

      return resolve(true);
    };

    VConfirmVNode.props!.onCansel = () => {
      render(null, body);

      return resolve(false);
    };

    render(VConfirmVNode, body);
  });
}
