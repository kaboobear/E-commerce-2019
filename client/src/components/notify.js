import {toast} from 'react-toastify'

 const Notify = {
    add: () => {
        toast.success("Added To Cart", {
            autoClose: 1500,
            containerId: 'one',
        })
    },

}

export default Notify;