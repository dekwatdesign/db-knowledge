# `checkup_description`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chkup_header_id | int(11) | NO | PRI | 0 |  |  |
| chkup_visit_id | int(11) | NO | PRI | 0 |  |  |
| chkup_detail_seq | int(11) | YES |  | NULL |  |  |
| chkup_detail_code | varchar(19) | NO | PRI |  |  |  |
| chkup_detail_group2 | varchar(255) | YES |  | NULL |  |  |
| chkup_detail_other2 | varchar(512) | YES |  | NULL |  |  |
| chkup_lab_xray | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | chkup_header_id | yes | 1 |
| PRIMARY | chkup_visit_id | yes | 2 |
| PRIMARY | chkup_detail_code | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
