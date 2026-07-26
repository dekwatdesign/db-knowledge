# `approve_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| command_doctor | varchar(4) | YES |  | NULL |  |  |
| approve_doctor | char(1) | YES |  | NULL |  |  |
| chkcomment1 | char(1) | YES |  | NULL |  |  |
| chkcomment2 | char(1) | YES |  | NULL |  |  |
| chkcomment3 | char(1) | YES |  | NULL |  |  |
| chkcomment4 | char(1) | YES |  | NULL |  |  |
| chkcomment5 | char(1) | YES |  | NULL |  |  |
| chkcomment6 | char(1) | YES |  | NULL |  |  |
| chkcomment7 | char(1) | YES |  | NULL |  |  |
| comment_appr | text | YES |  | NULL |  |  |
| date_appr | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
