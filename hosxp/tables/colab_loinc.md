# `colab_loinc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| colab_loinc_id | int(11) | NO | PRI | 0 |  |  |
| code | varchar(100) | YES |  | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| component | varchar(250) | YES |  | NULL |  |  |
| equipment_uid | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | colab_loinc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
