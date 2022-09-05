import React, {memo, useState} from 'react';
import classes from './styles.module.scss';

//классовый компонент

// export default class AllModal extends React.Component {
//   store = {
//     isOpen: false
//   }
//
//   render() {
//     return (
//       <div className={classes.root}>
//         <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
//
//         {this.store.isOpen && (
//           <div className={classes.modal}>
//             <div className={classes.modal_body}>
//               <h1>Modal Title</h1>
//               <p>I am Modal!!!</p>
//               <button onClick={() => this.setState({isOpen: false})}>Close Modal</button>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

//  функциональный компонент
const AllModal = () => {
  const[modal,setModal]=useState(false)
  return (
    <>

      <div className={classes.root}>
        <button onClick={() => setModal(true)}>Open Modal</button>
        {modal && (<div className={classes.modal}>
          <div className={classes.modal_body}>
            <h1>Modal Title</h1>
            <p>I am Modal!!!</p>
            <button onClick={() => setModal(false)}>Close Modal</button>
          </div>
        </div>)}
      </div>
    </>
  )
}
export default memo(AllModal)

// const AllModal = () => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.modal_body}>
//
//       </div>
//     </div>
//   );
// };
//
// export default memo(AllModal);