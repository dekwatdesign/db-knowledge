# `tb_lab_examination_sputum`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_lab_examination_sputum_id | int(11) | NO | PRI | 0 |  |  |
| tb_register_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| tb_lab_examination_sputum_time | int(11) | YES |  | NULL |  |  |
| tb_lab_examination_sputum_date | date | YES |  | NULL |  |  |
| tb_lab_type_sputum_id | int(11) | YES |  | NULL |  |  |
| tb_lab_examination_sputum_number | int(11) | YES |  | NULL |  |  |
| tb_lab_result_sputum_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_lab_afb_result_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_lab_examination_sputum_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
