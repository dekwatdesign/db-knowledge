# `person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": 1,
    "name": "กำนัน ผู้ใหญ่บ้าน",
    "hos_guid": null
  },
  {
    "code": 2,
    "name": "อสม.",
    "hos_guid": null
  },
  {
    "code": 3,
    "name": "แพทย์ประจำตำบล",
    "hos_guid": null
  },
  {
    "code": 4,
    "name": "สมาชิก อบต.",
    "hos_guid": null
  },
  {
    "code": 5,
    "name": "อื่นๆ",
    "hos_guid": null
  }
]
```
