import { View, Text, Modal } from 'react-native'
import React from 'react'
import { ModalProps } from '../../types/index'

const Modals:React.FC<ModalProps> = ({Value,animationType,transparent,visible,onRequestClose}) => {
  return (
   <Modal
           animationType={animationType}
           transparent={transparent}
           visible={visible}
           onRequestClose={onRequestClose} 
         >
          {Value}  
         </Modal>
  )
}

export default Modals