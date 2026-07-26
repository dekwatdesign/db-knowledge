# `tb_btr_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| btr_choice_id | varchar(5) | NO | PRI |  |  |  |
| btr_choice_name | varchar(255) | YES |  | NULL |  |  |
| btr_choice_other | char(2) | YES |  | NULL |  |  |
| btr_choice_order | int(5) | YES |  | NULL |  |  |
| btr_choice_type | varchar(20) | YES | MUL | NULL |  |  |
| btr_choice_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| emr_btr_choice_type | btr_choice_type | no | 1 |
| PRIMARY | btr_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
