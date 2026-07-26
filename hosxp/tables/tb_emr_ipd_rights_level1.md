# `tb_emr_ipd_rights_level1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emr_ipd_rights_level1_id | int(5) | NO | PRI | 0 |  |  |
| emr_ipd_rights_id | int(5) | YES | MUL | NULL |  |  |
| emr_ipd_rights_level1_name | varchar(255) | YES |  | NULL |  |  |
| emr_ipd_rights_level1_number | int(5) | YES |  | NULL |  |  |
| emr_ipd_rights_level1_note | char(2) | YES |  | NULL |  |  |
| emr_ipd_rights_level1_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| emr_ipd_rights_id | emr_ipd_rights_id | no | 1 |
| PRIMARY | emr_ipd_rights_level1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
