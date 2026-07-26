# `tb_lab_examination_resistance_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_lab_examination_resistance_test_id | int(11) | NO | PRI | 0 |  |  |
| tb_register_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| tb_lab_examination_status_id | int(11) | YES |  | NULL |  |  |
| tb_lab_resistance_test_id | int(11) | YES |  | NULL |  |  |
| tb_lab_examination_resistance_test_date | date | YES |  | NULL |  |  |
| tb_lab_examination_resistance_test_other_note | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_lab_examination_resistance_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
