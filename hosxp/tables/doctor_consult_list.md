# `doctor_consult_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| consult_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| send_staff | varchar(20) | YES |  | NULL |  |  |
| send_text | longtext | YES |  | NULL |  |  |
| consult_text | longtext | YES |  | NULL |  |  |
| complete | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | consult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
