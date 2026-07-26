# `conscious`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| conscious_id | varchar(50) | NO | PRI |  |  |  |
| conscious_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | conscious_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "conscious_id": "0",
    "conscious_name": "Normal"
  },
  {
    "conscious_id": "1",
    "conscious_name": "Drowsiness"
  },
  {
    "conscious_id": "2",
    "conscious_name": "Confusion"
  },
  {
    "conscious_id": "3",
    "conscious_name": "SemiComa"
  },
  {
    "conscious_id": "4",
    "conscious_name": "Coma"
  },
  {
    "conscious_id": "5",
    "conscious_name": "ไม่สามารถประเมินได้"
  }
]
```
