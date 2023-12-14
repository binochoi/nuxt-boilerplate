import { useModal } from 'vue-final-modal';

type Props = Parameters<typeof useModal>[0];

export const useAppModal = (props?:Props) => {
  const { component } = props || {};
  const createIsOpened = createGlobalState(() => ref(false));
  const isOpened = createIsOpened();
  const modal = useModal({
    component,
    attrs: {
      onClose() {
        isOpened.value = false;
        modal.close();
      },
    },
  });
  return {
    isOpened: computed(() => isOpened.value),
    open: () => {
      isOpened.value = true;
      return modal.open();
    },
    close: () => {
      isOpened.value = false;
      return modal.close();
    },
  };
};
