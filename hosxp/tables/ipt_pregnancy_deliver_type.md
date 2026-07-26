# `ipt_pregnancy_deliver_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | YES |  | NULL |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 0,
    "name": "รอคลอด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 1,
    "name": "คลอดปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 2,
    "name": "คลอดผิดปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 3,
    "name": "แท้ง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 4,
    "name": "ไม่คลอด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
