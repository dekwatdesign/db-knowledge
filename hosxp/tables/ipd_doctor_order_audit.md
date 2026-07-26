# `ipd_doctor_order_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_audit_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_id | int(11) | YES | MUL | NULL |  |  |
| pn_s | varchar(2000) | YES |  | NULL |  |  |
| pn_o | varchar(2000) | YES |  | NULL |  |  |
| pn_a | varchar(2000) | YES |  | NULL |  |  |
| pn_p | varchar(2000) | YES |  | NULL |  |  |
| pn_risk | varchar(2000) | YES |  | NULL |  |  |
| audit_pn_s | varchar(2000) | YES |  | NULL |  |  |
| audit_pn_o | varchar(2000) | YES |  | NULL |  |  |
| audit_pn_a | varchar(2000) | YES |  | NULL |  |  |
| audit_pn_p | varchar(2000) | YES |  | NULL |  |  |
| audit_pn_risk | varchar(2000) | YES |  | NULL |  |  |
| audit_doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| audit_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_id | ipd_doctor_order_id | no | 1 |
| ix_ipd_doctor_order_id_code | audit_doctor_code | yes | 1 |
| ix_ipd_doctor_order_id_code | ipd_doctor_order_id | yes | 2 |
| PRIMARY | ipd_doctor_order_audit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
