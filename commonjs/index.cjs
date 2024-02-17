const os = require('os')

const network = os.networkInterfaces()
const wifi = network['Wi-Fi']

const getIpVersion = (ipVersion) => {
    return ipVersion === 'ipv6' ? 'IPv6' : 'IPv4'
}

/**
 * 
 * @param {'ipv4' | 'ipv6'} ipVersion 
 * @returns NetworkInterfaceInfo[]
 */
const getIps = (ipVersion = 'ipv4') => {
    let ipVersionSelected = getIpVersion(ipVersion)
    if (process.argv.length > 2) {
        ipVersionSelected = getIpVersion(process.argv[2])
    }

    if (!wifi) {
        throw new Error('No Wi-Fi network found')
    }

    const ips = wifi.filter(net => net.family === ipVersionSelected)
    return ips
}

module.exports = { getIps }