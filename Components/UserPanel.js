import { StyleSheet, Text, View } from "react-native";
const UserPanel = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.userContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>{props.headerText}</Text>
            <Text
              style={{
                marginTop: "-10%",
                fontFamily: "Cairo",
                fontSize: 42,
                color: "#FB8703",
              }}
            >
              {props.secondText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 20,
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    alignItems: "center",
  },

  userImg: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FB8703",
  },
  userContainer: {
    flexDirection: "row",
  },

  textContainer: {
    width: "80%",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 24,
    lineHeight: 40,
  },

  username: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
    fontWeight: "800",
  },
});

export default UserPanel;
