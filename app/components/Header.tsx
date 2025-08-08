import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../constants/index'
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
                Value={
                  <Icons
                    name={'search'}
                    size={21}
                    style={{ bottom: 0.5 }}
                    color={'#006CFF'}
                  />
                }
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
            Value={<Icons
              name={"plus"}
              size={25}
              color={"#006CFF"}
              style={{ bottom: 1 }}
            />}
            />
            
          </View>
        </View>
  )
}

export default Header