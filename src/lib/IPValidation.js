import { Open, isProxy as _isProxy } from 'ip2proxy-nodejs';
import ip2location from 'ip2location-nodejs';
import { resolve } from 'path';

const DATA_DIR = resolve(__dirname, '..', '..', 'data');

ip2location.IP2Location_init(`${DATA_DIR}\\IP_LOCATION.bin`);
Open(`${DATA_DIR}\\IP_PROXY.bin`);

class IPValidation {
    constructor(ip) {
        this.ip = ip;
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