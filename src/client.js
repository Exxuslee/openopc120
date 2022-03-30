const net = require('net');

const tags = 'Node1.Device1.KV1_POS ' +
            'Node1.Device1.KV2_POS ' +
            'Node1.Device1.KV3_POS ' +
            'Node1.Device1.KV4_POS ' +
            'Node1.Device1.KV5_POS ' +
            'Node1.Device1.KV6_POS ' +
            'Node1.Device1.KV7_POS ' +
            'Node1.Device1.KV8_POS ' +
            'Node1.Device1.KV9_POS ' +
            'Node1.Device1.KV10_POS ' +
            'Node1.Device1.KV11_POS ' +
            'Node1.Device1.KV12_POS ' +
            'Node1.Device1.KV13_POS ' +
            'ServerCom201.KC1_KV1.I_kv_shtangi ' +
            'ServerCom202.KC1_KV2.I_kv_shtangi ' +
            'ServerCom203.KC1_KV3.I_kv_shtangi ' +
            'ServerCom204.KC1_KV4.I_kv_shtangi ' +
            'ServerCom205.KC1_KV5.I_kv_shtangi ' +
            'ServerCom206.KC2_KV6.I_kv_shtangi ' +
            'ServerCom207.KC2_KV7.I_kv_shtangi ' +
            'ServerCom208.KC2_KV8.I_kv_shtangi ' +
            'ServerCom209.KC3_KV9.I_kv_shtangi ' +
            'ServerCom210.KC3_KV10.I_kv_shtangi ' +
            'ServerCom211.KC3_KV11.I_kv_shtangi ' +
            'ServerCom212.KC4_KV12.I_kv_shtangi ' +
            'ServerCom213.KC4_KV13.I_kv_shtangi ' +
            'ServerCom201.KC1_KV1.I_kv_planira ' +
            'ServerCom202.KC1_KV2.I_kv_planira ' +
            'ServerCom203.KC1_KV3.I_kv_planira ' +
            'ServerCom204.KC1_KV4.I_kv_planira ' +
            'ServerCom205.KC1_KV5.I_kv_planira ' +
            'ServerCom206.KC2_KV6.I_kv_AI3 ' +
            'ServerCom207.KC2_KV7.I_kv_planira ' +
            'ServerCom208.KC2_KV8.I_kv_AI3 ' +
            'ServerCom209.KC3_KV9.I_kv_planira ' +
            'ServerCom210.KC3_KV10.I_kv_planira ' +
            'ServerCom211.KC3_KV11.I_kv_planira ' +
            'ServerCom212.KC4_KV12.I_kv_planira ' +
            'ServerCom213.KC4_KV13.I_kv_planira ' +
            'PN_SIMULATOR.PD_SIMULATOR.Sin'

const tags2 = 'PN_SIMULATOR.PD_SIMULATOR.Sin ' +
            'PN_SIMULATOR.PD_SIMULATOR.Sin'

const client = net.createConnection({ port: 3210 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write(tags2);
});

client.on('data', (data) => {
  //data = data.toString().split('utf-8\r\n\r\n')[1]
  data = JSON.parse(data)
  console.log(data[1]);
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});

client.on('error', () => {
  console.log('error');
});