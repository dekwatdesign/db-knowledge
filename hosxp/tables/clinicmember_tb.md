# `clinicmember_tb`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES |  | NULL |  |  |
| prisoner | char(1) | YES |  | NULL |  |  |
| clinicmember_tb_patient_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_type_name_other | varchar(200) | YES |  | NULL |  |  |
| clinicmember_tb_category_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_type_other_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_advisor_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_advisor_name | varchar(150) | YES |  | NULL |  |  |
| clinicmember_tb_category_subtype_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_cxr_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_discharge_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
