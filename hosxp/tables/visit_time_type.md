# `visit_time_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_time_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | visit_time_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "visit_time_type_id": 1,
    "name": "ในเวลา",
    "hos_guid": null
  },
  {
    "visit_time_type_id": 2,
    "name": "นอกเวลา",
    "hos_guid": null
  }
]
```
