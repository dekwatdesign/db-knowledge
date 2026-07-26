# `anc_delivery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| delivery_code | int(11) | NO | PRI | 0 |  |  |
| delivery_name | varchar(200) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| delivery_name | delivery_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | delivery_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "delivery_code": 0,
    "delivery_name": "ยังไม่คลอด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "delivery_code": 1,
    "delivery_name": "คลอดแล้ว ทารกปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "delivery_code": 2,
    "delivery_name": "คลอดแล้ว ทารกเสียชีวิต",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "delivery_code": 3,
    "delivery_name": "แท้ง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "delivery_code": 4,
    "delivery_name": "คลอดก่อนกำหนด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
