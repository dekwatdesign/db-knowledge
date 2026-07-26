# `visit_protect`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_protect_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| visit_protect_type_id | int(11) | YES | MUL | NULL |  |  |
| protect_datetime | datetime | YES |  | NULL |  |  |
| protect_staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| protect_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | vn | no | 1 |
| ix_unique | visit_protect_type_id | no | 2 |
| ix_unique_index | visit_protect_type_id | no | 1 |
| ix_unique_index | vn | no | 2 |
| ix_vn | vn | no | 1 |
| PRIMARY | visit_protect_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "visit_protect_id": 1,
    "vn": "541010153958",
    "visit_protect_type_id": 1,
    "protect_datetime": null,
    "protect_staff": null,
    "hos_guid": null,
    "protect_note": null
  }
]
```
