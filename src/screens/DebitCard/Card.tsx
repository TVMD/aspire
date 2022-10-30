import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import { DebitCard } from "../../models/debitcard";
import UnseeLogo from "../../components/Icons/UnseeIcon";
import LogoAspireIcon from "../../components/Icons/LogoAspireIcon";
import LogoVisaIcon from "../../components/Icons/LogoVisaIcon";

const Card = ({ cardInfo }: { cardInfo: DebitCard }) => {
  const { holderName, cardNumber = '', cvv, expireDate } = cardInfo
  const [show, setShow] = useState(true)

  return (
    <View style={styles.container}>

      <View style={styles.hideCardRow}>
        <TouchableOpacity onPress={() => setShow(show => !show)} style={styles.hideCardContainer}>
          <UnseeLogo />
          {show ? <Text style={styles.textHide}>Hide card number</Text> : <Text style={styles.textHide}>Show card number</Text>}
        </TouchableOpacity >
      </View >

      <View style={styles.cardContainer}>
        <View style={styles.cardIconRow}>
          <View style={styles.cardIconContainer}>
            <LogoAspireIcon />
          </View >
        </View >
        <Text style={styles.textName}>{holderName}</Text>
        <Text style={styles.cardNumber}>
          {
            (show ? cardNumber : 'xxxxxxxxxxxxxxxxx').match(/.{1,4}/g)?.map((x, i) => i == 3 ? x : `${x}    `)
          }
        </Text>
        <View style={styles.cvvRow}>
          <Text style={styles.textCvv}>{`Thru: ${expireDate}`}</Text>
          <Text style={styles.textCvv}>{`      CVV: ${cvv}`}</Text>
        </View>
        <View style={styles.visaLogoRow}>
          < LogoVisaIcon />
        </View >
      </View >
      <View style={styles.white} />
    </View >
  );
};

const styles = StyleSheet.create({
  white: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: '60%',
    position: 'absolute',
    top: '40%',
    left: 0,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  container: {
    backgroundColor: 'transparent',
    marginTop: 200,
  },
  hideCardRow: {
    marginHorizontal: 24,
    flexDirection: 'row-reverse',
  },
  hideCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 8,
    paddingHorizontal: 14,
    paddingBottom: 18,
    transform: [{ translateY: 10 }]
  },
  textHide: {
    ...generalTextStyle({ fontSize: 12, fontWeight: 'bold', color: COLOR.secondary }),
    marginLeft: 6
  },
  cardContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: COLOR.secondary,
    padding: 24,
    zIndex: 1,
  },
  cardIconRow: {
    flexDirection: 'row-reverse'
  },
  cardIconContainer: {

  },
  textName: {
    ...generalTextStyle({ fontSize: 22, fontWeight: 'bold' }),
    marginBottom: 24,
  },
  cardNumber: {
    ...generalTextStyle({ fontSize: 14, fontWeight: 'bold' }),
    marginBottom: 15,
    letterSpacing: 3,
  },
  textCvv: {
    ...generalTextStyle({ fontSize: 13, fontWeight: 'bold' })
  },
  visaLogoRow: {
    flexDirection: 'row-reverse'
  },
  cvvRow: {
    flexDirection: 'row'
  }

})

export default Card

