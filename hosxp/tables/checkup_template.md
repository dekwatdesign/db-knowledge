# `checkup_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| group_id | int(11) | NO | PRI | 0 |  |  |
| sub_group | int(11) | NO | PRI | 0 |  |  |
| seq_no | int(11) | NO | PRI | 0 |  |  |
| caption_th | varchar(90) | YES |  | NULL |  |  |
| caption_en | varchar(90) | YES |  | NULL |  |  |
| unit_th | varchar(20) | YES |  | NULL |  |  |
| unit_en | varchar(20) | YES |  | NULL |  |  |
| default_value | varchar(30) | YES |  | NULL |  |  |
| lab_min | float | YES |  | NULL |  |  |
| lab_max | float | YES |  | NULL |  |  |
| edit_type | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | group_id | yes | 1 |
| PRIMARY | sub_group | yes | 2 |
| PRIMARY | seq_no | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
