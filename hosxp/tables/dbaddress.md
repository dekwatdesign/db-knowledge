# `dbaddress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idaddress | int(11) | NO | PRI | 0 |  |  |
| idprovince | varchar(2) | YES |  | NULL |  |  |
| province | varchar(50) | YES |  | NULL |  |  |
| idamphur | varchar(4) | YES |  | NULL |  |  |
| amphur | varchar(50) | YES |  | NULL |  |  |
| T_amp | varchar(20) | YES |  | NULL |  |  |
| iddistrict | varchar(6) | YES |  | NULL |  |  |
| district | varchar(50) | YES |  | NULL |  |  |
| Note | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | idaddress | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idaddress": 1,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1019",
    "amphur": "ตลิ่งชัน",
    "T_amp": "เขต",
    "iddistrict": "101907",
    "district": "บางเชือกหนัง",
    "Note": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 2,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1020",
    "amphur": "บางกอกน้อย",
    "T_amp": "เขต",
    "iddistrict": "102004",
    "district": "ศิริราช",
    "Note": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 3,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1020",
    "amphur": "บางกอกน้อย",
    "T_amp": "เขต",
    "iddistrict": "102005",
    "district": "บ้านช่างหล่อ",
    "Note": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 4,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1020",
    "amphur": "บางกอกน้อย",
    "T_amp": "เขต",
    "iddistrict": "102006",
    "district": "บางขุนนนท์",
    "Note": "4",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 5,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1020",
    "amphur": "บางกอกน้อย",
    "T_amp": "เขต",
    "iddistrict": "102007",
    "district": "บางขุนศรี",
    "Note": "5",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 6,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1020",
    "amphur": "บางกอกน้อย",
    "T_amp": "เขต",
    "iddistrict": "102009",
    "district": "อรุณอมรินทร์",
    "Note": "6",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 7,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1021",
    "amphur": "บางขุนเทียน",
    "T_amp": "เขต",
    "iddistrict": "102105",
    "district": "ท่าข้าม",
    "Note": "7",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idaddress": 8,
    "idprovince": "10",
    "province": "กรุงเทพมหานคร",
    "idamphur": "1021",
    "amphur": "บางขุนเทียน",
    "T_amp": "เขต",
    "iddistrict": "102107",
    "district": "แสมดำ",
    "Note": "8",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
