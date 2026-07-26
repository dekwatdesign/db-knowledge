# `anc_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_code | int(11) | NO | PRI | 0 |  |  |
| anc_group | tinyint(4) | YES |  | NULL |  |  |
| service_code | varchar(7) | YES |  | NULL |  |  |
| anc_name | varchar(200) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| anc_name | anc_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "anc_code": 1,
    "anc_group": 1,
    "service_code": "",
    "anc_name": "ฉีดวัคซีนบาดทะยัก เข็มที่ 1",
    "hos_guid": null
  },
  {
    "anc_code": 2,
    "anc_group": 1,
    "service_code": "",
    "anc_name": "ฉีดวัคซีนบาดทะยัก เข็มที่ 2",
    "hos_guid": null
  },
  {
    "anc_code": 3,
    "anc_group": 1,
    "service_code": "",
    "anc_name": "ฉีดวัคซีนบาดทะยัก เข็มที่ 3",
    "hos_guid": null
  },
  {
    "anc_code": 4,
    "anc_group": 1,
    "service_code": "",
    "anc_name": "ฉีดวัคซีนบาดทะยักครบชุดเกิน 3 หรือ 5 ปี (กระตุ้น)",
    "hos_guid": null
  },
  {
    "anc_code": 5,
    "anc_group": 1,
    "service_code": "",
    "anc_name": "ฉีดวัคซีนบาดทะยักครบชุดภายใน 3 หรือ 5 ปี",
    "hos_guid": null
  },
  {
    "anc_code": 6,
    "anc_group": 2,
    "service_code": "",
    "anc_name": "ทันตสุขศึกษาและตรวจฟันครั้งแรก",
    "hos_guid": null
  },
  {
    "anc_code": 7,
    "anc_group": 2,
    "service_code": "",
    "anc_name": "ตรวจฟันผุที่ยังไม่ได้อุด",
    "hos_guid": null
  },
  {
    "anc_code": 8,
    "anc_group": 2,
    "service_code": null,
    "anc_name": "ตรวจเหงือกอักเสบ",
    "hos_guid": null
  }
]
```
