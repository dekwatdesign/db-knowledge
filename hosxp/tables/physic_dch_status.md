# `physic_dch_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dch_status_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | dch_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dch_status_id": 1,
    "name": "หายแล้ว",
    "hos_guid": null
  },
  {
    "dch_status_id": 2,
    "name": "อาการดีขึ้นเป็นที่น่าพอใจ",
    "hos_guid": null
  },
  {
    "dch_status_id": 3,
    "name": "ส่งต่อไปรัหษา PT. ที่อื่น",
    "hos_guid": null
  },
  {
    "dch_status_id": 4,
    "name": "จำเป็นต้องรับการตรวจรักษาวิธีอื่น",
    "hos_guid": null
  },
  {
    "dch_status_id": 5,
    "name": "ถูกจำหน่ายออกจาก รพ. ก่อนสิ้นสุดการรักษาทาง PT.",
    "hos_guid": null
  },
  {
    "dch_status_id": 6,
    "name": "อาการคงเดิม หลังจากได้รับการรักษาเต็มที่แล้ว",
    "hos_guid": null
  },
  {
    "dch_status_id": 7,
    "name": "ขาดการรักษา",
    "hos_guid": null
  },
  {
    "dch_status_id": 8,
    "name": "แพทย์ให้หยุดการรักษา",
    "hos_guid": null
  }
]
```
