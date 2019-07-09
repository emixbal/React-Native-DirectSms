# React-Native-DirectSms
Boilerplate for react native  directSms. Making react-native possible to send SMS in background or Programmatically.

what I did?
1. [Create DirectSmsModule](https://github.com/emixbal/React-Native-DirectSms/blob/master/android/app/src/main/java/com/upsms55/DirectSmsModule.java)
2. [Create DirectSmsPackage](https://github.com/emixbal/React-Native-DirectSms/blob/master/android/app/src/main/java/com/upsms55/DirectSmsPackage.java)
3. [Register DirectSmsPackage](https://github.com/emixbal/React-Native-DirectSms/blob/master/android/app/src/main/java/com/upsms55/MainApplication.java)

steps above are tutorial from [this article](https://blog.usejournal.com/sending-direct-sms-in-react-native-android-d902d6bf1f04) , then I added
```java
import android.telephony.SmsManager;
```
in [DirectSmsModule.java](https://github.com/emixbal/React-Native-DirectSms/blob/master/android/app/src/main/java/com/upsms55/DirectSmsModule.java)

