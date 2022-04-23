import {
  ADD_CART,
  SET_CART,
  DELETE_CART,
  SET_CHECKOUT,
  CLEAR_CART,
} from '../actions/types';

const initialState = {
  items: [],
  total: 0,
  count: 0,
  isCheckout: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CART: {
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        count: action.payload.count,
      };
    }

    case SET_CHECKOUT: {
      return {
        ...state,
        isCheckout: action.payload,
      };
    }

    case CLEAR_CART: {
      localStorage.removeItem('items');
      localStorage.removeItem('count');
      localStorage.removeItem('total');

      return {
        ...state,
        items: [],
        total: 0,
        count: 0,
        isCheckout: false,
      };
    }

    case DELETE_CART: {
      let newItems = state.items;
      let total = 0;
      let count = 0;

      newItems = newItems.filter((elem) => elem.item._id !== action.payload);

      total = newItems.reduce((acc, elem, ind) => {
        return acc + elem.item.price * elem.count;
      }, 0);

      count = newItems.reduce((acc, elem, ind) => {
        return acc + elem.count;
      }, 0);

      localStorage['items'] = JSON.stringify(newItems);
      localStorage['count'] = count;
      localStorage['total'] = total;

      return {
        ...state,
        items: [...newItems],
        total,
        count,
      };
    }

    case ADD_CART: {
      var isSame = false;
      let newItems = state.items;
      let total = 0;
      let count = 0;

      if (newItems.length > 0) {
        newItems = newItems.map((elem) => {
          if (elem.item._id === action.payload.item._id) {
            isSame = true;
            elem.count += action.payload.count;
            return elem;
          }
          return elem;
        });
      }

      if (!isSame)
        newItems = [
          ...newItems,
          {
            item: action.payload.item,
            count: action.payload.count,
          },
        ];

      total = newItems.reduce((acc, elem, ind) => {
        return acc + elem.item.price * elem.count;
      }, 0);

      count = newItems.reduce((acc, elem, ind) => {
        return acc + elem.count;
      }, 0);

      if (localStorage.getItem('count')) {
        localStorage['items'] = JSON.stringify(newItems);
        localStorage['count'] = count;
        localStorage['total'] = total;
      } else {
        localStorage.setItem('items', JSON.stringify(newItems));
        localStorage.setItem('total', total);
        localStorage.setItem('count', count);
      }

      return {
        ...state,
        items: [...newItems],
        total,
        count,
      };
    }
    default:
      return state;
  }
}
