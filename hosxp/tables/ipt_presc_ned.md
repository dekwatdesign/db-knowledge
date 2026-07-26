# `ipt_presc_ned`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_presc_ned_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| nhso_authorize_code | varchar(20) | YES |  | NULL |  |  |
| presc_reason_1 | varchar(5) | YES |  | NULL |  |  |
| presc_reason_2 | varchar(5) | YES |  | NULL |  |  |
| presc_reason_3 | varchar(5) | YES |  | NULL |  |  |
| presc_reason_4 | varchar(5) | YES |  | NULL |  |  |
| presc_reason_5 | varchar(5) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| first_order_date | date | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_icode | an | no | 1 |
| ix_an_icode | icode | no | 2 |
| ix_opi_guid | opi_guid | no | 1 |
| PRIMARY | ipt_presc_ned_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
