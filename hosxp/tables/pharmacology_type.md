# `pharmacology_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharmacology_type_id | int(11) | NO | PRI | 0 |  |  |
| pharmacology_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pharmacology_type_name | pharmacology_type_name | yes | 1 |
| PRIMARY | pharmacology_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pharmacology_type_id": 1,
    "pharmacology_type_name": "Major"
  },
  {
    "pharmacology_type_id": 2,
    "pharmacology_type_name": "Minor"
  }
]
```
