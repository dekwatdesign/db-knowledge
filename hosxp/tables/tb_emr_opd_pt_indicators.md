# `tb_emr_opd_pt_indicators`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_indicators_id | char(3) | NO | PRI |  |  |  |
| pt_indicators_name | varchar(255) | YES |  | NULL |  |  |
| pt_indicators_key | varchar(7) | YES |  | NULL |  |  |
| pt_indicators_value | int(5) | YES |  | NULL |  |  |
| pt_indicators_type | char(20) | YES |  | NULL |  |  |
| pt_indicators_orderby | int(5) | YES |  | NULL |  |  |
| pt_indicators_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pt_indicators_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
