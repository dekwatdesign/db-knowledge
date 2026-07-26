# `cancer_liver_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_liver_stage_id | int(11) | NO | PRI | 0 |  |  |
| group_stage_name | varchar(20) | YES |  | NULL |  |  |
| t_value | varchar(5) | YES |  | NULL |  |  |
| n_value | varchar(5) | YES |  | NULL |  |  |
| m_value | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_liver_stage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
