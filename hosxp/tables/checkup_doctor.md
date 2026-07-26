# `checkup_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chkup_id | int(11) | NO | PRI | 0 |  |  |
| group_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(6) | YES |  | NULL |  |  |
| lastupdate | varchar(20) | YES |  | NULL |  |  |
| ipaddr | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | chkup_id | yes | 1 |
| PRIMARY | group_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
