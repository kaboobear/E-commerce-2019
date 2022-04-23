import { toast } from 'react-toastify';

const Notify = {
  add: () => {
    toast.success('Добавлено в корзину', {
      autoClose: 1500,
      containerId: 'one',
    });
  },

  mailEdit: () => {
    toast.success('Почта изменена', {
      autoClose: 1500,
      containerId: 'one',
    });
  },

  passEdit: () => {
    toast.success('Пароль изменен', {
      autoClose: 1500,
      containerId: 'one',
    });
  },

  deliveryEdit: () => {
    toast.success('Настройки сохранены', {
      autoClose: 1500,
      containerId: 'one',
    });
  },
};

export default Notify;
