# `dw_emr_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_emr_user_id | int(11) | NO | PRI | 0 |  |  |
| dw_emr_user_login | varchar(50) | YES | UNI | NULL |  |  |
| dw_emr_user_password | varchar(250) | YES |  | NULL |  |  |
| dw_emr_user_hospcode | varchar(9) | YES |  | NULL |  |  |
| dw_emr_user_realname | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_emr_user_login | dw_emr_user_login | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_emr_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
