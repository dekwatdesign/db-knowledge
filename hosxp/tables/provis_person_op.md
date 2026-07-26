# `provis_person_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_person_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| hid | varchar(14) | YES |  | NULL |  |  |
| prename | varchar(20) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| birth | char(8) | YES |  | NULL |  |  |
| house | varchar(75) | YES |  | NULL |  |  |
| village | char(2) | YES |  | NULL |  |  |
| tambon | char(2) | YES |  | NULL |  |  |
| ampur | char(2) | YES |  | NULL |  |  |
| changwat | char(2) | YES |  | NULL |  |  |
| mstatus | char(1) | YES |  | NULL |  |  |
| occupa | char(4) | YES |  | NULL |  |  |
| race | char(3) | YES |  | NULL |  |  |
| nation | char(3) | YES |  | NULL |  |  |
| religion | char(2) | YES |  | NULL |  |  |
| educate | char(1) | YES |  | NULL |  |  |
| fstatus | char(1) | YES |  | NULL |  |  |
| father | char(13) | YES |  | NULL |  |  |
| mother | char(13) | YES |  | NULL |  |  |
| couple | char(13) | YES |  | NULL |  |  |
| movein | char(8) | YES |  | NULL |  |  |
| dischar | char(1) | YES |  | NULL |  |  |
| ddisch | char(8) | YES |  | NULL |  |  |
| bgroup | char(2) | YES |  | NULL |  |  |
| labor | char(2) | YES |  | NULL |  |  |
| vhid | varchar(8) | YES |  | NULL |  |  |
| typearea | char(1) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_pid | pid | no | 1 |
| PRIMARY | provis_person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_person_id": 1,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "1",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530000648",
    "sex": "1",
    "birth": "20010424",
    "house": "44/264",
    "village": "10",
    "tambon": "01",
    "ampur": "27",
    "changwat": "10",
    "mstatus": "1",
    "occupa": "9999",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "2",
    "fstatus": "2",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "99",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20130301135119",
    "hos_guid": null
  },
  {
    "provis_person_id": 2,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "2",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530000750",
    "sex": "2",
    "birth": "20001201",
    "house": "86/191 ซ.ตรีมิตร",
    "village": "00",
    "tambon": "01",
    "ampur": "33",
    "changwat": "10",
    "mstatus": "1",
    "occupa": "9999",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "",
    "fstatus": "2",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "99",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20120530162615",
    "hos_guid": null
  },
  {
    "provis_person_id": 3,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "4",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "570002136",
    "sex": "2",
    "birth": "19940723",
    "house": "135/81",
    "village": "07",
    "tambon": "16",
    "ampur": "01",
    "changwat": "11",
    "mstatus": "1",
    "occupa": "9999",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "",
    "fstatus": "2",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "99",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20130226110827",
    "hos_guid": null
  },
  {
    "provis_person_id": 4,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "1",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530000946",
    "sex": "1",
    "birth": "20010223",
    "house": "206",
    "village": "00",
    "tambon": "01",
    "ampur": "03",
    "changwat": "13",
    "mstatus": "1",
    "occupa": "9002",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "0",
    "fstatus": "2",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "99",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20121010110335",
    "hos_guid": null
  },
  {
    "provis_person_id": 5,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "1",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530000954",
    "sex": "1",
    "birth": "20040312",
    "house": "1/70",
    "village": "00",
    "tambon": "01",
    "ampur": "46",
    "changwat": "10",
    "mstatus": "1",
    "occupa": "9999",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "0",
    "fstatus": "2",
    "father": "1xxxxxxxxxxxx",
    "mother": "1xxxxxxxxxxxx",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "04",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20121112093104",
    "hos_guid": null
  },
  {
    "provis_person_id": 6,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "1",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530001952",
    "sex": "1",
    "birth": "20051213",
    "house": "100/514",
    "village": "04",
    "tambon": "08",
    "ampur": "01",
    "changwat": "11",
    "mstatus": "1",
    "occupa": "9002",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "0",
    "fstatus": "2",
    "father": "1xxxxxxxxxxxx",
    "mother": "1xxxxxxxxxxxx",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "04",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20120927142406",
    "hos_guid": null
  },
  {
    "provis_person_id": 7,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "1",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "530002152",
    "sex": "1",
    "birth": "20061213",
    "house": "13/2",
    "village": "11",
    "tambon": "05",
    "ampur": "04",
    "changwat": "11",
    "mstatus": "1",
    "occupa": "9002",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "0",
    "fstatus": "2",
    "father": "1xxxxxxxxxxxx",
    "mother": "1xxxxxxxxxxxx",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "99",
    "labor": "",
    "vhid": "",
    "typearea": "1",
    "d_update": "20130301155048",
    "hos_guid": null
  },
  {
    "provis_person_id": 8,
    "export_month": "255603",
    "cid": "1xxxxxxxxxxxx",
    "pid": "1xxxxxxxxxxxx",
    "hid": "000000",
    "prename": "4",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "570001195",
    "sex": "2",
    "birth": "19950316",
    "house": "28/1",
    "village": "03",
    "tambon": "01",
    "ampur": "06",
    "changwat": "11",
    "mstatus": "1",
    "occupa": "9999",
    "race": "099",
    "nation": "099",
    "religion": "01",
    "educate": "2",
    "fstatus": "2",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "",
    "dischar": "",
    "ddisch": "",
    "bgroup": "01",
    "labor": "",
    "vhid": "",
    "typearea": "2",
    "d_update": "20130301111516",
    "hos_guid": null
  }
]
```
