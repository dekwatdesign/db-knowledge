# `teenage_preg_interview`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_interview_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_register_id | int(11) | YES | MUL | NULL |  |  |
| opduser_loginname | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_interview_save_date | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| teenage_preg_interview_date | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_register593 | teenage_preg_register_id | no | 1 |
| PRIMARY | teenage_preg_interview_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
