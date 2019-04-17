# **zqz-toast**

> Toast plugin base on vue

## **repository**
https://github.com/Chowqz/zqz-toast

###  **Install**
``` bash
npm install zqz-toast --save
```

### **Usage**
```bash
import Toast from 'zqz-toast'
Toast({
    message: 'Hello world',
    duration: 3000,
    msgType: 'success'
})
```
### **Props**
参数|说明|类型|可选值|默认值
-|-|-|-|-
message|提示信息|String|-|''
duration|显示时间|Number|-|3000
msgType|类型（对应不同icon）|String|success/error|''
