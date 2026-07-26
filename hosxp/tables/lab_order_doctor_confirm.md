# `lab_order_doctor_confirm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_doctor_confirm_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_lab_order_number_doctor | lab_order_number | yes | 1 |
| ix_lab_order_number_doctor | doctor_code | yes | 2 |
| ix_lab_order_number_doctor_index | doctor_code | yes | 1 |
| ix_lab_order_number_doctor_index | lab_order_number | yes | 2 |
| PRIMARY | lab_order_doctor_confirm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
