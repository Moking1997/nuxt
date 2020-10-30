import Vue from "vue";
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  Checkbox,
  Select,
  Option,
  Message
} from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

const components = [
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  Checkbox,
  Select,
  Option,
  Message
];

const Element = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

Vue.use(Element, { locale });
Vue.prototype.$message = Message;
Vue.prototype.$routerPush = function(path) {
  const url = "http://activity.dianbaobao.cn/t1147/";
  const bridgeKey = `c2943c7d0689191fae71907cf57c90b7`;
  const h5 = `${url}${path}/?bridgeKey=${bridgeKey}`;
  return `dbb://navigate/h5:${encodeURIComponent(`${h5}`)}`;
};
