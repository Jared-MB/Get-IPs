declare module 'get-ips' {
    import { NetworkInterfaceInfo } from 'os';

    export function getIps(ipVersion?: 'ipv4' | 'ipv6'): NetworkInterfaceInfo[];
}