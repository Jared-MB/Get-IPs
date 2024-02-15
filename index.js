import os from 'node:os'

const network = os.networkInterfaces()
const wifi = network['Wi-Fi']

const getIpVersion = (ipVersion) => {
    return ipVersion === 'ipv6' ? 'IPv6' : 'IPv4'
}

export const getIps = (ipVersion = 'ipv4') => {
    let ipVersionSelected = getIpVersion(ipVersion)
    if (process.argv.length > 2) {
        ipVersionSelected = getIpVersion(process.argv[2])
    }
    const ips = wifi.filter(net => net.family === ipVersionSelected)
    return ips
}

console.log(getIps('ipv6'))