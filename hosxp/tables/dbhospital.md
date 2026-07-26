# `dbhospital`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idhospital | varchar(5) | NO | PRI |  |  |  |
| Dhospital | varchar(100) | YES |  | NULL |  |  |
| type | varchar(50) | YES |  | NULL |  |  |
| IDPROVINCEL | varchar(2) | YES |  | NULL |  |  |
| IDAMP | varchar(4) | YES |  | NULL |  |  |
| IDDIST | varchar(6) | YES |  | NULL |  |  |
| IDMOO | varchar(2) | YES |  | NULL |  |  |
| ADDRS | varchar(255) | YES |  | NULL |  |  |
| ZONE | varchar(2) | YES |  | NULL |  |  |
| MARK | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | idhospital | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idhospital": "00001",
    "Dhospital": "สสจ.สมุทรปราการ",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "11",
    "IDAMP": "1101",
    "IDDIST": "110101",
    "IDMOO": "00",
    "ADDRS": "186/1  ถ.ยุทธดำเนิน ต.ปากน้ำ  อ.เมือง จ.สมุทรปราการ",
    "ZONE": "08",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00002",
    "Dhospital": "สสจ.นนทบุรี",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "12",
    "IDAMP": "1201",
    "IDDIST": "120104",
    "IDMOO": "08",
    "ADDRS": null,
    "ZONE": "04",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00003",
    "Dhospital": "สสจ.ปทุมธานี",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "13",
    "IDAMP": "1301",
    "IDDIST": "130103",
    "IDMOO": "00",
    "ADDRS": null,
    "ZONE": "04",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00004",
    "Dhospital": "สสจ.พระนครศรีอยุธยา",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "14",
    "IDAMP": "1401",
    "IDDIST": "140103",
    "IDMOO": "00",
    "ADDRS": null,
    "ZONE": "04",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00005",
    "Dhospital": "สสจ.อ่างทอง",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "15",
    "IDAMP": "1501",
    "IDDIST": "150108",
    "IDMOO": "00",
    "ADDRS": null,
    "ZONE": "04",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00006",
    "Dhospital": "สสจ.ลพบุรี",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "16",
    "IDAMP": "1601",
    "IDDIST": "160101",
    "IDMOO": "00",
    "ADDRS": null,
    "ZONE": "05",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00007",
    "Dhospital": "สสจ.สิงห์บุรี",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "17",
    "IDAMP": "1701",
    "IDDIST": "170106",
    "IDMOO": "04",
    "ADDRS": "44/4 ม.4 ต.ต้นโพธิ์  อ. เมือง จ.สิงห์บุรี",
    "ZONE": "05",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idhospital": "00008",
    "Dhospital": "สสจ.ชัยนาท",
    "type": "สำนักงานสาธารณสุขจังหวัด",
    "IDPROVINCEL": "18",
    "IDAMP": "1801",
    "IDDIST": "180104",
    "IDMOO": "00",
    "ADDRS": null,
    "ZONE": "05",
    "MARK": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
