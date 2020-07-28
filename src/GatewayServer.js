import Proxy from "@core/Proxy";
import config from "@config/Gateway";

const module = new Proxy(config);

// module.intercept(0xA001, (data, context) => {


// });

module.init();