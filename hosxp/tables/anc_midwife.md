# `anc_midwife`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| midwife_code | int(11) | NO | PRI | 0 |  |  |
| midwife_name | varchar(200) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| midwife_name | midwife_name | no | 1 |
| PRIMARY | midwife_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "midwife_code": 1,
    "midwife_name": "เจ้าหน้าที่สาธารณสุข",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "midwife_code": 2,
    "midwife_name": "ผดุงครรภ์โบราณ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "midwife_code": 3,
    "midwife_name": "เอกชน",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
