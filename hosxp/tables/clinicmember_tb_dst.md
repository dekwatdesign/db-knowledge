# `clinicmember_tb_dst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_dst_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| dst_date | date | YES |  | NULL |  |  |
| clinicmember_tb_medication_code | char(1) | YES |  | NULL |  |  |
| clinicmember_tb_dst_identify_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_dst_result_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_dst_technique_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_id | clinicmember_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_dst_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
