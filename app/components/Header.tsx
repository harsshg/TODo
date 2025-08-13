import { View, Text } from 'react-native'
import React from 'react'
import  styles  from '../constants/styles'
import {Buttons,Texts,Icons,TextInputs} from './index'
import {HeaderProps} from '../types/index'


const Header: React.FC<HeaderProps> = ({
searching,toggleSearch,valsearch,setvalsearch,setModalVisible}) => {
  return (
    <View style={styles.viewbox}>
   

          <Texts style={styles.TextStyle} Value={'Today'} />
  
          <View
            style={styles.srcaddcontainer}
          >
            {searching ? (
              <Buttons
                style={styles.searchBtn}
                onPress={() => toggleSearch(searching)}
                
                    Iconname={'search'}
                    Iconsize={21}
                    Iconstyle={{ bottom: 0.5 }}
                    Iconcolor={'#006CFF'}
              />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <View
                  style={styles.searchbxcross}
                >
                  <Icons
                    name={'close'}
                    size={18}
                    color={'white'}
                    style={{ bottom: 1 }}
                    onPress={() => toggleSearch(searching)}
                  />
                </View>

                <TextInputs
                  placeholder={'Enter your Searches Here'}
                  value={valsearch}
                  style={styles.searchbox}
                  onChangeText={setvalsearch}
                />
              </View>
            )}

            {/* Task Add */}
            <Buttons
            style={styles.addBtn}
            onPress={() => setModalVisible(true)}
            Iconname={"plus"}
            Iconsize={25}
            Iconcolor={"#006CFF"}
            Iconstyle={{ bottom: 1 }}
            />
            
          </View>
        </View>
  )
}

export default Header

