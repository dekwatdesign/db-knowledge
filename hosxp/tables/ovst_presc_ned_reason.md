# `ovst_presc_ned_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_presc_ned_reason_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| doctor_reason | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_doctor_reason_unique | doctor | yes | 1 |
| ix_doctor_reason_unique | doctor_reason | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ovst_presc_ned_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
