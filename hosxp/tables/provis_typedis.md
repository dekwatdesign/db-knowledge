# `provis_typedis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "1",
    "name": "หาย",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ตาย",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "ยังรักษาอยู่",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "ไม่ทราบ(ไม่มีข้อมูล)",
    "hos_guid": null
  },
  {
    "code": "5",
    "name": "รอจำหน่าย/เฝ้าระวัง",
    "hos_guid": null
  },
  {
    "code": "6",
    "name": "ขาดการรักษาไม่มาติดต่ออีก(ทราบว่าขาดการรักษา)",
    "hos_guid": null
  },
  {
    "code": "7",
    "name": "ครบการรักษา",
    "hos_guid": null
  },
  {
    "code": "8",
    "name": "โรคอยู่ในภาวะสงบ (inactive) ไม่จำเป็นต้องรักษา",
    "hos_guid": null
  }
]
```
