import { Open, isProxy as _isProxy } from "ip2proxy-nodejs";
import ip2location from "ip2location-nodejs";
//import fetch from 'node-fetch';
import { resolve } from 'path';

const ROOT_DIR = resolve(__dirname, '..', '..');

ip2location.IP2Location_init(`${ROOT_DIR}\\data\\IP_LOCATION.bin`);
Open(`${ROOT_DIR}\\data\\IP_PROXY.bin`);

class IPValidation {
    constructor(ip) {
        this.ip = ip;
    }

    // async remoteValidation(contact) {
    //     const response = await fetch(`http://check.getipintel.net/check.php?ip=${this.ip}&contact=${contact}`);
    //     const score = await response.text();
    //     return parseFloat(score);
    // }

    info() {
        return {
            //vpnDetected: this.remoteValidation(contact) > 0.99 ? true : false,
            isProxy: _isProxy(this.ip) == 0 ? false : true,
            country: {
                short: ip2location.IP2Location_get_country_short(this.ip),
                long: ip2location.IP2Location_get_country_long(this.ip)
            }
        }
    }
}

export default IPValidation;