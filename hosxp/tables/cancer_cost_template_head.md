# `cancer_cost_template_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_cost_template_head_id | int(11) | NO | PRI | 0 |  |  |
| cancer_cost_template_head_name | varchar(100) | YES |  | NULL |  |  |
| cancer_cost_template_total | float | YES |  | NULL |  |  |
| cancer_region_id | int(11) | YES |  | NULL |  |  |
| cancer_machine_id | int(11) | YES |  | NULL |  |  |
| cancer_cure_technic_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_cost_template_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
