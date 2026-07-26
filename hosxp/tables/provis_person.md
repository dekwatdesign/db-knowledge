# `provis_person`

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
    "export_month": "255301",
    "cid": "",
    "pid": "000016",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "",
    "sex": "2",
    "birth": "20061120",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "0",
    "occupa": "",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 2,
    "export_month": "255301",
    "cid": "",
    "pid": "000022",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "",
    "sex": "1",
    "birth": "20060505",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "0",
    "occupa": "",
    "race": "64",
    "nation": "64",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 3,
    "export_month": "255301",
    "cid": "1xxxxxxxxxxxx",
    "pid": "000035",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "0000063",
    "sex": "1",
    "birth": "19520701",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "2",
    "occupa": "210",
    "race": "099",
    "nation": "099",
    "religion": "1",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 4,
    "export_month": "255301",
    "cid": "",
    "pid": "000063",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "",
    "sex": "2",
    "birth": "20041023",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "",
    "occupa": "",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 5,
    "export_month": "255301",
    "cid": "",
    "pid": "000065",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "",
    "sex": "1",
    "birth": "20040701",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "0",
    "occupa": "",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 6,
    "export_month": "255301",
    "cid": "",
    "pid": "000083",
    "hid": "1",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "",
    "sex": "1",
    "birth": "20060609",
    "house": "---",
    "village": "00",
    "tambon": "00",
    "ampur": "00",
    "changwat": "00",
    "mstatus": "0",
    "occupa": "",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "00000000",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 7,
    "export_month": "255301",
    "cid": "1xxxxxxxxxxxx",
    "pid": "000151",
    "hid": "2476",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "0005009",
    "sex": "2",
    "birth": "19291207",
    "house": "605",
    "village": "02",
    "tambon": "03",
    "ampur": "08",
    "changwat": "72",
    "mstatus": "1",
    "occupa": "014",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "3",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "72080302",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  },
  {
    "provis_person_id": 8,
    "export_month": "255301",
    "cid": "1xxxxxxxxxxxx",
    "pid": "000228",
    "hid": "2693",
    "prename": "[MASKED_FULLNAME]",
    "name": "[MASKED_FULLNAME]",
    "lname": "[MASKED_LNAME]",
    "hn": "0070931",
    "sex": "2",
    "birth": "19721002",
    "house": "68/20",
    "village": "02",
    "tambon": "03",
    "ampur": "08",
    "changwat": "72",
    "mstatus": "",
    "occupa": "",
    "race": "099",
    "nation": "099",
    "religion": "9",
    "educate": "",
    "fstatus": "",
    "father": "",
    "mother": "",
    "couple": "",
    "movein": "18991230",
    "dischar": "9",
    "ddisch": "",
    "bgroup": "",
    "labor": "",
    "vhid": "72080302",
    "typearea": "",
    "d_update": "20100105102632",
    "hos_guid": null
  }
]
```
