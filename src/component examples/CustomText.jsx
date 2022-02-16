import Text from "../components/Text";

const CustomText = () => {
  return(
    <>
      <Text>Simple Text</Text>
      <Text style={{paddingBottom:10}}>Text with custom style</Text>
      <Text fontWeight='bold' fontSize='subheading'>
        Bold subheading
      </Text>
      <Text color='textSecondary' >Text with secondary color</Text>
    </>
  );
};

export default CustomText;