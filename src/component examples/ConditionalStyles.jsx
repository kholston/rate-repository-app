import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text:{
    color: 'grey',
    fontSize: 14,
  },
  blueText: {
    color: 'blue',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700',
  },
});

const FancyText = ({isBlue, isBig, children}) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return <Text style={textStyles}>{children}</Text>
};

const ConditonalStyles = () => {
  return(
    <>
      <FancyText>Simple Text</FancyText>
      <FancyText isBlue>Blue text</FancyText>
      <FancyText isBig>Big Text</FancyText>
      <FancyText isBig isBlue>
        Big blue text
      </FancyText>
    </>
  );
};

export default ConditonalStyles