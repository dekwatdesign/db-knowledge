# `deliver_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| deliver_type | int(11) | NO | PRI | 0 |  |  |
| deliver_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deliver_name | deliver_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | deliver_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "deliver_type": 0,
    "deliver_name": "รอคลอด",
    "hos_guid": null
  },
  {
    "deliver_type": 1,
    "deliver_name": "คลอดปกติ",
    "hos_guid": null
  },
  {
    "deliver_type": 2,
    "deliver_name": "คลอดผิดปกติ",
    "hos_guid": null
  },
  {
    "deliver_type": 3,
    "deliver_name": "แท้ง",
    "hos_guid": null
  },
  {
    "deliver_type": 4,
    "deliver_name": "ไม่คลอด",
    "hos_guid": null
  }
]
```
