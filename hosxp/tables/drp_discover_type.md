# `drp_discover_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_discover_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_discover_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_discover_type_name | drp_discover_type_name | yes | 1 |
| PRIMARY | drp_discover_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "drp_discover_type_id": 1,
    "drp_discover_type_name": "by patient"
  },
  {
    "drp_discover_type_id": 2,
    "drp_discover_type_name": "by pharmacist"
  },
  {
    "drp_discover_type_id": 3,
    "drp_discover_type_name": "by physician"
  }
]
```
