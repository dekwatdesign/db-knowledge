# `opi_dispense_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_dispense_type_id | int(11) | NO | PRI | 0 |  |  |
| opi_dispense_type_name | varchar(200) | YES | UNI | NULL |  |  |
| module_name | varchar(20) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_module_name | module_name | no | 1 |
| ix_opi_dispense_type_name | opi_dispense_type_name | yes | 1 |
| PRIMARY | opi_dispense_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opi_dispense_type_id": 1,
    "opi_dispense_type_name": "Premedication",
    "module_name": "OR"
  }
]
```
