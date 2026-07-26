# `infant_dchstts`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dchstts | varchar(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | dchstts | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dchstts": "01",
    "name": "ตายเปื่อย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dchstts": "02",
    "name": "ตายคลอดสด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dchstts": "03",
    "name": "ตายหลังคลอด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dchstts": "04",
    "name": "เกิดมีชีพ ย้ายไป Nursary",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dchstts": "05",
    "name": "เกิดมีชีพ ย้ายพร้อมมารดา",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
