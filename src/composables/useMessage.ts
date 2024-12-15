import type { IVMessageProps } from '../components/Message/types';
import { VMessage } from '../components/Message';
import { createVNode, render } from 'vue';

export function useMessage (props: IVMessageProps) {
    const { body } = document;
    const VMessageNode = createVNode(VMessage, props);

    VMessageNode.props!.onClose = () => {
      render(null, body);
    };

    render(VMessageNode, body);
}
