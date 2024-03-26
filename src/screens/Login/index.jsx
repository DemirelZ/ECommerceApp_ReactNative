import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {screenStyle} from '../../styles/Screenstyle';
import {Input, Button} from '@ui-kitten/components';
import {width} from '../../utils/constants';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';

const Login = ({navigation}) => {
  const [userName, setUserName] = React.useState('mor_2314');
  const [password, setPassword] = React.useState('83r5^_');
  const [userNameReq, setUserNameReq] = React.useState(true);
  const [passwordReq, setPasswordReq] = React.useState(true);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const {isLogin, setIsLogin} = useContext(StoreContext);

  const HandleLogin = () => {
    const form = {
      username: null,
      password: null,
    };

    if (userName) {
      form.username = userName;
      setUserNameReq(true);
    } else setUserNameReq(false);
    if (password) {
      form.password = password;
      setPasswordReq(true);
    } else setPasswordReq(false);
    if (password && userName) {
      postRequest(LOGIN_URL, form)
        .then(() => {
          setIsLogin(true), navigation.goBack();
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={screenStyle.container}>
      <View style={{flex: 2}}>
        <Image
          source={require('../../assets/cartImage.png')}
          style={styles.image1}
        />
      </View>
      <View style={{flex: 7, padding: 20}}>
        <Input
          label="User Name"
          placeholder="Place your User Name"
          value={userName}
          status={!userNameReq ? 'danger' : 'basic'}
          caption={!userNameReq && 'Username alanı zorunludur'}
          onChangeText={nextValue => setUserName(nextValue)}
        />

        <Input
          value={password}
          label="Password"
          placeholder="Place your password"
          caption={!passwordReq && 'Password alanı zorunludur'}
          status={!passwordReq ? 'danger' : 'basic'}
          accessoryRight={
            secureTextEntry ? (
              <EyeSlash onPress={() => setSecureTextEntry(!secureTextEntry)} />
            ) : (
              <Eye onPress={() => setSecureTextEntry(!secureTextEntry)} />
            )
          }
          secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Button
          onPress={HandleLogin}
          style={{marginTop: 40}}
          appearance="outline"
          status="success">
          LOGIN
        </Button>
      </View>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/posetler.png')}
          style={styles.image2}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image1: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',

    alignSelf: 'center',
  },
  image2: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
