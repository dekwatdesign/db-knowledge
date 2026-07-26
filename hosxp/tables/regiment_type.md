# `regiment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| regiment_type | int(11) | NO | PRI | 0 |  |  |
| regiment_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| nhso_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | regiment_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "regiment_type": 1,
    "regiment_name": "ข้าราชการ/ลูกจ้างประจำ",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 2,
    "regiment_name": "พนักงานรัฐวิสาหกิจ",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 3,
    "regiment_name": "ผู้ประกันตน",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 4,
    "regiment_name": "ประชาชนทั่วไป",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 5,
    "regiment_name": "บุคลากรของหน่วยงาน",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 6,
    "regiment_name": "ผู้มีรายได้น้อย ประเภท ก",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 7,
    "regiment_name": "ผู้มีรายได้น้อย ประเภท ข",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "regiment_type": 8,
    "regiment_name": "ผู้มีรายได้น้อย ประเภท ค",
    "hos_guid": null,
    "nhso_code": null
  }
]
```
