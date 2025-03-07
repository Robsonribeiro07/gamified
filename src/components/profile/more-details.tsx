import { useStateModalDetails } from '@/stores/profile/use-state-more-details'
import { colors } from '@/styles/themes'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

export function MoreDetails() {
  const { toggle, handleClose } = useStateModalDetails()
  return (
    <View style={styles.container}>
      <Modal
        visible
        animationType="fade"
        transparent={true}
        onRequestClose={toggle}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.dropdownItem}
              >
                <Icons name="pencil" color="#E0E0E0" size={20} />
                <Text style={styles.dropdownText}>Edita Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.dropdownItem}
              >
                <Icons name="cog" size={20} color="#E0E0E0" />
                <Text style={styles.dropdownText}>Configuraçoes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.dropdownItem}
              >
                <Icons name="sign-out" size={20} color="#E0E0E0" />
                <Text style={styles.dropdownText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.headerColor,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    flexDirection: 'column',
    backgroundColor: colors.headerColor,
  },
  dropdownItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dropdownText: {
    fontSize: 16,
    color: 'white',
  },
})
