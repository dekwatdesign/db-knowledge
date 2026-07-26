# `vtdc_risk_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vtdc_risk_list_id | int(11) | NO | PRI | 0 |  |  |
| vtdc_risk_type_id | int(11) | YES | MUL | NULL |  |  |
| vtdc_risk_value | varchar(200) | YES |  | NULL |  |  |
| value_description | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_type_id | vtdc_risk_type_id | no | 1 |
| PRIMARY | vtdc_risk_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
