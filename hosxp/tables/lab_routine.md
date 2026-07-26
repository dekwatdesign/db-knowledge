# `lab_routine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| lab_routine_name | varchar(250) | YES |  | NULL |  |  |
| lab_routine_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_items_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lab_items_code": 1,
    "lab_routine_name": "Fasting Blood Sugar (FBS)",
    "lab_routine_note": null,
    "hos_guid": null
  }
]
```
