# `inj_injury`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tn | tinyint(4) | YES | UNI | NULL |  |  |
| injdate | date | YES |  | NULL |  |  |
| injtime | time | YES |  | NULL |  |  |
| injp | varchar(30) | YES |  | NULL |  |  |
| blunt | varchar(15) | YES |  | NULL |  |  |
| site | varchar(15) | YES |  | NULL |  |  |
| ecode | varchar(15) | YES |  | NULL |  |  |
| comment | text | YES |  | NULL |  |  |
| edesc | varchar(130) | YES |  | NULL |  |  |
| police_no | tinyint(4) | YES |  | NULL |  |  |
| position | varchar(15) | YES |  | NULL |  |  |
| safety | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| tn_unique | tn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
