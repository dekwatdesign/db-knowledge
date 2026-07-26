# `drp_source_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_source_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_source_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_source_type_name | drp_source_type_name | yes | 1 |
| PRIMARY | drp_source_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "drp_source_type_id": 1,
    "drp_source_type_name": "patient"
  },
  {
    "drp_source_type_id": 2,
    "drp_source_type_name": "medication record"
  }
]
```
