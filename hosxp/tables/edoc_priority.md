# `edoc_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_priority_id | int(11) | NO | PRI | 0 |  |  |
| edoc_priority_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "edoc_priority_id": 1,
    "edoc_priority_name": "ปกติ",
    "hos_guid": null
  },
  {
    "edoc_priority_id": 2,
    "edoc_priority_name": "ด่วน",
    "hos_guid": null
  },
  {
    "edoc_priority_id": 3,
    "edoc_priority_name": "ด่วนมากที่สุด",
    "hos_guid": null
  }
]
```
