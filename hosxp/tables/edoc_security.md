# `edoc_security`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_security_id | int(11) | NO | PRI | 0 |  |  |
| edoc_security_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_security_name | edoc_security_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_security_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "edoc_security_id": 1,
    "edoc_security_name": "ปกติ",
    "hos_guid": null
  },
  {
    "edoc_security_id": 2,
    "edoc_security_name": "ปกปิด",
    "hos_guid": null
  },
  {
    "edoc_security_id": 3,
    "edoc_security_name": "ลับ",
    "hos_guid": null
  },
  {
    "edoc_security_id": 4,
    "edoc_security_name": "ลับมาก",
    "hos_guid": null
  },
  {
    "edoc_security_id": 5,
    "edoc_security_name": "ลับมากที่สุด",
    "hos_guid": null
  }
]
```
