# `checkup_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chkup_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| addr1 | varchar(100) | YES |  | NULL |  |  |
| addr2 | varchar(100) | YES |  | NULL |  |  |
| addr3 | varchar(100) | YES |  | NULL |  |  |
| addr4 | varchar(100) | YES |  | NULL |  |  |
| addr5 | varchar(50) | YES |  | NULL |  |  |
| addr6 | varchar(50) | YES |  | NULL |  |  |
| addr7 | int(11) | YES |  | NULL |  |  |
| addr8 | date | YES |  | NULL |  |  |
| email | varchar(50) | YES |  | NULL |  |  |
| addr00 | varchar(100) | YES |  | NULL |  |  |
| addr01 | varchar(100) | YES |  | NULL |  |  |
| typetest | varchar(20) | YES |  | NULL |  |  |
| add_exam | varchar(255) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| addr02 | varchar(100) | YES |  | NULL |  |  |
| tel | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | chkup_id | yes | 1 |
| PRIMARY | vn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
