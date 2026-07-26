# `ipt_medication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
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
    "name": "Admit ใหม่",
    "hos_guid": null
  },
  {
    "code": 2,
    "name": "มารับยาเอง",
    "hos_guid": null
  },
  {
    "code": 3,
    "name": "เจ้าหน้าที่มารับยา",
    "hos_guid": null
  },
  {
    "code": 4,
    "name": "จัดยาใส่กระป๋อง",
    "hos_guid": null
  },
  {
    "code": 5,
    "name": "ผู้ป่วยกลับบ้าน",
    "hos_guid": null
  }
]
```
