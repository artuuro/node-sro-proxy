import { Open, isProxy as _isProxy } from "ip2proxy-nodejs";
import ip2location from "ip2location-nodejs";

ip2location.IP2Location_init(`${ROOT_DIR}\\data\\IP_LOCATION.bin`);
Open(`${ROOT_DIR}\\data\\IP_PROXY.bin`);

class IPValidation {
    constructor(ip) {
        this.ip = '188.28.106.10';
    }

    info() {
        return {
            isProxy: _isProxy(this.ip) == 0 ? false : true,
            country: {
                short: ip2location.IP2Location_get_country_short(this.ip),
                long: ip2location.IP2Location_get_country_long(this.ip)
            }
        }
    }
}

export default IPValidation;