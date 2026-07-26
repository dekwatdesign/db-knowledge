# `tb_emr_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emr_template_id | int(6) | NO | PRI | 0 |  |  |
| emr_template_name | varchar(50) | YES |  | NULL |  |  |
| emr_template_data | text | YES |  | NULL |  |  |
| emr_template_type | char(4) | YES |  | NULL |  |  |
| emr_template_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emr_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
