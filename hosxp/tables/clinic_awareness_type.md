# `clinic_awareness_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_awareness_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_awareness_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_awareness_type_name | clinic_awareness_type_name | yes | 1 |
| PRIMARY | clinic_awareness_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "clinic_awareness_type_id": 1,
    "clinic_awareness_type_name": "Youtube Video URL"
  },
  {
    "clinic_awareness_type_id": 2,
    "clinic_awareness_type_name": "HTML Text"
  },
  {
    "clinic_awareness_type_id": 3,
    "clinic_awareness_type_name": "HTMl URL"
  }
]
```
