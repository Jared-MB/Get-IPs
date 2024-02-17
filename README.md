# Get IPs

This code is used to get the IP's of the network device using JavaScript.

## Installation

Use your favorite package manager to install the dependencies (npm, yarn , pnpm).

```bash
pnpm add @kristall/get-ips
```

## Usage

```javascript
import { getIPs } from '@kristall/get-ips';

const ips = getIPs();
```

By default the function will search for IPv4 addresses, but you can also search for IPv6 addresses.

```javascript
import { getIPs } from '@kristall/get-ips';

// IPv6
const ipv6Addresses = getIPs('ipv6');

// IPv4 - Both are the same
const ipv4Addresses = getIPs();
const ipv4AddressesDefault = getIPs('ipv4');
```

The function will return an array of strings with the IP's of the device as a NetworkInterfaceInfo from the os module of node. 

### Example of the return

```javascript
[
  {
    address: '0.0.0.0',
    netmask: '255.255.255.0',
    family: 'IPv4',
    mac: '0a:0a:0a:0a:0a:0a',
    internal: false,
    cidr: '0.0.0.0/24'
  }
]
```