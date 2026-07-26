# `dialyzer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dialyzer_type_id | int(11) | NO | PRI | 0 |  |  |
| dialyzer_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dialyzer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dialyzer_type_id": 1,
    "dialyzer_type_name": "low flux"
  },
  {
    "dialyzer_type_id": 2,
    "dialyzer_type_name": "high flux"
  },
  {
    "dialyzer_type_id": 3,
    "dialyzer_type_name": "dbl hi flux"
  }
]
```
