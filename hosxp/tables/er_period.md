# `er_period`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_period | int(11) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | er_period | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "er_period": 1,
    "name": "เวรเช้า",
    "begin_time": null,
    "end_time": null,
    "hos_guid": null
  },
  {
    "er_period": 2,
    "name": "เวรบ่าย",
    "begin_time": null,
    "end_time": null,
    "hos_guid": null
  },
  {
    "er_period": 3,
    "name": "เวรดึก",
    "begin_time": null,
    "end_time": null,
    "hos_guid": null
  }
]
```
