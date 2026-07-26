# `tb_lab_examination_resistance_test_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_lab_examination_resistance_test_detail_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_medication_code | char(1) | YES |  | NULL |  |  |
| tb_lab_examination_resistance_test_id | int(11) | YES |  | NULL |  |  |
| tb_lab_result_resistance_test_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_lab_examination_resistance_test_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
