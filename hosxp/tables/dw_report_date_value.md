# `dw_report_date_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_report_date_value_id | int(11) | NO | PRI | 0 |  |  |
| dw_report_type_id | int(11) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| dw_report_subtype_id | int(11) | YES | MUL | NULL |  |  |
| report_value | int(11) | YES |  | NULL |  |  |
| confirm_value | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_general | hospcode | no | 1 |
| ix_general | dw_report_subtype_id | no | 2 |
| ix_general | report_date | no | 3 |
| ix_general_index | dw_report_subtype_id | no | 1 |
| ix_general_index | hospcode | no | 2 |
| ix_general_index | report_date | no | 3 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_report_date_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
