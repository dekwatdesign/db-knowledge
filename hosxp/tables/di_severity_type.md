# `di_severity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| di_severity_type_id | int(11) | NO | PRI | 0 |  |  |
| di_severity_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_di_severity_type_name | di_severity_type_name | yes | 1 |
| PRIMARY | di_severity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "di_severity_type_id": 0,
    "di_severity_type_name": "Level 0 - Not established"
  },
  {
    "di_severity_type_id": 1,
    "di_severity_type_name": "Level 1 - Not clinically significant"
  },
  {
    "di_severity_type_id": 2,
    "di_severity_type_name": "Level 2 - Caution"
  },
  {
    "di_severity_type_id": 3,
    "di_severity_type_name": "Level 3 - Minor"
  },
  {
    "di_severity_type_id": 4,
    "di_severity_type_name": "Level 4 - Moderate"
  },
  {
    "di_severity_type_id": 5,
    "di_severity_type_name": "Level 5 - Severe"
  }
]
```
