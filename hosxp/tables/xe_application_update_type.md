# `xe_application_update_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_update_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | xe_application_update_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "xe_application_update_type_id": 2,
    "name": "No Auto Update"
  },
  {
    "xe_application_update_type_id": 3,
    "name": "Update from Cloud"
  },
  {
    "xe_application_update_type_id": 1,
    "name": "Update from Local DB Store"
  }
]
```
