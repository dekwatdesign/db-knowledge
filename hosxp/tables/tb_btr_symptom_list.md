# `tb_btr_symptom_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| btr_id | varchar(20) | NO | PRI |  |  |  |
| btr_symptom_id | varchar(5) | NO | PRI |  |  |  |
| btr_symptom_other | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| btr_id | btr_id | no | 1 |
| btr_symptom_id | btr_symptom_id | no | 1 |
| PRIMARY | btr_id | yes | 1 |
| PRIMARY | btr_symptom_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
