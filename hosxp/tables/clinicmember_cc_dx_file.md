# `clinicmember_cc_dx_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cc_dx_file_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cc_dx_id | int(11) | YES | MUL | NULL |  |  |
| clinicmember_cc_dx_file_name | varchar(200) | YES |  | NULL |  |  |
| clinicmember_cc_dx_file_blob | longblob | YES |  | NULL |  |  |
| clinicmember_cc_dx_file_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | clinicmember_cc_dx_id | no | 1 |
| PRIMARY | clinicmember_cc_dx_file_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
