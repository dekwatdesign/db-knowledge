# `surveil_member_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sv_member_log_id | int(11) | NO | PRI | 0 |  |  |
| sv_guid | varchar(38) | YES | UNI | NULL |  |  |
| op_type | varchar(10) | YES |  | NULL |  |  |
| data_sync | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sv_guid | sv_guid | yes | 1 |
| PRIMARY | sv_member_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
