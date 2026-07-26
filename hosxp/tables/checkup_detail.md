# `checkup_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chkup_detail_id | int(11) | NO | PRI | 0 |  |  |
| chkup_prog_id | int(11) | YES |  | NULL |  |  |
| chkup_detail_seq | int(11) | YES |  | NULL |  |  |
| chkup_detail_code | varchar(19) | YES |  | NULL |  |  |
| chkup_detail_group | varchar(255) | YES |  | NULL |  |  |
| chkup_detail_other | varchar(512) | YES |  | NULL |  |  |
| chkup_detail_group2 | varchar(255) | YES |  | NULL |  |  |
| chkup_detail_other2 | varchar(512) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | chkup_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
